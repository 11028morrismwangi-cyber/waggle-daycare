import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ClipboardList, CheckCircle2 } from "lucide-react";

const quoteSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(20),
  email: z.string().trim().email("Please enter a valid email").max(255).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select a property type"),
  location: z.string().trim().min(1, "Location is required").max(120),
  notes: z.string().max(500).optional(),
});

type QuoteForm = z.infer<typeof quoteSchema>;

const services = [
  "CCTV Installation",
  "Surveillance System",
  "Alarm & Intercom",
  "Maintenance & Support",
  "Full Package (CCTV + Alarm)",
];

const propertyTypes = ["Home", "Apartment", "Shop", "Office", "Estate", "Warehouse / Industrial"];

interface QuoteRequestProps {
  defaultService?: string;
}

const QuoteRequest = ({ defaultService }: QuoteRequestProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: defaultService || "",
      propertyType: "",
      location: "",
      notes: "",
    },
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

    const onSubmit = async (data: QuoteForm & { tracking_pot?: string }) => {
    // 🛡️ HONEYPOT SPAM SHIELD TRAP LINE
    if (data.tracking_pot && data.tracking_pot.trim() !== "") {
      console.warn("Spambot activity blocked silently.");
      return; // Drops the execution thread completely so no email is ever sent!
    }

    try {
      const response = await fetch("https://formspree.io/f/mbgdjevv", {
        method: "POST",
        headers: { "Content-Type": "application/json",
          "Accept": "application/json" 
         },
        
        body: JSON.stringify(data),
      });

      if (response.ok) {
        navigate("/booking-confirmed", {
          state: {
            name: data.name,
            service: data.service,
            location: data.location,
            propertyType: data.propertyType,
          },
        });
      } else {
        throw new Error("Form submission rejected by endpoint API");
      }
    } catch (error) {
      console.log("this is the error from the form: ",error)
      toast.error("Form Submission Error", {
        description: "We could not process your quote request right now. Please call us directly.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between">
      <Navbar />
      <main className="container mx-auto px-4 md:px-8 pt-28 pb-20 flex-grow max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-card p-6 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">Book a CCTV Site Survey</h1>
              <p className="text-sm text-muted-foreground mt-0.5">Get a customized corporate quotation for your security infrastructure</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* INVISIBLE SPAM BOT TRAP ELEMENT BLOCK */}
            <div className="hidden" aria-hidden="true">
              <input type="text" tabIndex={-1} autoComplete="off" placeholder="Leave empty" {...register("tracking_pot" as any)} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name / Company Name</Label>
                <Input id="name" placeholder="John Doe / Company Ltd" {...register("name")} />
                {errors.name && <p className="text-xs font-medium text-destructive">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number (WhatsApp Active)</Label>
                <Input id="phone" placeholder="+254 7XX XXX XXX" {...register("phone")} />
                {errors.phone && <p className="text-xs font-medium text-destructive">{errors.phone.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address (Optional)</Label>
                <Input id="email" type="email" placeholder="client@example.com" {...register("email")} />
                {errors.email && <p className="text-xs font-medium text-destructive">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Physical Location / Town</Label>
                <Input id="location" placeholder="e.g. Westlands, Nairobi" {...register("location")} />
                {errors.location && <p className="text-xs font-medium text-destructive">{errors.location.message}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="service">Requested Security Core Service</Label>
                <Select onValueChange={(v) => setValue("service", v)} defaultValue={defaultService || undefined}>
                  <SelectTrigger id="service">
                    <SelectValue placeholder="Select core infrastructure pillar" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs font-medium text-destructive">{errors.service.message}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Category Type</Label>
                <Select onValueChange={(v) => setValue("propertyType", v)}>
                  <SelectTrigger id="propertyType">
                    <SelectValue placeholder="Select property layout configuration" />
                  </SelectTrigger>
                  <SelectContent>
                    {propertyTypes.map((pt) => (
                      <SelectItem key={pt} value={pt}>{pt}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.propertyType && <p className="text-xs font-medium text-destructive">{errors.propertyType.message}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Scope Scope / Project Requirements (Optional)</Label>
              <Textarea id="notes" placeholder="Describe camera target angles, coverage zones, or existing infrastructure..." className="min-h-[100px]" {...register("notes")} />
              {errors.notes && <p className="text-xs font-medium text-destructive">{errors.notes.message}</p>}
            </div>

            <Button type="submit" variant="brand" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Processing Submission..." : "Submit Site Survey Request"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QuoteRequest;
