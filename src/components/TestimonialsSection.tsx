import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James M.",
    role: "Homeowner, Dagoreti",
    text: "The team installed eight cameras at our home. I particularly enjoy the mobile app access — it is seamless, and the night-time picture quality is incredible.",
    rating: 5,
  },
  {
    name: "Mary G.",
    role: "Poultry Farmer, Kikuyu",
    text: "Kudos! I can now view my poultry farming project remotely and see everything happening there.",
    rating: 5,
  },
  {
    name: "David K.",
    role: "Director, St. Alicia Elite Academy",
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Client Experiences</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Security That Works in the Real World
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-card rounded-lg p-8 shadow-card"
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
