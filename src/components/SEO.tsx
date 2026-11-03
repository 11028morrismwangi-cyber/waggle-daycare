import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

const SITE_URL = "https://cognitivevision.co.ke";

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

const SEO = ({ title, description, path, noIndex = false }: SEOProps) => {
  useEffect(() => {
    const canonicalUrl = new URL(path, SITE_URL).toString();

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noIndex ? "noindex,follow" : "index,follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [title, description, path, noIndex]);

  return null;
};

export default SEO;
