import placeholderIcon from "@/assets/placeholder-icon.jpg";

const conventional = [
  "Records footage for later review",
  "Records new footage again and again",
  "Leaves operators watching every screen",
  "Confirms an incident after it has happened",
];

const cognitive = [
  "Sees and interprets activity in real time",
  "Identifies events and sends alerts",
  "Ranks feeds as Emergency, Risk, Observe or Normal",
  "Turns footage into useful, timely information",
];

const IntelligenceDifference = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 md:px-8">
      <div className="max-w-3xl mb-12">
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">The Cognitive Difference</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
          Recording tells you what happened. Intelligence tells you where to look now.
        </h2>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Conventional CCTV is useful evidence. Our intelligence layer makes it an active operational tool by analysing live feeds and bringing the cameras that need attention to the front.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
        <article className="border border-border bg-card p-6 md:p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-lg overflow-hidden bg-muted">
              <img src={placeholderIcon} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Conventional CCTV</p>
              <h3 className="text-xl font-bold text-foreground">Cameras record everything</h3>
            </div>
          </div>
          <ul className="space-y-4">
            {conventional.map((item) => (
              <li key={item} className="flex gap-3 text-muted-foreground">
                <span className="w-5 h-5 shrink-0 mt-0.5 inline-block rounded-full bg-muted-foreground/30" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="border-2 border-primary bg-card p-6 md:p-8 rounded-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-lg overflow-hidden bg-primary/10">
              <img src={placeholderIcon} alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Cognitive Vision</p>
              <h3 className="text-xl font-bold text-foreground">Cameras see and understand</h3>
            </div>
          </div>
          <ul className="space-y-4">
            {cognitive.map((item) => (
              <li key={item} className="flex gap-3 text-foreground">
                <span className="w-5 h-5 shrink-0 mt-0.5 inline-block rounded-full bg-primary/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);

export default IntelligenceDifference;