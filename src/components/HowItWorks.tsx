import placeholderIcon from "@/assets/placeholder-icon.jpg";

const steps = [
  {
    image: placeholderIcon,
    step: "01",
    title: "Cameras That See",
    description: "Our intelligence layer watches every feed in real time and understands what is happening — not just recording it for later.",
  },
  {
    image: placeholderIcon,
    step: "02",
    title: "Every Feed, Categorized",
    description: "Even across 100+ cameras, each feed is sorted on one dashboard: Emergency, Risk, Observe or Normal.",
  },
  {
    image: placeholderIcon,
    step: "03",
    title: "Attention Where It Matters",
    description: "Your control room focuses on Emergencies and Risks only — with instant notifications the moment something happens.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-warm-section">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Intelligence, Not Just Footage
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Nobody can monitor 20+ cameras. Not really. Not at 3am. Our system does it for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <div key={step.step} className="text-center relative">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden bg-primary/10">
                  <img src={step.image} alt="" className="w-full h-full object-cover" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 w-16 border-t-2 border-dashed border-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
