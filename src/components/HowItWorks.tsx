import { CalendarCheck, Truck, Camera } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Schedule Online",
    description: "Choose your service and book instantly through our easy online system.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Drop Off Your Pup",
    description: "Bring them during our convenient morning hours for a smooth check-in.",
  },
  {
    icon: Camera,
    step: "03",
    title: "Play All Day",
    description: "Watch them have fun via our live webcams and get photo updates throughout the day.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-section">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Three Simple Steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center relative"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-9 h-9 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-16 border-t-2 border-dashed border-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
