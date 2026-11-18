import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell } from "lucide-react";
import alarmImg from "@/assets/alarm-intercom.jpg";

const services = [
  {
    name: "Motion Detection Sensors",
    desc: "Indoor and outdoor motion detectors identify movement in protected areas and signal the alarm control panel.",
    tags: ["Homes", "Shops", "Offices", "Warehouses"],
  },
  {
    name: "Door & Window Contacts",
    desc: "Magnetic contacts monitor selected doors and windows, helping detect unauthorised opening.",
    tags: ["Homes", "Offices", "Stores", "Commercial Premises"],
  },
  {
    name: "Alarm Panels & Sirens",
    desc: "The alarm panel receives sensor signals and activates audible warning devices when an alarm condition is triggered.",
    tags: ["Homes", "Retail", "Clinics", "Schools"],
  },
  {
    name: "Panic & Emergency Buttons",
    desc: "Manually triggered emergency buttons provide an additional way to raise an alarm when immediate assistance is needed.",
    tags: ["Homes", "Retail", "Clinics", "Schools"],
  },
];

const systemTypes = [
  { label: "Motion Detection", range: "Indoor and outdoor sensors" },
  { label: "Entry Detection", range: "Door and window contacts" },
  { label: "Audible Warning", range: "Alarm sirens and sounders" },
  { label: "CCTV Integration", range: "Coordinated security systems" },
];

const Alarms = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Intruder Alarm Installation in Nairobi & Kenya | Cognitive Camera Vision" description="Intruder alarm systems for homes, shops, offices and warehouses, with detection sensors, alarm panels, sirens and optional CCTV integration." path="/alarms" />
      <Navbar />

      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[46%]">
          <img src={alarmImg} alt="Intruder alarm equipment for a secure property" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 md:px-8">
          <div className="max-w-3xl lg:max-w-[52%]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Bell className="inline w-4 h-4 mr-1 -mt-0.5" /> Intruder Alarm Systems
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Detect Intrusion. <span className="text-primary">Respond with Confidence.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Protect doors, windows and selected areas with intrusion detection sensors, alarm panels and audible warnings, designed around your property.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/book-survey?service=Intruder%20Alarm%20Systems">Request an Alarm Assessment</Link>
            </Button>
          </div>
          <img src={alarmImg} alt="Intruder alarm equipment for a secure property" className="mt-10 h-64 w-full rounded-lg object-cover shadow-hero lg:hidden" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Intrusion Detection</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Alarm Components for Your Property</h2>
          </div>
          <Accordion type="single" collapsible className="bg-card rounded-2xl shadow-card p-2">
            {services.map((service) => (
              <AccordionItem key={service.name} value={service.name} className="border-border px-4">
                <AccordionTrigger className="text-foreground font-semibold hover:no-underline">
                  {service.name}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">{service.desc}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {service.tags.map((tag) => (
                      <div key={tag} className="text-center p-3 rounded-xl bg-muted">
                        <div className="text-xs text-muted-foreground font-medium">Suitable for</div>
                        <div className="text-sm font-semibold text-foreground">{tag}</div>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Alarm System Functions</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {systemTypes.map((system) => (
              <div key={system.label} className="text-center p-4 rounded-2xl bg-card shadow-card">
                <div className="font-semibold text-foreground">{system.label}</div>
                <div className="text-sm text-muted-foreground">{system.range}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="brand" size="lg" asChild>
              <Link to="/book-survey?service=Intruder%20Alarm%20Systems">Request an Alarm Assessment</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Alarms;
