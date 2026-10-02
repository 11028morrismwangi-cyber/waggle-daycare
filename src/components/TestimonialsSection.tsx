import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James M.",
    role: "Homeowner, Westlands",
    text: "The team installed eight cameras in one afternoon. The mobile app access is seamless and the night-time picture quality is incredible.",
    rating: 5,
  },
  {
    name: "Grace W.",
    role: "Shop Owner, Eastleigh",
    text: "They understood exactly what my retail space needed. The footage has already helped resolve an incident — worth every shilling.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Facilities Manager, Industrial Area",
    text: "Their maintenance plan keeps our 40-camera system running without fail. Fast response whenever we call, every time.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Trusted Across Nairobi
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{t.name}</div>
                <div className="text-muted-foreground text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
