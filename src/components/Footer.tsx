import { Link } from "react-router-dom";
import { Video, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Video className="w-7 h-7 text-primary" />
              <span className="text-base font-bold uppercase tracking-tight text-primary-foreground">
                Cognitive Camera Vision
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/60">
              CCTV plus an intelligence layer that helps you know which camera needs your attention now.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <div className="flex flex-col gap-1">
                  <a href="tel:254796497698" className="hover:text-primary">+254 796 497 698</a>
                  <a href="tel:254737552281" className="hover:text-primary">+254 737 552 281</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <a href="mailto:info@cognitivevision.co.ke" className="hover:text-primary">info@cognitivevision.co.ke</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {[
                { label: "CCTV Installation", path: "/Cctv" },
                { label: "Surveillance Systems", path: "/Surveillance" },
                { label: "Alarm & Intercom", path: "/Alarms" },
                { label: "Maintenance", path: "/Maintenance" },
                { label: "Gallery", path: "/Gallery" },
                { label: "About", path: "/About" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="block hover:text-primary">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Hours</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <div>
                  <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-5 text-center text-xs text-primary-foreground/40">
          © 2026 Cognitive Camera Vision. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
