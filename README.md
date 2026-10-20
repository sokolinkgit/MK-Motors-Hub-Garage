# MK Motors Hub & Garage — Ruiru, Kenya

Pure **HTML5, CSS3, and Vanilla JavaScript** single-page continuous-scroll automotive platform built for **MK Motors Hub & Garage** in **Ruiru, Kenya**.

## Key Features

- **Color Theme**: Vibrant Automotive Orange (`#FF5A00`), Deep Royal Navy Blue (`#08182E` / `#143B73`), and Crisp Pure White (`#FFFFFF`).
- **Continuous Single-Scroll Experience**: Seamless vertical progression with top scroll progress indicator and active scroll-spy navigation across all sections:
  1. **Home (`#home`)**: High-conversion showroom hero, instant Quick Stock Finder, and an embedded **Minimized Live Window Slideshow** featuring clean units and happy Kenyan client key handovers with an exact **2-second (`2000ms`) refresh cycle** (plus Pause & Floating Mini-Window mode).
  2. **Cars (`#cars`)**: Interactive **Buy a Car [Default] / Sell With MK Motors** segmented switcher, multi-attribute car-website filters (Keyword Search, Body Type pills, Make, Budget in KES, Fuel, Drivetrain, Sort order), full vehicle specifications, 120-point inspection modal, and one-tap **Request Quotation on WhatsApp** (`0701988296`).
  3. **Garage (`#garage`)**: Full-service Ruiru mechanical, OBD-II pre-purchase diagnostic, suspension, gearbox, hybrid, and spray-booth bays with direct WhatsApp slot booking.
  4. **Professional Transportations (`#transport`)**: Filterable gallery showcasing flatbed recovery and highway car-carrier movements across Kenya (Ruiru/Nairobi, Mombasa Highway, Rift Valley, Kisumu/Western, Mt. Kenya) with lightbox zoom and route quote links.
  5. **About Us (`#about`)**: Concise, factual overview of MK Motors Hub & Garage operations under one roof in Ruiru, Kenya.
  6. **Google Verified Reviews (`#reviews`)**: **50 verified client reviews**, displaying **3 reviews at a time** and automatically refreshing every **5 seconds (`5000ms`)**, plus a full 50-review browser modal.
  7. **Contact (`#contact`) & Floating Right-Hand WhatsApp Button**: Direct links for **0701988296**, **moseskibe701@gmail.com**, and **Ruiru, Kenya**, alongside a persistent right-hand floating WhatsApp button.
- **Mobile-First 2-Per-Row Layout**: Compact minimized icons and inputs on mobile screens (`<= 768px`), displaying **2 product/service cards per row** cleanly without horizontal overflow.

## Project Structure

- `index.html` — Main semantic continuous-scroll markup and modals
- `css/styles.css` — Custom responsive layout, animations, and mobile 2-column grid rules
- `js/data.js` — Vehicles catalog, slideshow slides, garage bays, transport routes, and all 50 verified reviews
- `js/app.js` — Vanilla JS interactive state, timers, filtering, modals, and scroll spy
- `assets/images/` — Local verified photography assets

## Run Locally

```bash
python3 -m http.server 8000 --bind 0.0.0.0
```
