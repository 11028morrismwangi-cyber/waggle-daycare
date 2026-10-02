import { Link } from "react-router-dom";
import { Check, Home, Store, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Home Security",
    icon: Home,
    price: "Custom quote",
    features: ["Free site survey", "Indoor & outdoor cameras", "Mobile viewing setup", "Night vision coverage"],
    popular: false,
  },
  {
    name: "Business Surveillance",
    icon: Store,
    price: "Custom quote",
    features: ["Multi-camera coverage", "NVR with extended storage", "Entry & exit monitoring", "Staff access levels"],
    popular: true,
  },
  {
    name: "Enterprise & Estates",
    icon: Building2,
    price: "Custom quote",
    features: ["Full site assessment", "Central monitoring room", "Perimeter & gate coverage", "Dedicated support plan"],
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-section">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Tailored to Your Property
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Every property is different — pricing depends on the number of cameras, layout and storage needs. Request a quote and we'll survey your site for free.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative bg-card rounded-2xl p-8 shadow-card ${
                plan.popular ? "border-2 border-primary md:-mt-4 md:mb-4" : "border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
                  Most Requested
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <plan.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-2xl font-bold text-primary">{plan.price}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "brand" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/book-daycare">Request a Quote</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
