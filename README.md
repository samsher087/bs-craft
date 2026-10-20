# Being Samsher Crafting — Contemporary Luxury Digital Showroom & Studio

> **Brand Tagline:** "Where Every Design Becomes a New Identity."  
> **Brand Signature:** "Being Samsher Crafting — Har Creation Mein Mehnat Aur Perfection!"  
> **Location:** Jharkhand, India (All India Delivery Subject to Feasibility)

A modern, premium, responsive digital showroom and e-commerce catalogue built for **Being Samsher Crafting**, showcasing custom handcrafted architectural models, Tajiya, Gumbad, Minar, Mini Madina, Dargah replicas, thermocol cutting, and fine jali work.

---

## 🎨 Visual Design System & Aesthetics

- **Contemporary Luxury Aesthetic**: Modern design studio feel with editorial typography and balanced light-and-dark rhythm.
- **Color Palette**:
  - Main Background: Warm Off-White (`#F7F6F2`)
  - Primary Typography: Near-Black Charcoal (`#151515`)
  - Metallic Gold Accent: (`#C6A15B`)
  - Deep Emerald Secondary Accent: (`#124B3D`)
  - Alternate Dark Sections: Charcoal (`#171918`)
- **Restrained Geometric Corners**: `rounded-card` (10px - 14px), thin subtle borders (`border-[#E7E5DF]`), and elevation shadows.
- **Editorial Typography**: Inter / Plus Jakarta Sans for interface, Playfair Display & Cormorant Garamond for luxury headlines.

---

## 🌟 Architecture & Completed Features

### 1. Cinematic Video Hero
- Full-viewport hero with background video, translucent dark contrast overlay, and fallback poster.
- Play / Pause video control with sound muted, loop, and playsInline for high mobile compatibility.
- Eyebrow: `"HANDCRAFTED EXCELLENCE · CUSTOM MADE"`
- Headline: `"Artistry That Brings Every Detail to Life."`
- Supporting text: `"Discover beautifully crafted Tajiya, Gumbad, Minar and architectural models, created with precision, creativity, and passion."`
- Dual CTAs: `"Explore Our Collection"` and `"Create Your Custom Model"`.

### 2. Sticky Modern Navigation & Slide-Out Cart
- Sticky navbar with brand monogram logo, navigation links, and Cart Drawer trigger with live badge counter.
- Slide-out Cart Drawer with item breakdown, size and lighting selection summary, quantity controls, estimated subtotal, and `"Order Selection via WhatsApp"`.

### 3. Ordered Homepage Flow (Sections A – J)
- **Hero Video**: Full-viewport cinematic hero.
- **Section A: Featured Collections**: Editorial cards across the 8 core categories.
- **Section B: Bestselling Models**: Product cards with sample pricing in INR, availability, quick-view modal, and WhatsApp ordering.
- **Section C: Craftsmanship in Motion**: 5-stage artisan video strip (Thermocol cutting, jali fretwork, assembly, lighting installation, reveal) with modal playback.
- **Section D: Made to Order**: Split-layout artisan section with workshop photography and custom commission CTA.
- **Section E: Our Process**: 6-step visual timeline (Share idea -> Dimensions & design -> Confirm price -> Detailing -> Inspection -> Safe dispatch).
- **Section F: Featured Project Story**: Deep-dive into a masterpiece model with multi-photo gallery, specs, and direct WhatsApp enquiry.
- **Section G: Trust & Delivery**: Authentic wooden shipping crate photos, foam mold specs, and transparent All India delivery feasibility statement.
- **Section H: Instagram & YouTube**: Visual gallery of real workshop craftsmanship linked to configurable social channels.
- **Section I: Final CTA**: `"Let's Build Something Extraordinary."`
- **Section J: Footer**: Brand identity, categories, quick links, legal policies, and studio contacts.

### 4. Product Catalogue with Configured Pricing (`/products`)
- 8 official categories:
  1. Tajiya
  2. Gumbad
  3. Gumbad-e-Khazra / Mini Madina
  4. Minar
  5. Dargah & Religious Architectural Models
  6. Thermocol Cutting & Fine Jali Work
  7. Decorative Models
  8. Custom Creations
- Individual pricing in INR (demo sample records) with size-based price variants.
- Search by name, category filters, price range filter, sort by price (low to high, high to low), sort by newest/featured.
- Quick-view modal, pagination, and direct WhatsApp ordering.

### 5. Individual Dedicated Product Detail Pages (`/products/:slug`)
- Dedicated routes (e.g. `/products/gumbad-e-khazra-mini-model`, `/products/royal-tajiya-design`).
- High-resolution gallery with thumbnail switcher and full lightbox zoom.
- Dynamic price calculator reacting to selected size and lighting configurations.
- "Add to Cart", "Buy Now", contextual "Order on WhatsApp", and "Ask a Question".
- Specifications table (dimensions, material, finish, lighting, production lead time, crated packaging).

### 6. Custom Order Studio (`/custom-order`)
- Headline: `"Your Idea. Our Craft. One Extraordinary Creation."`
- Comprehensive inputs: Customer name, WhatsApp number, email (optional), product category, 3D dimensions (height, width, depth), preferred material, colour/finish, lighting, quantity, budget in INR, delivery location, required date, design description, and reference image upload.
- Full validation, loading spinner, confetti celebration, and prefilled WhatsApp fallback.

### 7. Protected Studio Admin Console (`/admin`)
- PIN-protected authentication (Default PIN: `samsher2026`).
- **Catalogue Product CMS**: Add, edit, delete models; set exact selling prices, starting prices, and discount strikethroughs; configure size variants; manage categories; upload image URLs.
- **Enquiries CRM**: Review customer custom order submissions, track statuses (New, Contacted, In Discussion, Completed), and 1-click reply on WhatsApp.
- **Studio Settings**: Configurable hero video URL, poster image, central WhatsApp number, display phone, address, and social links.

---

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite 5, Tailwind CSS
- **Routing**: React Router DOM (v7)
- **Icons**: Lucide React + custom verified SVGs
- **State Management**: React Context (`CartContext`) with `localStorage` persistence
- **Animation**: Canvas Confetti, smooth CSS transitions
- **Validation & Stability**: React `ErrorBoundary`

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🔐 Admin Access
- Access URL: `http://localhost:5173/admin`
- Default Security PIN: `samsher2026` (changeable in Admin Settings or `.env`)

---

## 💬 Central WhatsApp Integration
Every product button, cart order, and custom commission is routed to the centrally configured WhatsApp number with contextual, URL-encoded messages including model name, selected size, and configured price.
