import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench, CheckCircle2, Zap, Award, MessageSquareQuote } from "lucide-react";
import maintenanceImg from "@/assets/maintenance.jpg";

const plans = [
  { name: "One-Off Service Visit", duration: "Per visit", features: ["Full system health check", "Camera cleaning & lens check", "Cable & connector testing"] },
  { name: "Monthly Care Plan", duration: "Billed monthly", features: ["Scheduled check-ups", "Priority response", "Firmware & security updates", "Small adjustments included"] },
  { name: "Quarterly Plan", duration: "Every 3 months", features: ["Routine inspections", "Storage & backup verification", "Camera angle adjustments"] },
  { name: "System Upgrade Consultation", duration: "Tailored review", features: ["Camera & storage capacity review", "Upgrade path recommendation", "Network coverage check"] },
  { name: "Priority Call-Out", duration: "Scheduled response", features: ["Fast diagnosis & repair", "Replacement of faulty parts", "System restoration support"] },
];

const reasons = [
  { name: "System Awareness", title: "Know what is offline", detail: "Connection status helps your team spot cameras that need technical attention." },
  { name: "Integrated Care", title: "One complete system", detail: "Cameras, recording, alerts and analysis are checked as one connected solution." },
  { name: "Practical Upgrades", title: "Retain what works", detail: "Compatible infrastructure is kept while weak points are improved." },
];

const Training = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[46%]">
          <img src={maintenanceImg} alt="Technician servicing an installed CCTV camera" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
        </div>
        <div className="container relative mx-auto px-4 md:px-8">
          <div className="max-w-3xl lg:max-w-[52%]">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Wrench className="inline w-4 h-4 mr-1 -mt-0.5" /> Maintenance & Support
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
              Keep Your System <span className="text-primary">Always Watching</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">
              A camera that stops recording is a blind spot you don't know you have. Our maintenance plans keep every camera, cable and drive in perfect working order.
            </p>
            <Button variant="brand" size="lg" asChild>
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
          <img src={maintenanceImg} alt="Technician servicing an installed CCTV camera" className="mt-10 h-64 w-full rounded-lg object-cover shadow-hero lg:hidden" />
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Care Plans</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Find the Right Plan</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={p.name}
                className="bg-card rounded-2xl shadow-card p-6 hover:shadow-card-hover-all">
                <h3 className="text-lg font-semibold text-foreground mb-1">{p.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{p.duration}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 md:py-24 bg-warm-section">
        <div className="container mx-auto px-4 md:px-8">
          <div
            className="max-w-3xl mx-auto text-center">
            <MessageSquareQuote className="w-10 h-10 text-primary mx-auto mb-4" />
            <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-relaxed italic mb-4">
              "We believe security is not a one-time installation — it's an ongoing commitment to keeping you protected."
            </blockquote>
            <p className="text-muted-foreground">— The Cognitive Camera Vision Team</p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Why Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((t, i) => (
              <div key={t.name}
                className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {i === 0 && <Zap className="w-8 h-8 text-primary" />}
                  {i === 1 && <Award className="w-8 h-8 text-primary" />}
                  {i === 2 && <Wrench className="w-8 h-8 text-primary" />}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{t.name}</h3>
                <p className="text-sm text-primary font-medium">{t.title}</p>
                <p className="text-sm text-muted-foreground mt-3">{t.detail}</p>
              </div>
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
