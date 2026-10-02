import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle2, ClipboardList, Video, MapPin, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookingConfirmed = () => {
  const location = useLocation();
  const state = location.state as {
    name?: string;
    service?: string;
    location?: string;
    propertyType?: string;
  } | null;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 md:px-8 max-w-xl text-center">
          <div
            className="mx-auto mb-6 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Request Received! 🎉</h1>
            <p className="text-muted-foreground text-lg mb-8">
              {state?.name
                ? `Thanks ${state.name}, we'll reach out within 24 hours with your quotation.`
                : "We'll reach out within 24 hours with your quotation."}{" "}
              A free site survey will be scheduled at your convenience.
            </p>
          </div>

          {state && (
            <div
              className="bg-card rounded-2xl shadow-card p-6 mb-8 text-left space-y-3"
            >
              {state.name && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><ClipboardList className="w-4 h-4" /> Name</span>
                  <span className="font-medium text-foreground">{state.name}</span>
                </div>
              )}
              {state.service && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><Video className="w-4 h-4" /> Service</span>
                  <span className="font-medium text-foreground">{state.service}</span>
                </div>
              )}
              {state.propertyType && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><Home className="w-4 h-4" /> Property</span>
                  <span className="font-medium text-foreground">{state.propertyType}</span>
                </div>
              )}
              {state.location && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><MapPin className="w-4 h-4" /> Location</span>
                  <span className="font-medium text-foreground">{state.location}</span>
                </div>
              )}
            </div>
          )}

          <div
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="brand" size="lg" asChild>
              <Link to="/"><Home className="w-4 h-4 mr-1" /> Back to Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Questions? Contact Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingConfirmed;
