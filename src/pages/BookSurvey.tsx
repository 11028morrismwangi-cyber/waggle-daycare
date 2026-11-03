import { useSearchParams } from "react-router-dom";
import QuoteRequest from "@/components/QuoteRequest";
import SEO from "@/components/SEO";

const BookSurvey = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get("service");
  const allowedServices = [
    "CCTV Installation",
    "Surveillance System",
    "Intruder Alarm Systems",
    "Video Intercom Installation",
    "Maintenance & Support",
    "Full Package (CCTV + Alarm)",
  ];
  const defaultService = requestedService && allowedServices.includes(requestedService)
    ? requestedService
    : "CCTV Installation";

  return (
    <>
      <SEO
        title="Request a CCTV & Security System Quote | Cognitive Camera Vision"
        description="Request a site survey or quotation for CCTV installation, surveillance, intruder alarms, video intercoms and security system support in Kenya."
        path="/book-survey"
      />
      <QuoteRequest defaultService={defaultService} />
    </>
  );
};

export default BookSurvey;
