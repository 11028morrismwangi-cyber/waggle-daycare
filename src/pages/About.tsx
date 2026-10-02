import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, ShieldCheck, Award, MapPin, BadgeCheck, Wrench } from "lucide-react";

const values = [
  { icon: Award, name: "Certified Technicians", desc: "Trained, uniformed professionals who install every system to manufacturer standards." },
  { icon: BadgeCheck, name: "Genuine Equipment", desc: "We only supply genuine cameras, recorders and accessories with full warranty coverage." },
  { icon: MapPin, name: "Local Nairobi Support", desc: "Based in Nairobi and serving the surrounding areas — help is never far away." },
  { icon: Wrench, name: "After-Sales Care", desc: "Installation is just the start. We offer maintenance plans that keep you protected." },
];

const guarantees = [
  { icon: ShieldCheck, title: "Workmanship Warranty", desc: "Every installation is covered by our workmanship warranty" },
  { icon: Video, title: "Clean Installation", desc: "Concealed cabling and tidy mounting, every single time" },
  { icon: BadgeCheck, title: "No Hidden Charges", desc: "The quotation you approve is the price you pay" },
  { icon: Award, title: "User Training", desc: "Full handover training so your team and family know the system" },
];

const faqs = [
  { q: "Do you charge for a site survey?", a: "No. Within Nairobi, the site survey is free. We visit your property, assess blind spots and camera placement, then provide a detailed written quotation." },
  { q: "How long does an installation take?", a: "Most home systems are installed in a single day. Larger business and estate systems typically take one to three days depending on the number of cameras and cabling needed." },
  { q: "Can I view my cameras on my phone?", a: "Yes. Every system we install includes remote mobile access. We configure the app on your phone and train you on live viewing and playback." },
  { q: "What happens during a power cut?", a: "We offer backup power and solar options so your system keeps recording through outages. We can recommend the right backup during the site survey." },
  { q: "How is footage stored?", a: "Footage is recorded on a secure NVR at your property, typically retaining 1–3 months depending on the drives selected. Optional cloud backup keeps critical footage off-site." },
  { q: "Do you provide a warranty?", a: "Yes. Equipment carries the full manufacturer warranty, and our installations are covered by a workmanship warranty. Details are included with every quotation." },
  { q: "Which areas do you cover?", a: "Nairobi and its surroundings. We can travel further afield for larger projects — just contact us with your location." },
  { q: "Do you offer maintenance?", a: "Yes. We offer one-off service visits and monthly or quarterly care plans that include health checks, cleaning, firmware updates and priority response." },
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Video className="inline w-4 h-4 mr-1 -mt-0.5" /> About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Smart Vision. <span className="text-primary">Total Security.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Cognitive Camera Vision is a Nairobi-based CCTV installation company making professional-grade surveillance accessible to every home and business in Kenya.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To protect every home and business we serve with the highest standard of surveillance — installed by certified technicians, backed by genuine equipment, and supported long after the cameras go up. We believe peace of mind should never be a luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Sets Us Apart</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <t.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Guarantees</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Your Peace of Mind</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-card p-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border px-4">
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
