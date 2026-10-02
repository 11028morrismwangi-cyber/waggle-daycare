import { Link } from "react-router-dom";
import { PawPrint, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="w-7 h-7 text-primary" />
              <span className="text-lg font-bold text-primary-foreground">
                Pet Daycare
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/60">
              Where every paw gets to play. Safe, social, and supervised fun for your furry family.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon className="w-4 h-4 text-primary-foreground/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                <span>4521 Wagging Trail Blvd, Sunnyville, CA 94086</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0 text-primary" />
                <span>(555) 123-PAWS</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0 text-primary" />
                <span>hello@happytailsresort.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              {["Daycare", "Boarding", "Grooming", "Training", "Gallery", "About"].map((link) => (
                <Link key={link} to={`/${link.toLowerCase()}`} className="block hover:text-primary transition-colors">
                  {link}
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
                  <p>Mon–Fri: 7:00 AM – 7:00 PM</p>
                  <p>Sat: 8:00 AM – 6:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 md:px-8 py-5 text-center text-xs text-primary-foreground/40">
          © 2024 Pet Daycare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
