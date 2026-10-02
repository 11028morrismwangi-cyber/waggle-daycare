import { Link } from "react-router-dom";
import { Sun, Moon, Scissors, GraduationCap, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import daycareImg from "@/assets/hero-dogs.jpg";
import boardingImg from "@/assets/boarding-suite.jpg";
import groomingImg from "@/assets/grooming.jpg";
import trainingImg from "@/assets/training.jpg";

const services = [
  {
    icon: Sun,
    title: "Daycare",
    description: "Supervised group play and socialization in our climate-controlled facility.",
    price: "Starting at $35/day",
    image: daycareImg,
    link: "/daycare",
    color: "bg-brand-orange-light",
  },
  {
    icon: Moon,
    title: "Boarding",
    description: "Overnight care with all-day play included in cozy private suites.",
    price: "Starting at $55/night",
    image: boardingImg,
    link: "/boarding",
    color: "bg-brand-sky-light",
  },
  {
    icon: Scissors,
    title: "Grooming",
    description: "Baths, trims, and spa treatments to keep your pet looking their best.",
    price: "Starting at $45",
    image: groomingImg,
    link: "/grooming",
    color: "bg-accent/15",
  },
  {
    icon: GraduationCap,
    title: "Training",
    description: "Positive reinforcement programs for puppies and adult dogs.",
    price: "Starting at $75/session",
    image: trainingImg,
    link: "/training",
    color: "bg-brand-purple/10",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            Everything Your Pet Needs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From fun-filled daycare to luxurious boarding, we provide comprehensive care for your furry family members.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to={service.link}
                className="group block bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 w-10 h-10 ${service.color} rounded-full flex items-center justify-center`}>
                    <service.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm">{service.price}</span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
