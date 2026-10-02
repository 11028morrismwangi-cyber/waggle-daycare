import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-dogs.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] md:min-h-[850px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Happy dogs running together at Pet Daycare"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Where Every Paw Gets to{" "}
            <span className="text-primary">Play</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-lg">
            Safe, social, and supervised fun all day long. Your furry family members deserve the best care while you're away.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
              <Link to="/book-daycare">Book Now</Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="px-8 py-6 text-base" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Promo Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 bg-primary animate-pulse-soft">
        
        






        
      </motion.div>
    </section>);

};

export default HeroSection;