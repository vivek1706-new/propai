// ─────────────────────────────────────────────────────────────────────────────
// NestFinder — Property Data & Shared Utilities
// ─────────────────────────────────────────────────────────────────────────────

const properties = [
    {
        id: 1, title: "Luxurious 3 BHK Sea-Facing Apartment", bhk: 3, area: 1850,
        price: 28500000, priceLabel: "₹2.85 Cr", listingType: "buy",
        propertyType: "Flat", locality: "Bandra", city: "Mumbai",
        furnishing: "Furnished", availability: "Ready to Move",
        postedDays: 2, verified: true, featured: true,
        tags: ["Sea View", "Premium", "Gym"],
        amenities: ["Gym", "Pool", "Parking", "Security"],
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
        amenities: ["Gym", "Parking", "CCTV"],
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
        amenities: ["Parking", "Security"],
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
        amenities: ["Pool", "Gym", "Garden", "Parking"],
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
        amenities: ["Parking", "Security", "CCTV"],
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
        amenities: ["Parking"],
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
        pricePerSqft: 5925,
        advertiserName: "Neha Joshi", advertiserPhone: "+91 77000 23456"
    },
    {
        id: 7, title: "3 BHK Premium Apartment with Club House", bhk: 3, area: 1650,
        price: 14500000, priceLabel: "₹1.45 Cr", listingType: "buy",
        propertyType: "Flat", locality: "Powai", city: "Mumbai",
        furnishing: "Semi-Furnished", availability: "Under Construction",
        postedDays: 4, verified: true, featured: true,
        tags: ["Lake View", "Club House", "Upcoming"],
        amenities: ["Gym", "Pool", "Club House", "Parking"],
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
        amenities: ["Gym", "Parking", "CCTV", "Security"],
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
        tags: ["DTCP Approved", "Corner Plot", "Freehold"],
        amenities: ["24/7 Water", "Road Access"],
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
        amenities: ["Parking", "Security", "Gym"],
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
        amenities: ["Parking", "Security"],
        image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80",
        pricePerSqft: 37,
        advertiserName: "Rahul Sinha", advertiserPhone: "+91 80023 45678"
    },
    {
        id: 12, title: "Grand 5 BHK Builder Floor — Golf Course Road", bhk: 5, area: 4200,
        price: 75000000, priceLabel: "₹7.5 Cr", listingType: "buy",
        propertyType: "Villa", locality: "Gurgaon", city: "Delhi NCR",
        furnishing: "Furnished", availability: "Ready to Move",
        postedDays: 1, verified: true, featured: true,
        tags: ["Ultra Luxury", "Golf View", "Smart Home"],
        amenities: ["Pool", "Gym", "Theater", "Parking × 4"],
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
        amenities: ["Gym", "Pool", "Parking"],
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
        tags: ["Gated", "Children Play Area"],
        amenities: ["Parking", "Security", "Gym"],
        image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80",
        pricePerSqft: 32,
        advertiserName: "Deepak Menon", advertiserPhone: "+91 78900 56781"
    },
    {
        id: 15, title: "Plot — Residential Layout near Airport", bhk: 0, area: 2400,
        price: 9200000, priceLabel: "₹92 L", listingType: "buy",
        propertyType: "Plot", locality: "Whitefield", city: "Bengaluru",
        furnishing: "Unfurnished", availability: "Ready to Move",
        postedDays: 20, verified: true, featured: false,
        tags: ["RERA Approved", "Wide Road Access"],
        amenities: ["24/7 Water", "Compound Wall"],
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
        amenities: ["Parking", "Lift", "Security"],
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
        amenities: ["Private Terrace", "Gym", "Parking × 2", "Pool"],
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
        tags: ["Lake View", "Family Preferred", "Pet Friendly"],
        amenities: ["Pool", "Gym", "Parking", "Club House"],
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
        amenities: ["Security", "Lift"],
        image: "https://images.unsplash.com/photo-1556020685-ae41abfc9365?w=600&q=80",
        pricePerSqft: 5090,
        advertiserName: "Srikanth Yadav", advertiserPhone: "+91 91100 23456"
    },
    {
        id: 20, title: "3 BHK Under Construction — Premium Township", bhk: 3, area: 1750,
        price: 12500000, priceLabel: "₹1.25 Cr", listingType: "buy",
        propertyType: "Flat", locality: "Gurgaon", city: "Delhi NCR",
        furnishing: "Unfurnished", availability: "Under Construction",
        postedDays: 0, verified: true, featured: false,
        tags: ["RERA Registered", "New Launch", "Green Township"],
        amenities: ["Club House", "Pool", "Gym", "Park"],
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
        pricePerSqft: 7142,
        advertiserName: "Nisha Verma", advertiserPhone: "+91 82233 44556"
    }
];

// ─── Shared card builder ──────────────────────────────────────────────────────
function buildCard(p) {
    const badge = p.listingType === 'rent' ? 'For Rent' : 'For Sale';
    const badgeClass = p.listingType === 'rent' ? 'badge-rent' : 'badge-sale';
    const verifiedBadge = p.verified ? '<span class="verified-badge">✔ Verified</span>' : '';
    const featuredRibbon = p.featured ? '<span class="featured-ribbon">⭐ Featured</span>' : '';
    const postedText = p.postedDays === 0 ? 'Today' : p.postedDays === 1 ? 'Yesterday' : `${p.postedDays}d ago`;
    const bhkLabel = p.bhk === 0 ? 'Plot' : `${p.bhk} BHK`;
    const tags = p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('');

    return `
    <div class="property-card">
      <div class="card-image-wrap">
        <img src="${p.image}" alt="${p.title}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80'">
        <span class="card-badge ${badgeClass}">${badge}</span>
        ${featuredRibbon}
        <div class="card-img-overlay">
          <button class="wishlist-btn" aria-label="Wishlist" onclick="this.classList.toggle('wishlisted')">♡</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-price-row">
          <span class="card-price">${p.priceLabel}</span>
          <span class="card-psf">₹${p.pricePerSqft?.toLocaleString()}/sqft</span>
        </div>
        <h3 class="card-title">${p.title}</h3>
        <div class="card-meta">
          <span class="meta-item">🛏 ${bhkLabel}</span>
          <span class="meta-dot">·</span>
          <span class="meta-item">📐 ${p.area.toLocaleString()} sqft</span>
          <span class="meta-dot">·</span>
          <span class="meta-item">🛋 ${p.furnishing}</span>
        </div>
        <div class="card-location">
          <svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
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
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              View Phone
            </button>
            <button class="contact-owner-btn" onclick="event.stopPropagation(); openModal(${p.id}, 'contact')">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Contact Owner
            </button>
          </div>
        </div>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT / VIEW-PHONE MODAL
// ═══════════════════════════════════════════════════════════════════════════════

let _currentProp = null;  // property object being viewed
let _modalMode = null;  // 'phone' or 'contact'
let _buyerData = {};    // collected form data
let _mockOTP = '';    // generated for this session

const MODAL_HTML = `
<div class="modal-overlay" id="contact-modal" onclick="handleOverlayClick(event)" role="dialog" aria-modal="true">
  <div class="modal-box">

    <!-- ── Close ── -->
    <button class="modal-close" onclick="closeModal()" aria-label="Close">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>

    <!-- ══ STEP 1 — Buyer Details Form ══ -->
    <div class="modal-step" id="step-form">
      <div class="modal-icon-wrap modal-icon-blue">
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      </div>
      <h2 class="modal-title" id="form-title">Enter Your Details</h2>
      <p class="modal-subtitle" id="form-subtitle">We'll send an OTP to your phone to verify</p>

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
            <input class="form-input phone-input" id="buyer-phone" type="tel" placeholder="10-digit mobile" maxlength="10" inputmode="numeric" pattern="[0-9]{10}" autocomplete="tel" />
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
      <div class="modal-icon-wrap modal-icon-orange">
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      </div>
      <h2 class="modal-title">Verify Your Number</h2>
      <p class="modal-subtitle">OTP sent to <strong id="otp-phone-display"></strong></p>
      <p class="otp-hint">💡 For demo, use OTP: <strong id="demo-otp-display" class="otp-demo-code"></strong></p>

      <div class="otp-boxes" id="otp-boxes">
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" oninput="otpInput(this)" onkeydown="otpKeydown(event, this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" oninput="otpInput(this)" onkeydown="otpKeydown(event, this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" oninput="otpInput(this)" onkeydown="otpKeydown(event, this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" oninput="otpInput(this)" onkeydown="otpKeydown(event, this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" oninput="otpInput(this)" onkeydown="otpKeydown(event, this)" />
        <input class="otp-box" type="text" maxlength="1" inputmode="numeric" pattern="[0-9]" oninput="otpInput(this)" onkeydown="otpKeydown(event, this)" />
      </div>
      <span class="form-error" id="err-otp" style="text-align:center;display:block;margin-top:8px"></span>

      <button class="modal-cta" onclick="verifyOtp()">
        <span>Verify & Continue</span>
      </button>
      <p class="resend-row">Didn't receive? <button class="resend-btn" onclick="resendOtp()">Resend OTP</button></p>
    </div>

    <!-- ══ STEP 3 — Success ══ -->
    <div class="modal-step" id="step-success" style="display:none">
      <div class="success-tick">
        <svg width="36" height="36" fill="none" stroke="#22c55e" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <h2 class="modal-title">Contact Complete! 🎉</h2>
      <p class="modal-subtitle" id="success-subtitle"></p>

      <!-- Advertiser Card -->
      <div class="info-card" id="advertiser-card">
        <div class="info-card-header">
          <span class="info-card-label">Advertiser Details</span>
          <span class="info-card-icon">🏠</span>
        </div>
        <div class="info-row">
          <span class="info-row-key">Name</span>
          <span class="info-row-val" id="adv-name"></span>
        </div>
        <div class="info-row">
          <span class="info-row-key">Phone</span>
          <span class="info-row-val phone-reveal" id="adv-phone"></span>
        </div>
        <a class="call-now-btn" id="adv-call-link" href="#">
          <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Call Now
        </a>
      </div>

      <!-- Buyer Card (shown to advertiser simulation) -->
      <div class="info-card buyer-card" id="buyer-card">
        <div class="info-card-header">
          <span class="info-card-label">Your Details Shared with Advertiser</span>
          <span class="info-card-icon">👤</span>
        </div>
        <div class="info-row">
          <span class="info-row-key">Name</span>
          <span class="info-row-val" id="buyer-display-name"></span>
        </div>
        <div class="info-row">
          <span class="info-row-key">Phone</span>
          <span class="info-row-val" id="buyer-display-phone"></span>
        </div>
        <div class="info-row">
          <span class="info-row-key">Email</span>
          <span class="info-row-val" id="buyer-display-email"></span>
        </div>
      </div>

      <button class="modal-close-btn" onclick="closeModal()">Done</button>
    </div>

  </div>
</div>`;

// ─── Init modal once ─────────────────────────────────────────────────────────
function initModal() {
    if (document.getElementById('contact-modal')) return;
    document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
}

// ─── Open modal ───────────────────────────────────────────────────────────────
function openModal(propId, mode) {
    initModal();
    _currentProp = properties.find(p => p.id === propId);
    _modalMode = mode; // 'phone' or 'contact'

    // Reset all steps
    showStep('step-form');
    document.getElementById('buyer-name').value = '';
    document.getElementById('buyer-phone').value = '';
    document.getElementById('buyer-email').value = '';
    clearErrors();
    document.querySelectorAll('.otp-box').forEach(b => b.value = '');
    document.getElementById('err-otp').textContent = '';

    // Customise title based on mode
    const isPhone = mode === 'phone';
    document.getElementById('form-title').textContent = isPhone ? 'Verify to View Phone Number' : 'Contact the Owner';
    document.getElementById('form-subtitle').textContent = isPhone
        ? 'Enter your details to reveal the advertiser\'s phone number'
        : 'Fill in your details — the advertiser will be able to see them';
    document.getElementById('send-otp-label').textContent = 'Send OTP';

    document.getElementById('contact-modal').classList.add('active');
    setTimeout(() => document.getElementById('buyer-name').focus(), 300);
}

function handleOverlayClick(e) {
    if (e.target === document.getElementById('contact-modal')) closeModal();
}

function closeModal() {
    const m = document.getElementById('contact-modal');
    if (m) m.classList.remove('active');
}

// ─── Step helper ─────────────────────────────────────────────────────────────
function showStep(id) {
    ['step-form', 'step-otp', 'step-success'].forEach(s => {
        document.getElementById(s).style.display = s === id ? 'block' : 'none';
    });
}

// ─── Form submission ─────────────────────────────────────────────────────────
function submitForm() {
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

    // Simulate sending OTP
    const btn = document.getElementById('send-otp-btn');
    const label = document.getElementById('send-otp-label');
    const loader = document.getElementById('send-otp-loader');
    btn.disabled = true;
    label.style.display = 'none';
    loader.style.display = 'inline-block';

    // Generate random 6-digit OTP
    _mockOTP = String(Math.floor(100000 + Math.random() * 900000));

    setTimeout(() => {
        btn.disabled = false;
        label.style.display = 'inline';
        loader.style.display = 'none';
        document.getElementById('otp-phone-display').textContent = `+91 ${phone}`;
        document.getElementById('demo-otp-display').textContent = _mockOTP;
        showStep('step-otp');
        setTimeout(() => document.querySelector('.otp-box').focus(), 200);
    }, 1500);
}

// ─── OTP input navigation ────────────────────────────────────────────────────
function otpInput(input) {
    input.value = input.value.replace(/\D/g, '');
    if (input.value && input.nextElementSibling?.classList.contains('otp-box')) {
        input.nextElementSibling.focus();
    }
    // Auto-verify when all 6 filled
    const boxes = [...document.querySelectorAll('.otp-box')];
    if (boxes.every(b => b.value)) verifyOtp();
}

function otpKeydown(e, input) {
    if (e.key === 'Backspace' && !input.value && input.previousElementSibling?.classList.contains('otp-box')) {
        input.previousElementSibling.focus();
    }
}

function resendOtp() {
    _mockOTP = String(Math.floor(100000 + Math.random() * 900000));
    document.getElementById('demo-otp-display').textContent = _mockOTP;
    document.querySelectorAll('.otp-box').forEach(b => b.value = '');
    document.getElementById('err-otp').textContent = '';
    document.querySelector('.otp-box').focus();
    showToast('OTP resent!');
}

// ─── OTP verification ────────────────────────────────────────────────────────
function verifyOtp() {
    const entered = [...document.querySelectorAll('.otp-box')].map(b => b.value).join('');
    if (entered.length < 6) { showError('err-otp', 'Please enter all 6 digits'); return; }
    if (entered !== _mockOTP) { showError('err-otp', 'Incorrect OTP. Please try again.'); return; }

    document.getElementById('err-otp').textContent = '';
    showSuccessStep();
}

// ─── Success screen ───────────────────────────────────────────────────────────
function showSuccessStep() {
    const p = _currentProp;
    const isPhone = _modalMode === 'phone';

    document.getElementById('success-subtitle').textContent =
        isPhone ? 'Phone number revealed successfully' : 'Your details have been shared with the advertiser';

    // Advertiser info
    document.getElementById('adv-name').textContent = p.advertiserName;
    document.getElementById('adv-phone').textContent = p.advertiserPhone;
    document.getElementById('adv-call-link').href = `tel:${p.advertiserPhone.replace(/\s/g, '')}`;

    // Buyer info
    document.getElementById('buyer-display-name').textContent = _buyerData.name;
    document.getElementById('buyer-display-phone').textContent = `+91 ${_buyerData.phone}`;
    document.getElementById('buyer-display-email').textContent = _buyerData.email;

    showStep('step-success');
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
}
function clearErrors() {
    ['err-name', 'err-phone', 'err-email'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '';
    });
}

function showToast(msg) {
    let t = document.getElementById('nf-toast');
    if (!t) {
        t = document.createElement('div');
        t.id = 'nf-toast';
        t.className = 'nf-toast';
        document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

// Close modal on Escape key
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});
