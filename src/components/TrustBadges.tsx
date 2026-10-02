import { Camera, ChartNoAxesCombined, BellRing, LayoutDashboard, RefreshCw, BadgeDollarSign } from "lucide-react";

const badges = [
  { icon: Camera, label: "Works With Existing Cameras" },
  { icon: ChartNoAxesCombined, label: "24/7 Footage Analysis" },
  { icon: BellRing, label: "SMS & Email Alerts" },
  { icon: LayoutDashboard, label: "Priority Dashboard" },
  { icon: RefreshCw, label: "Up to 96% Retained" },
  { icon: BadgeDollarSign, label: "No Mandatory Subscription" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <div
              key={badge.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
