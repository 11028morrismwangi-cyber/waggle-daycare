import placeholderIcon from "@/assets/placeholder-icon.jpg";

const badges = [
  { image: placeholderIcon, label: "Works With Existing Cameras" },
  { image: placeholderIcon, label: "24/7 Footage Analysis" },
  { image: placeholderIcon, label: "SMS & Email Alerts" },
  { image: placeholderIcon, label: "Priority Dashboard" },
  { image: placeholderIcon, label: "Up to 96% Retained" },
  { image: placeholderIcon, label: "No Mandatory Subscription" },
];

const TrustBadges = () => {
  return (
    <section className="py-12 bg-card border-b border-border">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/10">
                <img src={badge.image} alt="" className="w-full h-full object-cover" />
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
