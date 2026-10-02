import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
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
import { ClipboardList, CalendarDays, CheckCircle2 } from "lucide-react";

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

  const onSubmit = async (data: QuoteForm) => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Request sent!", {
      description: `Thanks ${data.name}, we'll reach out within 24 hours with your quotation.`,
    });
    navigate("/booking-confirmed", {
      state: {
        name: data.name,
        service: data.service,
        location: data.location,
        propertyType: data.propertyType,
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-center mb-8">
              <ClipboardList className="w-10 h-10 text-primary mx-auto mb-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Request a Quote</h1>
              <p className="text-muted-foreground mt-2">
                Tell us about your property and we'll get back to you within 24 hours.
              </p>
            </div>

            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input placeholder="Your name" {...register("name")} />
                    {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Phone *</Label>
                    <Input type="tel" placeholder="+254 7XX XXX XXX" {...register("phone")} />
                    {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Email (optional)</Label>
                    <Input type="email" placeholder="you@example.com" {...register("email")} />
                    {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Location *</Label>
                    <Input placeholder="e.g. Westlands, Nairobi" {...register("location")} />
                    {errors.location && <p className="text-sm text-destructive">{errors.location.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Service *</Label>
                    <Select onValueChange={(v) => setValue("service", v)} defaultValue={defaultService}>
                      <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && <p className="text-sm text-destructive">{errors.service.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Property Type *</Label>
                    <Select onValueChange={(v) => setValue("propertyType", v)}>
                      <SelectTrigger><SelectValue placeholder="Select property type" /></SelectTrigger>
                      <SelectContent>
                        {propertyTypes.map((p) => (
                          <SelectItem key={p} value={p}>{p}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.propertyType && <p className="text-sm text-destructive">{errors.propertyType.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Additional Details</Label>
                  <Textarea
                    placeholder="Number of cameras needed, coverage areas, any security concerns..."
                    rows={4}
                    {...register("notes")}
                  />
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="w-4 h-4 text-primary" />
                  Free site survey included within Nairobi.
                </div>

                <Button type="submit" variant="brand" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Submit Request"}
                  <CheckCircle2 className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuoteRequest;
