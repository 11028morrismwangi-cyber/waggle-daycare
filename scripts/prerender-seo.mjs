import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");

const pages = [
  {
    path: "/",
    title: "Cognitive Camera Vision | CCTV & Intelligent Security in Kenya",
    description: "CCTV installation, intelligent surveillance, alarms, video intercoms and security system maintenance in Nairobi, along Thika Road and across Kenya.",
    image: "hero-cctv.jpg",
    imageAlt: "CCTV camera and intelligent security system by Cognitive Camera Vision",
  },
  {
    path: "/cctv",
    title: "CCTV Installation in Nairobi & Kenya | Cognitive Camera Vision",
    description: "Professional CCTV installation in Nairobi, along Thika Road and across Kenya. HD and 4K cameras, night vision, recording and remote mobile viewing.",
    image: "cctv-hero.jpg",
    imageAlt: "Professional CCTV camera installation",
  },
  {
    path: "/surveillance",
    title: "Security Surveillance Systems in Kenya | Cognitive Camera Vision",
    description: "Security camera systems with NVR recording, remote viewing, playback, smart alerts and tailored coverage for homes and businesses.",
    image: "surveillance.jpg",
    imageAlt: "Security surveillance system and camera monitoring",
  },
  {
    path: "/alarms",
    title: "Intruder Alarms & Video Intercoms in Kenya | Cognitive Camera Vision",
    description: "Intruder alarms, video intercoms, smart doorbells and integrated entry security for homes, apartments, offices and businesses.",
    image: "alarm-intercom.jpg",
    imageAlt: "Video intercom and alarm system for a secure entrance",
  },
  {
    path: "/intercoms",
    title: "Video Intercom Installation in Nairobi & Kenya | Cognitive Camera Vision",
    description: "Video and audio intercom installation for homes, apartments, estates and offices in Nairobi, along Thika Road and across Kenya.",
    image: "alarm-intercom.jpg",
    imageAlt: "Video intercom equipment for a controlled entrance",
  },
  {
    path: "/maintenance",
    title: "CCTV Maintenance & Security System Support | Cognitive Camera Vision",
    description: "CCTV maintenance, camera cleaning, recording checks, troubleshooting and security system upgrades in Nairobi and across Kenya.",
    image: "maintenance.jpg",
    imageAlt: "CCTV maintenance and security camera servicing",
  },
  {
    path: "/gallery",
    title: "Security Systems Installation Gallery | Cognitive Camera Vision",
    description: "Explore examples of CCTV cameras, surveillance equipment, alarms and security system installations by Cognitive Camera Vision.",
    image: "cctv-install.jpg",
    imageAlt: "CCTV and security system installation examples",
  },
  {
    path: "/about",
    title: "About Cognitive Camera Vision | Security Systems in Kenya",
    description: "Meet Cognitive Camera Vision, an engineering-led security systems company delivering CCTV, intelligent surveillance, alarms and intercom solutions.",
    image: "about-hero.jpg",
    imageAlt: "Cognitive Camera Vision security systems",
  },
  {
    path: "/contact",
    title: "Contact Cognitive Camera Vision | Security System Quotes",
    description: "Contact Cognitive Camera Vision for CCTV installation, intelligent surveillance, alarms, video intercoms and security system maintenance.",
    image: "hero-cctv.jpg",
    imageAlt: "Cognitive Camera Vision CCTV and security solutions",
  },
  {
    path: "/book-survey",
    title: "Request a Security System Quote | Cognitive Camera Vision",
    description: "Request a site assessment or quotation for CCTV, surveillance, intruder alarms, video intercoms and security system support.",
    image: "cctv-hero.jpg",
    imageAlt: "CCTV installation site assessment",
  },
  {
    path: "/booking-confirmed",
    title: "Request Received | Cognitive Camera Vision",
    description: "Your security system enquiry has been received by Cognitive Camera Vision.",
    image: "hero-cctv.jpg",
    imageAlt: "Cognitive Camera Vision",
    noIndex: true,
  },
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function setMeta(html, key, value, attribute = "name") {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${escapedKey}["']\\s+content=["'][^"']*["']\\s*\\/?>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", "  " + tag + "\n  </head>");
}

for (const page of pages) {
  const imageSource = path.join(root, "src", "assets", page.image);
  const imageDir = path.join(dist, "seo-images");
  await mkdir(imageDir, { recursive: true });
  await cp(imageSource, path.join(imageDir, page.image));

  const canonical = `https://cognitivevision.co.ke${page.path === "/" ? "/" : page.path}`;
  const imageUrl = `https://cognitivevision.co.ke/seo-images/${page.image}`;
  let html = template.replace(new RegExp("<title>[^<]*</title>", "i"), `<title>${escapeHtml(page.title)}</title>`);

  html = setMeta(html, "description", page.description);
  html = setMeta(html, "robots", page.noIndex ? "noindex,follow" : "index,follow");
  html = setMeta(html, "og:type", "website", "property");
  html = setMeta(html, "og:title", page.title, "property");
  html = setMeta(html, "og:description", page.description, "property");
  html = setMeta(html, "og:url", canonical, "property");
  html = setMeta(html, "og:image", imageUrl, "property");
  html = setMeta(html, "og:image:alt", page.imageAlt, "property");
  html = setMeta(html, "twitter:card", "summary_large_image");
  html = setMeta(html, "twitter:title", page.title);
  html = setMeta(html, "twitter:description", page.description);
  html = setMeta(html, "twitter:image", imageUrl);

  const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
  html = html.replace("</head>", "  " + canonicalTag + "\n  </head>");

  const outputDir = page.path === "/" ? dist : path.join(dist, page.path.slice(1));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html);
}

console.log(`Generated static SEO pages for ${pages.length} routes.`);
