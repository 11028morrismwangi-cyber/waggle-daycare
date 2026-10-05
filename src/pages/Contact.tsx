import { useEffect } from "react";
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
import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255).optional().or(z.literal("")),
  phone: z.string().trim().min(9, "Please enter a valid phone number").max(20),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const subjects = [
  "Request a Quote",
  "CCTV Installation",
  "Surveillance System",
  "Alarm & Intercom",
  "Maintenance & Support",
  "General Inquiry",
  "Other",
];

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

      const onSubmit = async (data: ContactForm & { tracking_pot?: string }) => {
    // 🛡️ HONEYPOT SPAM SHIELD TRAP LINE
    if (data.tracking_pot && data.tracking_pot.trim() !== "") {
      console.warn("Spambot activity blocked silently.");
      return; // Drops the thread completely so no email spam is ever sent!
    }

    try {
      const response = await fetch("https://formspree.io", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. Our security team will contact you shortly.",
        });
        reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Error",
        description: "Something went wrong. Please call us directly or try again later.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Phone className="inline w-4 h-4 mr-1 -mt-0.5" /> Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              We'd Love to <span className="text-primary">Hear From You</span>
            </h1>
            <p className="text-lg text-muted-foreground">Tell us what you are trying to protect and what you need your cameras to recognize.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-sm text-muted-foreground">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <div className="flex flex-col">
                        <a href="tel:254796497698" className="text-sm text-muted-foreground hover:text-primary">+254 796 497 698</a>
                        <a href="tel:254737552281" className="text-sm text-muted-foreground hover:text-primary">+254 737 552 281</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:info@cognitivevision.co.ke" className="text-sm text-muted-foreground hover:text-primary">info@cognitivevision.co.ke</a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Hours</h3>
                <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {[["Monday – Saturday", "8:00 AM – 5:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
                        <tr key={day} className="border-b border-border last:border-0">
                          <td className="p-3 font-medium text-foreground">{day}</td>
                          <td className="p-3 text-muted-foreground text-right">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex gap-3 items-start p-4 rounded-2xl bg-muted">
                <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground text-sm">Service Area</p>
                  <p className="text-sm text-muted-foreground">Based in Nairobi and serving clients across Kenya. Contact us with your location and project requirements.</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* INVISIBLE SPAM BOT TRAP ELEMENT BLOCK */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" tabIndex={-1} autoComplete="off" placeholder="Leave empty" {...register("tracking_pot" as any)} />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your name" {...register("name")} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="+254 7XX XXX XXX" {...register("phone")} />
                      {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Subject *</Label>
                      <Select onValueChange={(v) => setValue("subject", v)}>
                        <SelectTrigger><SelectValue placeholder="Select a subject" /></SelectTrigger>
                        <SelectContent>
                          {subjects.map((s) => (
                            <SelectItem key={s} value={s}>{s}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.subject && <p className="text-sm text-destructive">{errors.subject.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="How can we help?" rows={5} {...register("message")} />
                    {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" variant="brand" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
