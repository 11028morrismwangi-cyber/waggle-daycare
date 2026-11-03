import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, Cable, DoorOpen, Home, Building2, Smartphone, CheckCircle2 } from "lucide-react";
import intercomImg from "@/assets/alarm-intercom.jpg";

const systemComponents = [
  {
    icon: DoorOpen,
    title: "Outdoor Door or Gate Station",
    description: "A visitor calls from the entrance using an audio or video station selected for the access point and site conditions.",
  },
  {
    icon: Home,
    title: "Indoor Monitor or Handset",
    description: "Occupants can answer, communicate with the visitor and, where the system supports it, release the connected door or gate.",
  },
  {
    icon: Smartphone,
    title: "Mobile Answering Options",
    description: "Selected IP and smart intercom systems support calls through a mobile application. Availability depends on the equipment and network setup.",
  },
  {
    icon: Cable,
    title: "Power, Cabling and Network",
    description: "We assess cable routes, power requirements, network coverage and the distance between the entrance and answering points.",
  },
];

const applications = [
  {
    icon: Home,
    title: "Homes and Villas",
    description: "Screen visitors at the gate or front door before deciding whether to grant access.",
  },
  {
    icon: Building2,
    title: "Apartments and Estates",
    description: "Plan entrance communication for shared gates, reception points and individual residential units.",
  },
  {
    icon: Bell,
    title: "Offices and Business Premises",
    description: "Give reception or designated staff a clear way to communicate with visitors at controlled entrances.",
  },
];

const Intercoms = () => (
  <div className="min-h-screen bg-background">
    <SEO
      title="Video Intercom Installation in Nairobi & Kenya | Cognitive Camera Vision"
      description="Video and audio intercom installation for homes, apartments, estates and offices in Nairobi, along Thika Road and across Kenya. Request a site assessment."
      path="/intercoms"
    />
    <Navbar />

    <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="absolute inset-y-0 right-0 hidden lg:block w-[46%]">
        <img src={intercomImg} alt="Video intercom equipment for a controlled entrance" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
      </div>
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="max-w-3xl lg:max-w-[52%]">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            <DoorOpen className="inline w-4 h-4 mr-1 -mt-0.5" /> Entry Communication
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
            See Who Is at the Gate. <span className="text-primary">Speak Before You Open.</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
            We design and install audio and video intercom systems that help households, offices and shared properties screen visitors and manage entry points.
          </p>
          <Button variant="brand" size="lg" asChild>
            <Link to="/book-survey">Request an Intercom Assessment</Link>
          </Button>
        </div>
        <img src={intercomImg} alt="Video intercom equipment for a controlled entrance" className="mt-10 h-64 w-full rounded-lg object-cover shadow-hero lg:hidden" />
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">How an Intercom System Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">A Clear Communication Path at Your Entrance</h2>
          <p className="text-muted-foreground mt-4">The right arrangement depends on the number of entrances, users, buildings and the way access should be managed.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {systemComponents.map((item) => (
            <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-card shadow-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 bg-warm-section">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Where Intercoms Help</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Designed Around Your Property</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {applications.map((item) => (
            <div key={item.title} className="bg-card rounded-2xl shadow-card p-6">
              <item.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Integrated Security</span>
            <h2 className="text-3xl font-bold text-foreground mt-2 mb-4">Connect Entry Points to the Wider Security System</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              An intercom can be planned alongside CCTV, intruder alarms and access-control equipment. Where devices are compatible, the design can bring visitor communication and entrance monitoring into a coordinated setup.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We assess compatibility before recommending integration. Door or gate release, mobile answering and multi-unit functions depend on the selected equipment and the existing installation.
            </p>
          </div>
          <div className="bg-card rounded-2xl shadow-card p-6 space-y-4">
            {[
              "Entrance and visitor-point assessment",
              "Audio or video station selection",
              "Indoor answering-point planning",
              "Power, cabling and network review",
              "Compatible CCTV or access-control integration",
              "Configuration, testing and handover",
            ].map((item) => (
              <div key={item} className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-20 bg-warm-section">
      <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Planning an Intercom Installation?</h2>
        <p className="text-muted-foreground mb-8">Tell us about the property, entrance points and number of users. We will use that information to plan the appropriate system and quotation.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="brand" size="lg" asChild>
            <Link to="/book-survey">Request a Site Assessment</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Intercoms;
