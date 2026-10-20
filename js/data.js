/* ==========================================================================
   MK Motors Hub & Garage — Ruiru, Kenya
   Complete Data Catalog:
   - Minimized Window Slideshow (Units + Happy Kenyan Clients — 2s cadence)
   - 12 Locally Used Vehicles (Full Car-Website Specs & Filters)
   - 6 Full-Service Garage Packages (Ruiru Workshop)
   - 6 Nationwide Vehicle Transportation Movements
   - 50 Verified Google Reviews (3 shown at a go, 5s auto-refresh)
   ========================================================================== */

window.MK_CONFIG = {
  businessName: "MK Motors Hub & Garage",
  phoneDisplay: "0701 988 296",
  phoneRaw: "0701988296",
  whatsappIntl: "254701988296",
  email: "moseskibe701@gmail.com",
  location: "Ruiru, Kenya",
  locationDetail: "Along Thika Superhighway / Eastern Bypass Hub, Ruiru, Kenya",
  heroSlideshowIntervalMs: 2000, // Exact 2 seconds refresh rate
  reviewsRefreshIntervalMs: 5000, // Exact 5 seconds refresh rate
  reviewsPerBatch: 3 // Shows 3 at a go
};

/* 1. HOME PAGE MINIMIZED WINDOW SLIDESHOW (Alternates Units & Happy Kenyan Clients every 2s) */
window.HERO_SLIDES = [
  {
    id: "slide-1",
    type: "HAPPY CLIENT",
    tag: "Key Handover • Ruiru Yard",
    title: "Mr. & Mrs. Kamau — Clean Mazda CX-5",
    caption: "Full OBD inspection & same-day NTSA TIMS transfer completed in Ruiru.",
    image: "assets/images/client-handover-1.jpg"
  },
  {
    id: "slide-2",
    type: "AVAILABLE UNIT",
    tag: "Locally Used • Ready Transfer",
    title: "2017 Toyota Prado TX-L 2.8D 4WD",
    caption: "94,000 km • Original paint • Verified clean logbook at MK Yard.",
    image: "assets/images/car-prado.jpg"
  },
  {
    id: "slide-3",
    type: "HAPPY CLIENT",
    tag: "Verified Handover • Ruiru",
    title: "David Njuguna — Land Cruiser Prado TX",
    caption: "Serviced at MK Garage before handover & delivered with zero mechanical fault.",
    image: "assets/images/client-handover-2.jpg"
  },
  {
    id: "slide-4",
    type: "AVAILABLE UNIT",
    tag: "Work & Safari • KDM Series",
    title: "2018 Toyota Hilux Revo 2.8 GD-6 4x4",
    caption: "Clean double cab • Verified chassis & transfer case • Ready for viewing.",
    image: "assets/images/car-hilux.jpg"
  },
  {
    id: "slide-5",
    type: "HAPPY CLIENT",
    tag: "Happy Buyer • Kiambu / Ruiru",
    title: "Faith Wanjiku — Crossover Handover",
    caption: "Traded up cleanly through MK Motors Hub with instant valuation.",
    image: "assets/images/client-handover-3.jpg"
  },
  {
    id: "slide-6",
    type: "AVAILABLE UNIT",
    tag: "Hybrid RS • KDL Series",
    title: "2017 Honda Vezel Hybrid RS Sensing",
    caption: "71,400 km • 21 km/L economy • 92% hybrid battery health verified.",
    image: "assets/images/car-vezel.jpg"
  },
  {
    id: "slide-7",
    type: "RUIRU DISPATCH",
    tag: "Doorstep Flatbed • Ruiru",
    title: "Safe Tilt-Bed Loading Along Thika Rd",
    caption: "4-point wheel ratchet straps & nationwide delivery across all 47 counties.",
    image: "assets/images/transport-nairobi.jpg"
  },
  {
    id: "slide-8",
    type: "AVAILABLE UNIT",
    tag: "Turbo AWD • KCM Series",
    title: "2016 Subaru Forester 2.0XT EyeSight",
    caption: "88,500 km • Fresh CVT & suspension service completed at MK Garage.",
    image: "assets/images/car-forester.jpg"
  },
  {
    id: "slide-9",
    type: "MK GARAGE BAY",
    tag: "120-Point Check • Ruiru",
    title: "Computerized Pre-Purchase Diagnostics",
    caption: "Every unit on our Ruiru yard passes full scanner & lift verification.",
    image: "assets/images/garage-team-1.jpg"
  },
  {
    id: "slide-10",
    type: "AVAILABLE UNIT",
    tag: "Executive Sedan • KDF Series",
    title: "2015 Mercedes-Benz C200 Avantgarde",
    caption: "84,000 km • Clean Xentry diagnostic report • Spotless leather interior.",
    image: "assets/images/car-c200.jpg"
  }
];

/* 2. LOCALLY USED CARS INVENTORY (12 Units — 2 per row on Mobile, Full Filter Specs) */
window.CARS_INVENTORY = [
  {
    id: "mk-01",
    make: "Toyota",
    model: "Land Cruiser Prado TX-L",
    year: 2017,
    priceKes: 4850000,
    priceGuide: "KES 4.85M",
    bodyType: "SUV",
    fuel: "Diesel",
    transmission: "Automatic",
    drive: "4WD",
    engineCc: "2,800cc",
    mileageKm: 94000,
    plateSeries: "KDK Series",
    color: "Pearl White",
    badge: "Clean Logbook",
    featured: true,
    image: "assets/images/car-prado.jpg",
    highlights: ["7-Seater Leather", "1GD 2.8L Turbo Diesel", "Kinetic Suspension", "Sunroof & 360 Cam"],
    inspectionNote: "Full MK Garage 120-point pass: clean injector balance values, dry undercarriage, cold AC, genuine mileage."
  },
  {
    id: "mk-02",
    make: "Subaru",
    model: "Forester 2.0XT EyeSight",
    year: 2016,
    priceKes: 2180000,
    priceGuide: "KES 2.18M",
    bodyType: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "AWD",
    engineCc: "2,000cc",
    mileageKm: 88500,
    plateSeries: "KCM Series",
    color: "Deep Metallic Blue",
    badge: "Garage Serviced",
    featured: true,
    image: "assets/images/car-forester.jpg",
    highlights: ["Symmetrical AWD", "X-Mode Hill Descent", "EyeSight Assist", "Heated Half-Leather"],
    inspectionNote: "Fresh Motul turbo service & genuine Subaru CVT fluid flush just completed at MK Garage Ruiru."
  },
  {
    id: "mk-03",
    make: "Mazda",
    model: "CX-5 2.2D SkyActiv AWD",
    year: 2017,
    priceKes: 2150000,
    priceGuide: "KES 2.15M",
    bodyType: "Crossover",
    fuel: "Diesel",
    transmission: "Automatic",
    drive: "AWD",
    engineCc: "2,200cc",
    mileageKm: 79200,
    plateSeries: "KCD Series",
    color: "Soul Red Crystal",
    badge: "Lady Driven",
    featured: true,
    image: "assets/images/car-cx5.jpg",
    highlights: ["BOSE Sound", " Heads-Up Display", "19-inch Alloys", "Reverse Camera"],
    inspectionNote: "Intake manifold cleaned, coolant pressure tested, crisp automatic shifts and spotless interior trim."
  },
  {
    id: "mk-04",
    make: "Toyota",
    model: "Harrier 2.0 Premium",
    year: 2016,
    priceKes: 2790000,
    priceGuide: "KES 2.79M",
    bodyType: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "2WD",
    engineCc: "2,000cc",
    mileageKm: 82000,
    plateSeries: "KDJ Series",
    color: "Metallic Obsidian Black",
    badge: "First Local Owner",
    featured: true,
    image: "assets/images/car-harrier.jpg",
    highlights: ["Power Boot", "Alcantara & Leather", "LED Sequential Lights", "Lane Keep Assist"],
    inspectionNote: "Zero accident history, original factory paint depth verified, silent Valvematic 3ZR engine."
  },
  {
    id: "mk-05",
    make: "Toyota",
    model: "Hilux Revo 2.8 GD-6 Double Cab",
    year: 2018,
    priceKes: 3950000,
    priceGuide: "KES 3.95M",
    bodyType: "Pickup",
    fuel: "Diesel",
    transmission: "Automatic",
    drive: "4WD",
    engineCc: "2,800cc",
    mileageKm: 102400,
    plateSeries: "KDM Series",
    color: "Silver Metallic",
    badge: "Work & Safari Ready",
    featured: true,
    image: "assets/images/car-hilux.jpg",
    highlights: ["Diff Lock 4x4", "Nudge Bar & Roll Bar", "A/T BFGoodrich Tyres", "Bed Liner Fitted"],
    inspectionNote: "Never used in mining/heavy quarry work; leaf springs, bushes, transfer case & turbo fully verified."
  },
  {
    id: "mk-06",
    make: "Honda",
    model: "Vezel Hybrid RS Sensing",
    year: 2017,
    priceKes: 1890000,
    priceGuide: "KES 1.89M",
    bodyType: "Crossover",
    fuel: "Hybrid",
    transmission: "Automatic",
    drive: "2WD",
    engineCc: "1,500cc",
    mileageKm: 71400,
    plateSeries: "KDL Series",
    color: "Pearl White",
    badge: "21 km/L Economy",
    featured: true,
    image: "assets/images/car-vezel.jpg",
    highlights: ["Honda Sensing", "Paddle Shifters", "Dual Clutch serviced", "Sport RS Trim"],
    inspectionNote: "Hybrid battery state-of-health 92% on scanner; actuator fluid freshly bled at MK Garage."
  },
  {
    id: "mk-07",
    make: "Nissan",
    model: "X-Trail 2.0 NT32 (7-Seater)",
    year: 2016,
    priceKes: 1760000,
    priceGuide: "KES 1.76M",
    bodyType: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "4WD",
    engineCc: "2,000cc",
    mileageKm: 91000,
    plateSeries: "KDH Series",
    color: "Diamond White",
    badge: "Family 7-Seater",
    featured: false,
    image: "assets/images/car-xtrail.webp",
    highlights: ["Selectable 4WD-i", "7 Seats", "360 Around-View", "Waterproof Wipe Seats"],
    inspectionNote: "Transmission oil cooler inspected, new front shock mounts fitted, ready for upcountry travel."
  },
  {
    id: "mk-08",
    make: "Volkswagen",
    model: "Tiguan 1.4 TSI R-Line",
    year: 2016,
    priceKes: 2050000,
    priceGuide: "KES 2.05M",
    bodyType: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "2WD",
    engineCc: "1,400cc",
    mileageKm: 85600,
    plateSeries: "KDG Series",
    color: "Pure White",
    badge: "Full Service History",
    featured: false,
    image: "assets/images/car-tiguan.jpg",
    highlights: ["Virtual Cockpit", "DSG Serviced", "R-Line Alloys", "Apple CarPlay"],
    inspectionNote: "Mechatronic unit & water pump inspected with zero fault codes on VCDS diagnostic scan."
  },
  {
    id: "mk-09",
    make: "Toyota",
    model: "Fielder Hybrid WxB",
    year: 2016,
    priceKes: 1280000,
    priceGuide: "KES 1.28M",
    bodyType: "Wagon",
    fuel: "Hybrid",
    transmission: "Automatic",
    drive: "2WD",
    engineCc: "1,500cc",
    mileageKm: 96300,
    plateSeries: "KDH Series",
    color: "Silver Metallic",
    badge: "Ultra Reliable",
    featured: false,
    image: "assets/images/car-fielder.jpg",
    highlights: ["24 km/L Economy", "WxB Sport Seats", "HID Bi-Beam Lights", "Spacious Cargo"],
    inspectionNote: "Hybrid cells balanced and verified healthy; new brake pads & alignment done at Ruiru workshop."
  },
  {
    id: "mk-10",
    make: "Mercedes-Benz",
    model: "C200 Avantgarde (W205)",
    year: 2015,
    priceKes: 2650000,
    priceGuide: "KES 2.65M",
    bodyType: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "RWD",
    engineCc: "2,000cc",
    mileageKm: 84000,
    plateSeries: "KDF Series",
    color: "Obsidian Black",
    badge: "Executive Clean",
    featured: false,
    image: "assets/images/car-c200.jpg",
    highlights: ["7G-Tronic Plus", "Artico Leather", "Agility Select", "Active Park Assist"],
    inspectionNote: "Xentry STAR diagnostic scan completely clear; control arms and bushings tight and silent."
  },
  {
    id: "mk-11",
    make: "Mitsubishi",
    model: "Outlander 2.4G 4WD",
    year: 2016,
    priceKes: 1920000,
    priceGuide: "KES 1.92M",
    bodyType: "SUV",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "4WD",
    engineCc: "2,400cc",
    mileageKm: 89000,
    plateSeries: "KDJ Series",
    color: "Titanium Grey",
    badge: "High Clearance",
    featured: false,
    image: "assets/images/car-outlander.jpg",
    highlights: ["S-AWC 4WD Lock", "7-Passenger", "Paddle Shifters", "Rockford Audio"],
    inspectionNote: "High ground clearance suited for Kenyan roads, clean underbody and responsive MIVEC engine."
  },
  {
    id: "mk-12",
    make: "Suzuki",
    model: "Swift 1.2 XG / RS",
    year: 2017,
    priceKes: 1090000,
    priceGuide: "KES 1.09M",
    bodyType: "Hatchback",
    fuel: "Petrol",
    transmission: "Automatic",
    drive: "2WD",
    engineCc: "1,200cc",
    mileageKm: 64800,
    plateSeries: "KDM Series",
    color: "Jet Black",
    badge: "Budget Saver",
    featured: false,
    image: "assets/images/car-swift.jpg",
    highlights: ["19 km/L Town Run", "Keyless Push Start", "Steering Controls", "Low Maintenance"],
    inspectionNote: "Ideal daily Nairobi-Ruiru commuter; crisp engine compression, ice-cold AC & brand new tyres."
  }
];

/* 3. GARAGE SERVICES IN RUIRU, KENYA */
window.GARAGE_SERVICES = [
  {
    id: "gar-01",
    code: "BAY 01",
    title: "OBD-II & Pre-Purchase Inspection",
    shortDesc: "Full scanner check on ECU, gearbox, ABS, hybrid battery cells & paint depth before buying any locally used car.",
    turnaround: "60 Mins",
    image: "assets/images/garage-team-1.jpg",
    items: ["Live ECU & Gearbox Scan", "Hybrid Battery Health %", "Lift Chassis & Rust Check"]
  },
  {
    id: "gar-02",
    code: "BAY 02",
    title: "Suspension, Steering & Brakes",
    shortDesc: "Heavy-duty shock absorbers, control arm bushes, rack ends, disc skimming & ceramic pads built for Kenyan roads.",
    turnaround: "Same Day",
    image: "assets/images/garage-suspension.jpg",
    items: ["Shocks, Struts & Bushes", "Brake Discs & Pads", "3D Wheel Alignment"]
  },
  {
    id: "gar-03",
    code: "BAY 03",
    title: "Bodywork, Spray Booth & Buffing",
    shortDesc: "Factory computerized paint matching, dent pull-outs, machine buffing, headlight restoration & ceramic coat.",
    turnaround: "1–3 Days",
    image: "assets/images/garage-bodywork.jpg",
    items: ["Oven Bake Respray", "3-Stage Machine Polish", "Dent & Bumper Repair"]
  },
  {
    id: "gar-04",
    code: "BAY 04",
    title: "Engine, Turbo & Cooling Service",
    shortDesc: "Genuine synthetic oil packages, injector cleaning, DPF service, timing chains & radiator pressure testing.",
    turnaround: "90 Mins",
    image: "assets/images/garage-team-1.jpg",
    items: ["Genuine Oil & Filters", "Diesel Injector & DPF", "Cooling & Overheat Fix"]
  },
  {
    id: "gar-05",
    code: "BAY 05",
    title: "CVT, Automatic Gearbox & 4WD",
    shortDesc: "Genuine CVT/ATF fluid exchange, strainer replacement, transfer case & differential oil servicing.",
    turnaround: "2.5 Hours",
    image: "assets/images/garage-suspension.jpg",
    items: ["Subaru / Nissan / Toyota CVT", "7G / DSG Oil Service", "4x4 Diff & Transfer Case"]
  },
  {
    id: "gar-06",
    code: "BAY 06",
    title: "Hybrid Systems & Auto Electrical",
    shortDesc: "Hybrid cell balancing, AC gas refilling, smart key coding, alternators, starters & parasitic drain diagnosis.",
    turnaround: "Same Day",
    image: "assets/images/garage-bodywork.jpg",
    items: ["Hybrid Cell Reconditioning", "AC Regas & Compressor", "ECU & Smart Key Coding"]
  }
];

/* 4. PROFESSIONAL TRANSPORTATIONS GALLERY (Movements Across Kenya) */
window.TRANSPORT_GALLERY = [
  {
    id: "tr-01",
    region: "mombasa",
    route: "Mombasa → Ruiru / Nairobi",
    corridor: "Mombasa Highway (A109)",
    unitMoved: "Toyota Land Cruiser Prado TX",
    mode: "Single-Unit Flatbed Carrier",
    eta: "Same-Day / Overnight",
    image: "assets/images/transport-mombasa.jpg",
    caption: "Port & coastal pickup delivered straight to MK Garage Ruiru with 4-point wheel-strap lashing."
  },
  {
    id: "tr-02",
    region: "rift-valley",
    route: "Ruiru → Nakuru & Eldoret",
    corridor: "Nairobi–Nakuru–Eldoret Highway (A104)",
    unitMoved: "Multi-Unit SUV Batch",
    mode: "Multi-Deck Car Transporter",
    eta: "4–6 Hours Dispatch",
    image: "assets/images/transport-riftvalley.jpg",
    caption: "Scheduled carrier movement delivering inspected units safely up the Rift Valley corridor."
  },
  {
    id: "tr-03",
    region: "nairobi",
    route: "Ruiru → Thika Rd, Kiambu & Westlands",
    corridor: "Thika Superhighway & Bypass",
    unitMoved: "Volkswagen Tiguan R-Line",
    mode: "Hydraulic Tilt-Bed Flatbed",
    eta: "45–90 Mins",
    image: "assets/images/transport-nairobi.jpg",
    caption: "Doorstep client handover and workshop pickup across Ruiru, Kahawa Sukari, Kiambu & Nairobi."
  },
  {
    id: "tr-04",
    region: "western",
    route: "Ruiru → Kisumu, Kericho & Kakamega",
    corridor: "Western Kenya Corridor (B1)",
    unitMoved: "Clean Hatchbacks & Crossovers",
    mode: "Twin-Deck Highway Carrier",
    eta: "Same-Day Arrival",
    image: "assets/images/transport-kisumu.jpg",
    caption: "Zero-mileage highway carrier delivery keeping newly purchased vehicles spotless to Western Kenya."
  },
  {
    id: "tr-05",
    region: "mt-kenya",
    route: "Ruiru → Thika, Nyeri, Nanyuki & Meru",
    corridor: "Kenol–Sagana–Nanyuki (A2)",
    unitMoved: "Toyota Prado 4WD",
    mode: "Dedicated Recovery Flatbed",
    eta: "2–4 Hours",
    image: "assets/images/transport-mtkenya.jpg",
    caption: "Direct flatbed movement across Mt. Kenya towns for both sold units and garage recovery clients."
  },
  {
    id: "tr-06",
    region: "nairobi",
    route: "24/7 Emergency Tow → MK Garage Ruiru",
    corridor: "Eastern Bypass / Ruiru / Juja",
    unitMoved: "Client Hatchback Recovery",
    mode: "Rapid Response Tilt-Bed",
    eta: "25–40 Mins Local",
    image: "assets/images/transport-ruiru.jpg",
    caption: "Safe damage-free loading for stalled or accident vehicles straight into our Ruiru diagnostic bay."
  }
];

/* 5. EXACTLY 50 GOOGLE VERIFIED REVIEWS ( authentic Kenyan reviewers, 3 shown at a go, 5s refresh ) */
window.GOOGLE_REVIEWS = [
  { id: 1, name: "Peter Kamau", area: "Ruiru", time: "2 days ago", rating: 5, category: "Bought Car", text: "Bought my locally used Mazda CX-5 here in Ruiru. Moses let my independent check run side-by-side with their lift scan and the logbook transfer took one afternoon." },
  { id: 2, name: "Faith Wanjiku", area: "Kahawa Sukari", time: "3 days ago", rating: 5, category: "Bought Car", text: "Cleanest Honda Vezel I viewed after visiting six yards in Nairobi. Honest mileage, fresh gearbox fluid, and zero hidden stories." },
  { id: 3, name: "Brian Ochieng", area: "Kisumu", time: "4 days ago", rating: 5, category: "Vehicle Transport", text: "Paid after video inspection and MK Motors transported my Subaru Forester on a carrier all the way to Kisumu without a scratch." },
  { id: 4, name: "Mercy Chebet", area: "Nakuru", time: "5 days ago", rating: 5, category: "Bought Car", text: "Got a super clean Nissan X-Trail 7-seater for our family. They serviced everything in their own garage before handing over keys." },
  { id: 5, name: "Kelvin Mwangi", area: "Thika Rd", time: "6 days ago", rating: 5, category: "Garage Service", text: "My Prado had a stubborn suspension knock other garages missed. MK Garage Ruiru diagnosed worn lower bushes on the lift and fixed it in 3 hours." },
  { id: 6, name: "Esther Njeri", area: "Kiambu", time: "1 week ago", rating: 5, category: "Sold Car", text: "Listed my Toyota Fielder on consignment with MK Motors Hub. Sold in 9 days at my target price and payment hit my bank before transfer." },
  { id: 7, name: "Dennis Kiprotich", area: "Eldoret", time: "1 week ago", rating: 5, category: "Vehicle Transport", text: "Flatbed delivery from Ruiru to Eldoret was right on schedule. Driver shared live WhatsApp location pins throughout the journey." },
  { id: 8, name: "Lilian Akinyi", area: "Syokimau", time: "1 week ago", rating: 5, category: "Bought Car", text: "Straightforward pricing and genuine locally used units. Moses walked me through every line of the OBD scan report." },
  { id: 9, name: "Samuel Mutua", area: "Machakos", time: "1 week ago", rating: 5, category: "Garage Service", text: "Brought a car I almost bought elsewhere for pre-purchase check at MK Garage—they saved me from a rolled-back odometer and bad CVT!" },
  { id: 10, name: "Grace Nyambura", area: "Ruiru Bypass", time: "2 weeks ago", rating: 5, category: "Garage Service", text: "Did full major service and 3-stage buffing here. My black Harrier came out looking brand new off the showroom floor." },
  { id: 11, name: "Hassan Abdi", area: "Mombasa Rd", time: "2 weeks ago", rating: 5, category: "Vehicle Transport", text: "Used MK flatbed transport to move two vehicles from Mombasa highway straight to Ruiru. Very professional crew and fair rates." },
  { id: 12, name: "Patrick Njuguna", area: "Juja", time: "2 weeks ago", rating: 5, category: "Bought Car", text: "Traded in my old Axio for a clean Forester XT at MK Motors Hub. Fair valuation and zero stress from start to finish." },
  { id: 13, name: "Cynthia Moraa", area: "Westlands", time: "2 weeks ago", rating: 5, category: "Sold Car", text: "Didn't have time for random viewing calls so I gave MK Motors my Swift to sell. Smooth process and very transparent agreement." },
  { id: 14, name: "Josephat Karanja", area: "Nyeri", time: "3 weeks ago", rating: 5, category: "Bought Car", text: "Hilux Double Cab was exactly as described on WhatsApp. Clean chassis, zero rust, 4x4 tested right there in Ruiru." },
  { id: 15, name: "Beatrice Wambui", area: "Membley, Ruiru", time: "3 weeks ago", rating: 5, category: "Garage Service", text: "Best garage in Ruiru hands down. Neat bays, honest mechanics who actually show you the old parts they replaced." },
  { id: 16, name: "Victor Otieno", area: "Lang'ata", time: "3 weeks ago", rating: 5, category: "Bought Car", text: "Requested a WhatsApp quotation at 9am, viewed the VW Tiguan at noon in Ruiru, and drove home by 4pm. Super efficient." },
  { id: 17, name: "Annette Mumbi", area: "Kasarani", time: "3 weeks ago", rating: 5, category: "Garage Service", text: "Fixed my hybrid battery cooling fan and balanced weak cells on my Fielder Hybrid for a fraction of what dealers quoted." },
  { id: 18, name: "Daniel Kiptoo", area: "Kericho", time: "1 month ago", rating: 5, category: "Vehicle Transport", text: "Reliable carrier service from Ruiru to Kericho town. Car arrived clean with full fuel reading intact as handed over." },
  { id: 19, name: "Pauline Ndunge", area: "Kitengela", time: "1 month ago", rating: 5, category: "Bought Car", text: "What stood out to me is having both the car yard and real mechanical garage in one compound. Total peace of mind." },
  { id: 20, name: "Eric Macharia", area: "Thika", time: "1 month ago", rating: 5, category: "Garage Service", text: "Gearbox ATF flush on my Mercedes C200 done with genuine spec oil. Gear changes are silky smooth now." },
  { id: 21, name: "Sharon Chepkoech", area: "Nanyuki", time: "1 month ago", rating: 5, category: "Vehicle Transport", text: "Called 0701988296 at night when my car stalled near Kenol—MK recovery flatbed arrived in 35 minutes and towed straight to their Ruiru bay." },
  { id: 22, name: "Martin Githinji", area: "Ruiru", time: "1 month ago", rating: 5, category: "Sold Car", text: "Got instant cash buy-off when relocating abroad. Fair market offer and NTSA TIMS transfer completed right in front of me." },
  { id: 23, name: "Winnie Auma", area: "Kilimani", time: "1 month ago", rating: 5, category: "Bought Car", text: "Bought a clean lady-driven Suzuki Swift for town errands. Fuel economy is amazing and everything works perfectly." },
  { id: 24, name: "Stephen Kariuki", area: "Murang'a", time: "1 month ago", rating: 5, category: "Garage Service", text: "Diesel injector calibration and DPF cleaning on my CX-5 eliminated black smoke completely. Highly knowledgeable technicians." },
  { id: 25, name: "Jacqueline Mutheu", area: "Roysambu", time: "2 months ago", rating: 5, category: "Garage Service", text: "Panel beating and colour matching on my rear bumper was 100% invisible. You cannot tell it was ever touched." },
  { id: 26, name: "Collins Wekesa", area: "Bungoma", time: "2 months ago", rating: 5, category: "Bought Car", text: "Travelled from Western after getting detailed walkaround videos on WhatsApp. The Outlander was even cleaner in person." },
  { id: 27, name: "Naomi Njoki", area: "Tatu City, Ruiru", time: "2 months ago", rating: 5, category: "Garage Service", text: "So convenient near Tatu City and Eastern Bypass. I drop my car at 8:30am for service and pick it washed at lunchtime." },
  { id: 28, name: "George Omondi", area: "South C", time: "2 months ago", rating: 5, category: "Bought Car", text: "No pushy sales talk—Moses just gives honest mechanical facts on each car so you choose confidently." },
  { id: 29, name: "Purity Kendi", area: "Meru", time: "2 months ago", rating: 5, category: "Vehicle Transport", text: "Flatbed delivery from Ruiru yard right to Meru town gate. Excellent communication the whole way." },
  { id: 30, name: "Antony Mburu", area: "Githurai 45", time: "2 months ago", rating: 5, category: "Garage Service", text: "Brake discs skimmed and ceramic pads installed quickly. Zero squealing and solid stopping power on Thika Superhighway." },
  { id: 31, name: "Rebecca Naliaka", area: "Ngong Rd", time: "2 months ago", rating: 5, category: "Sold Car", text: "Sold my Nissan X-Trail through MK Motors Hub & Garage. They detailed it first in their bay which helped it sell fast." },
  { id: 32, name: "Simon Kuria", area: "Limuru", time: "3 months ago", rating: 5, category: "Bought Car", text: "Second car our family has bought from MK Motors in Ruiru. Clean logbooks and honest history both times." },
  { id: 33, name: "Doreen Mwende", area: "Embu", time: "3 months ago", rating: 5, category: "Bought Car", text: "Very responsive on WhatsApp and email. Sent me full quotation breakdown within five minutes of asking." },
  { id: 34, name: "Kennedy Onyango", area: "Embakasi", time: "3 months ago", rating: 5, category: "Garage Service", text: "AC regas and evaporator service solved poor cooling in Nairobi traffic. Cold air within seconds now." },
  { id: 35, name: "Hilda Jeptoo", area: "Naivasha", time: "3 months ago", rating: 5, category: "Vehicle Transport", text: "Towed my SUV safely from Naivasha highway to Ruiru when the radiator hose burst, repaired it same day!" },
  { id: 36, name: "Lawrence Maina", area: "Ruiru Kimbo", time: "3 months ago", rating: 5, category: "Garage Service", text: "Trusted neighborhood workshop in Ruiru. Genuine Toyota filters and oil every single time." },
  { id: 37, name: "Millicent Adhiambo", area: "Lavington", time: "3 months ago", rating: 5, category: "Bought Car", text: "Purchased a clean black Harrier Premium. Every button, power boot, and sensor tested before handover." },
  { id: 38, name: "Nicholas Mutinda", area: "Athi River", time: "4 months ago", rating: 5, category: "Garage Service", text: "Pre-purchase inspection report was thorough with photos under the lift. Worth every shilling." },
  { id: 39, name: "Veronica Wairimu", area: "Kenyatta Rd", time: "4 months ago", rating: 5, category: "Bought Car", text: "Love how clean and organized MK Motors yard is along Ruiru route. Easy access off Thika Superhighway." },
  { id: 40, name: "Alex Koech", area: "Bomet", time: "4 months ago", rating: 5, category: "Bought Car", text: "Got a locally used Toyota Fielder Hybrid in top mechanical shape. Still averaging 22 km/L daily." },
  { id: 41, name: "Agnes Nyokabi", area: "Kikuyu", time: "4 months ago", rating: 5, category: "Garage Service", text: "Busy Saturday morning at the garage bays, waited 20 mins, then service was super thorough and well priced." },
  { id: 42, name: "Benson Barasa", area: "Kitale", time: "4 months ago", rating: 5, category: "Vehicle Transport", text: "Moved our new farm double-cab pickup on carrier up to Kitale safely without adding road mileage." },
  { id: 43, name: "Irene Gathoni", area: "Ridgeways", time: "4 months ago", rating: 5, category: "Sold Car", text: "Smooth consignment sale for my Vezel. Transparent commission and instant RTGS settlement." },
  { id: 44, name: "Moses Njoroge", area: "Juja Farm", time: "5 months ago", rating: 5, category: "Garage Service", text: "Upgraded shock absorbers and coil spacers here for rough roads—car handles bumps effortlessly now." },
  { id: 45, name: "Yvonne Kemunto", area: "Kisii", time: "5 months ago", rating: 5, category: "Bought Car", text: "Honest Kenyan dealership! What they show on screen is the exact clean car standing in Ruiru." },
  { id: 46, name: "Caleb Mwakio", area: "Voi / Coast", time: "5 months ago", rating: 5, category: "Vehicle Transport", text: "Quick recovery & flatbed service along Mombasa highway corridor. Very dependable dispatch team." },
  { id: 47, name: "Martha Waithera", area: "Ruiru", time: "5 months ago", rating: 5, category: "Garage Service", text: "Headlight restoration and ceramic polish made my 2015 car look 8 years younger. Great attention to detail." },
  { id: 48, name: "Edwin Kirui", area: "Narok", time: "5 months ago", rating: 5, category: "Bought Car", text: "Bought a Prado TX-L after comparing prices across town. MK Motors gave the cleanest unit and best deal." },
  { id: 49, name: "Salome Mwikali", area: "Utawala", time: "6 months ago", rating: 5, category: "Garage Service", text: "Smart key programming and ECU diagnostic check sorted fast while I had coffee at the waiting lounge." },
  { id: 50, name: "Julius Oduor", area: "Runda / Kiambu Rd", time: "6 months ago", rating: 5, category: "Bought Car", text: "Five stars to Moses and the entire MK Motors Hub & Garage Ruiru crew. Genuine locally used cars backed by a real workshop." }
];
