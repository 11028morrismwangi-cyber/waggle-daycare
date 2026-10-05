import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cctv from "./pages/Cctv";
import Surveillance from "./pages/Surveillance";
import Alarms from "./pages/Alarms";
import Maintenance from "./pages/Maintenance";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookSurvey from "./pages/BookSurvey";
import SurveyConfirmed from "./pages/SurveyConfirmed";
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
          <Route path="/cctv" element={<Cctv />} />
          <Route path="/surveillance" element={<Surveillance />} />
          <Route path="/alarms" element={<Alarms />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-survey" element={<BookSurvey />} />
          <Route path="/booking-confirmed" element={<SurveyConfirmed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
