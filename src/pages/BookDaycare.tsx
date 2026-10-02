import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, Dog } from "lucide-react";
import { cn } from "@/lib/utils";

const petSchema = z.object({
  petName: z.string().trim().min(1, "Pet name is required").max(50),
  breed: z.string().trim().min(1, "Breed is required").max(50),
  age: z.string().min(1, "Age is required"),
  weight: z.string().min(1, "Weight is required"),
  gender: z.string().min(1, "Gender is required"),
  notes: z.string().max(500).optional(),
});

type PetForm = z.infer<typeof petSchema>;

const packages = [
  { id: "single", name: "Single Day", price: 42, desc: "Full day 7AM–7PM" },
  { id: "half", name: "Half Day", price: 28, desc: "Up to 5 hours" },
  { id: "5pack", name: "5-Day Pack", price: 185, desc: "$37/day · Save $25" },
  { id: "10pack", name: "10-Day Pack", price: 340, desc: "$34/day · Save $80" },
  { id: "20pack", name: "20-Day Pack", price: 620, desc: "$31/day · Save $220" },
  { id: "monthly", name: "Monthly Unlimited", price: 699, desc: "Unlimited daycare" },
];

const dropOffTimes = ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM"];
const pickUpTimes = ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM"];

const steps = ["Date", "Pet Info", "Package", "Times", "Review"];

const BookDaycare = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [date, setDate] = useState<Date>();
  const [selectedPkg, setSelectedPkg] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUp, setPickUp] = useState("");

  const { register, handleSubmit, getValues, setValue, formState: { errors }, trigger } = useForm<PetForm>({
    resolver: zodResolver(petSchema),
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const canNext = () => {
    if (step === 0) return !!date;
    if (step === 2) return !!selectedPkg;
    if (step === 3) return !!dropOff && !!pickUp;
    return true;
  };

  const next = async () => {
    if (step === 1) {
      const valid = await trigger();
      if (!valid) return;
    }
    if (step < steps.length - 1) setStep(step + 1);
  };

  const back = () => { if (step > 0) setStep(step - 1); };

  const selectedPkgData = packages.find((p) => p.id === selectedPkg);
  const petData = getValues();

  const onConfirm = () => {
    navigate("/booking-confirmed", {
      state: {
        petName: petData.petName,
        date: date ? format(date, "PPP") : "",
        packageName: selectedPkgData?.name,
        price: selectedPkgData?.price,
        type: "daycare" as const,
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
              <Dog className="w-10 h-10 text-primary mx-auto mb-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Book Daycare</h1>
            </div>

            {/* Progress */}
            <div className="mb-8">
              <Progress value={((step + 1) / steps.length) * 100} className="h-2 mb-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                {steps.map((s, i) => (
                  <span key={s} className={cn("font-medium", i <= step && "text-primary")}>{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
              {/* Step 0: Date */}
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Select a Date</h2>
                  <p className="text-sm text-muted-foreground">Choose when you'd like to bring your pup in.</p>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate}
                        disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0)) || d.getDay() === 0}
                        className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
              )}

              {/* Step 1: Pet Info */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Pet Information</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Pet Name *</Label>
                      <Input placeholder="Buddy" {...register("petName")} />
                      {errors.petName && <p className="text-sm text-destructive">{errors.petName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Breed *</Label>
                      <Input placeholder="Golden Retriever" {...register("breed")} />
                      {errors.breed && <p className="text-sm text-destructive">{errors.breed.message}</p>}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Age *</Label>
                      <Select onValueChange={(v) => setValue("age", v, { shouldValidate: true })} defaultValue={getValues("age")}>
                        <SelectTrigger><SelectValue placeholder="Age" /></SelectTrigger>
                        <SelectContent>
                          {["Puppy (< 1yr)", "1-3 years", "3-7 years", "7+ years"].map((a) => (
                            <SelectItem key={a} value={a}>{a}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.age && <p className="text-sm text-destructive">{errors.age.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Weight *</Label>
                      <Select onValueChange={(v) => setValue("weight", v, { shouldValidate: true })}>
                        <SelectTrigger><SelectValue placeholder="Weight" /></SelectTrigger>
                        <SelectContent>
                          {["Under 25 lbs", "25-50 lbs", "50-80 lbs", "80+ lbs"].map((w) => (
                            <SelectItem key={w} value={w}>{w}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.weight && <p className="text-sm text-destructive">{errors.weight.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label>Gender *</Label>
                      <Select onValueChange={(v) => setValue("gender", v, { shouldValidate: true })}>
                        <SelectTrigger><SelectValue placeholder="Gender" /></SelectTrigger>
                        <SelectContent>
                          {["Male", "Female"].map((g) => (
                            <SelectItem key={g} value={g}>{g}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.gender && <p className="text-sm text-destructive">{errors.gender.message}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Special Notes</Label>
                    <Textarea placeholder="Any allergies, medical conditions, or behavioral notes..." {...register("notes")} />
                  </div>
                </div>
              )}

              {/* Step 2: Package */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Choose a Package</h2>
                  <div className="grid gap-3">
                    {packages.map((pkg) => (
                      <button key={pkg.id} type="button" onClick={() => setSelectedPkg(pkg.id)}
                        className={cn("flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left",
                          selectedPkg === pkg.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/30")}>
                        <div>
                          <p className="font-semibold text-foreground">{pkg.name}</p>
                          <p className="text-sm text-muted-foreground">{pkg.desc}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-foreground">${pkg.price}</p>
                          {selectedPkg === pkg.id && <CheckCircle2 className="w-5 h-5 text-primary ml-auto mt-1" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Times */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Time Preferences</h2>
                  <div className="space-y-2">
                    <Label>Drop-off Time</Label>
                    <Select value={dropOff} onValueChange={setDropOff}>
                      <SelectTrigger><SelectValue placeholder="Select drop-off time" /></SelectTrigger>
                      <SelectContent>
                        {dropOffTimes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Pick-up Time</Label>
                    <Select value={pickUp} onValueChange={setPickUp}>
                      <SelectTrigger><SelectValue placeholder="Select pick-up time" /></SelectTrigger>
                      <SelectContent>
                        {pickUpTimes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 4: Review */}
              {step === 4 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Review & Confirm</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Date</span><span className="font-medium text-foreground">{date ? format(date, "PPP") : "—"}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Drop-off</span><span className="font-medium text-foreground">{dropOff}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Pick-up</span><span className="font-medium text-foreground">{pickUp}</span></div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Pet</span><span className="font-medium text-foreground">{petData.petName}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Breed</span><span className="font-medium text-foreground">{petData.breed}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Age / Weight</span><span className="font-medium text-foreground">{petData.age} · {petData.weight}</span></div>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/5 border-2 border-primary">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-semibold text-foreground">{selectedPkgData?.name}</p>
                          <p className="text-sm text-muted-foreground">{selectedPkgData?.desc}</p>
                        </div>
                        <p className="text-2xl font-bold text-primary">${selectedPkgData?.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <Button variant="outline" onClick={back} disabled={step === 0} className="gap-1">
                  <ChevronLeft className="w-4 h-4" /> Back
                </Button>
                {step < steps.length - 1 ? (
                  <Button variant="brand" onClick={next} disabled={!canNext()} className="gap-1">
                    Next <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button variant="brand" onClick={onConfirm} className="gap-1">
                    Confirm Booking <CheckCircle2 className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookDaycare;
