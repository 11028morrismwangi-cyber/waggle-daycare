import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, ShieldCheck, BrainCircuit, MapPin, Cable, Wrench } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const values = [
  { icon: BrainCircuit, name: "Intelligence First", desc: "We design around the events, risks and operational questions your cameras need to recognize." },
  { icon: Cable, name: "Built to Integrate", desc: "Where compatible, we retain your existing CCTV infrastructure and add intelligence around it." },
  { icon: MapPin, name: "Nationwide Project Support", desc: "Our Nairobi-based team designs solutions around the realities of your site and control room, wherever you are in Kenya." },
  { icon: Wrench, name: "Long-Term Care", desc: "We keep cameras, recording, alerts and analysis working together after handover." },
];

const guarantees = [
  { icon: ShieldCheck, title: "Priority, Not Noise", desc: "Emergency and Risk feeds are brought forward for immediate attention" },
  { icon: Video, title: "Useful Information", desc: "Footage becomes alerts, status and insight instead of an archive alone" },
  { icon: Cable, title: "Existing System Value", desc: "Compatible cameras and infrastructure are retained wherever possible" },
  { icon: BrainCircuit, title: "Tailored Analysis", desc: "Detection is configured around your specific security and operational needs" },
];

const faqs = [
  { q: "Can you work with cameras already installed?", a: "Yes, where the existing equipment is compatible. Up to 96% of an existing system can be retained, allowing us to add intelligence without an unnecessary full replacement." },
  { q: "What does the intelligence layer do?", a: "It processes live camera feeds, analyses activity and classifies what needs attention as Emergency, Risk, Observe or Normal. Alerts can then be sent by SMS or email." },
  { q: "Can I view my cameras remotely?", a: "Remote viewing can be configured as part of the solution, alongside live status, playback and priority alerts." },
  { q: "What happens during a power cut?", a: "We offer backup power and solar options so your system keeps recording through outages. We can recommend the right backup during the site survey." },
  { q: "Does this replace normal recording?", a: "No. Your DVR or NVR can continue recording while the intelligence layer processes feeds for analytics, dashboard status and alerts." },
  { q: "Is a subscription compulsory?", a: "No. There are zero mandatory subscriptions. The system can provide continuous footage analysis and daily email reports without a compulsory recurring fee." },
  { q: "Which areas do you cover?", a: "We are based in Nairobi and serve clients across Kenya. Contact us with your location and project requirements." },
  { q: "Do you offer maintenance?", a: "Yes. We offer one-off service visits and monthly or quarterly care plans that include health checks, cleaning, firmware updates and priority response." },
];

const About = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

            {/* Split Hero Layout Grid */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Side: Content Text */}
            <div className="text-left order-2 lg:order-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full">
                Our Identity
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 tracking-tight">
                About Cognitive Camera Vision
              </h1>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed max-w-xl">
                We engineer intelligent surveillance infrastructures across Kenya, transforming standard video data feeds into proactive business logic layers.
              </p>
            </div>

            {/* Right Side: Branded Image Slot */}
            <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-card border border-border bg-card">
              <img 
                src={aboutHero} 
                alt="About Cognitive Camera Vision Operations" 
                className="w-full h-[300px] md:h-[450px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To turn CCTV from a passive record of the past into a live source of useful information. We help security teams focus on emergencies and risks instead of asking people to watch every screen, every minute.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What Sets Us Apart</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((t, i) => (
              <div key={t.name}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <t.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">CCTV That Helps You Act</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((s, i) => (
              <div key={s.title}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Frequently Asked Questions</h2>
          </div>
          <div>
            <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-card p-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border px-4">
                  <AccordionTrigger className="text-foreground font-medium text-left hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
