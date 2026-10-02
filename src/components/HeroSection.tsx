import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-cctv.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] md:min-h-[850px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="CCTV security camera installed on a modern building"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl">

          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground text-sm font-semibold mb-6">
            <ShieldCheck className="w-4 h-4" /> Securing Nairobi & Kenya
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Smart Vision.{" "}
            <span className="text-primary">Total Security.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-lg">
            Professional CCTV installation and surveillance systems for homes and businesses across Nairobi. Recorded, monitored, and protected — 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
              <Link to="/book-daycare">Get a Quote</Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="px-8 py-6 text-base" asChild>
              <Link to="/daycare">Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
