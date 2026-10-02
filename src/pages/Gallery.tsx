import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Camera className="inline w-4 h-4 mr-1 -mt-0.5" /> Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              Cognitive Camera Vision <span className="text-primary">in Action</span>
            </h1>
            <p className="text-lg text-muted-foreground">A look at the installations and systems we deliver every day across Nairobi.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div key={`${photo.caption}-${i}`} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden bg-muted cursor-pointer">
                  <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors flex items-end">
                    <p className="text-primary-foreground text-sm font-medium p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
