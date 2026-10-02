import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Dog, ShieldCheck, Clock, Users, Droplets, Bone, Sun, Heart, CheckCircle2 } from "lucide-react";

const includedServices = [
  { icon: Users, title: "Supervised Group Play", desc: "Matched by size & temperament" },
  { icon: Droplets, title: "Fresh Water Stations", desc: "Filtered & refreshed hourly" },
  { icon: Sun, title: "Indoor & Outdoor Areas", desc: "Climate-controlled play zones" },
  { icon: Bone, title: "Enrichment Activities", desc: "Puzzles, toys & agility" },
  { icon: Heart, title: "Belly Rubs & Cuddles", desc: "All the love they deserve" },
  { icon: ShieldCheck, title: "Daily Report Cards", desc: "Photos & activity updates" },
];

const schedule = [
  { time: "7:00 AM", activity: "Drop-off & Health Check" },
  { time: "7:30 AM", activity: "Morning Free Play" },
  { time: "9:00 AM", activity: "Group Activities & Enrichment" },
  { time: "10:30 AM", activity: "Water Break & Rest" },
  { time: "11:00 AM", activity: "Outdoor Play & Socialization" },
  { time: "12:00 PM", activity: "Lunch & Quiet Time" },
  { time: "1:30 PM", activity: "Afternoon Play Sessions" },
  { time: "3:00 PM", activity: "Training & Enrichment Games" },
  { time: "4:30 PM", activity: "Cool Down & Cuddle Time" },
  { time: "5:00 PM", activity: "Pick-up Begins" },
  { time: "7:00 PM", activity: "Last Pick-up" },
];

const requirements = [
  "Up-to-date on Rabies, DHPP, and Bordetella vaccinations",
  "Spayed/neutered (required for dogs 7 months+)",
  "Free of fleas, ticks, and parasites",
  "Must pass a temperament assessment on first visit",
  "Minimum age: 12 weeks with at least 2 rounds of vaccinations",
  "Current on flea/tick prevention medication",
];

const pricingPlans = [
  { name: "Single Day", price: 42, per: "day", features: ["Full day (7AM–7PM)", "All enrichment activities", "Report card & photos"], badge: null },
  { name: "Half Day", price: 28, per: "day", features: ["Up to 5 hours", "All play sessions", "Report card"], badge: null },
  { name: "5-Day Pack", price: 185, per: "pack", features: ["$37/day (Save $25)", "Never expires", "Priority booking"], badge: "Save $25" },
  { name: "10-Day Pack", price: 340, per: "pack", features: ["$34/day (Save $80)", "Never expires", "Priority booking"], badge: "Save $80" },
  { name: "20-Day Pack", price: 620, per: "pack", features: ["$31/day (Save $220)", "Never expires", "VIP scheduling"], badge: "Best Value" },
  { name: "Monthly Unlimited", price: 699, per: "month", features: ["Unlimited daycare", "Priority booking", "Free bath monthly"], badge: "Popular" },
];

const Daycare = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Dog className="inline w-4 h-4 mr-1 -mt-0.5" /> Daycare Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              A Day Full of <span className="text-primary">Fun & Friends</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Supervised play, enrichment activities, and socialization in a safe, climate-controlled environment. Your pup will come home happy and tired!
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/book-daycare">Book Daycare</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Every Day Is a Great Day</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
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

      {/* Daily Schedule */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Daily Schedule</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">A Typical Day at Pet Daycare</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto">
            {schedule.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex gap-4 items-start relative pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {i < schedule.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-1" />}
                </div>
                <div className="flex gap-4 items-baseline pb-2">
                  <span className="text-sm font-semibold text-primary whitespace-nowrap w-20">{item.time}</span>
                  <span className="text-foreground">{item.activity}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Requirements</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Before Your Pup's First Day</h2>
          </motion.div>
          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-card p-8">
            <div className="space-y-4">
              {requirements.map((req, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{req}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Plans for Every Pup</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, i) => (
              <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all p-6">
                {plan.badge && (
                  <span className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">{plan.badge}</span>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground text-sm">/{plan.per}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="brand" className="w-full" asChild>
                  <Link to="/book-daycare">Select Plan</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Daycare;
