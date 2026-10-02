import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell } from "lucide-react";

const services = [
  {
    name: "Intruder Alarm Systems",
    desc: "Motion sensors, door contacts and sirens that trigger instant smartphone alerts and scare off intruders.",
    tags: ["Homes", "Shops", "Offices", "Warehouses"],
  },
  {
    name: "Video Intercom Systems",
    desc: "See and speak with visitors at your gate or door before letting anyone in. Ideal for apartments and estates.",
    tags: ["Apartments", "Estates", "Offices", "Villas"],
  },
  {
    name: "Video Doorbells",
    desc: "Smart doorbells with HD video, two-way talk and motion detection — answer your door from your phone.",
    tags: ["Homes", "Small Offices", "Rental Units", "Shops"],
  },
  {
    name: "Panic & Emergency Buttons",
    desc: "Discreet panic buttons that silently alert your family or security team the moment they are pressed.",
    tags: ["Homes", "Retail", "Clinics", "Schools"],
  },
];

const systemTypes = [
  { label: "Alarms", range: "Motion + siren + alerts" },
  { label: "Intercoms", range: "Audio + video entry" },
  { label: "Doorbell Cams", range: "HD + two-way talk" },
  { label: "Integration", range: "Works with your CCTV" },
];

const Grooming = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Bell className="inline w-4 h-4 mr-1 -mt-0.5" /> Alarm & Intercom
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Alerted the Moment <span className="text-primary">It Matters</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Intruder alarms, video intercoms and smart doorbells — installed and integrated with your cameras so you always know who's at your door.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">What We Install</h2>
          </div>
          <div>
            <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-card p-2">
              {services.map((s) => (
                <AccordionItem key={s.name} value={s.name} className="border-border px-4">
                  <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                    {s.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mb-4">{s.desc}</p>
                    <div className="grid grid-cols-4 gap-2">
                      {s.tags.map((tag) => (
                        <div key={tag} className="text-center p-3 rounded-xl bg-muted">
                          <div className="text-xs text-muted-foreground font-medium">Ideal for</div>
                          <div className="text-sm font-semibold text-foreground">{tag}</div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* System Types */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">System Types</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {systemTypes.map((s, i) => (
              <div key={s.label}
                className="text-center p-4 rounded-2xl bg-card shadow-card">
                <div className="font-semibold text-foreground">{s.label}</div>
                <div className="text-sm text-muted-foreground">{s.range}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Grooming;
