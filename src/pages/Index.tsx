import { useEffect, useRef } from "react";
import css from "@/home/site.css?raw";
import body from "@/home/body.html?raw";
import script from "@/home/script.js?raw";

const Index = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;550;600;620;650&family=IBM+Plex+Mono:wght@450;550&display=swap";
    const style = document.createElement("style");
    style.textContent = css;
    document.head.append(link, style);
    try { new Function(script)(); } catch (e) { console.error(e); }
    return () => { link.remove(); style.remove(); };
  }, []);
  return <div ref={ref} dangerouslySetInnerHTML={{ __html: body }} />;
};

export default Index;
