import { useEffect } from "react";
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
import { MapPin, Phone, Mail, Clock, AlertCircle, Car } from "lucide-react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

const subjects = [
  "General Inquiry",
  "Daycare Question",
  "Boarding Question",
  "Grooming Appointment",
  "Training Consultation",
  "Feedback",
  "Other",
];

const Contact = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Message sent!", { description: `Thanks ${data.name}, we'll get back to you within 24 hours.` });
    reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              <Mail className="inline w-4 h-4 mr-1 -mt-0.5" /> Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
              We'd Love to <span className="text-primary">Hear From You</span>
            </h1>
            <p className="text-lg text-muted-foreground">Questions, concerns, or just want to say hi? We're here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-sm text-muted-foreground">4521 Wagging Trail Blvd, Sunnyville, CA 94086</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-sm text-muted-foreground">(555) 123-PAWS</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-sm text-muted-foreground">hello@happytailsresort.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-5 h-5 text-destructive" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Emergency Line</p>
                      <p className="text-sm text-muted-foreground">(555) 123-9111 (after hours)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> Hours</h3>
                <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {[["Monday–Friday", "7:00 AM – 7:00 PM"], ["Saturday", "8:00 AM – 6:00 PM"], ["Sunday", "Closed"]].map(([day, hours]) => (
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
                  <p className="font-medium text-foreground text-sm">Parking</p>
                  <p className="text-sm text-muted-foreground">Free parking lot with 20 spots. Enter from Wagging Trail Blvd. Drive-through drop-off lane available.</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="lg:col-span-3">
              <div className="bg-card rounded-2xl shadow-card p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" placeholder="Your name" {...register("name")} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (optional)</Label>
                      <Input id="phone" type="tel" placeholder="(555) 000-0000" {...register("phone")} />
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
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
