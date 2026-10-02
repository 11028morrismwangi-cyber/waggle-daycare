import { Shield, Video, Thermometer, Award, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Award, label: "15+ Years Experience" },
  { icon: Video, label: "24/7 Video Monitoring" },
  { icon: Eye, label: "Live Webcams" },
  { icon: Thermometer, label: "Climate-Controlled" },
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Heart, label: "Certified Professionals" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{badge.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
