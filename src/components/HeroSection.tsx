import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroVideoAsset from "@/assets/hero-cctv.mp4.asset.json";
import heroPoster from "@/assets/hero-cctv.jpg";

const heroVideo = heroVideoAsset.url;

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] md:min-h-[850px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <video
          src={heroVideo}
          poster={heroPoster}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground text-sm font-semibold mb-6">
            Intelligent Surveillance — Across Kenya
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Cameras that only record{" "}
            <span className="text-primary">can't tell you what just happened.</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed max-w-lg">
            We add intelligence to your cameras so they see and understand events in real time — alerting you instantly and sorting every feed into Emergency, Risk, Observe and Normal. Because nobody can watch 20+ screens. Not really. Not at 3am.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" className="px-8 py-6 text-base" asChild>
              <Link to="/book-daycare">Get a Quote</Link>
            </Button>
            <Button variant="hero-outline" size="lg" className="px-8 py-6 text-base" asChild>
              <Link to="/daycare">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
