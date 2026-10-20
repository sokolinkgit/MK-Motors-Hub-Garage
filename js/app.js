/* ==========================================================================
   MK Motors Hub & Garage — Ruiru, Kenya
   Interactive Engine (Pure Vanilla JavaScript)
   - Animated Trust Counters + Continuous Scroll Progress & ScrollSpy
   - 2.0s Minimized Showroom & Happy Kenyan Clients Slideshow Window
   - Buy [Default] / Sell With MK Motors Switcher + Multi-Filter Car Engine
   - Side-by-Side Car Comparison + Live Deposit & Installment Estimator
   - Garage Symptom Quick-Diagnoser + Nationwide Transport Lightbox
   - 50 Google Verified Reviews (3 shown at a go, 5.0s auto-refresh)
   ========================================================================== */

(function () {
  "use strict";

  const CFG = window.MK_CONFIG;
  const SLIDES = window.HERO_SLIDES || [];
  const CARS = window.CARS_INVENTORY || [];
  const GARAGE = window.GARAGE_SERVICES || [];
  const TRANSPORT = window.TRANSPORT_GALLERY || [];
  const REVIEWS = window.GOOGLE_REVIEWS || [];

  /* Helper: Build WhatsApp Deep Link */
  function buildWhatsAppUrl(message) {
    return "https://wa.me/" + CFG.whatsappIntl + "?text=" + encodeURIComponent(message);
  }

  /* Helper: Show Toast Feedback */
  let toastTimeout = null;
  function showToast(text) {
    const el = document.getElementById("toastMsg");
    if (!el) return;
    el.textContent = text;
    el.classList.remove("hidden");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      el.classList.add("hidden");
    }, 3200);
  }

  /* Helper: Format Mileage & Currency */
  function fmtKm(km) {
    return Math.round(km / 1000) + "k km";
  }

  function fmtKes(amount) {
    return "KES " + Math.round(amount).toLocaleString();
  }

  /* Minimized Vector Icons for Compact Spec Cells */
  const ICONS = {
    engine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="8" width="18" height="10" rx="2"/><path d="M7 8V5h4v3M12 12h4"/></svg>',
    fuel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M4 20V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v15"/><path d="M15 10h2a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V8l-3-3"/><path d="M3 20h13"/></svg>',
    gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="6" cy="6" r="2"/><circle cx="12" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v8M12 8v8M18 8v4H6"/></svg>',
    road: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 20L9 4h6l4 16"/><path d="M12 7v2M12 13v2M12 18v2"/></svg>',
    drive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/><circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/><path d="M10 7h4M10 17h4M12 7v10"/></svg>',
    plate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 12h12"/></svg>',
    whatsapp: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.77 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.96-.31-1.66-.61-2.92-1.26-4.83-4.21-4.97-4.4-.15-.19-1.19-1.58-1.19-3.02 0-1.44.75-2.14 1.02-2.44.27-.29.59-.37.78-.37.19 0 .39.01.56.01.18.01.42-.07.66.5.24.58.83 2.02.9 2.17.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.12.63-.07.17-.19.73-.85.92-1.14.19-.29.39-.24.66-.15.27.1 1.7.8 1.99.95.29.15.48.22.56.34.07.12.07.7-.17 1.38z"/></svg>'
  };

  /* ========================================================================
     1. CONTINUOUS SCROLL PROGRESS BAR, ANIMATED COUNTERS & SCROLL SPY
     ======================================================================== */
  function initScrollFeatures() {
    const progressBar = document.getElementById("scrollProgressBar");
    const header = document.getElementById("siteHeader");
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const desktopLinks = Array.from(document.querySelectorAll(".nav-link"));
    const mobilePills = Array.from(document.querySelectorAll(".mobile-nav-pill"));

    function updateOnScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;

      if (progressBar) {
        progressBar.style.width = pct.toFixed(1) + "%";
      }
      if (header) {
        header.classList.toggle("scrolled", scrollTop > 20);
      }

      let currentId = "home";
      const offset = scrollTop + 140;
      for (const sec of sections) {
        if (sec.offsetTop <= offset) {
          currentId = sec.id;
        }
      }

      desktopLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
      });
      mobilePills.forEach((pill) => {
        pill.classList.toggle("active", pill.getAttribute("href") === "#" + currentId);
      });
    }

    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    updateOnScroll();

    // Animated Hero Stat Counters
    document.querySelectorAll("[data-count-to]").forEach((el) => {
      const target = parseInt(el.getAttribute("data-count-to"), 10);
      if (!target || typeof window.requestAnimationFrame !== "function") return;
      const duration = 900;
      const startTime = performance.now();
      function step(now) {
        const progress = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = String(Math.round(target * eased));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          el.textContent = String(target);
        }
      }
      window.requestAnimationFrame(step);
    });

    // Smooth Reveal Observer
    const revealEls = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.08 });
      revealEls.forEach((el) => io.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("visible"));
    }
  }

  /* ========================================================================
     2. HOME MINIMIZED LIVE WINDOW SLIDESHOW (EXACT 2-SECOND REFRESH RATE)
     ======================================================================== */
  function initHeroMiniSlideshow() {
    if (!SLIDES.length) return;

    SLIDES.forEach((s) => {
      const pre = new Image();
      pre.src = s.image;
    });

    const imgEl = document.getElementById("miniSlideImg");
    const typeEl = document.getElementById("miniSlideType");
    const subtagEl = document.getElementById("miniSlideSubtag");
    const counterEl = document.getElementById("miniSlideCounter");
    const titleEl = document.getElementById("miniSlideTitle");
    const captionEl = document.getElementById("miniSlideCaption");
    const dotsWrap = document.getElementById("miniSlideDots");
    const progressEl = document.getElementById("miniProgressFill");
    const prevBtn = document.getElementById("miniPrevBtn");
    const nextBtn = document.getElementById("miniNextBtn");
    const pauseBtn = document.getElementById("miniPauseBtn");
    const pipBtn = document.getElementById("miniPipBtn");
    const miniWindow = document.getElementById("heroMiniWindow");

    let currentIdx = 0;
    let isPaused = false;
    let timerId = null;

    SLIDES.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "mini-dot" + (idx === 0 ? " active" : "");
      dot.setAttribute("aria-label", "View slide " + (idx + 1));
      dot.addEventListener("click", () => {
        currentIdx = idx;
        renderSlide(currentIdx);
        restartTimer();
      });
      dotsWrap.appendChild(dot);
    });

    function restartProgressBar() {
      if (!progressEl) return;
      progressEl.classList.remove("animating");
      if (!isPaused) {
        void progressEl.offsetWidth;
        progressEl.classList.add("animating");
      }
    }

    function renderSlide(idx) {
      const slide = SLIDES[idx];
      if (!slide) return;

      imgEl.classList.add("entering");
      imgEl.src = slide.image;
      imgEl.alt = slide.title;
      requestAnimationFrame(() => {
        setTimeout(() => imgEl.classList.remove("entering"), 30);
      });

      typeEl.textContent = slide.type;
      subtagEl.textContent = slide.tag;
      counterEl.textContent = String(idx + 1).padStart(2, "0") + " / " + String(SLIDES.length).padStart(2, "0");
      titleEl.textContent = slide.title;
      captionEl.textContent = slide.caption;

      Array.from(dotsWrap.children).forEach((d, i) => {
        d.classList.toggle("active", i === idx);
      });

      restartProgressBar();
    }

    function stepSlide(delta) {
      currentIdx = (currentIdx + delta + SLIDES.length) % SLIDES.length;
      renderSlide(currentIdx);
    }

    function restartTimer() {
      clearInterval(timerId);
      if (!isPaused) {
        timerId = setInterval(() => stepSlide(1), CFG.heroSlideshowIntervalMs); // Exact 2000ms
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        stepSlide(-1);
        restartTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        stepSlide(1);
        restartTimer();
      });
    }

    pauseBtn.addEventListener("click", () => {
      isPaused = !isPaused;
      pauseBtn.textContent = isPaused ? "Play 2s" : "Pause";
      if (isPaused) {
        clearInterval(timerId);
        progressEl.classList.remove("animating");
      } else {
        restartProgressBar();
        restartTimer();
      }
    });

    pipBtn.addEventListener("click", () => {
      const floating = miniWindow.classList.toggle("floating-pip");
      pipBtn.textContent = floating ? "Dock" : "Float";
    });

    renderSlide(0);
    restartTimer();
  }

  /* ========================================================================
     3. CARS INVENTORY — BUY [DEFAULT] / SELL TOGGLE + FILTERS + COMPARE
     ======================================================================== */
  const filterState = {
    search: "",
    bodyType: "ALL",
    make: "ALL",
    year: "ALL",
    budget: "ALL",
    fuel: "ALL",
    drive: "ALL",
    sort: "FEATURED"
  };

  const comparedIds = [];

  function setCarMode(mode, scrollToSection) {
    const buyBtn = document.getElementById("modeBuyBtn");
    const sellBtn = document.getElementById("modeSellBtn");
    const buyPanel = document.getElementById("buyCarsPanel");
    const sellPanel = document.getElementById("sellCarsPanel");

    const isBuy = mode !== "sell";
    buyBtn.classList.toggle("active", isBuy);
    sellBtn.classList.toggle("active", !isBuy);
    buyBtn.setAttribute("aria-selected", String(isBuy));
    sellBtn.setAttribute("aria-selected", String(!isBuy));

    buyPanel.classList.toggle("hidden", !isBuy);
    sellPanel.classList.toggle("hidden", isBuy);

    if (scrollToSection) {
      document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
    }
  }

  window.switchCarPortal = setCarMode;

  function updateCompareTray() {
    const tray = document.getElementById("compareTray");
    const label = document.getElementById("compareTrayText");
    if (!tray || !label) return;
    tray.classList.toggle("hidden", comparedIds.length === 0);
    label.textContent = "Compare (" + comparedIds.length + "/3)";
  }

  function toggleCompareCar(carId) {
    const idx = comparedIds.indexOf(carId);
    if (idx !== -1) {
      comparedIds.splice(idx, 1);
    } else {
      if (comparedIds.length >= 3) {
        showToast("Compare up to 3 vehicles at once.");
        return;
      }
      comparedIds.push(carId);
    }
    updateCompareTray();
    renderCars();
  }

  function openCompareModal() {
    const selectedCars = comparedIds.map((id) => CARS.find((c) => c.id === id)).filter(Boolean);
    if (!selectedCars.length) return;

    const modal = document.getElementById("genericModal");
    const content = document.getElementById("genericModalBody");
    const names = selectedCars.map((c) => c.year + " " + c.make + " " + c.model).join(" vs ");

    content.innerHTML =
      '<div class="eyebrow">Side-by-Side Comparison</div>' +
      '<h3 style="font-size:1.25rem;font-weight:900;color:var(--blue-deep)">Comparing ' + selectedCars.length + " Locally Used Vehicles</h3>" +
      '<div style="overflow-x:auto">' +
      '  <table class="compare-table">' +
      "    <tr><th>Photo &amp; Unit</th>" +
             selectedCars.map((c) => '<td><img src="' + c.image + '" alt="' + c.model + '" style="width:100%;max-width:180px;aspect-ratio:16/10;object-fit:cover;border-radius:8px;margin-bottom:6px" /><strong>' + c.year + " " + c.make + " " + c.model + "</strong></td>").join("") +
      "    </tr>" +
      "    <tr><th>Guide Price</th>" + selectedCars.map((c) => '<td style="color:var(--orange);font-weight:900">' + c.priceGuide + "</td>").join("") + "</tr>" +
      "    <tr><th>Engine &amp; Fuel</th>" + selectedCars.map((c) => "<td>" + c.engineCc + " • " + c.fuel + "</td>").join("") + "</tr>" +
      "    <tr><th>Drivetrain</th>" + selectedCars.map((c) => "<td>" + c.drive + " • " + c.transmission + "</td>").join("") + "</tr>" +
      "    <tr><th>Mileage &amp; Reg</th>" + selectedCars.map((c) => "<td>" + c.mileageKm.toLocaleString() + " km (" + c.plateSeries + ")</td>").join("") + "</tr>" +
      "    <tr><th>120-Pt Check</th>" + selectedCars.map((c) => "<td>" + c.inspectionNote + "</td>").join("") + "</tr>" +
      "  </table>" +
      "</div>" +
      '<div style="margin-top:16px">' +
      '  <a href="' + buildWhatsAppUrl("Hello MK Motors Hub & Garage Ruiru, please share quotations & advice comparing: " + names) + '" target="_blank" rel="noopener" class="btn btn-orange" style="width:100%">' +
           ICONS.whatsapp + " Ask Quotation on These Units via WhatsApp" +
      "  </a>" +
      "</div>";

    modal.classList.remove("hidden");
  }

  function filterCarsList() {
    const q = filterState.search.trim().toLowerCase();

    let result = CARS.filter((car) => {
      if (filterState.bodyType !== "ALL" && car.bodyType !== filterState.bodyType) return false;
      if (filterState.make !== "ALL" && car.make !== filterState.make) return false;
      if (filterState.year === "2017_PLUS" && car.year < 2017) return false;
      if (filterState.year === "2016" && car.year !== 2016) return false;
      if (filterState.year === "2015" && car.year !== 2015) return false;
      if (filterState.fuel !== "ALL" && car.fuel !== filterState.fuel) return false;
      if (filterState.drive === "4WD_AWD" && !["4WD", "AWD"].includes(car.drive)) return false;
      if (filterState.drive === "2WD_RWD" && !["2WD", "RWD"].includes(car.drive)) return false;

      if (filterState.budget === "UNDER_1_5M" && car.priceKes >= 1500000) return false;
      if (filterState.budget === "1_5M_2_5M" && (car.priceKes < 1500000 || car.priceKes > 2500000)) return false;
      if (filterState.budget === "2_5M_4M" && (car.priceKes <= 2500000 || car.priceKes > 4000000)) return false;
      if (filterState.budget === "ABOVE_4M" && car.priceKes <= 4000000) return false;

      if (q) {
        const hay = [
          car.make,
          car.model,
          car.year,
          car.bodyType,
          car.fuel,
          car.plateSeries,
          car.color,
          car.highlights.join(" ")
        ].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }

      return true;
    });

    if (filterState.sort === "PRICE_ASC") {
      result.sort((a, b) => a.priceKes - b.priceKes);
    } else if (filterState.sort === "PRICE_DESC") {
      result.sort((a, b) => b.priceKes - a.priceKes);
    } else if (filterState.sort === "YEAR_DESC") {
      result.sort((a, b) => b.year - a.year);
    } else if (filterState.sort === "MILEAGE_ASC") {
      result.sort((a, b) => a.mileageKm - b.mileageKm);
    }

    return result;
  }

  function renderCars() {
    const grid = document.getElementById("carsGrid");
    const countLabel = document.getElementById("carsCountStatus");
    const filtered = filterCarsList();

    countLabel.textContent = "Showing " + filtered.length + " of " + CARS.length + " Verified Locally Used Units in Ruiru";

    if (!filtered.length) {
      grid.innerHTML =
        '<div class="empty-state">' +
        '<h3 style="margin-bottom:6px;color:var(--blue-deep)">No matching vehicles found</h3>' +
        '<p style="font-size:0.86rem;color:var(--text-secondary);margin-bottom:14px">Try adjusting your budget, make, or body style filter—or ask us on WhatsApp to source the exact unit for you.</p>' +
        '<button type="button" class="btn btn-orange btn-sm" id="emptyResetBtn">Reset All Filters</button>' +
        "</div>";
      const rb = document.getElementById("emptyResetBtn");
      if (rb) rb.addEventListener("click", resetCarFilters);
      return;
    }

    grid.innerHTML = filtered
      .map((car) => {
        const isCompared = comparedIds.includes(car.id);
        const waMsg =
          "Hello MK Motors Hub & Garage Ruiru, please share your best quotation & viewing availability for the " +
          car.year + " " + car.make + " " + car.model +
          " (" + car.engineCc + " " + car.fuel + ", " + fmtKm(car.mileageKm) + ", " + car.plateSeries + ", Guide " + car.priceGuide + ").";
        const waHref = buildWhatsAppUrl(waMsg);

        return (
          '<article class="car-card" data-car-id="' + car.id + '">' +
          '  <div class="car-media" data-open-specs="' + car.id + '">' +
          '    <img src="' + car.image + '" alt="' + car.year + " " + car.make + " " + car.model + '" loading="lazy" />' +
          '    <span class="car-badge-left">' + car.badge + "</span>" +
          '    <span class="car-badge-year">' + car.year + "</span>" +
          '    <button type="button" class="compare-toggle-pill' + (isCompared ? " selected" : "") + '" data-compare-id="' + car.id + '">' +
                 (isCompared ? "✓ Comparing" : "⇄ Compare") +
          "    </button>" +
          "  </div>" +
          '  <div class="car-body">' +
          '    <div class="car-title-row">' +
          '      <h3 class="car-name">' + car.make + " " + car.model + "</h3>" +
          '      <span class="car-price-tag">' + car.priceGuide + "</span>" +
          "    </div>" +
          '    <div class="car-specs-grid">' +
          '      <span class="spec-cell" title="Engine">' + ICONS.engine + car.engineCc + "</span>" +
          '      <span class="spec-cell" title="Fuel">' + ICONS.fuel + car.fuel + "</span>" +
          '      <span class="spec-cell" title="Transmission">' + ICONS.gear + (car.transmission === "Automatic" ? "Auto" : car.transmission) + "</span>" +
          '      <span class="spec-cell" title="Mileage">' + ICONS.road + fmtKm(car.mileageKm) + "</span>" +
          '      <span class="spec-cell" title="Drivetrain">' + ICONS.drive + car.drive + "</span>" +
          '      <span class="spec-cell" title="Kenyan Registration">' + ICONS.plate + car.plateSeries.replace(" Series", "") + "</span>" +
          "    </div>" +
          '    <div class="car-highlights">' +
                 car.highlights.slice(0, 3).map((h) => '<span class="hl-tag">' + h + "</span>").join("") +
          "    </div>" +
          '    <div class="car-card-actions">' +
          '      <button type="button" class="specs-btn" data-open-specs="' + car.id + '">Specs</button>' +
          '      <a href="' + waHref + '" target="_blank" rel="noopener" class="quote-wa-btn">' +
                   ICONS.whatsapp + '<span>WhatsApp Quote</span>' +
          "      </a>" +
          "    </div>" +
          "  </div>" +
          "</article>"
        );
      })
      .join("");
  }

  function resetCarFilters() {
    filterState.search = "";
    filterState.bodyType = "ALL";
    filterState.make = "ALL";
    filterState.year = "ALL";
    filterState.budget = "ALL";
    filterState.fuel = "ALL";
    filterState.drive = "ALL";
    filterState.sort = "FEATURED";

    document.getElementById("filterSearch").value = "";
    document.getElementById("filterMake").value = "ALL";
    document.getElementById("filterYear").value = "ALL";
    document.getElementById("filterBudget").value = "ALL";
    document.getElementById("filterFuel").value = "ALL";
    document.getElementById("filterDrive").value = "ALL";
    document.getElementById("filterSort").value = "FEATURED";

    document.querySelectorAll("#bodyTypePills .chip-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.body === "ALL");
    });

    renderCars();
  }

  function openCarSpecsModal(carId) {
    const car = CARS.find((c) => c.id === carId);
    if (!car) return;

    const modal = document.getElementById("genericModal");
    const content = document.getElementById("genericModalBody");

    content.innerHTML =
      '<img src="' + car.image + '" alt="' + car.make + " " + car.model + '" style="width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:12px;margin-bottom:14px" />' +
      '<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap;margin-bottom:10px">' +
      '  <div>' +
      '    <span style="font-size:0.72rem;font-weight:800;color:var(--orange);text-transform:uppercase">' + car.badge + " • " + car.plateSeries + "</span>" +
      '    <h3 style="font-size:1.35rem;font-weight:900;color:var(--blue-deep)">' + car.year + " " + car.make + " " + car.model + "</h3>" +
      "  </div>" +
      '  <div style="font-size:1.25rem;font-weight:900;color:var(--orange)">' + car.priceGuide + "</div>" +
      "</div>" +
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;background:var(--bg-light);padding:12px;border-radius:10px;margin-bottom:12px;font-size:0.8rem;font-weight:700">' +
      "  <div>Engine: <strong>" + car.engineCc + "</strong></div>" +
      "  <div>Fuel: <strong>" + car.fuel + "</strong></div>" +
      "  <div>Gearbox: <strong>" + car.transmission + "</strong></div>" +
      "  <div>Mileage: <strong>" + car.mileageKm.toLocaleString() + " km</strong></div>" +
      "  <div>Drive: <strong>" + car.drive + "</strong></div>" +
      "  <div>Exterior: <strong>" + car.color + "</strong></div>" +
      "</div>" +
      '<div class="deposit-estimator">' +
      '  <div style="font-size:0.76rem;font-weight:800;color:var(--blue-deep);text-transform:uppercase">Instant Cash / Hire-Purchase Deposit Estimator</div>' +
      '  <div class="estimator-grid">' +
      '    <label style="font-size:0.76rem;font-weight:700">Deposit (<span id="depPctVal">50</span>%)' +
      '      <input type="range" id="depSlider" min="30" max="70" step="5" value="50" style="width:100%;accent-color:var(--orange);margin-top:4px" />' +
      "    </label>" +
      '    <label style="font-size:0.76rem;font-weight:700">Balance Period' +
      '      <select id="depMonths" class="compact-select" style="height:30px;margin-top:3px">' +
      '        <option value="12">12 Months</option>' +
      '        <option value="18" selected>18 Months</option>' +
      '        <option value="24">24 Months</option>' +
      '        <option value="36">36 Months</option>' +
      "      </select>" +
      "    </label>" +
      "  </div>" +
      '  <div class="estimator-result-bar">' +
      '    <span>Deposit: <strong id="depAmtOut" style="color:var(--blue-deep)"></strong></span>' +
      '    <span>Est. Monthly: <strong id="depMonthlyOut" style="color:var(--orange)"></strong>/mo</span>' +
      "  </div>" +
      "</div>" +
      '<div style="background:#f0fdf4;border:1px solid #bbf7d0;padding:12px;border-radius:10px;margin-bottom:14px;font-size:0.83rem;color:#14532d">' +
      "  <strong>MK Garage Ruiru 120-Point Check:</strong> " + car.inspectionNote +
      "</div>" +
      '<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px">' +
        car.highlights.map((h) => '<span class="hl-tag">' + h + "</span>").join("") +
      "</div>" +
      '<div style="display:flex;gap:10px;flex-wrap:wrap">' +
      '  <a id="modalWaQuoteLink" href="#" target="_blank" rel="noopener" class="btn btn-orange" style="flex:1">' +
           ICONS.whatsapp + " Request Quotation on WhatsApp" +
      "  </a>" +
      '  <a href="tel:' + CFG.phoneRaw + '" class="btn btn-blue">Call ' + CFG.phoneDisplay + "</a>" +
      "</div>";

    const slider = document.getElementById("depSlider");
    const monthsSel = document.getElementById("depMonths");
    const pctVal = document.getElementById("depPctVal");
    const depOut = document.getElementById("depAmtOut");
    const monOut = document.getElementById("depMonthlyOut");
    const waLink = document.getElementById("modalWaQuoteLink");

    function recalcPlan() {
      const pct = parseInt(slider.value, 10);
      const months = parseInt(monthsSel.value, 10);
      const dep = Math.round((car.priceKes * pct) / 100);
      const principal = car.priceKes - dep;
      const estMonthly = Math.round((principal * 1.12) / months);
      pctVal.textContent = String(pct);
      depOut.textContent = fmtKes(dep);
      monOut.textContent = fmtKes(estMonthly);
      waLink.href = buildWhatsAppUrl(
        "Hello MK Motors Hub & Garage Ruiru, please share cash & " + pct + "% deposit (" + fmtKes(dep) +
        " over " + months + " months) quotation for the " + car.year + " " + car.make + " " + car.model + " (" + car.plateSeries + ")."
      );
    }

    slider.addEventListener("input", recalcPlan);
    monthsSel.addEventListener("change", recalcPlan);
    recalcPlan();

    modal.classList.remove("hidden");
  }

  function initCarsSection() {
    const makes = Array.from(new Set(CARS.map((c) => c.make))).sort();
    const makeSelect = document.getElementById("filterMake");
    const heroMakeSelect = document.getElementById("heroMakeSelect");

    makes.forEach((m) => {
      const o1 = document.createElement("option");
      o1.value = m;
      o1.textContent = m;
      makeSelect.appendChild(o1);

      const o2 = document.createElement("option");
      o2.value = m;
      o2.textContent = m;
      heroMakeSelect.appendChild(o2);
    });

    document.getElementById("modeBuyBtn").addEventListener("click", () => setCarMode("buy", false));
    document.getElementById("modeSellBtn").addEventListener("click", () => setCarMode("sell", false));

    document.getElementById("heroQuickSearchForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const mk = heroMakeSelect.value;
      const bd = document.getElementById("heroBodySelect").value;
      const bg = document.getElementById("heroBudgetSelect").value;

      setCarMode("buy", false);
      filterState.make = mk;
      filterState.bodyType = bd;
      filterState.budget = bg;

      makeSelect.value = mk;
      document.getElementById("filterBudget").value = bg;
      document.querySelectorAll("#bodyTypePills .chip-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.body === bd);
      });

      renderCars();
      document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
    });

    document.querySelectorAll("#bodyTypePills .chip-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        filterState.bodyType = btn.dataset.body;
        document.querySelectorAll("#bodyTypePills .chip-btn").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
        renderCars();
      });
    });

    const mobToggle = document.getElementById("mobileFilterToggleBtn");
    const controlsGrid = document.getElementById("filterControlsGrid");
    mobToggle.addEventListener("click", () => {
      const collapsed = controlsGrid.classList.toggle("mobile-collapsed");
      mobToggle.textContent = collapsed ? "More Filters +" : "Less Filters −";
    });

    document.getElementById("filterSearch").addEventListener("input", (e) => {
      filterState.search = e.target.value;
      renderCars();
    });
    makeSelect.addEventListener("change", (e) => {
      filterState.make = e.target.value;
      renderCars();
    });
    document.getElementById("filterYear").addEventListener("change", (e) => {
      filterState.year = e.target.value;
      renderCars();
    });
    document.getElementById("filterBudget").addEventListener("change", (e) => {
      filterState.budget = e.target.value;
      renderCars();
    });
    document.getElementById("filterFuel").addEventListener("change", (e) => {
      filterState.fuel = e.target.value;
      renderCars();
    });
    document.getElementById("filterDrive").addEventListener("change", (e) => {
      filterState.drive = e.target.value;
      renderCars();
    });
    document.getElementById("filterSort").addEventListener("change", (e) => {
      filterState.sort = e.target.value;
      renderCars();
    });
    document.getElementById("resetFiltersBtn").addEventListener("click", resetCarFilters);

    // Event delegation for Compare pill & Specs modal
    document.getElementById("carsGrid").addEventListener("click", (e) => {
      const cmpBtn = e.target.closest("[data-compare-id]");
      if (cmpBtn) {
        e.stopPropagation();
        toggleCompareCar(cmpBtn.getAttribute("data-compare-id"));
        return;
      }
      const trigger = e.target.closest("[data-open-specs]");
      if (trigger) {
        openCarSpecsModal(trigger.getAttribute("data-open-specs"));
      }
    });

    document.getElementById("openCompareModalBtn").addEventListener("click", openCompareModal);
    document.getElementById("clearCompareBtn").addEventListener("click", () => {
      comparedIds.length = 0;
      updateCompareTray();
      renderCars();
    });

    // Sell With MK Motors Form submission -> Direct WhatsApp Valuation
    document.getElementById("sellCarForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("sellOwnerName").value.trim();
      const phone = document.getElementById("sellOwnerPhone").value.trim();
      const model = document.getElementById("sellCarModel").value.trim();
      const regYear = document.getElementById("sellRegYear").value.trim();
      const price = document.getElementById("sellAskingPrice").value.trim();
      const option = document.getElementById("sellOptionType").value;
      const notes = document.getElementById("sellConditionNotes").value.trim();

      const msg =
        "Hello MK Motors Hub & Garage Ruiru — SELL MY CAR REQUEST:\n" +
        "• Owner: " + name + " (" + phone + ")\n" +
        "• Vehicle: " + model + " (" + regYear + ")\n" +
        "• Target Price: KES " + price + "\n" +
        "• Mode: " + option + "\n" +
        (notes ? "• Notes: " + notes : "");

      showToast("Opening WhatsApp valuation request for " + model + "...");
      window.open(buildWhatsAppUrl(msg), "_blank", "noopener");
    });

    renderCars();
  }

  /* ========================================================================
     4. GARAGE SECTION RENDERER, SYMPTOM DIAGNOSER & WHATSAPP BAY BOOKING
     ======================================================================== */
  function initGarageSection() {
    const grid = document.getElementById("garageGrid");
    grid.innerHTML = GARAGE.map((g) => {
      const waHref = buildWhatsAppUrl(
        "Hello MK Motors Garage Ruiru, I would like to book " + g.code + " (" + g.title + "). Please share next available slot."
      );
      return (
        '<article class="garage-card" id="' + g.id + '">' +
        '  <div class="garage-img-wrap">' +
        '    <img src="' + g.image + '" alt="' + g.title + '" loading="lazy" />' +
        '    <span class="bay-pill">' + g.code + "</span>" +
        '    <span class="eta-pill">' + g.turnaround + "</span>" +
        "  </div>" +
        '  <div class="garage-body">' +
        '    <h3 class="garage-title">' + g.title + "</h3>" +
        '    <p class="garage-desc">' + g.shortDesc + "</p>" +
        '    <ul class="garage-checklist">' +
               g.items.map((it) => "<li>" + it + "</li>").join("") +
        "    </ul>" +
        '    <a href="' + waHref + '" target="_blank" rel="noopener" class="btn btn-orange btn-sm" style="margin-top:auto">' +
               ICONS.whatsapp + " Book Bay on WhatsApp" +
        "    </a>" +
        "  </div>" +
        "</article>"
      );
    }).join("");

    // Symptom Quick-Diagnoser interaction
    document.querySelectorAll("#symptomStrip .symptom-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const bayId = btn.getAttribute("data-bay-target");
        document.querySelectorAll("#symptomStrip .symptom-btn").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
        document.querySelectorAll("#garageGrid .garage-card").forEach((card) => {
          card.classList.toggle("bay-spotlight", card.id === bayId);
        });
        const targetCard = document.getElementById(bayId);
        if (targetCard) {
          targetCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
          showToast("Recommended Ruiru Workshop Bay highlighted!");
        }
      });
    });
  }

  /* ========================================================================
     5. PROFESSIONAL TRANSPORTATIONS GALLERY + LIGHTBOX
     ======================================================================== */
  function initTransportSection() {
    const grid = document.getElementById("transportGrid");
    let activeRegion = "ALL";

    function renderTransport() {
      const list = activeRegion === "ALL"
        ? TRANSPORT
        : TRANSPORT.filter((t) => t.region === activeRegion);

      grid.innerHTML = list.map((item) => {
        const waHref = buildWhatsAppUrl(
          "Hello MK Motors Transport Team, please share a flatbed/carrier transport quotation for route: " + item.route + "."
        );
        return (
          '<article class="transport-card">' +
          '  <div class="transport-img-box" data-open-transport="' + item.id + '">' +
          '    <img src="' + item.image + '" alt="' + item.route + '" loading="lazy" />' +
          '    <span class="route-badge">' + item.corridor + "</span>" +
          '    <span class="zoom-hint">View</span>' +
          "  </div>" +
          '  <div class="transport-body">' +
          '    <h3 class="transport-route-title">' + item.route + "</h3>" +
          '    <div class="transport-meta">' + item.mode + " • " + item.eta + "</div>" +
          '    <p class="transport-caption">' + item.caption + "</p>" +
          '    <a href="' + waHref + '" target="_blank" rel="noopener" class="btn btn-blue btn-sm">' +
                 ICONS.whatsapp + " Request Transport Quote" +
          "    </a>" +
          "  </div>" +
          "</article>"
        );
      }).join("");
    }

    document.querySelectorAll("#transportFilterBar .chip-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeRegion = btn.dataset.region;
        document.querySelectorAll("#transportFilterBar .chip-btn").forEach((b) => {
          b.classList.toggle("active", b === btn);
        });
        renderTransport();
      });
    });

    grid.addEventListener("click", (e) => {
      const box = e.target.closest("[data-open-transport]");
      if (!box) return;
      const item = TRANSPORT.find((t) => t.id === box.getAttribute("data-open-transport"));
      if (!item) return;

      const modal = document.getElementById("genericModal");
      const content = document.getElementById("genericModalBody");
      content.innerHTML =
        '<img src="' + item.image + '" alt="' + item.route + '" style="width:100%;max-height:420px;object-fit:cover;border-radius:12px;margin-bottom:14px" />' +
        '<span style="font-size:0.74rem;font-weight:800;color:var(--orange);text-transform:uppercase">' + item.corridor + " • " + item.mode + "</span>" +
        '<h3 style="font-size:1.3rem;font-weight:900;color:var(--blue-deep);margin:4px 0 8px">' + item.route + "</h3>" +
        '<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:16px">' + item.caption + " Typical turnaround: <strong>" + item.eta + "</strong>.</p>" +
        '<a href="' + buildWhatsAppUrl("Hello MK Motors Hub & Garage, I need vehicle transportation along " + item.route + ". Please share rates.") + '" target="_blank" rel="noopener" class="btn btn-orange">' +
          ICONS.whatsapp + " Book This Route on WhatsApp (" + CFG.phoneDisplay + ")" +
        "</a>";
      modal.classList.remove("hidden");
    });

    renderTransport();
  }

  /* ========================================================================
     6. GOOGLE VERIFIED REVIEWS — 50 REVIEWS, 3 AT A GO, 5-SECOND REFRESH
     ======================================================================== */
  function renderReviewCardHTML(rev) {
    const initials = rev.name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((p) => p[0].toUpperCase())
      .join("");
    const stars = "★".repeat(rev.rating);

    return (
      '<article class="review-card">' +
      '  <div class="review-head">' +
      '    <div class="reviewer-profile">' +
      '      <div class="reviewer-avatar">' + initials + "</div>" +
      "      <div>" +
      '        <div class="reviewer-name">' + rev.name + "</div>" +
      '        <div class="reviewer-meta">' + rev.area + " • " + rev.time + "</div>" +
      "      </div>" +
      "    </div>" +
      '    <span class="google-verified-tag">✓ Google Verified</span>' +
      "  </div>" +
      '  <div class="review-stars-row">' +
      '    <span class="stars-gold" aria-label="5 out of 5 stars">' + stars + "</span>" +
      '    <span class="review-cat-pill">' + rev.category + "</span>" +
      "  </div>" +
      '  <p class="review-text">“' + rev.text + '”</p>' +
      "</article>"
    );
  }

  function initGoogleReviews() {
    if (!REVIEWS.length) return;

    const container = document.getElementById("activeReviewsGrid");
    const statusLabel = document.getElementById("reviewsBatchStatus");
    const timerBar = document.getElementById("reviewsTimerBar");
    const prevBtn = document.getElementById("prevReviewsBtn");
    const nextBtn = document.getElementById("nextReviewsBtn");
    const viewAllBtn = document.getElementById("viewAll50Btn");

    let startIndex = 0;
    let intervalId = null;

    function restartFiveSecBar() {
      if (!timerBar) return;
      timerBar.classList.remove("running");
      void timerBar.offsetWidth;
      timerBar.classList.add("running");
    }

    function showBatch() {
      const batch = [];
      for (let k = 0; k < CFG.reviewsPerBatch; k++) {
        batch.push(REVIEWS[(startIndex + k) % REVIEWS.length]);
      }

      container.innerHTML = batch.map(renderReviewCardHTML).join("");

      const firstNum = batch[0].id;
      const lastNum = batch[batch.length - 1].id;
      statusLabel.textContent =
        "Showing #" + firstNum + "–#" + lastNum + " of " + REVIEWS.length + " Google Verified Reviews (Refreshes every 5s)";

      restartFiveSecBar();
    }

    function advanceBatch(step) {
      startIndex = (startIndex + step + REVIEWS.length) % REVIEWS.length;
      showBatch();
    }

    function resetAutoRefresh() {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        advanceBatch(CFG.reviewsPerBatch);
      }, CFG.reviewsRefreshIntervalMs);
    }

    prevBtn.addEventListener("click", () => {
      advanceBatch(-CFG.reviewsPerBatch);
      resetAutoRefresh();
    });

    nextBtn.addEventListener("click", () => {
      advanceBatch(CFG.reviewsPerBatch);
      resetAutoRefresh();
    });

    viewAllBtn.addEventListener("click", () => {
      const modal = document.getElementById("allReviewsModal");
      const listEl = document.getElementById("all50ReviewsContainer");
      listEl.innerHTML = REVIEWS.map(renderReviewCardHTML).join("");
      modal.classList.remove("hidden");
    });

    showBatch();
    resetAutoRefresh();
  }

  /* ========================================================================
     7. CONTACTS PAGE INTERACTIONS & MODAL DISMISSALS
     ======================================================================== */
  function initContactsAndModals() {
    document.querySelectorAll("[data-copy-text]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-copy-text");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(val).then(() => {
            showToast("Copied: " + val);
          });
        } else {
          showToast(val);
        }
      });
    });

    const contactForm = document.getElementById("directContactForm");
    const emailBtn = document.getElementById("sendViaEmailBtn");

    function gatherContactPayload() {
      const name = document.getElementById("contactName").value.trim() || "Client";
      const phone = document.getElementById("contactPhone").value.trim() || "";
      const topic = document.getElementById("contactTopic").value;
      const msg = document.getElementById("contactMessage").value.trim();
      return { name, phone, topic, msg };
    }

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const d = gatherContactPayload();
      const text =
        "Hello MK Motors Hub & Garage Ruiru,\n" +
        "• Name: " + d.name + (d.phone ? " (" + d.phone + ")" : "") + "\n" +
        "• Inquiry: " + d.topic + "\n" +
        "• Details: " + d.msg;
      showToast("Connecting to MK Motors WhatsApp (0701988296)...");
      window.open(buildWhatsAppUrl(text), "_blank", "noopener");
    });

    emailBtn.addEventListener("click", () => {
      const d = gatherContactPayload();
      const subject = encodeURIComponent("MK Motors Inquiry: " + d.topic + " — " + d.name);
      const body = encodeURIComponent(
        "Name: " + d.name + "\nPhone: " + d.phone + "\nTopic: " + d.topic + "\n\nMessage:\n" + d.msg
      );
      showToast("Opening email to " + CFG.email + "...");
      window.location.href = "mailto:" + CFG.email + "?subject=" + subject + "&body=" + body;
    });

    document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop || e.target.closest(".modal-close")) {
          backdrop.classList.add("hidden");
        }
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-backdrop").forEach((b) => b.classList.add("hidden"));
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initScrollFeatures();
    initHeroMiniSlideshow();
    initCarsSection();
    initGarageSection();
    initTransportSection();
    initGoogleReviews();
    initContactsAndModals();
  });
})();
