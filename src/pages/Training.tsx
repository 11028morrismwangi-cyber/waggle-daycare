import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, CheckCircle2, Award, Heart } from "lucide-react";

const programs = [
  { name: "Puppy Basics", age: "8 weeks – 5 months", duration: "6 weeks", price: 249, features: ["Socialization skills", "Basic commands (sit, stay, come)", "Potty training tips", "Bite inhibition", "Leash introduction"] },
  { name: "Basic Obedience", age: "5 months+", duration: "6 weeks", price: 299, features: ["Reliable sit, down, stay", "Leash walking", "Come when called", "Leave it & drop it", "Door manners"] },
  { name: "Advanced Obedience", age: "Dogs with basic training", duration: "8 weeks", price: 399, features: ["Off-leash reliability", "Distance commands", "Distraction proofing", "Advanced heel work", "Place command"] },
  { name: "Behavioral Modification", age: "All ages", duration: "Custom", price: 85, perSession: true, features: ["Reactivity & aggression", "Separation anxiety", "Fear & phobias", "Resource guarding", "Custom behavior plan"] },
  { name: "Private Lessons", age: "All ages", duration: "Per session", price: 75, perSession: true, features: ["One-on-one attention", "Customized curriculum", "Flexible scheduling", "In-facility or at-home", "Progress tracking"] },
];

const trainers = [
  { name: "Sarah Mitchell", title: "Head Trainer", certs: "CPDT-KA, AKC CGC Evaluator", years: 12, specialty: "Positive reinforcement & behavioral modification" },
  { name: "Marcus Chen", title: "Senior Trainer", certs: "CPDT-KA, Fear Free Certified", years: 8, specialty: "Puppy development & socialization" },
  { name: "Elena Rodriguez", title: "Trainer", certs: "ABCDT, Pet First Aid Certified", years: 5, specialty: "Obedience & agility training" },
];

const Training = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-[hsl(var(--brand-purple)/0.1)] via-background to-primary/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[hsl(var(--brand-purple)/0.1)] text-[hsl(var(--brand-purple))] text-sm font-semibold mb-4">
              <GraduationCap className="inline w-4 h-4 mr-1 -mt-0.5" /> Training Programs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Good Dogs Start with <span className="text-[hsl(var(--brand-purple))]">Great Training</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Positive, science-based training methods by certified professionals. From puppies to advanced obedience, we help build the bond between you and your dog.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Programs</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Find the Right Program</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl shadow-card p-6 hover:shadow-card-hover transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{p.age} · {p.duration}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">${p.price}</span>
                  <span className="text-muted-foreground text-sm">{p.perSession ? "/session" : "/program"}</span>
                </div>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center">
            <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic mb-4">
              "We believe every dog can learn and thrive through patience, consistency, and positive reinforcement."
            </blockquote>
            <p className="text-muted-foreground">— The Pet Daycare Training Team</p>
          </motion.div>
        </div>
      </section>

      {/* Trainers */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Meet Our Trainers</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {trainers.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-primary font-medium">{t.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.certs}</p>
                <p className="text-xs text-muted-foreground">{t.years} years experience</p>
                <p className="text-sm text-muted-foreground mt-3">{t.specialty}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
