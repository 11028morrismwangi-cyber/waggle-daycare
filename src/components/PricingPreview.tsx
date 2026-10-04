import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Receipt, RotateCcw } from "lucide-react";

const values = [
  {
    name: "Keep What Already Works",
    icon: ShieldCheck,
    metric: "Up to 96%",
    description: "of a compatible existing CCTV system can be retained while intelligence is added on top.",
  },
  {
    name: "Reports Without Extra Cost",
    icon: Receipt,
    metric: "KES 0",
    description: "for daily email reports and continuous footage analysis as configured in the solution.",
  },
  {
    name: "No Compulsory Renewal",
    icon: RotateCcw,
    metric: "Zero",
    description: "mandatory subscriptions. One investment unlocks more capability from your cameras.",
  },
];

const PricingPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-section">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">More Value From CCTV</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Keep the Cameras. Add the Intelligence.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We integrate with compatible infrastructure where possible, reducing disruption and avoiding an unnecessary full-system replacement.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {values.map((value) => (
            <div
              key={value.name}
              className="relative bg-card rounded-lg p-8 shadow-card border border-border"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-primary/10 mb-4">
                <img src={value.icon} alt="" className="w-full h-full object-cover" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">{value.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-3xl font-bold text-primary">{value.metric}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed min-h-20">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">Final scope and pricing are tailored to your cameras, site and monitoring priorities.</p>
          <Button variant="brand" size="lg" asChild>
            <Link to="/book-daycare">Discuss Your Site</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;
