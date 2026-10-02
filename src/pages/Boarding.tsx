import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Moon, ShieldCheck, Camera, Utensils, Heart, Bed, CheckCircle2, Plus } from "lucide-react";

const includedServices = [
  { icon: Bed, title: "Comfortable Sleeping Areas", desc: "Orthopedic beds & blankets" },
  { icon: Utensils, title: "Meals & Fresh Water", desc: "Fed on your schedule" },
  { icon: Heart, title: "Daily Play Sessions", desc: "Group or solo play time" },
  { icon: Camera, title: "Photo Updates", desc: "Daily pics sent to you" },
  { icon: ShieldCheck, title: "24/7 Staff On-Site", desc: "Overnight supervision" },
  { icon: Moon, title: "Bedtime Routine", desc: "Tuck-in & calming music" },
];

const suites = [
  {
    name: "Standard Suite", price: 55, features: [
      "Private 4'×6' room", "Orthopedic bed", "2 play sessions/day",
      "Daily photo update", "Climate controlled",
    ],
  },
  {
    name: "Deluxe Suite", price: 75, popular: true, features: [
      "Spacious 6'×8' room", "Elevated bed & blanket", "3 play sessions/day",
      "Live webcam access", "Evening treat & tuck-in", "TV with calming shows",
    ],
  },
  {
    name: "VIP Suite", price: 95, features: [
      "Luxury 8'×10' room", "Premium bedding & couch", "Unlimited play sessions",
      "Private outdoor yard access", "Nightly video call", "Spa bath on checkout",
      "Personal enrichment plan",
    ],
  },
];

const addOns = [
  { name: "Extra Play Session", price: 12 },
  { name: "Training Session (30 min)", price: 25 },
  { name: "Spa Bath & Brush", price: 20 },
  { name: "Nail Trim", price: 10 },
  { name: "Medication Administration", price: 5 },
  { name: "Special Meal Prep", price: 8 },
];

const discounts = [
  { nights: "3–6 nights", discount: "5% off" },
  { nights: "7–13 nights", discount: "10% off" },
  { nights: "14–29 nights", discount: "15% off" },
  { nights: "30+ nights", discount: "20% off" },
];

const Boarding = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              <Moon className="inline w-4 h-4 mr-1 -mt-0.5" /> Boarding Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Their Home <span className="text-secondary">Away From Home</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Overnight stays with 24/7 supervision, comfortable suites, and all the love your pup needs while you're away.
            </p>
            <Button variant="brand-secondary" size="lg" asChild>
              <Link to="/book-boarding">Book Boarding</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Every Stay Includes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">The Comforts of Home</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-card shadow-card">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suites */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Choose Your Suite</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Suite Options</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {suites.map((suite, i) => (
              <motion.div key={suite.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className={`relative bg-card rounded-2xl shadow-card p-8 ${suite.popular ? "ring-2 ring-secondary" : ""}`}>
                {suite.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">Most Popular</span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{suite.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">${suite.price}</span>
                  <span className="text-muted-foreground">/night</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {suite.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={suite.popular ? "brand-secondary" : "brand"} className="w-full" asChild>
                  <Link to="/book-boarding">Book This Suite</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons & Discounts */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"><Plus className="w-5 h-5 text-primary" /> Add-On Services</h3>
              <div className="space-y-3">
                {addOns.map((a) => (
                  <div key={a.name} className="flex justify-between items-center p-4 rounded-xl bg-card shadow-card">
                    <span className="text-foreground">{a.name}</span>
                    <span className="font-semibold text-primary">+${a.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Multi-Night Discounts</h3>
              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <table className="w-full">
                  <thead><tr className="bg-muted"><th className="text-left p-4 text-sm font-semibold text-foreground">Duration</th><th className="text-right p-4 text-sm font-semibold text-foreground">Discount</th></tr></thead>
                  <tbody>
                    {discounts.map((d) => (
                      <tr key={d.nights} className="border-t border-border">
                        <td className="p-4 text-muted-foreground">{d.nights}</td>
                        <td className="p-4 text-right font-semibold text-accent">{d.discount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Boarding;
