import { Link } from "react-router-dom";
import { BrainCircuit, Video, Bell, Wrench, ArrowRight } from "lucide-react";
import cctvImg from "@/assets/cctv-install.jpg";
import surveillanceImg from "@/assets/surveillance.jpg";
import alarmImg from "@/assets/alarm-intercom.jpg";
import maintenanceImg from "@/assets/maintenance.jpg";

const services = [
  {
    icon: BrainCircuit,
    title: "CCTV Intelligence Layer",
    description: "Live analysis that helps existing or new cameras identify events and prioritize attention.",
    price: "Built around your site",
    image: cctvImg,
    link: "/daycare",
    color: "bg-brand-orange-light",
  },
  {
    icon: Video,
    title: "CCTV Systems",
    description: "Purpose-designed camera, recording and remote-viewing systems for each property.",
    price: "New or existing systems",
    image: surveillanceImg,
    link: "/boarding",
    color: "bg-brand-sky-light",
  },
  {
    icon: Bell,
    title: "Alarm & Intercom",
    description: "Motion sensors, video doorbells and intercoms with instant smartphone alerts.",
    price: "Integrated protection",
    image: alarmImg,
    link: "/grooming",
    color: "bg-accent/15",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    description: "Scheduled health checks, camera cleaning, cable testing and firmware updates.",
    price: "Reliable long-term care",
    image: maintenanceImg,
    link: "/training",
    color: "bg-primary/10",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
            More Than Cameras on a Wall
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            We design around the security and operational questions you need answered — then connect cameras, intelligence, alerts and support into one practical system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
            >
              <Link
                to={service.link}
                className="group block bg-card rounded-lg shadow-card overflow-hidden hover:shadow-card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
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
                     <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
