import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Daycare from "./pages/Daycare";
import Boarding from "./pages/Boarding";
import Grooming from "./pages/Grooming";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookDaycare from "./pages/BookDaycare";
import BookBoarding from "./pages/BookBoarding";
import BookingConfirmed from "./pages/BookingConfirmed";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/daycare" element={<Daycare />} />
          <Route path="/boarding" element={<Boarding />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/training" element={<Training />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-daycare" element={<BookDaycare />} />
          <Route path="/book-boarding" element={<BookBoarding />} />
          <Route path="/booking-confirmed" element={<BookingConfirmed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
