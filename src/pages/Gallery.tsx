import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import cctvImg from "@/assets/cctv-install.jpg";
import surveillanceImg from "@/assets/surveillance.jpg";
import alarmImg from "@/assets/alarm-intercom.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";
import heroImg from "@/assets/hero-cctv.jpg";

const categories = ["All", "Installations", "Cameras", "Control Rooms"];

const photos = [
  { src: cctvImg, caption: "Dome camera installation", category: "Installations" },
  { src: surveillanceImg, caption: "Central monitoring room", category: "Control Rooms" },
  { src: alarmImg, caption: "Video intercom & alarm keypad", category: "Cameras" },
  { src: heroImg, caption: "Outdoor bullet camera at dusk", category: "Cameras" },
  { src: maintenanceImg, caption: "Routine maintenance visit", category: "Installations" },
  { src: surveillanceImg, caption: "Multi-camera NVR wall", category: "Control Rooms" },
  { src: cctvImg, caption: "Office ceiling coverage", category: "Installations" },
  { src: heroImg, caption: "Perimeter surveillance", category: "Cameras" },
  { src: alarmImg, caption: "Smart entry systems", category: "Cameras" },
  { src: surveillanceImg, caption: "Live feed monitoring", category: "Control Rooms" },
  { src: cctvImg, caption: "Retail shop coverage", category: "Installations" },
  { src: maintenanceImg, caption: "Annual system service", category: "Installations" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = active === "All" ? photos : photos.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Camera className="inline w-4 h-4 mr-1 -mt-0.5" /> Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Cognitive Camera Vision <span className="text-primary">in Action</span>
            </h1>
            <p className="text-lg text-muted-foreground">A look at the installations and systems we deliver every day across Nairobi.</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <Button key={cat} onClick={() => setActive(cat)}
                variant={active === cat ? "default" : "secondary"} size="sm" className="rounded-full">
                {cat}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <>
              {filtered.map((photo, i) => (
                <figure key={`${photo.caption}-${i}`}
                  className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                  <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-foreground/70">
                    <p className="text-primary-foreground text-sm font-medium p-4">
                      {photo.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
