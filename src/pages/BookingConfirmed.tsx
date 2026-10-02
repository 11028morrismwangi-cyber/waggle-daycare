import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, CalendarDays, Dog, Home, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookingConfirmed = () => {
  const location = useLocation();
  const state = location.state as {
    petName?: string;
    date?: string;
    packageName?: string;
    price?: number;
    type?: "daycare" | "boarding";
  } | null;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto px-4 md:px-8 max-w-xl text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="mx-auto mb-6 w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center"
          >
            <CheckCircle2 className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Booking Confirmed! 🎉</h1>
            <p className="text-muted-foreground text-lg mb-8">
              {state?.petName
                ? `${state.petName}'s ${state.type === "boarding" ? "boarding" : "daycare"} is all set.`
                : "Your reservation is all set."}{" "}
              We'll send a confirmation email shortly.
            </p>
          </motion.div>

          {state && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-card rounded-2xl shadow-card p-6 mb-8 text-left space-y-3"
            >
              {state.petName && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><Dog className="w-4 h-4" /> Pet</span>
                  <span className="font-medium text-foreground">{state.petName}</span>
                </div>
              )}
              {state.date && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground flex items-center gap-2"><CalendarDays className="w-4 h-4" /> Date</span>
                  <span className="font-medium text-foreground">{state.date}</span>
                </div>
              )}
              {state.packageName && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Package</span>
                  <span className="font-medium text-foreground">{state.packageName}</span>
                </div>
              )}
              {state.price != null && (
                <div className="flex justify-between text-sm pt-2 border-t border-border">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-bold text-primary text-lg">${state.price}</span>
                </div>
              )}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Button variant="brand" size="lg" asChild>
              <Link to="/"><Home className="w-4 h-4 mr-1" /> Back to Home</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact">Questions? Contact Us <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingConfirmed;
