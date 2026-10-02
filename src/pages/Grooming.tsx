import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Scissors } from "lucide-react";

const services = [
  { name: "Bath & Brush", desc: "Shampoo, conditioner, blow-dry, brush-out, ear cleaning, and anal gland expression.", prices: { S: 35, M: 45, L: 55, XL: 65 } },
  { name: "Full Groom", desc: "Everything in Bath & Brush plus a full haircut styled to breed standard or your preference.", prices: { S: 55, M: 70, L: 85, XL: 100 } },
  { name: "Nail Trim & File", desc: "Careful nail trimming and smoothing to a comfortable length. Includes paw pad trim.", prices: { S: 15, M: 15, L: 18, XL: 18 } },
  { name: "Teeth Brushing", desc: "Gentle brushing with enzymatic pet toothpaste to freshen breath and support dental health.", prices: { S: 10, M: 10, L: 12, XL: 12 } },
  { name: "De-Shedding Treatment", desc: "Specialized shampoo and high-velocity blow-out to remove loose undercoat. Great for double-coated breeds.", prices: { S: 45, M: 60, L: 75, XL: 90 } },
  { name: "Spa Package", desc: "The works! Full Groom + Teeth Brushing + Blueberry Facial + Paw Balm + Bandana.", prices: { S: 75, M: 95, L: 115, XL: 135 } },
];

const sizes = [
  { label: "Small", range: "Under 25 lbs" },
  { label: "Medium", range: "25–50 lbs" },
  { label: "Large", range: "50–80 lbs" },
  { label: "X-Large", range: "80+ lbs" },
];

const Grooming = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Scissors className="inline w-4 h-4 mr-1 -mt-0.5" /> Grooming Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Look Good, <span className="text-primary">Feel Great</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Professional grooming by certified pet stylists. From basic baths to full spa treatments, we'll have your pup looking and feeling their best.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Book a Grooming</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Grooming Menu</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-card p-2">
              {services.map((s) => (
                <AccordionItem key={s.name} value={s.name} className="border-border px-4">
                  <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                    {s.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <div className="grid grid-cols-4 gap-2">
                      {(["S", "M", "L", "XL"] as const).map((size) => (
                        <div key={size} className="text-center p-3 rounded-xl bg-muted">
                          <div className="text-xs text-muted-foreground font-medium">{size}</div>
                          <div className="text-lg font-bold text-foreground">${s.prices[size]}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Size Guide */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Size Guide</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sizes.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-4 rounded-2xl bg-card shadow-card">
                <div className="font-semibold text-foreground">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.range}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Schedule Grooming</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grooming;
