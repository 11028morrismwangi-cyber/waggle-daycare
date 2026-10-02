import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Single Day",
    price: "$35",
    period: "/day",
    features: ["Supervised group play", "Indoor & outdoor zones", "Photo updates", "Fresh water & treats"],
    popular: false,
  },
  {
    name: "10-Day Pack",
    price: "$300",
    period: "/pack",
    badge: "Save $50",
    features: ["Everything in Single Day", "$30/day effective rate", "Flexible scheduling", "Priority booking"],
    popular: true,
  },
  {
    name: "Monthly Unlimited",
    price: "$450",
    period: "/month",
    features: ["Unlimited daycare days", "Free webcam access", "Monthly report card", "Priority holiday booking"],
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
            The Best Choice
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Choose the plan that works best for you and your furry friend.
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
                  Most Popular
                </span>
              )}
              {plan.badge && (
                <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-accent shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "brand" : "outline"}
                className="w-full"
                asChild
              >
                <Link to="/book-daycare">Get Started</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
