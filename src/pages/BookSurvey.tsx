import QuoteRequest from "@/components/QuoteRequest";
import SEO from "@/components/SEO";

const BookSurvey = () => {
  return (
    <>
      <SEO
        title="Request a CCTV & Security System Quote | Cognitive Camera Vision"
        description="Request a site survey or quotation for CCTV installation, surveillance, intruder alarms, video intercoms and security system support in Kenya."
        path="/book-survey"
      />
      <QuoteRequest defaultService="CCTV Installation" />
    </>
  );
};

export default BookSurvey;
