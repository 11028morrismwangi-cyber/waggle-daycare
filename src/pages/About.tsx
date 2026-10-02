import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, ShieldCheck, Award, Camera, Thermometer, DoorOpen, PawPrint } from "lucide-react";

const team = [
  { name: "Jessica & Mark Taylor", role: "Founders", desc: "Lifelong dog lovers who started Pet Daycare in 2018 after seeing a need for high-quality pet care." },
  { name: "Dr. Amanda Foster", role: "Staff Veterinarian", desc: "On-call vet ensuring all pups stay healthy and safe." },
  { name: "Sarah Mitchell", role: "Head Trainer", desc: "12 years of positive-reinforcement training experience." },
  { name: "Carlos Rivera", role: "Facility Manager", desc: "Keeps our 15,000 sq ft facility sparkling clean and safe." },
  { name: "Mia Johnson", role: "Lead Groomer", desc: "Certified master groomer with an eye for breed-specific styling." },
  { name: "Team of 15+ Handlers", role: "Care Staff", desc: "Passionate, trained, and pet-first-aid certified team members." },
];

const safety = [
  { icon: ShieldCheck, title: "Staff-to-Dog Ratio", desc: "Maximum 1:10 ratio for daycare, 1:8 for boarding" },
  { icon: Camera, title: "24/7 Surveillance", desc: "Live cameras in all play and boarding areas" },
  { icon: Thermometer, title: "Climate Control", desc: "Indoor areas maintained at 68-72°F year-round" },
  { icon: DoorOpen, title: "Secure Entry", desc: "Double-gate airlock entry system prevents escapes" },
];

const faqs = [
  { q: "What vaccinations are required?", a: "All dogs must be current on Rabies, DHPP (Distemper), and Bordetella. We require proof from your vet before the first visit." },
  { q: "Do you separate dogs by size?", a: "Yes! We have separate play areas for small dogs (under 25 lbs) and medium/large dogs. Puppies under 6 months have their own socialization group." },
  { q: "What happens if my dog gets sick or injured?", a: "Our staff veterinarian is on-call at all times. For minor issues, we administer first aid and notify you immediately. For emergencies, we transport to the nearest animal hospital." },
  { q: "Can I bring my dog's own food?", a: "Absolutely! We encourage you to bring your dog's regular food to maintain their routine. We also provide high-quality kibble if needed." },
  { q: "Do you administer medication?", a: "Yes, our trained staff can administer oral and topical medications. There's a small additional fee of $5/day for medication administration." },
  { q: "What is your cancellation policy?", a: "Daycare: Free cancellation up to 6 hours before. Boarding: Free cancellation up to 48 hours before check-in. Late cancellations are charged 50% of the booking." },
  { q: "Are there cameras I can watch?", a: "Deluxe and VIP boarding guests get live webcam access. We're working on adding this for daycare guests soon!" },
  { q: "How do I know if my dog is a good fit?", a: "Every new dog goes through a temperament assessment on their first visit. We evaluate play style, social skills, and comfort level. The first trial day is free!" },
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
              <PawPrint className="inline w-4 h-4 mr-1 -mt-0.5" /> About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Built by <span className="text-primary">Dog Lovers</span>, for Dog Lovers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Since 2018, Pet Daycare has been the trusted choice for pet parents in Sunnyville. Our 15,000 sq ft facility was designed from the ground up with your dog's happiness and safety in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To provide the safest, most enriching, and joyful experience for every dog in our care — treating each one like our own. We believe happy dogs make happy families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">The People Behind the Paws</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{t.role}</p>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Safety First</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Your Peace of Mind</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safety.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-7 h-7 text-accent" />
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
