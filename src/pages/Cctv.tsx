import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Video, ShieldCheck, Eye, HardDrive, Smartphone, Cable, CheckCircle2, Home, Building2, Store, Warehouse } from "lucide-react";
import cctvHero from "@/assets/cctv-hero.jpg";


const includedServices = [
  { icon: Home, title: "Site Assessment", desc: "On-site review and camera placement plan" },
  { icon: Video, title: "HD & 4K Cameras", desc: "Indoor, outdoor, dome and bullet options" },
  { icon: Eye, title: "Night Vision", desc: "Clear recording even in complete darkness" },
  { icon: HardDrive, title: "NVR & Storage", desc: "Secure local recording with months of footage retained" },
  { icon: Smartphone, title: "Mobile Access", desc: "View live feeds and playback from your phone" },
  { icon: Cable, title: "Clean Installation", desc: "Concealed cabling and tidy, weatherproof mounting" },
];

const process = [
  { time: "Step 1", activity: "Site Survey — we visit your property, map blind spots and recommend the best camera" },
  { time: "Step 2", activity: "System Design — a tailored quotation with the exact cameras and storage you need" },
  { time: "Step 3", activity: "Installation — professional mounting, concealed cabling and full configuration" },
  { time: "Step 4", activity: "Handover — mobile app setup, recording tests and user training" },
  { time: "Step 5", activity: "Support — after-sales support and optional maintenance plan" },
];

const requirements = [
  "Indoor dome cameras for offices, shops and living areas",
  "Outdoor bullet cameras for walls, gates and compounds",
  "PTZ and panoramic cameras for wide-angle coverage",
  "NVR systems sized around your required footage-retention period",
  "Solar and backup power options for uninterrupted recording",
  "Internet and remote access configuration included",
];

const packages = [
  { name: "Single Camera Setup", features: ["1 high-definition camera", "Night vision & motion alerts", "Mobile viewing setup"], badge: null },
  { name: "Home Bundle", features: ["4–8 cameras, indoor & outdoor", "NVR with extended storage", "Mobile access & user training"], badge: "Popular" },
  { name: "Business System", features: ["Multi-room & perimeter coverage", "Central monitoring point", "Priority support plan"], badge: null },
  { name: "CCTV + Alarm Combo", features: ["Full camera coverage", "Intruder alarm integration", "Smartphone alerts"], badge: "Best Value" },
];

const Cctv = () => {
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                <Video className="inline w-4 h-4 mr-1 -mt-0.5" /> Installation Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4 tracking-tight">
                Complete <span className="text-primary">CCTV Installation</span> for Your Property
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Professional placement of high-definition cameras with night vision, secure recording and remote mobile access — installed cleanly and backed by support.
              </p>
              <Button variant="brand" size="lg" asChild>
                <Link to="/book-survey">Get a Quote</Link>
              </Button>
            </div>

            {/* Right Side: Branded Image Slot */}
            <div className="relative order-1 lg:order-2 rounded-2xl overflow-hidden shadow-card border border-border bg-card">
              <img 
                src={cctvHero} 
                alt="Intelligent CCTV Camera Infrastructure" 
                className="w-full h-[300px] md:h-[450px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Included Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What's Included</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Every Installation Covers It All</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((s, i) => (
              <div key={s.title}
                className="flex gap-4 p-6 rounded-2xl bg-card shadow-card hover:shadow-card-hover-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">From Survey to Support</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            {process.map((item, i) => (
              <div key={i}
                className="flex gap-4 items-start relative pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-1.5" />
                  {i < process.length - 1 && <div className="w-0.5 flex-1 bg-primary/20 mt-1" />}
                </div>
                <div className="flex gap-4 items-baseline pb-2">
                  <span className="text-sm font-semibold text-primary whitespace-nowrap w-20">{item.time}</span>
                  <span className="text-foreground">{item.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Install */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">What We Install</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Systems for Every Property</h2>
          </div>
          <div className="max-w-2xl mx-auto bg-card rounded-2xl shadow-card p-8">
            <div className="space-y-4">
              {requirements.map((req, i) => (
                <div key={i}
                  className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">System Packages</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Solutions for Every Budget</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((plan, i) => (
              <div key={plan.name}
                className="relative bg-card rounded-2xl shadow-card hover:shadow-card-hover-all p-6">
                {plan.badge && (
                  <span className="absolute -top-3 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">{plan.badge}</span>
                )}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {i === 0 && <Video className="w-6 h-6 text-primary" />}
                  {i === 1 && <Home className="w-6 h-6 text-primary" />}
                  {i === 2 && <Building2 className="w-6 h-6 text-primary" />}
                  {i === 3 && <ShieldCheck className="w-6 h-6 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{plan.name}</h3>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 items-center text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="brand" className="w-full" asChild>
                  <Link to="/book-survey">Request a Quote</Link>
                </Button>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8 flex items-center justify-center gap-2">
            <Store className="w-4 h-4" /> We serve homes, shops, offices and estates — <Warehouse className="w-4 h-4" /> including industrial sites across Kenya.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cctv;
