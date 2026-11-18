import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createElement } from "react";
import { createServer } from "vite";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";

const root = process.cwd();
const dist = path.join(root, "dist");
const template = await readFile(path.join(dist, "index.html"), "utf8");
const manifest = JSON.parse(await readFile(path.join(dist, ".vite", "manifest.json"), "utf8"));

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
    description: "Professional CCTV camera installation in Nairobi and across Kenya, with HD recording, night vision, remote viewing and tailored system design.",
    image: "cctv-hero.jpg",
    imageAlt: "Professional CCTV camera installation",
  },
  {
    path: "/surveillance",
    title: "CCTV Surveillance Systems & Remote Monitoring | Cognitive Camera Vision",
    description: "CCTV surveillance systems with NVR recording, remote playback, mobile access, smart alerts and backup power for Kenyan properties.",
    image: "surveillance.jpg",
    imageAlt: "Security surveillance system and camera monitoring",
  },
  {
    path: "/alarms",
    title: "Intruder Alarm Installation in Nairobi & Kenya | Cognitive Camera Vision",
    description: "Intruder alarm systems for homes, shops, offices and warehouses, with detection sensors, alarm panels, sirens and optional CCTV integration.",
    image: "alarm-intercom.jpg",
    imageAlt: "Intruder alarm equipment for a secure property",
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
    description: "CCTV maintenance, camera cleaning, recording checks, system upgrades and ongoing support in Nairobi and across Kenya.",
    image: "maintenance.jpg",
    imageAlt: "CCTV maintenance and security camera servicing",
  },
  {
    path: "/gallery",
    title: "Security System Installation Gallery | Cognitive Camera Vision",
    description: "Explore examples of CCTV installations, surveillance equipment, intercoms and security system work by Cognitive Camera Vision.",
    image: "cctv-install.jpg",
    imageAlt: "CCTV and security system installation examples",
  },
  {
    path: "/about",
    title: "About Cognitive Camera Vision | Intelligent Security Systems Kenya",
    description: "Learn about Cognitive Camera Vision, a Nairobi-based security systems company integrating CCTV, video intelligence, alarms and access solutions.",
    image: "about-hero.jpg",
    imageAlt: "Cognitive Camera Vision security systems",
  },
  {
    path: "/contact",
    title: "Contact Cognitive Camera Vision | CCTV & Security System Quotes",
    description: "Contact Cognitive Camera Vision for CCTV installation, surveillance, alarms, video intercoms and security system maintenance in Kenya.",
    image: "hero-cctv.jpg",
    imageAlt: "Cognitive Camera Vision CCTV and security solutions",
  },
  {
    path: "/book-survey",
    title: "Request a CCTV & Security System Quote | Cognitive Camera Vision",
    description: "Request a site survey or quotation for CCTV installation, surveillance, intruder alarms, video intercoms and security system support in Kenya.",
    image: "cctv-hero.jpg",
    imageAlt: "CCTV installation site assessment",
  },
  {
    path: "/booking-confirmed",
    title: "Request Received | Cognitive Camera Vision",
    description: "Your security system consultation request has been received by Cognitive Camera Vision.",
    image: "hero-cctv.jpg",
    imageAlt: "Cognitive Camera Vision",
    noIndex: true,
  },
];

function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function setMeta(html, key, value, attribute = "name") {
  const escapedKey = key.replace(/[.*+?^\$\{\}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`<meta\\s+${attribute}=["']${escapedKey}["']\\s+content=["'][^"']*["']\\s*\\/?>`, "i");
  const tag = `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`;
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace("</head>", "  " + tag + "\n  </head>");
}

const assetFiles = Object.entries(manifest)
  .filter(([source]) => source.startsWith("src/assets/"))
  .map(([source, output]) => [`/${source}`, `/${output.file}`]);

let vite;
try {
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
  });
  const { AppContent } = await vite.ssrLoadModule("/src/App.tsx");

  for (const page of pages) {
    const imageSource = path.join(root, "src", "assets", page.image);
    const imageDir = path.join(dist, "seo-images");
    await mkdir(imageDir, { recursive: true });
    await cp(imageSource, path.join(imageDir, page.image));

    const canonical = `https://cognitivevision.co.ke${page.path === "/" ? "/" : `${page.path}/`}`;
    const imageUrl = `https://cognitivevision.co.ke/seo-images/${page.image}`;
    const rendered = renderToString(
      createElement(
        MemoryRouter,
        { initialEntries: [page.path] },
        createElement(AppContent),
      ),
    );

    if (!rendered.includes("<h1")) {
      throw new Error(`${page.path}: server rendering did not produce the expected page heading.`);
    }

    if (!template.includes('<div id="root"></div>')) {
      throw new Error("HTML template is missing the React root mount point.");
    }

    let html = template.replace(
      '<div id="root"></div>',
      `<div id="root">${rendered}</div>`,
    );

    // Vite's SSR module loader uses source asset paths. Rewrite them to the
    // hashed production files emitted by the same build for hydration parity.
    for (const [source, output] of assetFiles) {
      html = html.replaceAll(source, output);
    }

    html = html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(page.title)}</title>`);
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

    html = html.replace(/<link\s+rel=["']canonical["'][^>]*>/gi, "");
    const canonicalTag = `<link rel="canonical" href="${canonical}" />`;
    html = html.replace("</head>", "  " + canonicalTag + "\n  </head>");

    const outputDir = page.path === "/" ? dist : path.join(dist, page.path.slice(1));
    await mkdir(outputDir, { recursive: true });
    await writeFile(path.join(outputDir, "index.html"), html);
  }

  console.log(`Generated server-rendered SEO pages for ${pages.length} routes.`);
} finally {
  await vite?.close();
}
