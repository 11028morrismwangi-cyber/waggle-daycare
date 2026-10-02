# COGNITIVE VISION

**Use inspiration from the image
Pawsome Days Pet Resort - Product Specification

1. Product Overview

Pawsome Days Pet Resort is a comprehensive web platform for a pet daycare and boarding facility that offers both daytime socialization services and overnight accommodations for pets. The platform enables pet parents to easily book daycare sessions, overnight boarding stays, grooming appointments, and training programs through dedicated booking flows. Built with Vite, React, Tailwind CSS, React Router, and Supabase, this modern application provides an engaging, intuitive experience that showcases the facility's vibrant, social environment while streamlining the booking and management process for both pet parents and facility staff.

2. Key Features & Requirements

Homepage

Requirements:





Display hero section with autoplay video or image carousel of dogs playing together



Feature promotional banner for first-day-free offer



Showcase trust badges highlighting facility credentials and safety features



Present service overview cards with visual icons and brief descriptions



Illustrate three-step process for how the service works



Display preview of photo gallery with recent activity photos



Show testimonials from satisfied pet parents with photos



Provide clear calls-to-action for booking and location finding



Include mobile app download badges for iOS and Android

Mock Data:





Hero Tagline: "Where Every Paw Gets to Play - Safe, Social, and Supervised Fun All Day Long"



Promotional Banner: "New Campers Get Their First Day FREE! Book your pup's trial day today."



Trust Badges:





Certified Pet Care Professionals (15+ years experience)



24/7 Video Monitoring & Supervision



Live Webcams for Pet Parents



Climate-Controlled Play Areas



Licensed & Insured Facility



Service Cards:





Daycare: "Supervised group play and socialization" - Starting at $35/day



Boarding: "Overnight care with all-day play included" - Starting at $55/night



Grooming: "Baths, trims, and spa treatments" - Starting at $45



Training: "Positive reinforcement programs" - Starting at $75/session



How It Works Steps:





Schedule Online - Choose your service and book instantly



Drop Off Your Pup - Bring them during our convenient hours



Play All Day - Watch them have fun via our live webcams



Testimonials:





"Max absolutely loves his daycare days! He comes home tired and happy. The staff sends photos throughout the day which I love." - Jennifer M. with Golden Retriever Max



"Best decision ever! Luna's anxiety has improved so much since starting daycare. She's made so many furry friends." - David K. with Border Collie Luna



"The boarding facility is amazing. I can travel knowing Buddy is safe, happy, and getting tons of playtime." - Sarah L. with Labrador Buddy

Visual Requirements:





Hero section with h-[600px] on desktop, h-[400px] on mobile



Video with dark overlay bg-black/40 and centered white text



Promotional banner in bg-amber-400 with text-gray-900 and pulse animation



Trust badges in grid layout with icons using w-12 h-12 size



Service cards with bg-white rounded-2xl shadow-lg p-8 and hover lift effect



Three-step process with numbered circles in brand color



Gallery preview showing 6 photos in masonry grid



Testimonial cards with rounded profile photos w-16 h-16 and 5-star ratings



Floating CTA buttons with fixed bottom-8 right-8 positioning on scroll

Daycare Page

Requirements:





Display hero image of dogs in open play area



List all included services and amenities



Show detailed daily schedule with time blocks



Outline requirements for participation (vaccinations, assessment)



Present pricing options with package comparisons



Highlight savings for multi-day packages



Provide booking CTA that launches daycare booking flow

Mock Data:





Included Services:





Supervised group play in climate-controlled areas



Indoor and outdoor play zones



Rest periods in quiet spaces



Fresh water and treats available



Photo updates sent to pet parents



Live webcam access during operating hours



Daily Schedule:





7:00-9:00 AM: Arrival and morning check-in



9:00-10:30 AM: High-energy group play session



10:30-11:00 AM: Rest and water break



11:00 AM-12:30 PM: Outdoor play time (weather permitting)



12:30-1:30 PM: Lunch break and quiet time



1:30-3:00 PM: Afternoon play session



3:00-3:30 PM: Rest period and snacks



3:30-5:00 PM: Final play session



5:00-7:00 PM: Wind down and pickup time



Requirements:





Current vaccination records (rabies, DHPP, bordetella)



Completed temperament evaluation



Flea and tick prevention



Must be at least 4 months old



Spayed/neutered if over 7 months



Pricing Options:





Single Day: $35



Half Day (4 hours): $25



5-Day Package: $160 ($32/day - Save $15)



10-Day Package: $300 ($30/day - Save $50)



20-Day Package: $560 ($28/day - Save $140)



Monthly Unlimited: $450 (Best for regular attendees)

Visual Requirements:





Hero image with h-[500px] and gradient overlay from bottom



Included services in icon cards with bg-blue-50 rounded-xl p-6



Daily schedule as vertical timeline with time markers on left



Requirements as checklist with green checkmark icons



Pricing cards in grid with most popular option highlighted in border-2 border-blue-500



Package cards showing "Save $X" badge in bg-green-500 text-white rounded-full px-3 py-1



Sticky "Book Daycare" button in header that appears on scroll

Boarding Page

Requirements:





Display hero image of cozy sleeping area with comfortable amenities



List all overnight services included in boarding



Show accommodation options with photos of different suite types



Present add-on services with pricing



Display pricing structure for different stay lengths



Highlight multi-night discounts



Provide booking CTA that launches boarding booking flow

Mock Data:





Included Services:





Private or semi-private sleeping quarters



All-day play sessions with daycare group



Multiple feeding times based on home routine



Evening potty breaks and bedtime tuck-in



Cozy bedding and blankets



Morning wake-up play session



Daily photo and video updates



Accommodation Options:





Standard Suite: Private indoor space (4' x 6') with raised cot and blanket - $55/night



Deluxe Suite: Larger space (6' x 8') with premium bedding and window view - $75/night



VIP Cabin: Spacious suite (8' x 10') with furniture, TV playing dog content, private outdoor patio access - $95/night



Add-On Services:





Extended Play Time: Additional 30-minute one-on-one play session - $15



Special Attention Package: Extra cuddle time and individual attention - $20



Bedtime Snack: Favorite treats before sleep - $5



Pre-Checkout Bath: Fresh and clean for pickup - $25



Medication Administration: Per dose - $5



Pricing Structure:





Per Night Rate: Based on suite selection



3-Night Stay: 10% discount



5-Night Stay: 15% discount



7+ Night Stay: 20% discount



Holiday Boarding: Additional $15/night (major holidays)

Visual Requirements:





Hero with cozy, warm lighting and h-[500px] height



Included services displayed in two-column grid with paw print icons



Suite options as comparison cards with photo galleries (3-4 images each)



Suite cards with bg-white rounded-2xl shadow-xl overflow-hidden



Add-ons as checkbox items with pricing aligned right



Pricing table showing discount tiers with percentage badges



"Book Boarding" CTA button in bg-orange-500 hover:bg-orange-600 with large size

Grooming Page

Requirements:





Display services menu with detailed descriptions



Show pricing based on dog size categories



Present before/after photo gallery of grooming results



List grooming process and what's included in each service



Provide booking CTA for scheduling appointments

Mock Data:





Services Menu:





Bath & Brush: Shampoo, conditioning, brush out, nail trim, ear cleaning





Small (under 25 lbs): $45



Medium (25-60 lbs): $60



Large (60-90 lbs): $75



X-Large (90+ lbs): $90



Full Groom: Bath, brush, haircut/style, nail trim, ear cleaning, teeth brushing





Small: $65



Medium: $85



Large: $110



X-Large: $135



Nail Trim Only: Quick and gentle nail trimming





All sizes: $15



Teeth Brushing: Dental hygiene with dog-safe toothpaste





All sizes: $12



De-Shedding Treatment: Special treatment to reduce shedding





Small: $30



Medium: $45



Large: $60



X-Large: $75



Spa Package: Bath, full groom, teeth brushing, paw balm, cologne spritz





Small: $90



Medium: $120



Large: $155



X-Large: $185



Before/After Gallery Examples:





Scruffy Shih Tzu to Fluffy Fresh



Matted Poodle to Perfect Pom-Pom



Muddy Golden to Golden Glow



Shaggy Sheepdog to Show-Ready



Overgrown Yorkie to Stylish Pup

Visual Requirements:





Services presented in expandable accordion cards with border-l-4 border-blue-500



Pricing table with size categories as column headers



Size indicator badges in different colors (blue for small, green for medium, orange for large, red for x-large)



Before/after gallery in two-column comparison layout with slider control



Gallery images with rounded-lg overflow-hidden and hover zoom effect



"Book Grooming" button prominently placed after services section

Training Page

Requirements:





List training programs offered with detailed descriptions



Explain training philosophy and methodology



Display trainer bios with photos and certifications



Show pricing for individual sessions and packages



Provide booking CTA for scheduling consultations

Mock Data:





Training Programs:





Puppy Basics (8-16 weeks): Socialization, potty training, basic commands (sit, stay, come), bite inhibition





6-week program, once weekly: $450



Basic Obedience (16+ weeks): Sit, down, stay, come, loose leash walking, door manners





6-week program, once weekly: $475



Advanced Obedience: Off-leash reliability, distance commands, distractions training





8-week program, once weekly: $650



Behavioral Correction: Addressing specific issues like jumping, barking, anxiety, aggression





Custom program, consultation required: Starting at $125/session



Private Sessions: One-on-one training for specific goals





Single session: $95



5-session package: $425 (Save $50)



Training Philosophy: "We use positive reinforcement methods that build trust and strengthen the bond between you and your pet. No punishment, no harsh corrections—just rewards, patience, and proven techniques that create lasting behavioral changes."



Trainer Bios:





Jessica Rodriguez, Lead Trainer: CPDT-KA Certified, 12 years experience, specializes in puppy development and fearful dogs



Mike Thompson, Senior Trainer: CBCC-KA Certified, 15 years experience, specializes in behavioral modification and aggression cases



Amanda Chen, Trainer: CPDT-KA Certified, 8 years experience, specializes in obedience and therapy dog preparation

Visual Requirements:





Program cards in grid layout with bg-gradient-to-br from-blue-50 to-indigo-50



Philosophy section with large quote styling and text-2xl font



Trainer profiles with circular headshots w-32 h-32 rounded-full and certification badges



Pricing displayed in highlighted boxes with package savings emphasized



"Book Consultation" CTA button with bg-indigo-600 color scheme

Pricing & Packages Page

Requirements:





Display side-by-side comparison of daycare and boarding rates



Show all package options with savings calculations



Present membership options for unlimited access



Highlight multi-pet discounts



Provide clear breakdown of what's included in each option



Include CTA for getting started

Mock Data:





Daycare vs Boarding Comparison:





Daycare Single Day: $35 | Boarding Single Night: $55



Daycare Half Day: $25 | Boarding Extended Day: $45



Daycare 5-Pack: $160 | Boarding 3 Nights: $150 (10% off)



Daycare 10-Pack: $300 | Boarding 5 Nights: $235 (15% off)



Daycare 20-Pack: $560 | Boarding 7 Nights: $310 (20% off)



Daycare Monthly Unlimited: $450 | Boarding Monthly Member: Special rates



Package Bundles:





The Regular Camper: 10 daycare days + 2 free grooming nail trims - $320 (Save $30)



The Social Butterfly: 20 daycare days + 1 full groom - $625 (Save $75)



The Weekend Warrior: 5 boarding nights + 5 daycare days - $450 (Save $65)



Membership Options:





Unlimited Daycare: $450/month (Best for 4+ days per week)



Unlimited with Perks: $525/month (Includes monthly full groom + priority boarding)



Multi-Pet Discounts:





2 pets: 10% off second pet



3 pets: 15% off second and third pet



4+ pets: Contact for custom pricing

Visual Requirements:





Comparison table with alternating row colors bg-gray-50 and bg-white



Package cards with prominent "Save" badges in bg-green-500 text-white



Membership options with "Most Popular" ribbon on featured option



Multi-pet discount section with paw print icons indicating number of pets



Large "Get Started" button at bottom in bg-blue-600 text-white px-12 py-4 text-xl

Gallery Page

Requirements:





Display photo and video grid of facility and pets



Provide filter options by category



Enable lightbox/modal view for expanded images



Show captions with pet names and activity



Include infinite scroll or pagination for large galleries



Allow sharing of individual photos

Mock Data:





Gallery Categories:





All Photos (287 items)



Daycare Play (156 items)



Boarding Comfort (45 items)



Grooming Transformations (38 items)



Outdoor Adventures (48 items)



Sample Photo Captions:





"Buddy and Max racing in the play yard"



"Luna enjoying her rest time in the deluxe suite"



"Coco's amazing grooming transformation"



"Group play time with the morning crew"



"Charlie's first day making new friends"



"Daisy relaxing after her spa day"



"The gang cooling off in the splash pool"



"Rocky learning new tricks in training"

Visual Requirements:





Filter buttons in horizontal row with bg-gray-200 for inactive and bg-blue-500 text-white for active



Photo grid using grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4



Images with aspect-square object-cover rounded-lg and hover overlay effect



Hover overlay shows caption in absolute inset-0 bg-black/60 with white text



Lightbox modal with fixed inset-0 bg-black/90 z-50 and centered image



Navigation arrows and close button in modal



Share button displaying social media icons on click

Book Daycare Flow

Requirements:





Multi-step form with progress indicator



Date selection with calendar interface



Option for single date or recurring schedule



Pet information form with profile creation



Package selection with pricing comparison



Time preference selection for drop-off and pickup



Pricing summary that updates with selections



Contact information and payment details



Confirmation page with booking details and calendar add option

Mock Data:





Step Progress: Step 1 of 5: Select Dates → Step 2 of 5: Pet Info → Step 3 of 5: Choose Package → Step 4 of 5: Time Preferences → Step 5 of 5: Payment & Confirm



Calendar Dates: Selected dates highlighted in blue, unavailable dates grayed out, today outlined



Recurring Options: Every Monday, Every Tuesday-Friday, Weekdays Only, Custom Schedule



Pet Information Fields:





Pet Name: (text input)



Breed: (dropdown with common breeds)



Age: (number input)



Weight: (number with size category auto-display)



Gender: (radio buttons)



Vaccination Records: (file upload button showing accepted formats)



Special Notes: (textarea for dietary needs, behavior notes, medical info)



Package Selection Cards:





Single Day: $35 - "Perfect for trying us out"



5-Day Package: $160 - "Popular choice" badge



10-Day Package: $300 - "Best value" badge



20-Day Package: $560 - "Maximum savings"



Monthly Unlimited: $450 - "For regular campers"



Time Preferences:





Drop-off Window: 7:00-9:00 AM (default), Early Drop (6:30 AM, +$5)



Pick-up Window: 5:00-7:00 PM (default), Late Pickup (7:00-8:00 PM, +$5)



Pricing Summary:





Package Selected: 5-Day Package - $160.00



Early Drop-off (5 days): +$25.00



Subtotal: $185.00



Tax (8.5%): $15.73



Total: $200.73

Visual Requirements:





Progress bar at top showing bg-blue-500 h-2 rounded-full with percentage width



Step numbers in circles, completed steps with bg-blue-500 text-white, current in border-2 border-blue-500



Calendar in grid format with interactive date selection



Form fields with border border-gray-300 rounded-lg p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200



Package cards selectable with border-2 border-transparent changing to border-blue-500 when selected



File upload area with drag-and-drop styling and border-2 border-dashed border-gray-300



Pricing summary in sticky sidebar on desktop, above form on mobile



Navigation buttons: "Back" in bg-gray-200 text-gray-700, "Continue" in bg-blue-600 text-white



Confirmation page with checkmark icon, booking details card, and "Add to Calendar" button

Book Boarding Flow

Requirements:





Multi-step form with progress indicator



Check-in and check-out date selection



Pet information form with feeding instructions



Suite/cabin selection with photo carousel



Add-on services checklist



Special requests and instructions text area



Pricing summary with nightly breakdown



Contact information and payment details



Confirmation page with pre-arrival checklist

Mock Data:





Step Progress: Step 1 of 6: Select Dates → Step 2 of 6: Pet Info → Step 3 of 6: Choose Suite → Step 4 of 6: Add-Ons → Step 5 of 6: Special Requests → Step 6 of 6: Payment & Confirm



Date Selection:





Check-in Date: (calendar picker)



Check-out Date: (calendar picker)



Number of Nights: Auto-calculated display



Note: "Check-in after 12:00 PM, Check-out by 12:00 PM"



Pet Information: (Same fields as daycare plus:)





Feeding Schedule: Morning (time), Evening (time)



Food Type: (text input, or "Use facility food" checkbox)



Food Amount: (text input per meal)



Medication Details: (textarea if applicable)



Emergency Contact: (name and phone)



Suite Selection:





Standard Suite: $55/night - Basic comfort, private space



Deluxe Suite: $75/night - "Most Popular" - Extra space, window view



VIP Cabin: $95/night - Premium experience, outdoor access



(Each with 3-4 photos in carousel)



Add-Ons Checklist:





Extended Play Time: +$15/day



Special Attention Package: +$20/day



Bedtime Snack: +$5/day



Pre-Checkout Bath: +$25 (one-time)



Medication Administration: +$5/dose (specify number of doses per day)



Special Requests Examples:





Preferred room temperature



Favorite toys to bring



Bedtime routine preferences



Any fears or anxieties to be aware of



Preferred playmates (if known from previous visits)



Pricing Summary:





Deluxe Suite (4 nights): $300.00



Extended Play Time (4 days): +$60.00



Pre-Checkout Bath: +$25.00



Subtotal: $385.00



Multi-night Discount (15%): -$57.75



Tax (8.5%): $27.82



Total: $355.07

Visual Requirements:





Similar progress indicator as daycare flow



Calendar with check-in/out date range selection showing nights highlighted



Suite cards in grid with photo carousel showing 3-4 interior/feature shots



Suite comparison emphasis with "Most Popular" badge in bg-orange-500 text-white



Add-ons as checkbox list with pricing aligned right and visual checkboxes



Special requests textarea with character count showing text-sm text-gray-500 below



Pricing summary showing itemized breakdown with discount highlighted in text-green-600



Pre-arrival checklist on confirmation: vaccination records, food if bringing, favorite toy, pick-up time

About Us Page

Requirements:





Display company story and mission statement



Show team member profiles with photos and bios



Outline safety and supervision standards



Include facility tour video or photo slideshow



Present frequently asked questions section



Highlight certifications and awards

Mock Data:





Our Story: "Founded in 2015 by lifelong dog lovers Maria and Tom Wilson, Pawsome Days began as a small neighborhood daycare with just 15 dogs. Today, we serve over 200 furry friends daily across our 12,000 square-foot facility. Our mission is simple: provide a safe, fun, and enriching environment where every pet is treated like family."



Mission Statement: "To create the most positive, engaging experience for pets while giving pet parents complete peace of mind through transparent care, constant supervision, and genuine love for every animal in our care."



Team Members:





Maria Wilson, Founder & CEO: Certified Professional Dog Trainer, 20+ years experience



Tom Wilson, Co-Founder & Operations Director: Veterinary Technician background, 18+ years experience



Rachel Martinez, Daycare Manager: Certified Camp Counselor, Fear Free Certified, 10 years



Jake Stevens, Boarding Supervisor: Certified in Canine First Aid & CPR, 8 years



Emily Park, Grooming Lead: Certified Master Groomer, 12 years



Plus 15 trained Camp Counselors on staff



Safety Standards:





Staff-to-pet ratios: 1:15 maximum



24/7 facility monitoring with recorded cameras



Certified in Pet First Aid & CPR



Climate-controlled play areas year-round



Separate play groups by size and temperament



Daily health checks and observation



Secure facility with double-door entry/exit system



Professional cleaning and sanitization protocols



Facility Features:





12,000 sq ft total space



6,000 sq ft indoor play area



6,000 sq ft outdoor play yards



Separate small dog play areas



Private boarding suites (50 available)



Climate control throughout



Rubber flooring for joint safety



Multiple rest areas and quiet zones



FAQ Topics:





What vaccinations are required?



How do you handle dogs that don't get along?



Can I see my pet during the day?



What if my dog doesn't like daycare?



Do you provide food for boarding?



What are your emergency procedures?



Can I tour the facility before booking?



What's your cancellation policy?

Visual Requirements:





Hero section with founders photo and text-xl leading-relaxed for story



Mission statement in large text with text-3xl font-light text-center styling



Team grid with grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8



Team photos in circles with name and title below



Safety standards as icon cards with checkmarks



Facility tour video player or slideshow with navigation dots



FAQ accordion with expandable sections, border-b separators



Certifications displayed as badge images in a row

Contact Page

Requirements:





Display facility location with embedded map



Show operating hours for different services



Provide multiple contact methods (phone, email, form)



Include contact form with validation



Offer "Schedule a Tour" call-to-action



Display directions and parking information

Mock Data:





Location: 4521 Wagging Trail Boulevard, Sunnyville, CA 94086



Operating Hours:





Daycare Drop-off: Monday-Friday 7:00 AM - 9:00 AM, Saturday 8:00 AM - 10:00 AM



Daycare Pick-up: Monday-Friday 5:00 PM - 7:00 PM, Saturday 4:00 PM - 6:00 PM



Boarding Check-in: Daily 12:00 PM - 6:00 PM



Boarding Check-out: Daily 8:00 AM - 12:00 PM



Grooming: Monday-Saturday 9:00 AM - 5:00 PM (by appointment)



Office: Monday-Friday 9:00 AM - 6:00 PM, Saturday 9:00 AM - 4:00 PM



Closed: Sundays and major holidays



Contact Information:





Phone: (555) 123-PAWS



Email: hello@pawsomedays.com



Emergency Line: (555) 123-HELP (boarding guests only)



Contact Form Fields:





Name (required)



Email (required)



Phone (optional)



Subject: (dropdown - General Inquiry, Schedule Tour, Pricing Question, Existing Reservation)



Message (required, min 10 characters)



Parking & Directions:





Free parking lot with 40+ spaces



Handicap accessible entrance



Located off Highway 101, exit Wagging Trail Blvd



Next to Sunnyville Dog Park

Visual Requirements:





Split layout: map on left (w-full md:w-1/2), contact info on right



Map embedded with h-[400px] rounded-xl overflow-hidden



Operating hours in organized table with bg-gray-50 alternating rows



Contact methods with large icons (w-12 h-12) in colored circles



Contact form with full-width fields, space-y-4 between fields



Form validation showing error messages in text-red-500 text-sm



"Schedule a Tour" button prominently displayed in bg-green-500 hover:bg-green-600



Directions section with map icon and bulleted list

Auth Pages (Sign Up / Login)

Requirements:





Provide email/password authentication



Enable social authentication (Google)



Include form validation with error messages



Show password strength indicator on sign up



Link between sign up and login pages



Implement forgot password flow



Remember me checkbox for login



Display terms and privacy policy agreement on sign up

Mock Data:





Sign Up Form Fields:





Full Name (required)



Email Address (required, validated)



Phone Number (required for account recovery)



Password (required, min 8 characters, must include number and special character)



Confirm Password (required, must match)



I agree to the Terms of Service and Privacy Policy



Send me promotional emails and updates



Login Form Fields:





Email Address



Password



Remember me



"Forgot password?" link



Social Auth Button:





"Continue with Google" (with Google icon)



Error Messages:





"Email already exists. Please login instead."



"Invalid email format"



"Password must be at least 8 characters"



"Passwords do not match"



"Invalid email or password"

Visual Requirements:





Centered card layout with max-w-md mx-auto on neutral background



Pet-themed illustration or photo on left side for desktop split view



Form fields with icons inside (email icon, lock icon)



Password strength indicator showing weak/medium/strong with color coding



Social auth button with brand colors and proper spacing



"Or continue with email" divider line



Form buttons in w-full bg-blue-600 text-white py-3 rounded-lg



Switch between sign up/login with text link "Already have an account? Login"



Forgot password as modal or separate page with email submission

Pet Parent Dashboard

Requirements:





Display upcoming reservations with details



Show pet profiles with photos and records



Track package balances with visual indicators



List past visits with rating option



Provide quick booking shortcuts



Show account information and settings link



Display notification preferences

Mock Data:





Upcoming Reservations:





Daycare - Tomorrow (May 15) - Max (Golden Retriever) - 7:00 AM drop-off



Boarding - May 20-23 (3 nights) - Luna (Border Collie) - Deluxe Suite



Grooming - May 18, 2:00 PM - Buddy (Labrador) - Full Groom



My Pets:





Max - Golden Retriever, 4 years, 68 lbs, Male





Vaccinations: Current (expires Dec 2024)



Last Visit: May 8, 2024 (Daycare)



Total Visits: 47



Luna - Border Collie, 2 years, 45 lbs, Female





Vaccinations: Current (expires Mar 2025)



Last Visit: May 10, 2024 (Daycare)



Total Visits: 32



Package Balances:





Daycare 10-Pack (Max): 6 days remaining



Daycare 5-Pack (Luna): 2 days remaining



Grooming Credit: $0



Past Visits:





May 8 - Daycare (Max) - "Max had a blast! He played with his best friend Charlie all day." - Rate this visit



May 10 - Daycare (Luna) - "Luna enjoyed the agility course today. So much energy!" - ⭐⭐⭐⭐⭐ Rated



May 5 - Boarding (Max) - 2 nights - "Great stay! Max seemed relaxed and happy at pickup." - ⭐⭐⭐⭐⭐ Rated



Quick Actions:





Book Daycare



Book Boarding



Schedule Grooming



Buy Package



Upload Vaccination Records

Visual Requirements:





Dashboard layout with sidebar navigation (My Pets, Reservations, Packages, Past Visits, Settings)



Upcoming reservations in timeline format with date on left, details on right



Pet profile cards with large circular photo, key info, and "Edit Profile" button



Vaccination status badge: green bg-green-100 text-green-800 for current, red for expiring



Package balance showing visual progress bar and days remaining



Past visits as list with expandable details and star rating component



Quick action buttons in grid with icons



Mobile: collapsible hamburger menu for sidebar navigation



Empty states: "No upcoming reservations" with "Book Now" button

3. Design System

Color Palette

Primary Colors:





Brand Orange: #F97316 (text-orange-500, bg-orange-500)



Deep Orange: #C2410C (text-orange-700, bg-orange-700)



Light Orange: #FED7AA (text-orange-200, bg-orange-200)

Secondary Colors:





Sky Blue: #0EA5E9 (text-sky-500, bg-sky-500)



Deep Blue: #0369A1 (text-sky-700, bg-sky-700)



Light Blue: #BAE6FD (text-sky-200, bg-sky-200)

Accent Colors:





Lime Green: #84CC16 (text-lime-500, bg-lime-500)



Purple: #A855F7 (text-purple-500, bg-purple-500)



Pink: #EC4899 (text-pink-500, bg-pink-500)

Neutral Colors:





White: #FFFFFF (bg-white)



Light Gray: #F9FAFB (bg-gray-50)



Medium Gray: #E5E7EB (bg-gray-200)



Dark Gray: #6B7280 (text-gray-500)



Charcoal: #1F2937 (text-gray-800)



Black: #111827 (text-gray-900)

Status Colors:





Success: #10B981 (text-green-500, bg-green-500)



Warning: #F59E0B (text-amber-500, bg-amber-500)



Error: #EF4444 (text-red-500, bg-red-500)



Info: #06B6D4 (text-cyan-500, bg-cyan-500)

Typography

Font Families:





Primary: Poppins (font-sans)



Secondary: Inter (font-sans)



Monospace: Mono (font-mono)

Font Sizes:





Extra Small: 0.75rem (text-xs)



Small: 0.875rem (text-sm)



Base: 1rem (text-base)



Large: 1.125rem (text-lg)



Extra Large: 1.25rem (text-xl)



2XL: 1.5rem (text-2xl)



3XL: 1.875rem (text-3xl)



4XL: 2.25rem (text-4xl)



5XL: 3rem (text-5xl)



6XL: 3.75rem (text-6xl)

Font Weights:





Light: 300 (font-light)



Regular: 400 (font-normal)



Medium: 500 (font-medium)



Semibold: 600 (font-semibold)



Bold: 700 (font-bold)



Extrabold: 800 (font-extrabold)

Line Heights:





Tight: 1.25 (leading-tight)



Snug: 1.375 (leading-snug)



Normal: 1.5 (leading-normal)



Relaxed: 1.625 (leading-relaxed)



Loose: 2 (leading-loose)

Letter Spacing:





Tighter: -0.05em (tracking-tighter)



Tight: -0.025em (tracking-tight)



Normal: 0 (tracking-normal)



Wide: 0.025em (tracking-wide)



Wider: 0.05em (tracking-wider)



Widest: 0.1em (tracking-widest)

Core Components

Navigation Header:





Fixed header with sticky top-0 z-50 bg-white shadow-md



Logo on left (h-12 w-auto)



Main navigation centered with dropdown menus on hover



CTA buttons on right ("Book Now" in orange, "Login" as text button)



Mobile: hamburger menu that slides in from left



Dropdown menus with absolute top-full bg-white shadow-xl rounded-b-xl

Hero Sections:





Full-width hero with min-h-[500px] relative for parallax images



Overlay gradient bg-gradient-to-r from-black/60 to-transparent



Centered content with absolute inset-0 flex items-center justify-center



Large headline in text-5xl md:text-6xl font-bold text-white



Subheading in text-xl md:text-2xl text-white/90



CTA buttons with spacing space-x-4

Cards:





Service Card: bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300



Icon at top (w-16 h-16 mx-auto mb-4)



Heading in text-2xl font-semibold mb-3



Description in text-gray-600 mb-6



CTA button at bottom



Hover: transform hover:-translate-y-2 transition-transform duration-300



Profile Card: bg-white rounded-xl overflow-hidden shadow-md



Image at top with aspect-square object-cover



Content section with p-6



Name in text-xl font-semibold



Details in text-sm text-gray-500



Pricing Card: border-2 rounded-2xl p-8 relative



Popular badge: absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full



Price in text-4xl font-bold mb-2



Feature list with checkmark icons



CTA button at bottom

Buttons:





Primary: bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200



Secondary: bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200



Outline: border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200



Text: text-orange-500 hover:text-orange-600 font-semibold underline-offset-4 hover:underline



Large: Add px-8 py-4 text-lg



Small: Add px-4 py-2 text-sm

Forms:





Input Fields: border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200



Labels: block text-sm font-medium text-gray-700 mb-2



Select Dropdowns: Same as input with appearance-none and custom arrow



Textareas: Same as input with min-h-[120px] resize-y



Checkboxes: w-5 h-5 text-orange-500 rounded focus:ring-orange-500



Radio Buttons: w-5 h-5 text-orange-500 focus:ring-orange-500



Error Messages: text-red-500 text-sm mt-1



Success Messages: text-green-500 text-sm mt-1



Helper Text: text-gray-500 text-sm mt-1

Modals:





Overlay: fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4



Content: bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl



Header: flex items-center justify-between p-6 border-b



Body: p-6



Footer: flex justify-end space-x-3 p-6 border-t



Close button: absolute top-4 right-4 text-gray-400 hover:text-gray-600

Badges:





Status Badge: inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold



Success: bg-green-100 text-green-800



Warning: bg-amber-100 text-amber-800



Error: bg-red-100 text-red-800



Info: bg-blue-100 text-blue-800



Neutral: bg-gray-100 text-gray-800

Progress Indicators:





Progress Bar: w-full h-2 bg-gray-200 rounded-full overflow-hidden



Fill: h-full bg-orange-500 rounded-full transition-all duration-300



Multi-step: Circles connected by lines, completed in orange, current outlined, future grayed

Accordions:





Container: border rounded-xl overflow-hidden divide-y



Item: bg-white hover:bg-gray-50 transition-colors



Header: flex items-center justify-between p-6 cursor-pointer



Content: px-6 pb-6 text-gray-600 with expand/collapse animation



Icon: Chevron that rotates when expanded

Tables:





Container: overflow-x-auto rounded-xl border border-gray-200



Table: min-w-full divide-y divide-gray-200



Header: bg-gray-50



Header Cell: px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider



Body Row: bg-white hover:bg-gray-50 transition-colors



Body Cell: px-6 py-4 whitespace-nowrap text-sm text-gray-900



Striped Rows: Alternate with even:bg-gray-50

Responsive Design Principles

Breakpoints:





Mobile: <640px (default)



Tablet: 640px-1023px (sm: and md:)



Desktop: 1024px+ (lg: and xl:)



Wide: 1280px+ (xl: and 2xl:)

Layout Adaptations:





Desktop: Multi-column layouts with grid-cols-3 lg:grid-cols-4



Tablet: Reduce to two columns with md:grid-cols-2



Mobile: Single column stacking with full-width cards

Navigation Behavior:





Desktop: Horizontal navigation bar with dropdown menus



Mobile: Hamburger menu sliding from left with transform -translate-x-full to translate-x-0



Sticky header collapses to smaller height on scroll

Component Transformations:





Cards: Full width on mobile, grid on tablet/desktop



Forms: Single column on mobile, can be two-column on desktop for shorter fields



Tables: Horizontal scroll on mobile, or transform to card view



Modals: Full screen on mobile (h-screen), centered card on desktop



Hero sections: Reduce height and font sizes on mobile



Sidebars: Overlay on mobile, static column on desktop

Typography Scaling:





Headlines: text-3xl md:text-4xl lg:text-5xl xl:text-6xl



Body text maintains text-base across devices



Increase line height on mobile for better readability: leading-relaxed md:leading-normal

Spacing Adjustments:





Container padding: px-4 md:px-8 lg:px-12



Section spacing: py-12 md:py-16 lg:py-24



Component gaps: gap-4 md:gap-6 lg:gap-8

Interactive Elements:





Hover states only on non-touch devices using hover: prefix



Larger touch targets on mobile (minimum 44x44px)



Swipe gestures for galleries and carousels on mobile



Click/tap feedback with active states

Image Optimization:





Lazy loading for gallery images



Responsive images with different sizes for different breakpoints



Use object-cover for consistent aspect ratios



Placeholder loading states with skeleton screens

Accessibility Considerations

Color Contrast:





All text meets WCAG AA standards (4.5:1 for body, 3:1 for large text)



Use sufficient contrast for buttons and interactive elements



Error messages in red with additional iconography

Keyboard Navigation:





All interactive elements accessible via Tab key



Visible focus indicators with focus:ring classes



Skip navigation link at top of page



Modal traps focus until closed

Screen Readers:





Semantic HTML with proper heading hierarchy



Alt text for all images



ARIA labels for icon-only buttons



ARIA live regions for dynamic content updates

Form Accessibility:





Labels associated with inputs using for attribute



Error messages linked to fields with aria-describedby



Required fields indicated with aria-required



Form validation announces errors

Animation & Interactions

Page Transitions:





Fade in content on route change with transition-opacity duration-300



Smooth scroll behavior with scroll-behavior: smooth

Micro-interactions:





Button press: transform active:scale-95 transition-transform



Card hover: hover:shadow-xl hover:-translate-y-1 transition-all duration-300



Loading states: Spinning loader with animate-spin



Success animations: Checkmark with scale animation

Image Galleries:





Hover overlay with caption fade-in



Lightbox opens with scale and fade animation



Image navigation with slide transitions

Form Feedback:





Input focus: Border color change and ring appearance



Validation: Shake animation for errors



Success: Green checkmark appears with fade-in



Loading: Disable button and show spinner

Scroll Effects:





Header shrinks on scroll down



Parallax hero backgrounds with slower scroll rate



Fade-in animations for sections as they enter viewport



Sticky elements activate at specific scroll points

Tech Stack Implementation Notes

Vite Configuration:





Fast development server with hot module replacement



Optimized production builds with code splitting



Asset optimization for images and fonts



Environment variables for Supabase configuration

React Router Setup:





Client-side routing for all pages



Protected routes for authenticated pages (dashboard)



Nested routes for booking flows



Scroll restoration on navigation



404 page for invalid routes

Supabase Integration:





Auth for user authentication (email/password and OAuth)



Database tables: users, pets, reservations, packages, reviews



Storage bucket for pet photos and vaccination records



Real-time subscriptions for live updates (optional)



Row Level Security policies for data access

State Management:





React Context for auth state



Local component state with useState for forms



useReducer for complex form state in booking flows



Session storage for booking flow progress

Component Structure:





Reusable components in /components directory



Page components in /pages directory



Layout components for consistent header/footer



Form components for shared input fields



Utility components for badges, buttons, cards

Styling Approach:





Tailwind utility classes inline in JSX



Custom components with consistent class patterns



Responsive modifiers for all layouts



Dark mode support optional (not specified but possible)



Component-specific styles avoided (use Tailwind only)

Performance Optimizations:





Lazy loading for routes with React.lazy



Image optimization with proper sizing and formats



Memoization of expensive computations



Debouncing for search and filter inputs



Virtual scrolling for large lists (if needed)

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7decc45a-767b-482b-95f6-6b8cb91af2ab).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
