import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, differenceInDays } from "date-fns";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const petSchema = z.object({
  petName: z.string().trim().min(1, "Pet name is required").max(50),
  breed: z.string().trim().min(1, "Breed is required").max(50),
  age: z.string().min(1, "Age is required"),
  weight: z.string().min(1, "Weight is required"),
  feedingSchedule: z.string().trim().min(1, "Feeding schedule is required").max(200),
  notes: z.string().max(500).optional(),
});

type PetForm = z.infer<typeof petSchema>;

const suites = [
  { id: "standard", name: "Standard Suite", price: 55, features: ["Private 4'×6' room", "Orthopedic bed", "2 play sessions/day"] },
  { id: "deluxe", name: "Deluxe Suite", price: 75, popular: true, features: ["Spacious 6'×8' room", "Elevated bed & blanket", "3 play sessions/day", "Live webcam"] },
  { id: "vip", name: "VIP Suite", price: 95, features: ["Luxury 8'×10' room", "Premium bedding & couch", "Unlimited play", "Spa bath on checkout"] },
];

const addOnsList = [
  { id: "extra-play", name: "Extra Play Session", price: 12 },
  { id: "training", name: "Training Session (30 min)", price: 25 },
  { id: "spa", name: "Spa Bath & Brush", price: 20 },
  { id: "nails", name: "Nail Trim", price: 10 },
  { id: "meds", name: "Medication Administration", price: 5 },
  { id: "meal-prep", name: "Special Meal Prep", price: 8 },
];

const steps = ["Dates", "Pet Info", "Suite", "Add-ons", "Requests", "Review"];

const getDiscount = (nights: number) => {
  if (nights >= 30) return 0.20;
  if (nights >= 14) return 0.15;
  if (nights >= 7) return 0.10;
  if (nights >= 3) return 0.05;
  return 0;
};

const BookBoarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedSuite, setSelectedSuite] = useState("");
  const [addOns, setAddOns] = useState<string[]>([]);
  const [specialRequests, setSpecialRequests] = useState("");

  const { register, getValues, setValue, formState: { errors }, trigger } = useForm<PetForm>({
    resolver: zodResolver(petSchema),
  });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const suiteData = suites.find((s) => s.id === selectedSuite);
  const discount = getDiscount(nights);
  const suiteTotal = suiteData ? suiteData.price * nights * (1 - discount) : 0;
  const addOnsTotal = addOns.reduce((sum, id) => sum + (addOnsList.find((a) => a.id === id)?.price || 0), 0);
  const total = suiteTotal + addOnsTotal;

  const toggleAddOn = (id: string) => {
    setAddOns((prev) => prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]);
  };

  const canNext = () => {
    if (step === 0) return !!checkIn && !!checkOut && nights > 0;
    if (step === 2) return !!selectedSuite;
    return true;
  };

  const next = async () => {
    if (step === 1) { const valid = await trigger(); if (!valid) return; }
    if (step < steps.length - 1) setStep(step + 1);
  };

  const back = () => { if (step > 0) setStep(step - 1); };

  const petData = getValues();

  const onConfirm = () => {
    navigate("/booking-confirmed", {
      state: {
        petName: petData.petName,
        date: checkIn && checkOut ? `${format(checkIn, "MMM d")} – ${format(checkOut, "MMM d")}` : "",
        packageName: suiteData?.name,
        price: Math.round(total),
        type: "boarding" as const,
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
              <Moon className="w-10 h-10 text-secondary mx-auto mb-2" />
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">Book Boarding</h1>
            </div>

            <div className="mb-8">
              <Progress value={((step + 1) / steps.length) * 100} className="h-2 mb-3" />
              <div className="flex justify-between text-xs text-muted-foreground">
                {steps.map((s, i) => (
                  <span key={s} className={cn("font-medium", i <= step && "text-secondary")}>{s}</span>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl shadow-card p-6 md:p-8">
              {/* Step 0: Dates */}
              {step === 0 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Select Dates</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Check-in</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left", !checkIn && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Check-in date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={checkIn} onSelect={setCheckIn}
                            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                            className="p-3 pointer-events-auto" />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label>Check-out</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className={cn("w-full justify-start text-left", !checkOut && "text-muted-foreground")}>
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Check-out date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" selected={checkOut} onSelect={setCheckOut}
                            disabled={(d) => d <= (checkIn || new Date())}
                            className="p-3 pointer-events-auto" />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  {nights > 0 && (
                    <p className="text-sm text-muted-foreground">
                      {nights} night{nights > 1 ? "s" : ""}
                      {discount > 0 && <span className="text-accent font-medium ml-2">({(discount * 100).toFixed(0)}% multi-night discount!)</span>}
                    </p>
                  )}
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Age *</Label>
                      <Select onValueChange={(v) => setValue("age", v, { shouldValidate: true })}>
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
                  </div>
                  <div className="space-y-2">
                    <Label>Feeding Schedule *</Label>
                    <Input placeholder="e.g. 1 cup morning, 1 cup evening" {...register("feedingSchedule")} />
                    {errors.feedingSchedule && <p className="text-sm text-destructive">{errors.feedingSchedule.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label>Special Notes</Label>
                    <Textarea placeholder="Allergies, medications, behavioral notes..." {...register("notes")} />
                  </div>
                </div>
              )}

              {/* Step 2: Suite */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Choose Your Suite</h2>
                  <div className="grid gap-3">
                    {suites.map((suite) => (
                      <button key={suite.id} type="button" onClick={() => setSelectedSuite(suite.id)}
                        className={cn("relative flex flex-col p-5 rounded-xl border-2 transition-all text-left",
                          selectedSuite === suite.id ? "border-secondary bg-secondary/5" : "border-border hover:border-secondary/30")}>
                        {suite.popular && <span className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">Popular</span>}
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-foreground">{suite.name}</p>
                            <ul className="mt-2 space-y-1">
                              {suite.features.map((f) => (
                                <li key={f} className="text-sm text-muted-foreground flex gap-1.5 items-center">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-accent" />{f}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="text-right shrink-0 ml-4">
                            <p className="text-2xl font-bold text-foreground">${suite.price}</p>
                            <p className="text-xs text-muted-foreground">/night</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Add-ons */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Add-On Services</h2>
                  <p className="text-sm text-muted-foreground">Optional extras to make the stay even better.</p>
                  <div className="space-y-3">
                    {addOnsList.map((addon) => (
                      <label key={addon.id} className={cn("flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all",
                        addOns.includes(addon.id) ? "border-primary bg-primary/5" : "border-border hover:border-primary/30")}>
                        <div className="flex items-center gap-3">
                          <Checkbox checked={addOns.includes(addon.id)} onCheckedChange={() => toggleAddOn(addon.id)} />
                          <span className="text-foreground font-medium">{addon.name}</span>
                        </div>
                        <span className="font-semibold text-primary">+${addon.price}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Special Requests */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-foreground">Special Requests</h2>
                  <p className="text-sm text-muted-foreground">Anything else we should know?</p>
                  <Textarea value={specialRequests} onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="e.g. Please give extra cuddles before bedtime, favorite toy is a blue ball..."
                    rows={5} />
                </div>
              )}

              {/* Step 5: Review */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold text-foreground">Review & Confirm</h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-muted space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Check-in</span><span className="font-medium text-foreground">{checkIn ? format(checkIn, "PPP") : "—"}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Check-out</span><span className="font-medium text-foreground">{checkOut ? format(checkOut, "PPP") : "—"}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Duration</span><span className="font-medium text-foreground">{nights} night{nights > 1 ? "s" : ""}</span></div>
                    </div>
                    <div className="p-4 rounded-xl bg-muted space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Pet</span><span className="font-medium text-foreground">{petData.petName} ({petData.breed})</span></div>
                      <div className="flex justify-between text-sm"><span className="text-muted-foreground">Feeding</span><span className="font-medium text-foreground">{petData.feedingSchedule}</span></div>
                    </div>

                    {/* Pricing breakdown */}
                    <div className="p-4 rounded-xl bg-secondary/5 border-2 border-secondary space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">{suiteData?.name} × {nights} nights</span>
                        <span className="text-foreground">${suiteData ? suiteData.price * nights : 0}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-accent">Multi-night discount ({(discount * 100).toFixed(0)}%)</span>
                          <span className="text-accent">-${(suiteData ? suiteData.price * nights * discount : 0).toFixed(0)}</span>
                        </div>
                      )}
                      {addOns.length > 0 && addOns.map((id) => {
                        const a = addOnsList.find((x) => x.id === id);
                        return a ? (
                          <div key={id} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{a.name}</span>
                            <span className="text-foreground">${a.price}</span>
                          </div>
                        ) : null;
                      })}
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="font-semibold text-foreground">Total</span>
                        <span className="text-2xl font-bold text-secondary">${total.toFixed(0)}</span>
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
                  <Button variant="brand-secondary" onClick={next} disabled={!canNext()} className="gap-1">
                    Next <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button variant="brand-secondary" onClick={onConfirm} className="gap-1">
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

export default BookBoarding;
