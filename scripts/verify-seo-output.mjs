import { readFile, access } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const routes = [
  "/", "/cctv", "/surveillance", "/alarms", "/intercoms",
  "/maintenance", "/gallery", "/about", "/contact", "/book-survey",
];
const indexableUrls = new Set();

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

for (const route of [...routes, "/booking-confirmed"]) {
  const file = path.join(dist, route === "/" ? "index.html" : route.slice(1), ...(route === "/" ? [] : ["index.html"]));
  await access(file);
  const html = await readFile(file, "utf8");
  const canonicals = [...html.matchAll(/<link\\s+rel=["']canonical["']\\s+href=["']([^"']+)["'][^>]*>/gi)];
  assert(canonicals.length === 1, `${route}: expected exactly one canonical link, found ${canonicals.length}`);
  const expected = `https://cognitivevision.co.ke${route === "/" ? "/" : `${route}/`}`;
  assert(canonicals[0][1] === expected, `${route}: canonical mismatch. Expected ${expected}, got ${canonicals[0][1]}`);
  assert(/<title>[^<]+<\\/title>/i.test(html), `${route}: missing title`);
  assert(/<meta\\s+name=["']description["']\\s+content=["'][^"']+["']/i.test(html), `${route}: missing meta description`);
  const robots = html.match(/<meta\\s+name=["']robots["']\\s+content=["']([^"']+)["']/i)?.[1] ?? "";
  if (route === "/booking-confirmed") {
    assert(robots.includes("noindex"), "booking-confirmed must remain noindex");
  } else {
    assert(robots.includes("index"), `${route}: page must be indexable`);
    assert(!robots.includes("noindex"), `${route}: unexpected noindex directive`);
    indexableUrls.add(expected);
  }
}

const sitemap = await readFile(path.join(dist, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\\/loc>/g)].map((match) => match[1]);
assert(sitemapUrls.length === indexableUrls.size, `Sitemap has ${sitemapUrls.length} URLs; expected ${indexableUrls.size}`);
for (const url of indexableUrls) assert(sitemapUrls.includes(url), `Sitemap is missing ${url}`);
assert(!sitemap.includes("/booking-confirmed"), "booking-confirmed must not appear in sitemap");

const robotsTxt = await readFile(path.join(dist, "robots.txt"), "utf8");
assert(/User-agent:\\s*\\*/i.test(robotsTxt), "robots.txt is missing the wildcard user-agent");
assert(/Allow:\\s*\\//i.test(robotsTxt), "robots.txt must allow crawling");
assert(robotsTxt.includes("https://cognitivevision.co.ke/sitemap.xml"), "robots.txt must reference the sitemap");

console.log(`SEO output verified: ${indexableUrls.size} indexable routes, one canonical per route, matching sitemap and crawl rules.`);
