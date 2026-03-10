// ─────────────────────────────────────────────────────────────────────────────
// NestFinder — Property Data, Card Builder & Contact Modal
// localStorage contacts DB key: 'nf_contacts'
// ─────────────────────────────────────────────────────────────────────────────

const properties = [
  {
    id: 1, title: "Luxurious 3 BHK Sea-Facing Apartment", bhk: 3, area: 1850,
    price: 28500000, priceLabel: "₹2.85 Cr", listingType: "buy",
    propertyType: "Flat", locality: "Bandra", city: "Mumbai",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 2, verified: true, featured: true,
    tags: ["Sea View", "Premium", "Gym"],
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    pricePerSqft: 15405,
    advertiserName: "Rohit Sharma", advertiserPhone: "+91 98200 11234"
  },
  {
    id: 2, title: "Spacious 2 BHK in IT Corridor", bhk: 2, area: 1120,
    price: 7200000, priceLabel: "₹72 L", listingType: "buy",
    propertyType: "Flat", locality: "Whitefield", city: "Bengaluru",
    furnishing: "Semi-Furnished", availability: "Ready to Move",
    postedDays: 5, verified: true, featured: true,
    tags: ["Metro Nearby", "Gated Society"],
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    pricePerSqft: 6428,
    advertiserName: "Priya Mehta", advertiserPhone: "+91 91234 56789"
  },
  {
    id: 3, title: "Modern 1 BHK Studio near Hitech City", bhk: 1, area: 620,
    price: 4500000, priceLabel: "₹45 L", listingType: "buy",
    propertyType: "Flat", locality: "Hitech City", city: "Hyderabad",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 1, verified: true, featured: false,
    tags: ["Fully Furnished", "New Launch"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    pricePerSqft: 7258,
    advertiserName: "Arun Reddy", advertiserPhone: "+91 87654 32100"
  },
  {
    id: 4, title: "4 BHK Duplex Villa with Private Pool", bhk: 4, area: 3800,
    price: 95000000, priceLabel: "₹9.5 Cr", listingType: "buy",
    propertyType: "Villa", locality: "Koramangala", city: "Bengaluru",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 3, verified: true, featured: true,
    tags: ["Private Pool", "Luxury", "Corner Plot"],
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    pricePerSqft: 25000,
    advertiserName: "Kavya Nair", advertiserPhone: "+91 99001 55678"
  },
  {
    id: 5, title: "2 BHK Flat for Rent near Cyber Hub", bhk: 2, area: 1050,
    price: 35000, priceLabel: "₹35K/mo", listingType: "rent",
    propertyType: "Flat", locality: "Gurgaon", city: "Delhi NCR",
    furnishing: "Semi-Furnished", availability: "Ready to Move",
    postedDays: 7, verified: true, featured: false,
    tags: ["Metro 5 min", "Balcony"],
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    pricePerSqft: 33,
    advertiserName: "Sunil Gupta", advertiserPhone: "+91 95555 77890"
  },
  {
    id: 6, title: "Affordable 1 BHK Ready Possession", bhk: 1, area: 540,
    price: 3200000, priceLabel: "₹32 L", listingType: "buy",
    propertyType: "Flat", locality: "Andheri", city: "Mumbai",
    furnishing: "Unfurnished", availability: "Ready to Move",
    postedDays: 10, verified: false, featured: false,
    tags: ["Ready to Move", "Value Buy"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    pricePerSqft: 5925,
    advertiserName: "Neha Joshi", advertiserPhone: "+91 77000 23456"
  },
  {
    id: 7, title: "3 BHK Premium Apartment — Club House", bhk: 3, area: 1650,
    price: 14500000, priceLabel: "₹1.45 Cr", listingType: "buy",
    propertyType: "Flat", locality: "Powai", city: "Mumbai",
    furnishing: "Semi-Furnished", availability: "Under Construction",
    postedDays: 4, verified: true, featured: true,
    tags: ["Lake View", "Club House"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    pricePerSqft: 8787,
    advertiserName: "Vikram Patel", advertiserPhone: "+91 93388 44521"
  },
  {
    id: 8, title: "Luxurious 3 BHK Rent — Indiranagar", bhk: 3, area: 1900,
    price: 65000, priceLabel: "₹65K/mo", listingType: "rent",
    propertyType: "Flat", locality: "Indiranagar", city: "Bengaluru",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 2, verified: true, featured: true,
    tags: ["Fully Furnished", "Pet Friendly"],
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    pricePerSqft: 34,
    advertiserName: "Divya Krishna", advertiserPhone: "+91 88123 99001"
  },
  {
    id: 9, title: "200 Sq Yd Plot in Upcoming Township", bhk: 0, area: 1800,
    price: 5500000, priceLabel: "₹55 L", listingType: "buy",
    propertyType: "Plot", locality: "Gurgaon", city: "Delhi NCR",
    furnishing: "Unfurnished", availability: "Ready to Move",
    postedDays: 14, verified: true, featured: false,
    tags: ["DTCP Approved", "Corner Plot"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
    pricePerSqft: 3055,
    advertiserName: "Harish Kumar", advertiserPhone: "+91 96600 34512"
  },
  {
    id: 10, title: "2 BHK Flat — Bandra West", bhk: 2, area: 1100,
    price: 18000000, priceLabel: "₹1.8 Cr", listingType: "buy",
    propertyType: "Flat", locality: "Bandra", city: "Mumbai",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 6, verified: true, featured: false,
    tags: ["West Facing", "Sea Breeze"],
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&q=80",
    pricePerSqft: 16363,
    advertiserName: "Anita Shah", advertiserPhone: "+91 90012 87654"
  },
  {
    id: 11, title: "1 BHK Studio for Rent near Metro", bhk: 1, area: 480,
    price: 18000, priceLabel: "₹18K/mo", listingType: "rent",
    propertyType: "Flat", locality: "Whitefield", city: "Bengaluru",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 3, verified: true, featured: false,
    tags: ["Metro Access", "Bachelor-friendly"],
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80",
    pricePerSqft: 37,
    advertiserName: "Rahul Sinha", advertiserPhone: "+91 80023 45678"
  },
  {
    id: 12, title: "Grand 5 BHK Villa — Golf Course Road", bhk: 5, area: 4200,
    price: 75000000, priceLabel: "₹7.5 Cr", listingType: "buy",
    propertyType: "Villa", locality: "Gurgaon", city: "Delhi NCR",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 1, verified: true, featured: true,
    tags: ["Ultra Luxury", "Golf View", "Smart Home"],
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    pricePerSqft: 17857,
    advertiserName: "Sanjay Malhotra", advertiserPhone: "+91 99900 11223"
  },
  {
    id: 13, title: "New Launch 2 BHK — Hitech City Township", bhk: 2, area: 1200,
    price: 8900000, priceLabel: "₹89 L", listingType: "buy",
    propertyType: "Flat", locality: "Hitech City", city: "Hyderabad",
    furnishing: "Unfurnished", availability: "Under Construction",
    postedDays: 2, verified: true, featured: false,
    tags: ["New Launch", "Pre-launch Price"],
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    pricePerSqft: 7416,
    advertiserName: "Meena Rao", advertiserPhone: "+91 87711 22334"
  },
  {
    id: 14, title: "3 BHK Rent — Premium Koramangala Society", bhk: 3, area: 1700,
    price: 55000, priceLabel: "₹55K/mo", listingType: "rent",
    propertyType: "Flat", locality: "Koramangala", city: "Bengaluru",
    furnishing: "Semi-Furnished", availability: "Ready to Move",
    postedDays: 8, verified: false, featured: false,
    tags: ["Gated Society", "Children Play Area"],
    image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80",
    pricePerSqft: 32,
    advertiserName: "Deepak Menon", advertiserPhone: "+91 78900 56781"
  },
  {
    id: 15, title: "Residential Plot near Airport", bhk: 0, area: 2400,
    price: 9200000, priceLabel: "₹92 L", listingType: "buy",
    propertyType: "Plot", locality: "Whitefield", city: "Bengaluru",
    furnishing: "Unfurnished", availability: "Ready to Move",
    postedDays: 20, verified: true, featured: false,
    tags: ["RERA Approved", "Wide Road Access"],
    image: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?w=600&q=80",
    pricePerSqft: 3833,
    advertiserName: "Lakshmi Iyer", advertiserPhone: "+91 93456 12345"
  },
  {
    id: 16, title: "2 BHK Flat — Andheri East near Station", bhk: 2, area: 870,
    price: 11000000, priceLabel: "₹1.1 Cr", listingType: "buy",
    propertyType: "Flat", locality: "Andheri", city: "Mumbai",
    furnishing: "Semi-Furnished", availability: "Ready to Move",
    postedDays: 9, verified: true, featured: false,
    tags: ["Train 2 min", "Value for Money"],
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=600&q=80",
    pricePerSqft: 12643,
    advertiserName: "Ajay Thakur", advertiserPhone: "+91 97770 88990"
  },
  {
    id: 17, title: "4 BHK Penthouse — Indiranagar", bhk: 4, area: 3200,
    price: 45000000, priceLabel: "₹4.5 Cr", listingType: "buy",
    propertyType: "Flat", locality: "Indiranagar", city: "Bengaluru",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 5, verified: true, featured: true,
    tags: ["Penthouse", "Terrace Garden", "Panoramic View"],
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    pricePerSqft: 14062,
    advertiserName: "Pooja Bhat", advertiserPhone: "+91 84400 77889"
  },
  {
    id: 18, title: "2 BHK — Powai Lake-Facing Society", bhk: 2, area: 1300,
    price: 60000, priceLabel: "₹60K/mo", listingType: "rent",
    propertyType: "Flat", locality: "Powai", city: "Mumbai",
    furnishing: "Furnished", availability: "Ready to Move",
    postedDays: 4, verified: true, featured: false,
    tags: ["Lake View", "Family Preferred"],
    image: "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?w=600&q=80",
    pricePerSqft: 46,
    advertiserName: "Rajan Pillai", advertiserPhone: "+91 70001 34567"
  },
  {
    id: 19, title: "1 BHK Budget Flat — Hitech City", bhk: 1, area: 550,
    price: 2800000, priceLabel: "₹28 L", listingType: "buy",
    propertyType: "Flat", locality: "Hitech City", city: "Hyderabad",
    furnishing: "Unfurnished", availability: "Ready to Move",
    postedDays: 15, verified: false, featured: false,
    tags: ["Budget", "First Time Buyer"],
    image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80",
    pricePerSqft: 5090,
    advertiserName: "Srikanth Yadav", advertiserPhone: "+91 91100 23456"
  },
  {
    id: 20, title: "3 BHK Under Construction — Green Township", bhk: 3, area: 1750,
    price: 12500000, priceLabel: "₹1.25 Cr", listingType: "buy",
    propertyType: "Flat", locality: "Gurgaon", city: "Delhi NCR",
    furnishing: "Unfurnished", availability: "Under Construction",
    postedDays: 0, verified: true, featured: false,
    tags: ["RERA Registered", "New Launch"],
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    pricePerSqft: 7142,
    advertiserName: "Nisha Verma", advertiserPhone: "+91 82233 44556"
  }
];

// ─── Shared Card Builder ───────────────────────────────────────────────────────
function buildCard(p) {
  const badge = p.listingType === 'rent' ? 'For Rent' : 'For Sale';
  const badgeClass = p.listingType === 'rent' ? 'badge-rent' : 'badge-sale';
  const verifiedBadge = p.verified
    ? '<span class="verified-badge"><svg width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg> Verified</span>'
    : '';
  const featuredRibbon = p.featured ? '<span class="featured-ribbon">⭐ Featured</span>' : '';
  const postedText = p.postedDays === 0 ? 'Today' : p.postedDays === 1 ? 'Yesterday' : `${p.postedDays}d ago`;
  const bhkLabel = p.bhk === 0 ? 'Plot' : `${p.bhk} BHK`;
  const tags = p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');

  return `
    <div class="property-card">
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'">
        <span class="card-badge ${badgeClass}">${badge}</span>
        ${featuredRibbon}
        <div class="card-img-overlay">
          <button class="wishlist-btn" aria-label="Save" onclick="event.stopPropagation(); this.classList.toggle('wishlisted')">♡</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-price-row">
          <span class="card-price">${p.priceLabel}</span>
          <span class="card-psf">₹${p.pricePerSqft?.toLocaleString()}/sqft</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <div class="card-chips">
          <span class="chip">🛏 ${bhkLabel}</span>
          <span class="chip">📐 ${p.area.toLocaleString()} sqft</span>
          <span class="chip">🛋 ${p.furnishing}</span>
        </div>
        <div class="card-location">
          <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${p.locality}, ${p.city}
        </div>
        <div class="card-tags">${tags}</div>
        <div class="card-footer">
          <div class="card-footer-meta">
            ${verifiedBadge}
            <span class="card-posted">Posted ${postedText}</span>
          </div>
          <div class="card-action-btns">
            <button class="view-phone-btn" onclick="event.stopPropagation(); openModal(${p.id}, 'phone')">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              View Phone
            </button>
            <button class="contact-owner-btn" onclick="event.stopPropagation(); openModal(${p.id}, 'contact')">
              <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// localStorage Contacts DB
// ═══════════════════════════════════════════════════════════════════════════════
const DB_KEY = 'nf_contacts';

function dbGetAll() {
  return JSON.parse(localStorage.getItem(DB_KEY) || '[]');
}

function dbSaveContact(data) {
  const records = dbGetAll();
  const record = {
    id: Date.now(),
    name: data.name,
    phone: data.phone,
    email: data.email,
    propertyId: data.propertyId,
    propertyTitle: data.propertyTitle,
    otp: data.otp,
    mode: data.mode,        // 'phone' or 'contact'
    verified: false,
    timestamp: new Date().toISOString()
  };
  records.push(record);
  localStorage.setItem(DB_KEY, JSON.stringify(records));
  return record;
}

function dbMarkVerified(recordId) {
  const records = dbGetAll();
  const idx = records.findIndex(r => r.id === recordId);
  if (idx >= 0) {
    records[idx].verified = true;
    localStorage.setItem(DB_KEY, JSON.stringify(records));
  }
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT MODAL — 3-Step Flow
// ═══════════════════════════════════════════════════════════════════════════════
const MODAL_HTML = `
<div class="modal-overlay" id="contact-modal" onclick="handleOverlayClick(event)" role="dialog" aria-modal="true" aria-labelledby="modal-title-text">
  <div class="modal-box">
    <div class="modal-handle"></div>
    <button class="modal-close" onclick="closeModal()" aria-label="Close">✕</button>

    <!-- ══ STEP 1 — Buyer Details Form ══ -->
    <div class="modal-step" id="step-form">
      <div class="modal-icon-wrap modal-icon-blue">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
      <h2 class="modal-title" id="form-title">Contact the Owner</h2>
      <p class="modal-subtitle" id="form-subtitle">Fill in your details — the advertiser will be able to see them</p>
      <div class="modal-form">
        <div class="form-group">
          <label class="form-label" for="buyer-name">Full Name <span class="form-req">*</span></label>
          <input class="form-input" id="buyer-name" type="text" placeholder="e.g. Rahul Sharma" autocomplete="name" />
          <span class="form-error" id="err-name"></span>
        </div>
        <div class="form-group">
          <label class="form-label" for="buyer-phone">Mobile Number <span class="form-req">*</span></label>
          <div class="phone-input-wrap">
            <span class="phone-prefix">🇮🇳 +91</span>
            <input class="form-input phone-input" id="buyer-phone" type="tel" placeholder="10-digit number" maxlength="10" inputmode="numeric" autocomplete="tel" />
          </div>
          <span class="form-error" id="err-phone"></span>
        </div>
        <div class="form-group">
          <label class="form-label" for="buyer-email">Email Address <span class="form-req">*</span></label>
          <input class="form-input" id="buyer-email" type="email" placeholder="you@example.com" autocomplete="email" />
          <span class="form-error" id="err-email"></span>
        </div>
        <button class="modal-cta" id="send-otp-btn" onclick="submitForm()">
          <span id="send-otp-label">Send OTP</span>
          <span id="send-otp-loader" class="btn-loader" style="display:none"></span>
        </button>
      </div>
    </div>

    <!-- ══ STEP 2 — OTP Verification ══ -->
    <div class="modal-step" id="step-otp" style="display:none">
      <div class="modal-icon-wrap modal-icon-red">
        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      </div>
      <h2 class="modal-title">Verify Your Number</h2>
      <p class="modal-subtitle">OTP sent to <strong id="otp-phone-display"></strong></p>
      <div class="otp-hint" id="otp-sent-msg">📧 OTP sent to your email. Please check your inbox.</div>
      <div class="otp-boxes" id="otp-boxes">
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" oninput="otpInput(this)" onkeydown="otpKeydown(event,this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" oninput="otpInput(this)" onkeydown="otpKeydown(event,this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" oninput="otpInput(this)" onkeydown="otpKeydown(event,this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" oninput="otpInput(this)" onkeydown="otpKeydown(event,this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" oninput="otpInput(this)" onkeydown="otpKeydown(event,this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" oninput="otpInput(this)" onkeydown="otpKeydown(event,this)" />
      </div>
      <span class="form-error" id="err-otp" style="text-align:center;display:block;margin-top:-12px;margin-bottom:12px"></span>
      <button class="modal-cta" onclick="verifyOtp()">Verify &amp; Continue</button>
      <p class="resend-row">Didn't receive? <button class="resend-btn" onclick="resendOtp()">Resend OTP</button></p>
    </div>

    <!-- ══ STEP 3 — Success ══ -->
    <div class="modal-step" id="step-success" style="display:none">
      <div class="success-tick">
        <svg width="32" height="32" fill="none" stroke="#27AE60" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 class="modal-title" id="success-title">Contact Complete! 🎉</h2>
      <p class="modal-subtitle" id="success-subtitle"></p>

      <!-- Advertiser details -->
      <div class="info-card">
        <div class="info-card-header">
          <span class="info-card-label">Advertiser Details</span>
          <span>🏠</span>
        </div>
        <div class="info-row"><span class="info-row-key">Name</span><span class="info-row-val" id="adv-name"></span></div>
        <div class="info-row"><span class="info-row-key">Phone</span><span class="info-row-val phone-reveal" id="adv-phone"></span></div>
        <a class="call-now-btn" id="adv-call-link" href="#">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now
        </a>
      </div>

      <!-- Buyer details (shared with advertiser) -->
      <div class="info-card buyer-card">
        <div class="info-card-header">
          <span class="info-card-label">Your Details Shared with Advertiser</span>
          <span>👤</span>
        </div>
        <div class="info-row"><span class="info-row-key">Name</span><span class="info-row-val" id="buyer-disp-name"></span></div>
        <div class="info-row"><span class="info-row-key">Phone</span><span class="info-row-val" id="buyer-disp-phone"></span></div>
        <div class="info-row"><span class="info-row-key">Email</span><span class="info-row-val" id="buyer-disp-email"></span></div>
      </div>

      <button class="modal-close-btn" onclick="closeModal()">Done</button>
    </div>
  </div>
</div>`;

// ── Modal state ───────────────────────────────────────────────────────────────
let _prop = null;  // current property object
let _mode = null;  // 'phone' or 'contact'
let _otpToken = null;  // signed token returned by /api/send-otp (OTP never in client)
let _buyerData = {};    // collected form data
let _dbRecord = null;  // saved localStorage record (pre-verified)

// ── Init modal once ───────────────────────────────────────────────────────────
function initModal() {
  if (document.getElementById('contact-modal')) return;
  document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
}

// ── Open ──────────────────────────────────────────────────────────────────────
function openModal(propId, mode) {
  initModal();
  _prop = properties.find(p => p.id === propId);
  _mode = mode;

  // Reset
  showStep('step-form');
  ['buyer-name', 'buyer-phone', 'buyer-email'].forEach(id => document.getElementById(id).value = '');
  ['err-name', 'err-phone', 'err-email', 'err-otp'].forEach(id => document.getElementById(id).textContent = '');
  document.querySelectorAll('.otp-box').forEach(b => b.value = '');

  // Customise text
  const isPhone = mode === 'phone';
  document.getElementById('form-title').textContent = isPhone ? 'View Phone Number' : 'Contact the Owner';
  document.getElementById('form-subtitle').textContent = isPhone
    ? 'Verify yourself to reveal the advertiser\'s phone number'
    : 'Fill in your details — the advertiser will be able to see them';

  document.getElementById('contact-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('buyer-name').focus(), 300);
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('contact-modal')) closeModal();
}

function closeModal() {
  const m = document.getElementById('contact-modal');
  if (m) m.classList.remove('active');
  document.body.style.overflow = '';
}

function showStep(id) {
  ['step-form', 'step-otp', 'step-success'].forEach(s => {
    document.getElementById(s).style.display = s === id ? 'block' : 'none';
  });
}

// ── Form submission → calls /api/send-otp → stores signed token ──────────────
async function submitForm() {
  clearErrors();
  const name = document.getElementById('buyer-name').value.trim();
  const phone = document.getElementById('buyer-phone').value.trim();
  const email = document.getElementById('buyer-email').value.trim();
  let valid = true;

  if (!name) { showError('err-name', 'Please enter your full name'); valid = false; }
  if (!/^[6-9]\d{9}$/.test(phone)) { showError('err-phone', 'Enter a valid 10-digit Indian mobile number'); valid = false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('err-email', 'Enter a valid email address'); valid = false; }
  if (!valid) return;

  _buyerData = { name, phone, email };

  // Show loading
  const btn = document.getElementById('send-otp-btn');
  const label = document.getElementById('send-otp-label');
  const loader = document.getElementById('send-otp-loader');
  btn.disabled = true;
  label.style.display = 'none';
  loader.style.display = 'inline-block';

  try {
    const resp = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, propertyTitle: _prop.title })
    });

    let data;
    const ct = resp.headers.get('content-type') || '';
    if (ct.includes('application/json')) {
      data = await resp.json();
    } else {
      const txt = await resp.text();
      throw new Error(resp.ok ? 'Unexpected server response' : (txt.slice(0, 100) || 'Server error'));
    }

    if (!resp.ok) throw new Error(data.error || 'Failed to send OTP');

    // Store signed token (OTP is inside, never exposed to browser)
    _otpToken = data.token;

    // Save attempt to localStorage as pending (OTP not known client-side — store placeholder)
    _dbRecord = dbSaveContact({
      name, phone, email,
      propertyId: _prop.id,
      propertyTitle: _prop.title,
      otp: '(server-side)',
      mode: _mode
    });

    // Show OTP step
    document.getElementById('otp-phone-display').textContent = email;
    document.getElementById('otp-sent-msg').textContent = `📧 OTP sent to ${email}. Please check your inbox.`;
    showStep('step-otp');
    setTimeout(() => document.querySelector('.otp-box').focus(), 200);

  } catch (err) {
    showError('err-email', err.message || 'Failed to send OTP. Please try again.');
  } finally {
    btn.disabled = false;
    label.style.display = 'inline';
    loader.style.display = 'none';
  }
}

// ── OTP helpers ───────────────────────────────────────────────────────────────
function otpInput(inp) {
  inp.value = inp.value.replace(/\D/g, '');
  if (inp.value && inp.nextElementSibling?.classList.contains('otp-box')) {
    inp.nextElementSibling.focus();
  }
  const all = [...document.querySelectorAll('.otp-box')];
  if (all.every(b => b.value)) verifyOtp();
}

function otpKeydown(e, inp) {
  if (e.key === 'Backspace' && !inp.value && inp.previousElementSibling?.classList.contains('otp-box')) {
    inp.previousElementSibling.focus();
  }
}

async function resendOtp() {
  document.querySelectorAll('.otp-box').forEach(b => b.value = '');
  document.getElementById('err-otp').textContent = '';

  try {
    const resp = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: _buyerData.name,
        email: _buyerData.email,
        phone: _buyerData.phone,
        propertyTitle: _prop.title
      })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || 'Resend failed');
    _otpToken = data.token;
    showToast('✅ OTP resent to ' + _buyerData.email);
    document.querySelector('.otp-box').focus();
  } catch (err) {
    showToast('❌ ' + (err.message || 'Failed to resend'));
  }
}

// ── OTP verify → calls /api/verify-otp server-side ───────────────────────────
async function verifyOtp() {
  const entered = [...document.querySelectorAll('.otp-box')].map(b => b.value).join('');
  if (entered.length < 6) { showError('err-otp', 'Please enter all 6 digits'); return; }

  // Disable all OTP boxes during verification
  document.querySelectorAll('.otp-box').forEach(b => b.disabled = true);
  document.getElementById('err-otp').textContent = '';

  try {
    const resp = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: _otpToken, enteredOtp: entered })
    });
    const data = await resp.json();

    if (!resp.ok) {
      showError('err-otp', data.error || 'Incorrect OTP — please try again');
      document.querySelectorAll('.otp-box').forEach(b => { b.disabled = false; b.value = ''; });
      document.querySelector('.otp-box').focus();
      return;
    }

    // ✅ Verified server-side — mark in localStorage and show success
    if (_dbRecord) dbMarkVerified(_dbRecord.id);
    showSuccessStep();

  } catch (err) {
    showError('err-otp', 'Network error. Please try again.');
    document.querySelectorAll('.otp-box').forEach(b => { b.disabled = false; });
  }
}

// ── Success step ──────────────────────────────────────────────────────────────
function showSuccessStep() {
  const isPhone = _mode === 'phone';
  document.getElementById('success-subtitle').textContent =
    isPhone ? 'Phone number revealed successfully' : 'Your details have been shared with the advertiser';

  document.getElementById('adv-name').textContent = _prop.advertiserName;
  document.getElementById('adv-phone').textContent = _prop.advertiserPhone;
  document.getElementById('adv-call-link').href = `tel:${_prop.advertiserPhone.replace(/\s/g, '')}`;

  document.getElementById('buyer-disp-name').textContent = _buyerData.name;
  document.getElementById('buyer-disp-phone').textContent = `+91 ${_buyerData.phone}`;
  document.getElementById('buyer-disp-email').textContent = _buyerData.email;

  showStep('step-success');
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function showError(id, msg) { const el = document.getElementById(id); if (el) el.textContent = msg; }
function clearErrors() {
  ['err-name', 'err-phone', 'err-email'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = ''; });
}

function showToast(msg) {
  let t = document.getElementById('nf-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'nf-toast'; t.className = 'nf-toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

// Close on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
