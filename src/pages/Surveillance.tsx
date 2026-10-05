import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, HardDrive, Smartphone, Bell, CloudUpload, ShieldCheck, CheckCircle2, Plus } from "lucide-react";
import surveillanceImg from "@/assets/surveillance.jpg";

const includedServices = [
  { icon: HardDrive, title: "NVR Recording", desc: "Continuous recording with secure local storage" },
  { icon: Smartphone, title: "Remote Playback", desc: "Rewind and review footage from anywhere" },
  { icon: Eye, title: "Live Mobile View", desc: "Watch every camera in real time on your phone" },
  { icon: CloudUpload, title: "Cloud Backup", desc: "Optional off-site copy of critical footage" },
  { icon: Bell, title: "Smart Alerts", desc: "Motion and line-crossing notifications on your phone" },
  { icon: ShieldCheck, title: "Redundant Power", desc: "Backup power options keep recording through outages" },
];

const systems = [
  {
    name: "Home System", popular: false, features: [
      "4–8 camera NVR setup", "Storage sized around your retention needs",
      "Mobile app for the whole family", "Motion alert notifications",
    ],
  },
  {
    name: "Business System", popular: true, features: [
      "8–32 cameras across premises", "Point-of-sale & entry monitoring",
      "User roles and access levels", "Remote playback for management",
    ],
  },
  {
    name: "Enterprise & Estates", popular: false, features: [
      "Unlimited cameras & central monitoring room",
      "Perimeter, gate & lift coverage", "Redundant storage and failover",
      "Dedicated support plan",
    ],
  },
];

const addOns = [
  { name: "Solar / Backup Power" },
  { name: "Extended Storage Drives" },
  { name: "Video Doorbell Integration" },
  { name: "Access Control & Biometrics" },
  { name: "Intruder Alarm Integration" },
  { name: "Cloud Off-site Backup" },
];

const supportPlans = [
  { coverage: "Live view & playback", includes: "Included with every system" },
  { coverage: "Monthly health check", includes: "Available on care plans" },
  { coverage: "Priority response", includes: "Same-day support visits" },
  { coverage: "Firmware & security updates", includes: "Managed for you" },
];

const Surveillance = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[46%]">
          <img src={surveillanceImg} alt="Security control room displaying multiple live camera feeds" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 md:px-8">
          <div className="max-w-3xl lg:max-w-[52%]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-4">
              <Eye className="inline w-4 h-4 mr-1 -mt-0.5" /> Surveillance Systems
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Every Angle <span className="text-secondary">Recorded & Ready</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              Full surveillance systems with NVR recording, remote playback and mobile access — review any moment, from anywhere, at any time.
            </p>
            <Button variant="brand-secondary" size="lg" asChild>
              <Link to="/book-survey">Request a Quote</Link>
            </Button>
          </div>
          <img src={surveillanceImg} alt="Security control room displaying multiple live camera feeds" className="mt-10 h-64 w-full rounded-lg object-cover shadow-hero lg:hidden" />
        </div>
      </section>

      {/* Included */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Every System Includes</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Recording Done Right</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedServices.map((s, i) => (
              <div key={s.title}
                className="flex gap-4 p-6 rounded-2xl bg-card shadow-card">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-6 h-6 text-secondary" />
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

      {/* Systems */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Choose Your System</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Surveillance Options</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((system, i) => (
              <div key={system.name}
                className={`relative bg-card rounded-2xl shadow-card p-8 ${system.popular ? "ring-2 ring-secondary" : ""}`}>
                {system.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">Most Requested</span>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-6">{system.name}</h3>
                <ul className="space-y-3 mb-8">
                  {system.features.map((f) => (
                    <li key={f} className="flex gap-2 items-start text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant={system.popular ? "brand-secondary" : "brand"} className="w-full" asChild>
                  <Link to="/book-survey">Request a Quote</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons & Support */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2"><Plus className="w-5 h-5 text-primary" /> Optional Upgrades</h3>
              <div className="space-y-3">
                {addOns.map((a) => (
                  <div key={a.name} className="flex justify-between items-center p-4 rounded-xl bg-card shadow-card">
                    <span className="text-foreground">{a.name}</span>
                    <span className="text-sm font-medium text-primary">Available</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Support Levels</h3>
              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <table className="w-full">
                  <thead><tr className="bg-muted"><th className="text-left p-4 text-sm font-semibold text-foreground">Coverage</th><th className="text-right p-4 text-sm font-semibold text-foreground">Includes</th></tr></thead>
                  <tbody>
                    {supportPlans.map((d) => (
                      <tr key={d.coverage} className="border-t border-border">
                        <td className="p-4 text-muted-foreground">{d.coverage}</td>
                        <td className="p-4 text-right font-semibold text-primary">{d.includes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Surveillance;
