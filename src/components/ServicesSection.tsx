import { Link } from "react-router-dom";
import { Video, Eye, Bell, Wrench, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import cctvImg from "@/assets/cctv-install.jpg";
import surveillanceImg from "@/assets/surveillance.jpg";
import alarmImg from "@/assets/alarm-intercom.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";

const services = [
  {
    icon: Video,
    title: "CCTV Installation",
    description: "Strategic placement of high-definition cameras with night vision and remote playback.",
    price: "Free site survey",
    image: cctvImg,
    link: "/daycare",
    color: "bg-brand-orange-light",
  },
  {
    icon: Eye,
    title: "Surveillance Systems",
    description: "NVR recording systems with high-capacity storage for months of continuous footage.",
    price: "Custom quote",
    image: surveillanceImg,
    link: "/boarding",
    color: "bg-brand-sky-light",
  },
  {
    icon: Bell,
    title: "Alarm & Intercom",
    description: "Motion sensors, video doorbells and intercoms with instant smartphone alerts.",
    price: "Custom quote",
    image: alarmImg,
    link: "/grooming",
    color: "bg-accent/15",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Scheduled health checks, camera cleaning, cable testing and firmware updates.",
    price: "Flexible plans",
    image: maintenanceImg,
    link: "/training",
    color: "bg-primary/10",
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
            Everything You Need to Stay Secure
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            From a single home camera to a full commercial surveillance network, we design, install and maintain systems across Nairobi.
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
