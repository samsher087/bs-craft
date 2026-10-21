// Product database with individual prices, size options, and authentic craftsmanship details
// Clearly labelled sample demo data — fully editable through the Admin Dashboard

export const productCategories = [
  "Tajiya",
  "Gumbad",
  "Gumbad-e-Khazra / Mini Madina",
  "Minar",
  "Dargah & Religious Architectural Models",
  "Thermocol Cutting & Fine Jali Work",
  "Decorative Models",
  "Custom Creations"
];

export const initialProducts = [
  {
    id: "prod-jali-ya-ali",
    slug: "ya-ali-calligraphy-jali-frame",
    sku: "BSC-JAL-YA01",
    name: "Ya Ali Handcrafted Jali Arched Frame",
    category: "Thermocol Cutting & Fine Jali Work",
    price: 150,
    priceDisplay: "₹150 / piece",
    isStartingPrice: false,
    originalPrice: 250,
    availability: "In Studio Stock / Ready to Ship",
    customizable: true,
    tag: "Bestseller",
    shortDesc: "Exquisite handcrafted white thermocol arched jali plaque with radiating sunburst lattice and central 'Ya Ali' calligraphy.",
    fullDesc: "Meticulously hand-carved decorative arched jali plaque created with high-density architectural thermocol. Features a fine radiating multi-tier floral latticework matrix centering on revered 'Ya Ali' Arabic calligraphy. Ideal for spiritual home decor, wall mounting, Tajiya stage framing, and backlit ceremonial illumination.",
    dimensions: "Height: 18 inches | Width: 12 inches | Depth: 1.5 inches",
    height: "18 inches",
    width: "12 inches",
    depth: "1.5 inches",
    material: "High-density smooth architectural thermocol, precision micro-knife cutwork",
    colorFinish: "Pure White (Ready for Custom Paint / Golden Gilding or Direct Display)",
    lighting: "Compatible with warm LED backlighting and spotlight shadow projection",
    craftTime: "Ready to Ship / 1–2 Days for Bulk",
    packaging: "Padded protective casing with corner guards",
    image: "/assets/images/jali_ya_ali.jpg",
    images: [
      "/assets/images/jali_ya_ali.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Single Piece (18 x 12 in)", dimensions: "18 x 12 x 1.5 in", price: 150 },
      { name: "Set of 2 Pieces", dimensions: "18 x 12 in each", price: 290 },
      { name: "Pack of 5 Pieces", dimensions: "18 x 12 in each", price: 700 },
      { name: "Bulk Set of 10 Pieces", dimensions: "18 x 12 in each", price: 1350 }
    ],
    lightingOptions: [
      { name: "Standard Unlit Plaque", price: 0 },
      { name: "Concealed Warm Golden Backlight Kit", price: 120 }
    ]
  },
  {
    id: "prod-jali-chand-tara",
    slug: "crescent-star-chand-tara-jali-frame",
    sku: "BSC-JAL-CT02",
    name: "Crescent & Star (Chand Tara) Jali Frame",
    category: "Thermocol Cutting & Fine Jali Work",
    price: 150,
    priceDisplay: "₹150 / piece",
    isStartingPrice: false,
    originalPrice: 250,
    availability: "In Studio Stock / Ready to Ship",
    customizable: true,
    tag: "Bestseller",
    shortDesc: "Arched white thermocol cutwork jali featuring radiating geometric sunburst petals and central Crescent Moon & Star emblem.",
    fullDesc: "Stunning Islamic architectural jali frame carved by hand from virgin high-density thermocol board. Features an ornate scalloped multi-foil arch, dozens of hand-perforated diamond facets in a sunburst layout, and a central crescent star emblem. Lightweight, durable, and breathtaking when lit from behind.",
    dimensions: "Height: 18 inches | Width: 12 inches | Depth: 1.5 inches",
    height: "18 inches",
    width: "12 inches",
    depth: "1.5 inches",
    material: "High-density architectural thermocol, micro-knife hand cutwork",
    colorFinish: "Pure White (Paintable or display as pristine white)",
    lighting: "Backlight ready for ambient shadow casting",
    craftTime: "Ready to Ship / 1–2 Days for Bulk",
    packaging: "Shockproof bubble-wrap and rigid carton packaging",
    image: "/assets/images/jali_chand_tara.jpg",
    images: [
      "/assets/images/jali_chand_tara.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Single Piece (18 x 12 in)", dimensions: "18 x 12 x 1.5 in", price: 150 },
      { name: "Set of 2 Pieces", dimensions: "18 x 12 in each", price: 290 },
      { name: "Pack of 5 Pieces", dimensions: "18 x 12 in each", price: 700 },
      { name: "Bulk Set of 10 Pieces", dimensions: "18 x 12 in each", price: 1350 }
    ],
    lightingOptions: [
      { name: "Standard Unlit Plaque", price: 0 },
      { name: "Concealed Warm Golden Backlight Kit", price: 120 }
    ]
  },
  {
    id: "prod-jali-diamond-lattice",
    slug: "diamond-geometric-lattice-jali-panel",
    sku: "BSC-JAL-DM03",
    name: "Diamond Geometric Lattice Jali Panel",
    category: "Thermocol Cutting & Fine Jali Work",
    price: 150,
    priceDisplay: "₹150 / piece",
    isStartingPrice: false,
    originalPrice: 220,
    availability: "In Studio Stock / Ready to Ship",
    customizable: true,
    tag: "Fine Cutwork",
    shortDesc: "Clean modern rectangular thermocol lattice cutwork panel featuring deep 3D diamond criss-cross arabesque jali geometry.",
    fullDesc: "Architectural grade rectangular lattice screen hand-carved with uniform diamond geometric apertures. Engineered with crisp 3D beveled edges, smooth surface finish, and exceptional symmetry. Widely used for mosque window scale replicas, Tajiya side panels, interior niche decor, and studio background lighting.",
    dimensions: "Height: 18 inches | Width: 10 inches | Depth: 1.75 inches",
    height: "18 inches",
    width: "10 inches",
    depth: "1.75 inches",
    material: "Dense virgin architectural thermocol, crisp 3D laser-grade hand carving",
    colorFinish: "Natural Pearl White",
    lighting: "Exceptional light and shadow projection with backlights",
    craftTime: "Ready to Ship / In Stock",
    packaging: "Rigid card backing with foam shock wrap",
    image: "/assets/images/jali_diamond_lattice.jpg",
    images: [
      "/assets/images/jali_diamond_lattice.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Standard Panel (18 x 10 in)", dimensions: "18 x 10 x 1.75 in", price: 150 },
      { name: "Pair of 2 Panels", dimensions: "18 x 10 in each", price: 290 },
      { name: "Pack of 6 Panels (Full Set)", dimensions: "18 x 10 in each", price: 850 }
    ],
    lightingOptions: [
      { name: "Standard Panel", price: 0 },
      { name: "Edge-lit Warm LED Strip", price: 120 }
    ]
  },
  {
    id: "prod-jali-om-sacred",
    slug: "sacred-om-sanatan-jali-frame",
    sku: "BSC-JAL-OM04",
    name: "Sacred Om (ॐ) Handcrafted Jali Frame",
    category: "Thermocol Cutting & Fine Jali Work",
    price: 150,
    priceDisplay: "₹150 / piece",
    isStartingPrice: false,
    originalPrice: 250,
    availability: "In Studio Stock / Ready to Ship",
    customizable: true,
    tag: "Sacred Art",
    shortDesc: "Auspicious arched white thermocol jali frame with radiating lotus-sunburst cutwork and central sacred 'Om' (ॐ) symbol.",
    fullDesc: "An exquisite hand-carved spiritual masterpiece featuring the sacred Vedic symbol 'Om' (ॐ) suspended in the center of an elaborate arched lotus-mandala sunburst. Handcrafted with high-density architectural thermocol with smooth edges and deep relief. Perfect for temple mandir backdrop, pooja room decor, festival stages, and spiritual gifts.",
    dimensions: "Height: 18 inches | Width: 12 inches | Depth: 1.5 inches",
    height: "18 inches",
    width: "12 inches",
    depth: "1.5 inches",
    material: "Dense virgin architectural thermocol, micro-knife hand cutwork",
    colorFinish: "Pristine Temple White",
    lighting: "Backlight compatible for divine golden halo effect",
    craftTime: "Ready to Ship / 1–2 Days for Bulk",
    packaging: "Double-cushioned protective package",
    image: "/assets/images/jali_om_sacred.jpg",
    images: [
      "/assets/images/jali_om_sacred.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Single Piece (18 x 12 in)", dimensions: "18 x 12 x 1.5 in", price: 150 },
      { name: "Set of 2 Pieces", dimensions: "18 x 12 in each", price: 290 },
      { name: "Pack of 5 Pieces", dimensions: "18 x 12 in each", price: 700 },
      { name: "Bulk Set of 10 Pieces", dimensions: "18 x 12 in each", price: 1350 }
    ],
    lightingOptions: [
      { name: "Standard Unlit Plaque", price: 0 },
      { name: "Concealed Warm Golden Backlight Kit", price: 120 }
    ]
  },
  {
    id: "prod-gumbad-e-khazra",
    slug: "gumbad-e-khazra-mini-model",
    sku: "BSC-GKH-01",
    name: "Gumbad-e-Khazra Mini Model",
    category: "Gumbad-e-Khazra / Mini Madina",
    price: 18500,
    priceDisplay: "Starting at ₹18,500",
    isStartingPrice: true,
    originalPrice: 21000,
    availability: "Made to Order (14–18 Days)",
    customizable: true,
    tag: "Bestseller",
    shortDesc: "Revered replica of the iconic Green Dome of Madina with golden pinnacle, arched gallery facade, and warm glowing interior.",
    fullDesc: "Meticulously proportioned homage to the sacred Green Dome of Al-Masjid an-Nabawi. Handcrafted with authentic emerald green dome curvature, 24-carat styled golden finial, white pillared veranda, and micro-latticed jali windows illuminated with sacred warm light.",
    dimensions: "Base: 24 x 24 inches | Height: 32 inches",
    height: "32 inches",
    width: "24 inches",
    depth: "24 inches",
    material: "High-density precision thermocol, mount board, acrylic base",
    colorFinish: "Satin Emerald Green with Metallic Gold Gilded Pinnacles",
    lighting: "Internal warm golden LED halo glowing through arched lattice windows",
    craftTime: "14 to 18 Days",
    packaging: "Cushioned inner foam housing, moisture-barrier wrap, rigid wooden transit crate",
    image: "/assets/images/gumbad_e_khazra.jpg",
    images: [
      "/assets/images/gumbad_e_khazra.jpg",
      "/assets/images/mini_madina_model.jpg",
      "/assets/images/grand_gumbad_night.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Compact (24 in Height)", dimensions: "18 x 18 x 24 in", price: 14500 },
      { name: "Standard (32 in Height)", dimensions: "24 x 24 x 32 in", price: 18500 },
      { name: "Grand Scale (42 in Height)", dimensions: "32 x 32 x 42 in", price: 27500 }
    ],
    lightingOptions: [
      { name: "Integrated Warm Golden LED System", price: 0 },
      { name: "Dual-Circuit Remote Dimmer System", price: 2200 }
    ]
  },
  {
    id: "prod-ajmer-dargah-taaj",
    slug: "ajmer-dargah-taaj",
    sku: "BSC-AJM-02",
    name: "Ajmer Dargah Taaj with Golden Kalas",
    category: "Dargah & Religious Architectural Models",
    price: 17500,
    priceDisplay: "Starting at ₹17,500",
    isStartingPrice: true,
    originalPrice: 19500,
    availability: "Made to Order (16–22 Days)",
    customizable: true,
    tag: "Heritage Craft",
    shortDesc: "Spiritual tribute model with ornate white and gold dome, illuminated portico, and regal crown kalas.",
    fullDesc: "Inspired by the sacred architecture of Khwaja Gharib Nawaz Dargah in Ajmer Sharif. Features the distinct bulbous white dome with gilded ribs, multi-tier golden crown kalas, glowing courtyard veranda, and perimeter jali fence.",
    dimensions: "Base: 30 x 30 inches | Height: 36 inches",
    height: "36 inches",
    width: "30 inches",
    depth: "30 inches",
    material: "Sculpted high-grade thermocol, metallic gold leafing, pearl enamel coat",
    colorFinish: "Royal Pearl White & 24k Gold Foil Leafing",
    lighting: "Warm white ambient internal LEDs casting intricate shadow patterns",
    craftTime: "16 to 22 Days",
    packaging: "Double-layered wooden crate with custom corner shock absorbers",
    image: "/assets/images/ajmer_dargah_model.jpg",
    images: [
      "/assets/images/ajmer_dargah_model.jpg",
      "/assets/images/workshop_jali_cutting.jpg",
      "/assets/images/dispatch_packaging.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Standard (30 in Height)", dimensions: "24 x 24 x 30 in", price: 17500 },
      { name: "Grand Darbar (36 in Height)", dimensions: "30 x 30 x 36 in", price: 23500 },
      { name: "Majestic Shrine (42 in Height)", dimensions: "36 x 36 x 42 in", price: 31000 }
    ],
    lightingOptions: [
      { name: "Standard Internal Glow", price: 0 },
      { name: "Chandelier Effect Micro-LEDs", price: 2200 }
    ]
  },
  {
    id: "prod-maula-ali-roza",
    slug: "maula-ali-roza-model",
    sku: "BSC-MAR-03",
    name: "Maula Ali Roza Model",
    category: "Dargah & Religious Architectural Models",
    price: 15000,
    priceDisplay: "Starting at ₹15,000",
    isStartingPrice: true,
    originalPrice: 18000,
    availability: "Made to Order (16–22 Days)",
    customizable: true,
    tag: "Sacred Landmark",
    shortDesc: "Sacred architectural model of the holy Shrine Roza of Maula Ali with monumental golden dome, Arabic calligraphy, twin minarets, and illuminated pillared arcade.",
    fullDesc: "Inspired by the revered Shrine of Maula Ali in Najaf. Features the monumental 24k gold gilded dome, sacred Quranic calligraphy inscribed around the drum, twin golden minarets with muazzin galleries, illuminated open arcade with golden columns, and warm glowing interior.",
    dimensions: "Base: 30 x 24 inches | Height: 28 inches",
    height: "28 inches",
    width: "30 inches",
    depth: "24 inches",
    material: "High-density architectural thermocol, 24k gold leaf foil, metallic pillars, rigid base",
    colorFinish: "Brilliant 24k Metallic Gold & Pearl White",
    lighting: "Warm golden internal LEDs illuminating pillared portico arcade and dome drum",
    craftTime: "16 to 22 Days",
    packaging: "Heavy-duty custom wooden shipping crate with foam mold cushioning",
    image: "/assets/images/maula_ali_roza_model.jpg",
    images: [
      "/assets/images/maula_ali_roza_model.jpg",
      "/assets/images/workshop_jali_cutting.jpg",
      "/assets/images/dispatch_packaging.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Standard (30x24 in Base)", dimensions: "30 x 24 x 28 in", price: 15000 },
      { name: "Grand Darbar (38x28 in Base)", dimensions: "38 x 28 x 34 in", price: 21500 },
      { name: "Majestic Scale (46x32 in Base)", dimensions: "46 x 32 x 40 in", price: 28500 }
    ],
    lightingOptions: [
      { name: "Full Pillared Arcade Warm Glow", price: 0 },
      { name: "Dual-Circuit Remote Dimmer LEDs", price: 2200 }
    ]
  },
  {
    id: "prod-gous-pak-dome",
    slug: "gous-pak-royal-blue-dome",
    sku: "BSC-GPD-04",
    name: "Gous Pak Royal Blue Gumbad Model",
    category: "Gumbad",
    price: 15000,
    priceDisplay: "Starting at ₹15,000",
    isStartingPrice: true,
    originalPrice: 18000,
    availability: "Made to Order (14–18 Days)",
    customizable: true,
    tag: "Sacred Landmark",
    shortDesc: "Revered replica of the sacred Royal Blue Dome of Hazrat Ghouse-e-Azam (Gous Pak) in Baghdad Sharif with arabesque calligraphy and gilded pinnacle.",
    fullDesc: "Handcrafted homage to the holy shrine of Hazrat Sheikh Abdul Qadir Jilani (Gous Pak) in Baghdad Sharif. Features the monumental turquoise-blue dome with intricate Persian tile arabesque patterns, sacred Quranic calligraphy band, polished golden pinnacle, and internal warm halo illumination.",
    dimensions: "Base Diameter: 28 inches | Height: 36 inches",
    height: "36 inches",
    width: "28 inches",
    depth: "28 inches",
    material: "Reinforced composite architectural thermocol, 24k gold leafing, ceramic finish",
    colorFinish: "Royal Baghdad Blue & 24k Gold Finial",
    lighting: "Dual-circuit warm golden backlight with internal dome halo",
    craftTime: "14 to 18 Days",
    packaging: "Circular reinforced cradle crate with high-density shock foam",
    image: "/assets/images/royal_blue_dome.jpg",
    images: [
      "/assets/images/royal_blue_dome.jpg",
      "/assets/images/gous_pak_dome.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Standard (28 in Base)", dimensions: "28 in base x 36 in height", price: 15000 },
      { name: "Grand Scale (36 in Base)", dimensions: "36 in base x 46 in height", price: 21500 },
      { name: "Darbar Majestic (48 in Base)", dimensions: "48 in base x 60 in height", price: 29500 }
    ],
    lightingOptions: [
      { name: "Ambient Golden Rim Illumination", price: 0 },
      { name: "360-Degree Concealed Arch Halo", price: 2200 }
    ]
  },
  {
    id: "prod-ala-hazrat-gumbad",
    slug: "ala-hazrat-gumbad-model",
    sku: "BSC-ALH-05",
    name: "Ala Hazrat Gumbad Model",
    category: "Gumbad",
    price: 3500,
    priceDisplay: "Starting at ₹3,500",
    isStartingPrice: true,
    originalPrice: 4200,
    availability: "Made to Order (8–12 Days)",
    customizable: true,
    tag: "Heritage Craft",
    shortDesc: "Iconic handcrafted replica of Gumbad-e-Ala Hazrat with signature black & white chevron geometry, emerald green scalloped canopy, and multi-tone base.",
    fullDesc: "A masterwork homage to the sacred and world-renowned dome of Imam Ahmad Raza Khan (Ala Hazrat) in Bareilly Sharif. Handcrafted with distinguished black and white zigzag chevron geometry, fluted scalloped emerald canopy, delicate crown pinnacle, and a festive tiered pedestal foundation in azure and amber tones.",
    dimensions: "Base: 12 x 12 inches | Height: 18 inches",
    height: "18 inches",
    width: "12 inches",
    depth: "12 inches",
    material: "High-density architectural thermocol, precision enamel coat, golden finial trims, acrylic pedestal",
    colorFinish: "Chevron Black & White, Emerald Canopy, Azure & Amber Pedestal",
    lighting: "Concealed warm golden internal LED backlight glow",
    craftTime: "8 to 12 Days",
    packaging: "Reinforced shockproof protective box with cushioned inner foam",
    image: "/assets/images/ala_hazrat_gumbad_model.jpg",
    images: [
      "/assets/images/ala_hazrat_gumbad_model.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "Compact (10x10x14 in)", dimensions: "10 x 10 x 14 in", price: 3500 },
      { name: "Standard (12x12x18 in)", dimensions: "12 x 12 x 18 in", price: 4800 },
      { name: "Grand Darbar (16x16x24 in)", dimensions: "16 x 16 x 24 in", price: 7200 }
    ],
    lightingOptions: [
      { name: "Standard Acoustic Base", price: 0 },
      { name: "Warm Golden LED System", price: 800 }
    ]
  },
  {
    id: "prod-madina-gumbad-minar",
    slug: "madina-sharif-gumbad-minar-model",
    sku: "BSC-MDN-06",
    name: "Madina Sharif Gumbad & Minar Model",
    category: "Gumbad-e-Khazra",
    price: 21000,
    priceDisplay: "Starting at ₹21,000",
    isStartingPrice: true,
    originalPrice: 24000,
    availability: "Made to Order (14–18 Days)",
    customizable: true,
    tag: "Masterpiece",
    shortDesc: "Revered replica of the Holy Green Dome with towering Minar-e-Nabawi, arched lattice colonnade, and ambient multi-tier illumination.",
    fullDesc: "An exquisite architectural tribute capturing the spiritual majesty of Al-Masjid an-Nabawi in Madina Munawwarah. Handcrafted with authentic emerald green dome curvature, polished golden finial, adjacent soaring minaret with detailed muazzin galleries, arched courtyard arcade with warm internal illumination, and multi-dome parapet detailing.",
    dimensions: "Base: 26 x 26 inches | Height: 34 inches",
    height: "34 inches",
    width: "26 inches",
    depth: "26 inches",
    material: "High-density precision thermocol, architectural mount board, acrylic base, gold leaf foil",
    colorFinish: "Satin Emerald Green, Royal Gold Finials & Pristine White Colonnade",
    lighting: "Multi-tier warm golden LED system illuminating arched windows and minaret lantern",
    craftTime: "14 to 18 Days",
    packaging: "Heavy-duty wooden transit crate with customized high-density foam cushion",
    image: "/assets/images/madina_gumbad_minar_model.jpg",
    images: [
      "/assets/images/madina_gumbad_minar_model.jpg",
      "/assets/images/gumbad_e_khazra.jpg",
      "/assets/images/mini_madina_model.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: true,
    sizeOptions: [
      { name: "Standard (26x26x34 in)", dimensions: "26 x 26 x 34 in", price: 21000 },
      { name: "Grand Darbar (32x32x42 in)", dimensions: "32 x 32 x 42 in", price: 28500 },
      { name: "Monumental (40x40x52 in)", dimensions: "40 x 40 x 52 in", price: 39000 }
    ],
    lightingOptions: [
      { name: "Full Ambient Warm Golden LED System", price: 0 },
      { name: "Dual-Circuit Dimmer & Remote Control", price: 2200 }
    ]
  },
  {
    id: "prod-thermocol-jali-panel",
    slug: "intricate-thermocol-jali-work",
    sku: "BSC-JAL-07",
    name: "Intricate Thermocol Jali Master Panel",
    category: "Thermocol Cutting & Fine Jali Work",
    price: 8500,
    priceDisplay: "Starting at ₹8,500 / Panel",
    isStartingPrice: true,
    originalPrice: null,
    availability: "In Studio Stock / Custom Sizes",
    customizable: true,
    tag: "Fine Cutwork",
    shortDesc: "Ultra-fine precision hand cutwork displaying arabesque octagonal star matrices and decorative calligraphy borders.",
    fullDesc: "The pinnacle of thermocol carving craft. Master artisan Samsher Alam uses specialized micro-blades to carve delicate lace-like geometric matrices with sub-millimeter tolerances. When illuminated from behind, it projects an ethereal play of light and shadow.",
    dimensions: "Custom sheets from 2x2 ft up to 8x4 ft panels",
    height: "4 Feet",
    width: "2 Feet",
    depth: "1.5 inches",
    material: "High-density smooth thermocol, acrylic backing",
    colorFinish: "Natural Ivory with Gold Edging",
    lighting: "Optional edge-lit LED acrylic backlight frame",
    craftTime: "7 to 12 Days",
    packaging: "Sandwiched between MDF stiffener boards with bubble wrap",
    image: "/assets/images/workshop_jali_cutting.jpg",
    images: [
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: false,
    sizeOptions: [
      { name: "2 x 2 Feet Panel", dimensions: "24 x 24 in", price: 4500 },
      { name: "4 x 2 Feet Panel", dimensions: "48 x 24 in", price: 8500 },
      { name: "6 x 3 Feet Grand Screen", dimensions: "72 x 36 in", price: 15500 }
    ],
    lightingOptions: [
      { name: "Unlit Acoustic Screen Panel", price: 0 },
      { name: "Edge-lit Warm LED Acrylic Frame", price: 2100 }
    ]
  },
  {
    id: "prod-kaaba-sharif-model",
    slug: "holy-kaaba-sharif-model",
    sku: "BSC-KBA-08",
    name: "Holy Kaaba Sharif Model",
    category: "Dargah & Religious Architectural Models",
    price: 12000,
    priceDisplay: "Starting at ₹12,000",
    isStartingPrice: true,
    originalPrice: 15000,
    availability: "Made to Order (10–14 Days)",
    customizable: true,
    tag: "Illuminated Art",
    shortDesc: "Sacred handcrafted replica of the Holy Kaaba with gold-embossed Kiswah calligraphy band, ornate golden Bab al-Kaaba door, and brick pedestal foundation.",
    fullDesc: "A reverent, meticulously proportioned handcrafted model of the Holy Kaaba (Baitullah Al-Haram) in Makkah. Features the rich black Kiswah draping adorned with golden Quranic calligraphy inscriptions, detailed sculpted replica of the golden Bab al-Kaaba entrance door, white border ribbon, and authentic masonry brickwork foundation base.",
    dimensions: "Base: 16 x 16 inches | Height: 22 inches",
    height: "22 inches",
    width: "16 inches",
    depth: "16 inches",
    material: "Reinforced architectural thermocol core, premium matte velvet Kiswah finish, embossed gold foil, acrylic foundation",
    colorFinish: "Deep Velvet Black with 24k Gilded Calligraphy & Golden Door",
    lighting: "Concealed ambient base backlight and golden illumination highlight",
    craftTime: "10 to 14 Days",
    packaging: "Shockproof multi-layer wooden crate with moisture seal",
    image: "/assets/images/kaaba_sharif_model.jpg",
    images: [
      "/assets/images/kaaba_sharif_model.jpg",
      "/assets/images/workshop_jali_cutting.jpg",
      "/assets/images/dispatch_packaging.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "Compact (14x14x18 in)", dimensions: "14 x 14 x 18 in", price: 12000 },
      { name: "Standard (16x16x22 in)", dimensions: "16 x 16 x 22 in", price: 16500 },
      { name: "Grand Scale (22x22x30 in)", dimensions: "22 x 22 x 30 in", price: 23500 }
    ],
    lightingOptions: [
      { name: "Warm Ambient Base Aura", price: 0 },
      { name: "Accent Spotlight System", price: 1800 }
    ]
  },
  {
    id: "prod-mini-madina-compact",
    slug: "mini-madina-model",
    sku: "BSC-MDN-09",
    name: "Mini Madina Model",
    category: "Gumbad-e-Khazra / Mini Madina",
    price: 4500,
    priceDisplay: "Starting at ₹4,500",
    isStartingPrice: true,
    originalPrice: 5500,
    availability: "In Studio Stock / Ready to Ship",
    customizable: true,
    tag: "Bestseller",
    shortDesc: "Compact handcrafted replica of the holy Green Dome with soaring white minaret, multi-level colonnade base, and emerald arched windows.",
    fullDesc: "An exquisite compact tabletop sacred centerpiece replicating the holy Al-Masjid an-Nabawi in Madina Munawwarah. Features the sculpted vibrant green dome crowned with a golden pinnacle, adjacent pure white minaret, tiered courtyard base, and detailed emerald-accented arched openings.",
    dimensions: "Base: 10 x 10 inches | Height: 15 inches",
    height: "15 inches",
    width: "10 inches",
    depth: "10 inches",
    material: "High-density precision architectural thermocol, gold leaf finial, acrylic base",
    colorFinish: "Satin Emerald Green & Pure Ivory White",
    lighting: "Concealed warm white micro-LED lighting system",
    craftTime: "5 to 8 Days",
    packaging: "Padded protective box with transit safety packaging",
    image: "/assets/images/mini_madina_compact_model.jpg",
    images: [
      "/assets/images/mini_madina_compact_model.jpg",
      "/assets/images/gumbad_e_khazra.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "Desk / Tabletop (8x8x12 in)", dimensions: "8 x 8 x 12 in", price: 4500 },
      { name: "Standard Display (10x10x15 in)", dimensions: "10 x 10 x 15 in", price: 5800 },
      { name: "Grand Showcase (14x14x20 in)", dimensions: "14 x 14 x 20 in", price: 8200 }
    ],
    lightingOptions: [
      { name: "Integrated Warm White Accent LEDs", price: 0 },
      { name: "Dual-Mode Ambient Dimmer", price: 950 }
    ]
  },
  {
    id: "prod-tajiya-islamic-mosque-model",
    slug: "handcrafted-islamic-model-mosque-darbar",
    sku: "BSC-TAJ-MM01",
    name: "Handcrafted Islamic Model Mosque Tajiya",
    category: "Tajiya",
    price: 65000,
    priceDisplay: "Starting at ₹65,000",
    isStartingPrice: true,
    originalPrice: 72000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Signature Masterpiece",
    shortDesc: "Masterpiece multi-tiered Islamic architectural mosque model featuring illuminated emerald dome, glowing minarets with green neon glass, calligraphic gilded plaques, and scalloped niche drapery.",
    fullDesc: "The signature Being Samsher Handcrafted Islamic Model Mosque Tajiya, engineered with supreme devotion and master craftsmanship. Features an elegant emerald green ribbed central dome with delicate white arabesque filigree and gilded kalash finial, surrounded by multi-tier illuminated minarets with vivid green internal glow. The mid-tier displays gold calligraphic Arabic plaques and intricate filigree fretwork, while the ground arcade showcases warm amber-lit scalloped niches with emerald pleated drapes and diamond jali screens. Ideal for Mawlid, Naat gatherings, Islamic cultural exhibitions, royal Darbars, and prestigious sanctums.",
    dimensions: "Base: 4 x 4 Feet | Height: 8.5 Feet (Customizable)",
    height: "8.5 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "High-density reinforced thermocol, 24k metallic gold leafing, emerald lacquer, acrylic optical diffusers, heavy timber load chassis",
    colorFinish: "Pure Ivory White, Royal Emerald Green & 24k Gilded Accents",
    lighting: "Full-circuit internal LED array: glowing green dome & minaret tubes, warm white perimeter downlights, and niche spotlights",
    craftTime: "18 to 25 Days",
    packaging: "Heavy-duty wooden transit crate with custom shock-absorbing foam contours",
    image: "/assets/images/tajiya_islamic_mosque_model_grand.jpg",
    images: [
      "/assets/images/tajiya_islamic_mosque_model_grand.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "3.5 Feet Height (Table / Home Scale)", dimensions: "24 x 24 x 42 in", price: 24000 },
      { name: "5.5 Feet Height (Mawlid / Event Scale)", dimensions: "36 x 36 x 66 in", price: 36000 },
      { name: "8.5 Feet Height (Grand Darbar Scale)", dimensions: "48 x 48 x 102 in", price: 48000 },
      { name: "11+ Feet Monumental Palace Scale", dimensions: "60 x 60 x 132 in", price: 70000 }
    ],
    lightingOptions: [
      { name: "Full Multi-Circuit Illumination Array", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-blue-arcade",
    slug: "royal-blue-fluted-dome-arcade-tajiya",
    sku: "BSC-TAJ-BL01",
    name: "Royal Blue Fluted Dome Arcade Tajiya",
    category: "Tajiya",
    price: 55000,
    priceDisplay: "Starting at ₹55,000",
    isStartingPrice: true,
    originalPrice: 65000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Handcrafted Excellence",
    shortDesc: "Majestic handcrafted Tajiya featuring blue & white fluted melon dome, double-tier multi-arch arcade, floral garland balustrade, and 6 perimeter minarets with emerald spear finials.",
    fullDesc: "A masterpiece of devotional craftsmanship by Being Samsher Crafting. Designed with an iconic blue and white fluted dome, elevated multi-foil arched jali windows, floral festoon balustrades, and six soaring minarets with emerald spearheads. Perfect for Mawlid, Naat, Islamic events, and luxury home decor. Engineered for safe, crated All-India delivery.",
    dimensions: "Base: 3.5 x 3.5 Feet | Height: 8.5 Feet (Customizable)",
    height: "8.5 Feet",
    width: "3.5 Feet",
    depth: "3.5 Feet",
    material: "Reinforced high-density thermocol, blue velvet trim, metallic gold accents, timber base chassis",
    colorFinish: "Royal Sapphire Blue, Pristine White & Emerald Green Accents",
    lighting: "Integrated multi-tier internal LED glow with arched window illumination",
    craftTime: "15 to 22 Days",
    packaging: "Heavy-duty reinforced wooden freight crate with high-density shock foam cushioning",
    image: "/assets/images/tajiya_blue_white_arcade.jpg",
    images: [
      "/assets/images/tajiya_blue_white_arcade.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "5.5 Feet (Standard Sanctum)", dimensions: "30 x 30 x 66 in", price: 36000 },
      { name: "7.5 Feet (Grand Gallery)", dimensions: "38 x 38 x 90 in", price: 48000 },
      { name: "9.5+ Feet (Monumental Procession)", dimensions: "48 x 48 x 114 in", price: 68000 }
    ],
    lightingOptions: [
      { name: "Warm Golden Arched Illumination", price: 0 },
      { name: "Multi-Color Festal LED System with Remote", price: 2800 }
    ]
  },
  {
    id: "prod-tajiya-royal-blue-glow",
    slug: "royal-blue-illuminated-sanctum-tajiya",
    sku: "BSC-TAJ-BL02",
    name: "Royal Blue Illuminated Sanctum Tajiya",
    category: "Tajiya",
    price: 60000,
    priceDisplay: "Starting at ₹60,000",
    isStartingPrice: true,
    originalPrice: 70000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Illuminated Masterpiece",
    shortDesc: "Awe-inspiring illuminated Tajiya featuring bulbous blue dome with golden star crests, warm-lit lattice pillars, hanging star lanterns, and ornate scrollwork base.",
    fullDesc: "Handcrafted with surgical precision, this royal blue Tajiya combines magnificent architectural scale with ethereal nighttime illumination. Features illuminated bulbous lantern pillars, hanging celestial star pendants, intricate filigree jali arches, crescent star medallions, and a richly detailed Baroque base.",
    dimensions: "Base: 3.5 x 3.5 Feet | Height: 8 Feet (Customizable)",
    height: "8 Feet",
    width: "3.5 Feet",
    depth: "3.5 Feet",
    material: "Surgical-cut thermocol, 24k gold leaf filigree, royal blue velvet, wooden structural frame",
    colorFinish: "Royal Blue, Golden Foil & Pearl White",
    lighting: "Dual-circuit warm golden ambient LEDs with hanging illuminated star lanterns",
    craftTime: "16 to 24 Days",
    packaging: "Modular sectional pack with reinforced wooden freight crate",
    image: "/assets/images/tajiya_royal_blue_illuminated.jpg",
    images: [
      "/assets/images/tajiya_royal_blue_illuminated.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "5 Feet Height", dimensions: "28 x 28 x 60 in", price: 38000 },
      { name: "8 Feet Height", dimensions: "42 x 42 x 96 in", price: 52000 },
      { name: "11 Feet Monumental Scale", dimensions: "52 x 52 x 132 in", price: 74000 }
    ],
    lightingOptions: [
      { name: "Integrated Celestial Star Glow", price: 0 },
      { name: "12V Battery Pack for Outdoor Processions", price: 3400 }
    ]
  },
  {
    id: "prod-tajiya-amber-glow",
    slug: "amber-glow-heritage-palace-tajiya",
    sku: "BSC-TAJ-AM03",
    name: "Amber Glow Heritage Palace Tajiya",
    category: "Tajiya",
    price: 48000,
    priceDisplay: "Starting at ₹48,000",
    isStartingPrice: true,
    originalPrice: 55000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Bespoke Heritage",
    shortDesc: "Imperial multi-arch palace shrine featuring tessellated dome with royal blue collar, warm amber backlit jali windows, golden flame finials, and emerald velvet plinth.",
    fullDesc: "Exemplifying classical Mughal & Awadhi palace architecture, this handcrafted Tajiya features a tessellated central dome, illuminated golden-amber arched windows casting hypnotic shadows, quadruple fluted minarets with blue bands, golden finial torches, and deep emerald green velvet base.",
    dimensions: "Base: 3.5 x 3.5 Feet | Height: 8.5 Feet (Customizable)",
    height: "8.5 Feet",
    width: "3.5 Feet",
    depth: "3.5 Feet",
    material: "High-density virgin thermocol, structural wood armature, amber optical diffuser screens",
    colorFinish: "Pristine White, Sapphire Blue Bands, Amber Glow & Emerald Base",
    lighting: "Warm amber internal LED channels with high-contrast window silhouettes",
    craftTime: "15 to 20 Days",
    packaging: "Shock-absorbing foam cradle insertion inside heavy wooden shipping crate",
    image: "/assets/images/tajiya_amber_glow_palace.jpg",
    images: [
      "/assets/images/tajiya_amber_glow_palace.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "5.5 Feet Height", dimensions: "30 x 30 x 66 in", price: 34000 },
      { name: "8.5 Feet Height", dimensions: "42 x 42 x 102 in", price: 47000 },
      { name: "11 Feet Monumental Scale", dimensions: "54 x 54 x 132 in", price: 69000 }
    ],
    lightingOptions: [
      { name: "Amber Halo Backlight Kit", price: 0 },
      { name: "Wireless Remote Dimmer System", price: 2400 }
    ]
  },
  {
    id: "prod-tajiya-emerald-gold-shahi",
    slug: "emerald-gold-shahi-mubarak-tajiya",
    sku: "BSC-TAJ-EG04",
    name: "Emerald & Gold Shahi Mubarak Tajiya",
    category: "Tajiya",
    price: 65000,
    priceDisplay: "Starting at 65,000",
    isStartingPrice: true,
    originalPrice: 75000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Royal Heritage",
    shortDesc: "Imperial royal green & gold Tajiya with filigree arabesque dome, 24k gold leafed pillared balconies, Ya-Ali sacred calligraphy plaques, and multi-tiered carved balustrades.",
    fullDesc: "One of Being Samsher Crafting's most celebrated grand master creations. Built with a signature emerald green ribbed dome wrapped in white calligraphic filigree, multi-tiered colonnades gilded in 24k gold leaf, sacred green arched calligraphy plaques, and hand-carved scalloped jali screens.",
    dimensions: "Base: 4 x 4 Feet | Height: 9 Feet (Customizable)",
    height: "9 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Multi-layered thermocol core, 24k gold leaf foil, emerald velvet, heavy base plate",
    colorFinish: "Royal Emerald Green, Pure White & 24k Gilded Gold Leafing",
    lighting: "Full 360-degree concealed warm golden lighting within all arcades & minarets",
    craftTime: "20 to 28 Days",
    packaging: "Custom heavy-duty wooden crate marked with fragile freight tags",
    image: "/assets/images/tajiya_emerald_gold_shahi.jpg",
    images: [
      "/assets/images/tajiya_emerald_gold_shahi.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6 Feet Height", dimensions: "32 x 32 x 72 in", price: 42000 },
      { name: "9 Feet Height", dimensions: "48 x 48 x 108 in", price: 58000 },
      { name: "12+ Feet Monumental", dimensions: "60 x 60 x 144 in", price: 82000 }
    ],
    lightingOptions: [
      { name: "Full Procession Glow Circuit", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-imperial-green",
    slug: "imperial-emerald-dome-courtyard-tajiya",
    sku: "BSC-TAJ-IG05",
    name: "Imperial Emerald Dome Courtyard Tajiya",
    category: "Tajiya",
    price: 65000,
    priceDisplay: "Starting at ₹65,000",
    isStartingPrice: true,
    originalPrice: 75000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Signature Creation",
    shortDesc: "Monumental open courtyard Tajiya with majestic emerald tiled dome, golden kalash finial, 4 towering perimeter minarets, and high multi-foil arched green jali lattice pavilions.",
    fullDesc: "Designed with soaring proportions and open courtyard pavilions, this imperial Tajiya highlights an emerald tiled dome topped with an ornate gold crown, four lofty perimeter minars with emerald fluting, and grand multi-foil arches enclosing green jali arabesque screen lattices. An awe-inspiring centrepiece for Mawlid, Naat, and sacred ceremonies.",
    dimensions: "Base: 4 x 4 Feet | Height: 9.5 Feet (Customizable)",
    height: "9.5 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Reinforced architectural thermocol, gold leaf filigree, emerald velvet, solid chassis",
    colorFinish: "Emerald Green, Crisp White & 24k Gold Accents",
    lighting: "Warm internal LED flood with illuminated minaret galleries",
    craftTime: "18 to 26 Days",
    packaging: "Heavy wooden shipping crate with high-density foam support",
    image: "/assets/images/tajiya_imperial_green_dome.jpg",
    images: [
      "/assets/images/tajiya_imperial_green_dome.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6.5 Feet Height", dimensions: "36 x 36 x 78 in", price: 39000 },
      { name: "9.5 Feet Height", dimensions: "48 x 48 x 114 in", price: 56000 },
      { name: "12 Feet Monumental Scale", dimensions: "60 x 60 x 144 in", price: 76000 }
    ],
    lightingOptions: [
      { name: "Concealed Warm Pavilion Glow", price: 0 },
      { name: "Wireless Remote Dimmer & Effects", price: 2600 }
    ]
  },
  {
    id: "prod-tajiya-quad-minar-dome",
    slug: "royal-blue-quad-minar-cathedral-tajiya",
    sku: "BSC-TAJ-BL06",
    name: "Royal Blue Quad Minar Illuminated Tajiya",
    category: "Tajiya",
    price: 55000,
    priceDisplay: "Starting at ₹55,000",
    isStartingPrice: true,
    originalPrice: 70000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Illuminated Masterpiece",
    shortDesc: "Majestic handcrafted Tajiya featuring central fluted royal blue dome, 4 soaring slender minarets, illuminated arched windows, and golden fretwork balustrades.",
    fullDesc: "A handcrafted masterpiece of architectural devotion by Being Samsher Crafting. Designed with a central fluted royal blue dome crowned with a gilded finial, four soaring perimeter minarets with sapphire pinnacles, warm interior-illuminated arched windows, and a raised balustrade terrace with gold filigree detailing. Built for Mawlid, Naat, Islamic events, and luxury home decor. Engineered for crated All-India delivery.",
    dimensions: "Base: 3.5 x 3.5 Feet | Height: 8.5 Feet (Customizable)",
    height: "8.5 Feet",
    width: "3.5 Feet",
    depth: "3.5 Feet",
    material: "Reinforced structural thermocol core, royal blue velvet, 24k gold leaf filigree, timber base chassis",
    colorFinish: "Royal Sapphire Blue, Pure White & Gilded Gold Finish",
    lighting: "Multi-tier concealed warm interior LED lighting system",
    craftTime: "16 to 24 Days",
    packaging: "Heavy-duty reinforced wooden freight crate with shock-absorbing foam",
    image: "/assets/images/tajiya_blue_minar_palace.jpg",
    images: [
      "/assets/images/tajiya_blue_minar_palace.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "5.5 Feet Height", dimensions: "30 x 30 x 66 in", price: 37000 },
      { name: "8.5 Feet Height", dimensions: "42 x 42 x 102 in", price: 51000 },
      { name: "11 Feet Monumental Scale", dimensions: "52 x 52 x 132 in", price: 72000 }
    ],
    lightingOptions: [
      { name: "Concealed Warm Pavilion Glow", price: 0 },
      { name: "Wireless Remote Dimmer & Festal Effects", price: 2600 }
    ]
  },
  {
    id: "prod-tajiya-golden-dome-lattice",
    slug: "golden-dome-diamond-lattice-tajiya",
    sku: "BSC-TAJ-GD07",
    name: "Golden Dome Diamond Lattice Tajiya",
    category: "Tajiya",
    price: 52000,
    priceDisplay: "Starting at ₹52,000",
    isStartingPrice: true,
    originalPrice: 65000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Handcrafted Excellence",
    shortDesc: "Striking ivory white and gilded gold Tajiya featuring fluted central dome, 4 golden minarets with crystal band detailing, and illuminated diamond lattice screens.",
    fullDesc: "A magnificent devotion-inspired creation by Being Samsher Crafting. Showcases a sculpted gilded central dome flanked by four ornate golden minars with decorative jeweled bands, warm interior illumination glowing through delicate diamond cutwork jali screens, and a multi-tiered pure white podium plinth. Perfect for Mawlid, Naat, Islamic exhibitions, and luxury sanctums.",
    dimensions: "Base: 3.5 x 3.5 Feet | Height: 8.5 Feet (Customizable)",
    height: "8.5 Feet",
    width: "3.5 Feet",
    depth: "3.5 Feet",
    material: "High-density thermocol fretwork, 24k gold leaf foil, diamond cut acrylic lattices, wooden support base",
    colorFinish: "Pure Ivory White & 24k Gilded Gold with Crystal Bands",
    lighting: "Concealed warm white/golden interior glow radiating through diamond lattices",
    craftTime: "15 to 22 Days",
    packaging: "Heavy-duty reinforced wooden freight crate with protective foam",
    image: "/assets/images/tajiya_golden_dome_lattice.jpg",
    images: [
      "/assets/images/tajiya_golden_dome_lattice.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "5.5 Feet Height", dimensions: "30 x 30 x 66 in", price: 35000 },
      { name: "8.5 Feet Height", dimensions: "42 x 42 x 102 in", price: 49000 },
      { name: "11 Feet Monumental Scale", dimensions: "52 x 52 x 132 in", price: 70000 }
    ],
    lightingOptions: [
      { name: "Concealed Warm Pavilion Glow", price: 0 },
      { name: "Dual-Mode Wireless Dimmer System", price: 2400 }
    ]
  },
  {
    id: "prod-tajiya-royal-golden-darbar",
    slug: "royal-golden-darbar-emerald-arcade-tajiya",
    sku: "BSC-TAJ-GD08",
    name: "Royal Golden Darbar Palace Tajiya",
    category: "Tajiya",
    price: 80000,
    priceDisplay: "Starting at ₹80,000",
    isStartingPrice: true,
    originalPrice: 85000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Bespoke Heritage",
    shortDesc: "Imperial all-gold palace Tajiya featuring grand central dome with drum arcades, twin soaring minarets, multi-dome balustrades, and emerald green colonnade arcade plinth.",
    fullDesc: "An imperial magnum opus handcrafted with opulent Indo-Islamic courtly architecture. Features a central gilded ribbed dome with illuminated arched drum, twin lofty observation minars, multiple golden cupola domes lining the balustrades, and a breathtaking emerald green arched lower gallery casting majestic warm ambient radiance. Designed for prestigious Darbars, Mawlid gatherings, and royal exhibitions.",
    dimensions: "Base: 4.5 x 4.5 Feet | Height: 9.5 Feet (Customizable)",
    height: "9.5 Feet",
    width: "4.5 Feet",
    depth: "4.5 Feet",
    material: "Reinforced structural thermocol core, 24k gold leaf foil, velvet emerald inlay, heavy wooden base plate",
    colorFinish: "Imperial Antique Gold & Royal Emerald Green Arcades",
    lighting: "Full-circuit multi-tier warm golden LED glow within all arcades & minarets",
    craftTime: "22 to 30 Days",
    packaging: "Multi-sectional wooden transit crate with high-density shock cushioning",
    image: "/assets/images/tajiya_royal_golden_darbar.jpg",
    images: [
      "/assets/images/tajiya_royal_golden_darbar.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6.5 Feet Height", dimensions: "36 x 36 x 78 in", price: 46000 },
      { name: "9.5 Feet Height", dimensions: "54 x 54 x 114 in", price: 64000 },
      { name: "13+ Feet Monumental Palace Scale", dimensions: "66 x 66 x 156 in", price: 88000 }
    ],
    lightingOptions: [
      { name: "Full Procession Glow Circuit", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-black-gold-procession",
    slug: "black-gold-ceremonial-flag-procession-tajiya",
    sku: "BSC-TAJ-BG09",
    name: "Black & Gold Ceremonial Procession Tajiya",
    category: "Tajiya",
    price: 51000,
    priceDisplay: "Starting at 51,000",
    isStartingPrice: true,
    originalPrice: 59000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Grand Procession",
    shortDesc: "Iconic ceremonial procession Tajiya featuring black and gold fluted tiers, crimson illuminated jali niches, ornamental crown cupola, and flying ceremonial red flag.",
    fullDesc: "Engineered specifically for sacred festival majesty and outdoor ceremonial processions. Handcrafted with bold black lacquered pilasters, gilded fluted moldings, warm crimson back-illuminated jali niches, a crowned onion cupola, and a flying crimson devotion flag. Built on a rigid timber chassis ready for festival carrying or palanquin display.",
    dimensions: "Base: 4 x 4 Feet | Height: 10 Feet (Customizable)",
    height: "10 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Reinforced structural thermocol core, timber chassis, black satin lacquer, gilded moldings, crimson fabric screen",
    colorFinish: "Royal Black & 24k Gold with Illuminated Crimson Niches",
    lighting: "Dual-circuit high-lumen crimson niche LEDs with golden perimeter outline",
    craftTime: "18 to 26 Days",
    packaging: "Reinforced wooden freight crate with heavy-duty corner protectors",
    image: "/assets/images/tajiya_black_gold_procession.jpg",
    images: [
      "/assets/images/tajiya_black_gold_procession.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "7 Feet Height", dimensions: "36 x 36 x 84 in", price: 40000 },
      { name: "10 Feet Procession Scale", dimensions: "48 x 48 x 120 in", price: 56000 },
      { name: "13+ Feet Monumental Scale", dimensions: "60 x 60 x 156 in", price: 78000 }
    ],
    lightingOptions: [
      { name: "Procession Portable Power & Dimmer", price: 0 },
      { name: "Multi-Pattern Festal Lighting Controller", price: 3200 }
    ]
  },
  {
    id: "prod-tajiya-royal-blue-brick-palace",
    slug: "royal-blue-brick-terrace-palace-tajiya",
    sku: "BSC-TAJ-BL10",
    name: "Royal Blue & Gold Multi-Tier Palace Tajiya",
    category: "Tajiya",
    price: 48000,
    priceDisplay: "Starting at 48,000",
    isStartingPrice: true,
    originalPrice: 52000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Illuminated Masterpiece",
    shortDesc: "Multi-tiered architectural shrine featuring ribbed sapphire dome with star crests, golden lattice minarets, amber-pink illuminated niches, and textured brick plinth.",
    fullDesc: "A majestic multi-level palace shrine handcrafted with surgical thermocol detailing. Features an elevated golden brickwork plinth base, illuminated pink & warm amber arched pavilions, multi-tier golden perforated minars, and a grand sapphire melon dome embellished with 24k gold stars. An exquisite centerpiece for Mawlid, Naat, and sacred home sanctums.",
    dimensions: "Base: 4 x 4 Feet | Height: 9.5 Feet (Customizable)",
    height: "9.5 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Precision thermocol, gold leaf filigree, royal blue velvet, wooden structural chassis",
    colorFinish: "Sapphire Blue, Golden Lattice, Pure White & Terracotta Brick Base",
    lighting: "Multi-channel warm ambient LED backlight with illuminated minar shafts",
    craftTime: "20 to 28 Days",
    packaging: "Modular sectional pack with reinforced wooden freight crate",
    image: "/assets/images/tajiya_royal_blue_brick_palace.jpg",
    images: [
      "/assets/images/tajiya_royal_blue_brick_palace.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6.5 Feet Height", dimensions: "36 x 36 x 78 in", price: 44000 },
      { name: "9.5 Feet Height", dimensions: "48 x 48 x 114 in", price: 62000 },
      { name: "12+ Feet Monumental Scale", dimensions: "60 x 60 x 144 in", price: 84000 }
    ],
    lightingOptions: [
      { name: "Integrated Celestial Star Glow", price: 0 },
      { name: "Wireless Remote Dimmer System", price: 2600 }
    ]
  },
  {
    id: "prod-tajiya-emerald-grand-pavilion",
    slug: "emerald-tiled-dome-grand-courtyard-tajiya",
    sku: "BSC-TAJ-EG11",
    name: "Emerald Tiled Dome Grand Courtyard Tajiya",
    category: "Tajiya",
    price: 60000,
    priceDisplay: "Starting at ₹60,000",
    isStartingPrice: true,
    originalPrice: 65000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Signature Creation",
    shortDesc: "Monumental green & white palace shrine featuring tiled emerald dome with golden kalash, multi-tiered colonnaded minaret galleries, and glowing green jali lattice pavilions.",
    fullDesc: "One of the most spectacular creations in Being Samsher Crafting's portfolio. Showcases a grand tiled emerald dome topped with a multi-tiered golden kalash, a forest of slender white minarets with green cupolas and ring lights, double-story scalloped arcade galleries with green arabesque fretwork, and a lush green velvet plinth skirt. Engineered for crated All-India delivery.",
    dimensions: "Base: 4.5 x 4.5 Feet | Height: 10 Feet (Customizable)",
    height: "10 Feet",
    width: "4.5 Feet",
    depth: "4.5 Feet",
    material: "Reinforced high-density thermocol, emerald velvet, gold leaf filigree, rigid timber chassis",
    colorFinish: "Emerald Green, Crisp White & Gilded Gold Finish",
    lighting: "Concealed 360-degree high-lumen warm & emerald LED illumination across all galleries",
    craftTime: "22 to 30 Days",
    packaging: "Heavy-duty custom wooden shipping crate with foam mold cushioning",
    image: "/assets/images/tajiya_emerald_grand_pavilion.jpg",
    images: [
      "/assets/images/tajiya_emerald_grand_pavilion.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "7 Feet Height", dimensions: "38 x 38 x 84 in", price: 48000 },
      { name: "10 Feet Height", dimensions: "52 x 52 x 120 in", price: 68000 },
      { name: "14+ Feet Monumental Scale", dimensions: "66 x 66 x 168 in", price: 95000 }
    ],
    lightingOptions: [
      { name: "Full Procession Glow Circuit", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-green-white-darbar",
    slug: "green-ribbed-dome-ivory-darbar-tajiya",
    sku: "BSC-TAJ-GW12",
    name: "Green Ribbed Dome Ivory Darbar Tajiya",
    category: "Tajiya",
    price: 47000,
    priceDisplay: "Starting at ₹47,000",
    isStartingPrice: true,
    originalPrice: 52000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Handcrafted with Care",
    shortDesc: "Architectural sanctum shrine featuring prominent emerald ribbed dome with gold crescent, 4 green-capped minarets, multi-foil jali arches, and emerald-gold frieze bands.",
    fullDesc: "Handcrafted with architectural symmetry and spiritual reverence by Being Samsher Crafting. Designed with a central emerald green melon dome crowned by a golden crescent finial, four perimeter minarets with velvet green cupolas and gold collar rings, delicate multi-foil lattice arch windows, and gold leaf floral medallions. Built for Mawlid, Naat, sacred exhibitions, and home sanctums.",
    dimensions: "Base: 3.5 x 3.5 Feet | Height: 8.5 Feet (Customizable)",
    height: "8.5 Feet",
    width: "3.5 Feet",
    depth: "3.5 Feet",
    material: "High-density precision thermocol, emerald velvet trim, 24k gold leaf filigree, timber base chassis",
    colorFinish: "Pure Ivory White, Emerald Green & Gilded Gold Accents",
    lighting: "Warm ambient internal glow through geometric jali arch screens",
    craftTime: "15 to 22 Days",
    packaging: "Heavy-duty reinforced wooden freight crate with protective foam",
    image: "/assets/images/tajiya_green_white_jali_darbar.jpg",
    images: [
      "/assets/images/tajiya_green_white_jali_darbar.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "5.5 Feet Height", dimensions: "30 x 30 x 66 in", price: 36000 },
      { name: "8.5 Feet Height", dimensions: "42 x 42 x 102 in", price: 50000 },
      { name: "11 Feet Monumental Scale", dimensions: "52 x 52 x 132 in", price: 72000 }
    ],
    lightingOptions: [
      { name: "Warm Ambient Arch Halo", price: 0 },
      { name: "Dual-Mode Wireless Remote Dimmer", price: 2400 }
    ]
  },
  {
    id: "prod-tajiya-pink-white-trolley",
    slug: "rose-pink-white-illuminated-trolley-tajiya",
    sku: "BSC-TAJ-PW13",
    name: "Rose Pink & White Procession Trolley Tajiya",
    category: "Tajiya",
    price: 70000,
    priceDisplay: "Starting at 70,000",
    isStartingPrice: true,
    originalPrice: 75000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Illuminated Masterpiece",
    shortDesc: "Magnificent multi-tier festival procession shrine on mobile wheeled trolley, featuring white ribbed dome with glowing finial, pink illuminated window arches, and silver beaded crystal fringe.",
    fullDesc: "A festival procession marvel engineered for outdoor ceremonies and illuminated night processions. Built upon an engineered heavy-duty trolley with procession pulling poles, featuring multi-tiered scalloped galleries illuminated in celestial rose pink and warm amber, crystal beaded fringe tassels, four tall colonnade minarets, and a pure white melon dome. Complete with procession battery mounts.",
    dimensions: "Base: 4 x 4 Feet | Height: 9.5 Feet (Customizable)",
    height: "9.5 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Reinforced structural thermocol core, wheeled procession steel/timber trolley, crystal fringe beads, acrylic diffusers",
    colorFinish: "Pearl White & Rose Pink with Crystal Fringe Detailing",
    lighting: "Full-circuit high-lumen rose-pink niche LEDs and fringe perimeter lights",
    craftTime: "18 to 26 Days",
    packaging: "Heavy-duty reinforced wooden freight crate with wheel-lock chassis protection",
    image: "/assets/images/tajiya_pink_white_procession_trolley.jpg",
    images: [
      "/assets/images/tajiya_pink_white_procession_trolley.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6.5 Feet Height", dimensions: "36 x 36 x 78 in", price: 42000 },
      { name: "9.5 Feet Height", dimensions: "48 x 48 x 114 in", price: 58000 },
      { name: "12+ Feet Monumental Scale", dimensions: "60 x 60 x 144 in", price: 80000 }
    ],
    lightingOptions: [
      { name: "Procession Portable Power & Dimmer", price: 0 },
      { name: "12V Rechargeable Battery Kit for Outdoor Movement", price: 3400 }
    ]
  },
  {
    id: "prod-tajiya-ya-hussain-red-gold",
    slug: "ya-hussain-sacred-red-gold-shrine-tajiya",
    sku: "BSC-TAJ-YH14",
    name: "Ya-Hussain Sacred Red & Gold Shrine Tajiya",
    category: "Tajiya",
    price: 45000,
    priceDisplay: "Starting at ₹45,000",
    isStartingPrice: true,
    originalPrice: 52000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Royal Heritage",
    shortDesc: "Sacred ceremonial Mughal shrine featuring fluted crimson dome with golden kalash, illuminated honeycomb jali windows, Ya-Hussain calligraphic plaques, and red brick podium.",
    fullDesc: "A masterpiece of sacred devotion and Islamic historical artistry. Features prominent gold-inscribed 'یا حسین' (Ya Hussain) calligraphy panels framed in gilded archways, backlit crimson and amber honeycomb screens, an ornate tiered crimson dome crowned with a gilded multi-tier finial, golden minaret cupolas, and an authentic brickwork plinth wrapped in green velvet ceremonial drape.",
    dimensions: "Base: 4 x 4 Feet | Height: 9.5 Feet (Customizable)",
    height: "9.5 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "High-density architectural thermocol, 24k gold foil filigree, crimson lacquer finish, velvet drape, rigid wooden frame",
    colorFinish: "Sacred Crimson Red & 24k Gold Foil with Red Brick Plinth",
    lighting: "Concealed warm golden and amber internal backlights for calligraphy panels & honeycomb jali",
    craftTime: "20 to 28 Days",
    packaging: "Multi-sectional wooden transit crate with high-density foam padding",
    image: "/assets/images/tajiya_ya_hussain_red_gold_shrine.jpg",
    images: [
      "/assets/images/tajiya_ya_hussain_red_gold_shrine.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6.5 Feet Height", dimensions: "36 x 36 x 78 in", price: 45000 },
      { name: "9.5 Feet Height", dimensions: "48 x 48 x 114 in", price: 62000 },
      { name: "12+ Feet Monumental Scale", dimensions: "60 x 60 x 144 in", price: 84000 }
    ],
    lightingOptions: [
      { name: "Full Calligraphy Backlight Circuit", price: 0 },
      { name: "Wireless Remote Multi-Zone Controller", price: 2800 }
    ]
  },
  {
    id: "prod-tajiya-blue-gold-palanquin",
    slug: "blue-gold-palanquin-ceremonial-procession-tajiya",
    sku: "BSC-TAJ-BP15",
    name: "Blue & Gold Palanquin Procession Tajiya",
    category: "Tajiya",
    price: 75000,
    priceDisplay: "Starting at 75,000",
    isStartingPrice: true,
    originalPrice: 82000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Grand Procession",
    shortDesc: "Traditional palanquin procession Tajiya mounted on ceremonial carrying poles, featuring golden domes with crescent star crests, blue fluted minarets, and celestial star balustrades.",
    fullDesc: "Engineered specifically for ceremonial carrying in sacred processions. Built with integrated bamboo carrying poles, dual golden onion domes crowned with crescent stars, blue and white striped fluted pilasters, star-patterned balustrade friezes, and an elevated sanctum pavilion. Combines lightweight structural strength with breathtaking outdoor visual presence.",
    dimensions: "Base: 4 x 4 Feet (Pole length: 12 Feet) | Height: 9 Feet (Customizable)",
    height: "9 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Reinforced structural thermocol core, heavy bamboo palanquin poles, gold leaf foil, weather-resistant blue lacquer",
    colorFinish: "Royal Sapphire Blue, Gilded Gold & Pure White",
    lighting: "Dual-circuit warm golden interior glow and perimeter star lighting",
    craftTime: "18 to 25 Days",
    packaging: "Heavy-duty freight crate with separate secured pole harness packaging",
    image: "/assets/images/tajiya_blue_gold_palanquin_procession.jpg",
    images: [
      "/assets/images/tajiya_blue_gold_palanquin_procession.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6 Feet Height (10 ft Poles)", dimensions: "36 x 36 x 72 in", price: 43000 },
      { name: "9 Feet Height (12 ft Poles)", dimensions: "48 x 48 x 108 in", price: 59000 },
      { name: "12+ Feet Monumental Scale (14 ft Poles)", dimensions: "60 x 60 x 144 in", price: 82000 }
    ],
    lightingOptions: [
      { name: "Procession Portable Power & Dimmer", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-emerald-filigree-procession",
    slug: "emerald-filigree-dome-procession-tajiya",
    sku: "BSC-TAJ-EF16",
    name: "Emerald Filigree Dome Procession Tajiya",
    category: "Tajiya",
    price: 60000,
    priceDisplay: "Starting at 60,000",
    isStartingPrice: true,
    originalPrice: 65000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Grand Procession",
    shortDesc: "Monumental procession shrine featuring gold arabesque filigree over emerald dome, scalloped lace balustrades, green & white fluted minarets, and illuminated lower pavilions.",
    fullDesc: "An imperial festival procession creation handcrafted by Being Samsher Crafting. Features a breathtaking emerald green bulbous dome adorned with 24k gold arabesque filigree and a towering multi-tier kalash finial, surrounded by pure white and emerald fluted minarets with gilded cupolas. Double-tiered colonnades showcase scalloped jali screens, warm internal lighting channels, and a ceremonial green velvet plinth skirt with scalloped crest trim. Designed for outdoor festivals, Mawlid, and royal sanctum exhibitions.",
    dimensions: "Base: 4.5 x 4.5 Feet | Height: 10 Feet (Customizable)",
    height: "10 Feet",
    width: "4.5 Feet",
    depth: "4.5 Feet",
    material: "High-density structural thermocol core, 24k gold leaf filigree, emerald velvet, heavy base plate",
    colorFinish: "Emerald Green, Gilded Gold Arabesque & Pure Ivory White",
    lighting: "Concealed 360-degree high-lumen warm LED illumination within all arcades & minarets",
    craftTime: "22 to 30 Days",
    packaging: "Multi-sectional heavy wooden shipping crate with shock-absorbing foam",
    image: "/assets/images/tajiya_emerald_filigree_procession.jpg",
    images: [
      "/assets/images/tajiya_emerald_filigree_procession.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "7 Feet Height", dimensions: "38 x 38 x 84 in", price: 47000 },
      { name: "10 Feet Monumental Procession", dimensions: "54 x 54 x 120 in", price: 65000 },
      { name: "14+ Feet Imperial Scale", dimensions: "66 x 66 x 168 in", price: 92000 }
    ],
    lightingOptions: [
      { name: "Full Procession Glow Circuit", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-red-dome-emerald-glow",
    slug: "red-gumbad-emerald-colonnade-illuminated-tajiya",
    sku: "BSC-TAJ-RD17",
    name: "Red Gumbad & Emerald Colonnade Tajiya",
    category: "Tajiya",
    price: 71000,
    priceDisplay: "Starting at 71,000",
    isStartingPrice: true,
    originalPrice: 78000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Festival Illumination",
    shortDesc: "Spectacular nocturnal festival Tajiya featuring radiant crimson ribbed dome, quad illuminated minarets, and emerald green open colonnade arcade.",
    fullDesc: "A show-stopping nocturnal festival masterpiece engineered by Being Samsher Crafting. Showcases an illuminated crimson ribbed dome crowned with golden pinnacles, four multi-tiered white and red LED illuminated minarets, and two outer guardian minars with radiant emerald LED strip lights. The lower plinth features open horseshoe arch colonnades washed in brilliant neon emerald luminescence with fine diamond lattice screens. Perfect for night processions, Ashura exhibitions, and community Darbars.",
    dimensions: "Base: 4 x 4 Feet | Height: 9.5 Feet (Customizable)",
    height: "9.5 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "High-density structural thermocol core, acrylic light diffusers, multi-circuit LED arrays, reinforced timber chassis",
    colorFinish: "Pure Ivory White, Crimson Ruby Glow & Radiant Emerald Green",
    lighting: "Integrated dual-color LED illumination (crimson dome halo, white minaret edges & emerald colonnade floor wash)",
    craftTime: "18 to 25 Days",
    packaging: "Modular heavy-duty wooden transit crate with custom foam inserts",
    image: "/assets/images/tajiya_red_dome_emerald_glow.jpg",
    images: [
      "/assets/images/tajiya_red_dome_emerald_glow.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "6.5 Feet Height", dimensions: "32 x 32 x 78 in", price: 38000 },
      { name: "9.5 Feet Height", dimensions: "48 x 48 x 114 in", price: 52000 },
      { name: "12.5 Feet Monumental Scale", dimensions: "60 x 60 x 150 in", price: 72000 }
    ],
    lightingOptions: [
      { name: "Full Dual-Color Illumination Array", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-royal-blue-gold-palace",
    slug: "royal-blue-gold-palace-darbar-tajiya",
    sku: "BSC-TAJ-BG18",
    name: "Royal Blue & Gilded Gold Palace Tajiya",
    category: "Tajiya",
    price: 68000,
    priceDisplay: "Starting at ₹68,000",
    isStartingPrice: true,
    originalPrice: 78000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Royal Heritage",
    shortDesc: "Exquisite Indo-Islamic palace Tajiya featuring a magnificent royal blue ribbed onion dome, 24k gold leaf cupolas, ornate blue-and-white pillar arcades, and red velvet plinth drapery.",
    fullDesc: "An extraordinary masterpiece of courtly architectural craftsmanship. Centered around an imperial ribbed onion dome in royal cobalt blue with gilded meridian ribs and an ivory spire finial, flanked by multi-tiered minarets crowned with glistening 24k gold textured cupola domes. The multi-level facade features scalloped archways with gold bead fretwork, multi-color festive ornament glass, and a rich red ceremonial velvet base trim. Handcrafted with supreme precision for high-profile community Darbars and heritage exhibitions.",
    dimensions: "Base: 4.5 x 4.5 Feet | Height: 10 Feet (Customizable)",
    height: "10 Feet",
    width: "4.5 Feet",
    depth: "4.5 Feet",
    material: "Reinforced structural thermocol core, 24k metallic gold leafing, cobalt blue lacquer, ceremonial red fabric, wooden base plate",
    colorFinish: "Royal Cobalt Blue, 24k Gilded Gold & Pure Ivory White",
    lighting: "Concealed warm white architectural mini-spotlights and dome glow circuits",
    craftTime: "22 to 30 Days",
    packaging: "Reinforced multi-sectional wooden freight crate with protective cushioning",
    image: "/assets/images/tajiya_royal_blue_gold_palace.jpg",
    images: [
      "/assets/images/tajiya_royal_blue_gold_palace.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "7 Feet Height", dimensions: "38 x 38 x 84 in", price: 49000 },
      { name: "10 Feet Height", dimensions: "54 x 54 x 120 in", price: 68000 },
      { name: "14+ Feet Monumental Palace Scale", dimensions: "66 x 66 x 168 in", price: 95000 }
    ],
    lightingOptions: [
      { name: "Concealed Architectural Spotlights", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-tajiya-imperial-darbar-edition",
    slug: "imperial-darbar-edition-sunset-tajiya",
    sku: "BSC-TAJ-ID20",
    name: "Imperial Darbar Edition Pavilion Tajiya",
    category: "Tajiya",
    price: 55000,
    priceDisplay: "Starting at 55,000",
    isStartingPrice: true,
    originalPrice: 61000,
    availability: "Made to Order · All India Delivery",
    customizable: true,
    tag: "Bespoke Heritage",
    shortDesc: "Imperial bespoke edition of the grand sunset pavilion Tajiya featuring multi-tiered golden dome niches, vibrant illumination, and custom commission specifications for festivals and exhibitions.",
    fullDesc: "The official Being Samsher signature Darbar edition of the illuminated sunset pavilion Tajiya. Handcrafted on commission with custom dimensions, reinforced framing, and museum-grade fretwork. Features multi-tier gold carved kalash domes in lighted shadow boxes, illuminated pink and warm gold arched pavilions, diamond-cut acoustic jali screens, and high-lumen 360-degree perimeter track lighting. Direct workshop customization and door-to-door freight dispatch across India.",
    dimensions: "Base: 5 x 5 Feet | Height: 11 Feet (Customizable)",
    height: "11 Feet",
    width: "5 Feet",
    depth: "5 Feet",
    material: "High-density reinforced thermocol, 24k gold leaf foil, custom LED circuitry, heavy timber load-bearing chassis",
    colorFinish: "Ivory White, 24k Gold Accents & Dual Warm/Magenta Illumination",
    lighting: "Complete exhibition-grade multi-channel LED lighting with concealed wiring",
    craftTime: "25 to 35 Days",
    packaging: "Heavy-duty timber transit crate with corner steel strapping and foam cushioning",
    image: "/assets/images/tajiya_sunset_pavilion_booking.jpg",
    images: [
      "/assets/images/tajiya_sunset_pavilion_booking.jpg",
      "/assets/images/tajiya_sunset_pavilion_clean.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: true,
    sizeOptions: [
      { name: "8 Feet Height", dimensions: "45 x 45 x 96 in", price: 58000 },
      { name: "11 Feet Monumental Scale", dimensions: "60 x 60 x 132 in", price: 75000 },
      { name: "15+ Feet Imperial Scale", dimensions: "72 x 72 x 180 in", price: 110000 }
    ],
    lightingOptions: [
      { name: "Full Exhibition Light Circuit", price: 0 },
      { name: "Heavy-Duty 12V Battery & Remote Control Kit", price: 4200 }
    ]
  },
  {
    id: "prod-tajiya-grand-shahi",
    slug: "grand-shahi-procession-tajiya",
    sku: "BSC-TAJ-01",
    name: "Grand Shahi Procession Tajiya",
    category: "Tajiya",
    price: 38000,
    priceDisplay: "Starting at ₹38,000",
    isStartingPrice: true,
    originalPrice: 42000,
    availability: "Made to Order (20–28 Days)",
    customizable: true,
    tag: "Grand Procession",
    shortDesc: "Monumental illuminated procession Tajiya featuring octagonal multi-pillar colonnade, emerald green dome, 8 glowing minarets, and sacred Ya-Ali calligraphy panels.",
    fullDesc: "An awe-inspiring procession masterpiece engineered for festival majesty and sacred ceremonies. Features a multi-pillar elevated stage, illuminated green and gold arched niches with delicate jali cutwork, soaring octagonal minarets with lantern cupolas, 24k gold gilded calligraphic panels ('Ya Ali'), and full-circuit ambient LED illumination.",
    dimensions: "Base: 4 x 4 Feet | Height: 9 Feet",
    height: "9 Feet",
    width: "4 Feet",
    depth: "4 Feet",
    material: "Reinforced structural thermocol core, timber chassis, velvet panels, brass finials",
    colorFinish: "Royal Emerald Green, Pure Ivory White & 24k Gilded Borders",
    lighting: "360-degree multi-tier warm golden LED ribbon & interior spotlight illumination",
    craftTime: "20 to 28 Days",
    packaging: "Modular sectional pack with reinforced wooden freight crate",
    image: "/assets/images/grand_tajiya_illuminated.jpg",
    images: [
      "/assets/images/grand_tajiya_illuminated.jpg",
      "/assets/images/tajiya_emerald_procession.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "",
    featured: false,
    sizeOptions: [
      { name: "7 Feet Height (6 Tiers)", dimensions: "36 x 36 x 84 in", price: 38000 },
      { name: "9 Feet Height (8 Tiers)", dimensions: "48 x 48 x 108 in", price: 54000 },
      { name: "12+ Feet Monumental Scale", dimensions: "60 x 60 x 144 in", price: 78000 }
    ],
    lightingOptions: [
      { name: "Full Procession Glow Circuit", price: 0 },
      { name: "Heavy-Duty 12V Battery & Charger Kit", price: 3800 }
    ]
  },
  {
    id: "prod-custom-minar",
    slug: "royal-slender-minar-model",
    sku: "BSC-MNR-10",
    name: "Royal Slender Minar Architectural Model",
    category: "Minar",
    price: 8500,
    priceDisplay: "Starting at ₹8,500",
    isStartingPrice: true,
    originalPrice: 10500,
    availability: "Made to Order (10–14 Days)",
    customizable: true,
    tag: "Architectural Height",
    shortDesc: "Towering handcrafted Islamic minaret pair featuring observation balconies, geometric fretwork fluting, and warm illuminated lantern cupolas.",
    fullDesc: "Slender architectural minarets engineered with geometric balance, multi-tier muazzin balconies, octagonal shaft fluting, and golden crescent finials. Features concealed warm golden LED channels inside the lantern cupola for dramatic vertical illumination.",
    dimensions: "Base: 12 x 12 inches | Height: 4 to 8 Feet",
    height: "5 Feet",
    width: "12 inches",
    depth: "12 inches",
    material: "Reinforced high-density structural thermocol, metallic gold leafing, rigid acrylic base",
    colorFinish: "Ivory White with 24k Gold Gilded Balconies & Cupola",
    lighting: "Concealed warm golden vertical LED strip and lantern cupola glow",
    craftTime: "10 to 14 Days",
    packaging: "Custom vertical wooden shipping crate with shock-absorbing foam inserts",
    image: "/assets/images/custom_minar.jpg",
    images: [
      "/assets/images/custom_minar.jpg",
      "/assets/images/workshop_jali_cutting.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: false,
    sizeOptions: [
      { name: "Single Minar (4 ft Height)", dimensions: "10 x 10 x 48 in", price: 8500 },
      { name: "Minar Pair (5 ft Height)", dimensions: "12 x 12 x 60 in", price: 15500 },
      { name: "Grand Darbar Pair (7 ft Height)", dimensions: "16 x 16 x 84 in", price: 24000 }
    ],
    lightingOptions: [
      { name: "Standard Vertical Glow", price: 0 },
      { name: "Dual-Circuit Remote Controlled Dimmer", price: 1800 }
    ]
  },
  {
    id: "prod-noor-cupola-arch",
    slug: "noor-cupola-decorative-stage-archway",
    sku: "BSC-ARC-11",
    name: "Noor Cupola & Decorative Stage Archway",
    category: "Decorative Models",
    price: 16500,
    priceDisplay: "Starting at ₹16,500",
    isStartingPrice: true,
    originalPrice: 19000,
    availability: "Made to Order (14–18 Days)",
    customizable: true,
    tag: "Illuminated Art",
    shortDesc: "Ornate ceremonial entrance archway, stage backdrop, and illuminated kalas cupolas crafted for spiritual exhibitions and celebrations.",
    fullDesc: "A monumental ceremonial entrance archway and stage pavilion. Handcrafted with traditional scalloped Moorish arches, arabesque jali fretwork panels, multi-tier golden dome crests, and perimeter halo LED lighting channels for ceremonial stages, exhibitions, and home darbars.",
    dimensions: "Base: 48 x 18 inches | Height: 54 inches",
    height: "54 inches",
    width: "48 inches",
    depth: "18 inches",
    material: "Architectural dense thermocol, composite wood reinforcement, gold leaf filigree",
    colorFinish: "Pearl Ivory & 24k Gold Accents",
    lighting: "Integrated warm amber LED arch contour halo",
    craftTime: "14 to 18 Days",
    packaging: "Sectional modular flat-pack with rigid wooden transit crate",
    image: "/assets/images/grand_gumbad_day.jpg",
    images: [
      "/assets/images/grand_gumbad_day.jpg",
      "/assets/images/grand_gumbad_night.jpg"
    ],
    videoUrl: "",
    featured: false,
    sizeOptions: [
      { name: "Medium Stage (4 ft Width)", dimensions: "48 x 18 x 54 in", price: 16500 },
      { name: "Grand Entrance (6 ft Width)", dimensions: "72 x 24 x 72 in", price: 26000 },
      { name: "Imperial Darbar (8 ft Width)", dimensions: "96 x 30 x 96 in", price: 38000 }
    ],
    lightingOptions: [
      { name: "Warm Contour Glow", price: 0 },
      { name: "Multi-Color Stage Lighting Kit", price: 2800 }
    ]
  },
  {
    id: "prod-grand-gumbad-night",
    slug: "night-illumination-grand-gumbad",
    sku: "BSC-GNT-12",
    name: "Night Illumination Grand Noor Gumbad",
    category: "Custom Creations",
    price: 18000,
    priceDisplay: "Starting at ₹18,000",
    isStartingPrice: true,
    originalPrice: 22000,
    availability: "Made to Order (16–20 Days)",
    customizable: true,
    tag: "Masterpiece",
    shortDesc: "Grand illuminated dome pavilion with multi-tier warm amber LED halo, intricate floral fretwork, and golden pinnacle kalas.",
    fullDesc: "Engineered specifically for breathtaking nighttime exhibition and spiritual reverence. Handcrafted with dual-layer jali arches that project geometric shadows in low ambient light, crowned by a sculpted gold-gilded dome with warm interior radiance.",
    dimensions: "Base: 32 x 32 inches | Height: 38 inches",
    height: "38 inches",
    width: "32 inches",
    depth: "32 inches",
    material: "High-density thermocol, acrylic diffuser panels, metallic gold leafing",
    colorFinish: "Royal Gold & Ivory Glow",
    lighting: "Full 360-degree high-lumen warm LED diffusion with low-voltage adapter",
    craftTime: "16 to 20 Days",
    packaging: "Reinforced wooden freight box with custom shock cushioning",
    image: "/assets/images/grand_gumbad_night.jpg",
    images: [
      "/assets/images/grand_gumbad_night.jpg",
      "/assets/images/grand_gumbad_day.jpg"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bzv2S55df8c",
    featured: false,
    sizeOptions: [
      { name: "Standard (32x32x38 in)", dimensions: "32 x 32 x 38 in", price: 18000 },
      { name: "Grand Scale (40x40x48 in)", dimensions: "40 x 40 x 48 in", price: 26000 }
    ],
    lightingOptions: [
      { name: "Integrated 360 Warm Halo System", price: 0 },
      { name: "Wireless Remote Dimmer & Timer", price: 2200 }
    ]
  }
];

// Helper functions synced with localStorage for instant Admin Updates
export const getProducts = () => {
  try {
    const saved = localStorage.getItem('bsc_products_v21') || localStorage.getItem('bsc_products_v20');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        let modified = false;
        const cleaned = parsed.filter(p => {
          const name = (p.name || '').toLowerCase().trim();
          const slug = (p.slug || '').toLowerCase().trim();
          const isRoyalBlueTajiya =
            name.includes('royal blue tajiya') ||
            slug.includes('royal-blue-tajiya') ||
            (name.includes('royal blue') && (p.category === 'Tajiya' || p.category === 'tajiya'));
          return !isRoyalBlueTajiya && p.id !== 'prod-tajiya-sunset-pavilion-pink-gold';
        });

        // Ensure the 4 new premier jali products are placed at the front
        const premierIds = [
          "prod-jali-ya-ali",
          "prod-jali-chand-tara",
          "prod-jali-diamond-lattice",
          "prod-jali-om-sacred"
        ];
        premierIds.slice().reverse().forEach(id => {
          const initP = initialProducts.find(p => p.id === id);
          if (initP) {
            const existingIdx = cleaned.findIndex(p => p.id === id);
            if (existingIdx !== -1) {
              cleaned.splice(existingIdx, 1);
            }
            cleaned.unshift(initP);
            modified = true;
          }
        });

        // Ensure newly defined initial products (including 20 authentic Tajiyas) exist in saved products
        initialProducts.forEach(initP => {
          const existingIdx = cleaned.findIndex(p => p.id === initP.id || p.slug === initP.slug);
          if (existingIdx === -1) {
            cleaned.push(initP);
            modified = true;
          } else if (initP.id.startsWith('prod-tajiya-')) {
            // Update Tajiya image & details to latest authentic posters
            cleaned[existingIdx] = { ...cleaned[existingIdx], ...initP };
            modified = true;
          }
        });

        if (modified || cleaned.length !== parsed.length || !localStorage.getItem('bsc_products_v21')) {
          localStorage.setItem('bsc_products_v21', JSON.stringify(cleaned));
        }
        return cleaned;
      }
    }
  } catch (e) {
    console.error("Error reading products:", e);
  }
  return initialProducts.filter(p => {
    const name = (p.name || '').toLowerCase().trim();
    const slug = (p.slug || '').toLowerCase().trim();
    const isRoyalBlueTajiya =
      name.includes('royal blue tajiya') ||
      slug.includes('royal-blue-tajiya') ||
      (name.includes('royal blue') && (p.category === 'Tajiya' || p.category === 'tajiya'));
    return !isRoyalBlueTajiya && p.id !== 'prod-tajiya-sunset-pavilion-pink-gold';
  });
};

export const getOtherCollectionProducts = () => {
  const all = getProducts();
  const targetedIds = [
    "prod-custom-minar",
    "prod-thermocol-jali-panel",
    "prod-noor-cupola-arch",
    "prod-grand-gumbad-night"
  ];
  const list = targetedIds.map(id => all.find(p => p.id === id)).filter(Boolean);
  if (list.length >= 4) return list;
  return all.filter(p =>
    p.category === "Minar" ||
    p.category.includes("Jali") ||
    p.category === "Decorative Models" ||
    p.category === "Custom Creations"
  ).slice(0, 4);
};

export const saveProducts = (productsList) => {
  try {
    const cleaned = (productsList || []).filter(p => {
      const name = (p.name || '').toLowerCase().trim();
      const slug = (p.slug || '').toLowerCase().trim();
      const isRoyalBlueTajiya =
        name.includes('royal blue tajiya') ||
        slug.includes('royal-blue-tajiya') ||
        (name.includes('royal blue') && (p.category === 'Tajiya' || p.category === 'tajiya'));
      return !isRoyalBlueTajiya && p.id !== 'prod-tajiya-sunset-pavilion-pink-gold';
    });
    localStorage.setItem('bsc_products_v21', JSON.stringify(cleaned));
    window.dispatchEvent(new Event('products-updated'));
    return true;
  } catch (e) {
    console.error("Error saving products:", e);
    return false;
  }
};

export const getTajiyaProducts = () => {
  const all = getProducts();
  const premierTajiyaIds = [
    "prod-tajiya-islamic-mosque-model",
    "prod-tajiya-blue-arcade",
    "prod-tajiya-royal-blue-glow",
    "prod-tajiya-amber-glow",
    "prod-tajiya-emerald-gold-shahi",
    "prod-tajiya-imperial-green",
    "prod-tajiya-quad-minar-dome",
    "prod-tajiya-golden-dome-lattice",
    "prod-tajiya-royal-golden-darbar",
    "prod-tajiya-black-gold-procession",
    "prod-tajiya-royal-blue-brick-palace",
    "prod-tajiya-emerald-grand-pavilion",
    "prod-tajiya-green-white-darbar",
    "prod-tajiya-pink-white-trolley",
    "prod-tajiya-ya-hussain-red-gold",
    "prod-tajiya-blue-gold-palanquin",
    "prod-tajiya-emerald-filigree-procession",
    "prod-tajiya-red-dome-emerald-glow",
    "prod-tajiya-royal-blue-gold-palace",
    "prod-tajiya-imperial-darbar-edition"
  ];
  const list = premierTajiyaIds.map(id => all.find(p => p.id === id)).filter(Boolean);
  if (list.length === premierTajiyaIds.length) return list;
  const tajiyas = all.filter(p => p.category === 'Tajiya');
  return tajiyas.length > 0 ? tajiyas : initialProducts.filter(p => p.category === 'Tajiya');
};

export const getProductBySlug = (slug) => {
  const all = getProducts();
  return all.find(p => p.slug === slug || p.id === slug) ||
    (slug === 'custom-minar-model' ? all.find(p => p.id === 'prod-ala-hazrat-gumbad') : null) ||
    (slug === 'royal-tajiya' ? all.find(p => p.id === 'prod-tajiya-golden-palace' || p.id === 'prod-madina-gumbad-minar') : null) ||
    (slug === 'custom-lighting-model' ? all.find(p => p.id === 'prod-kaaba-sharif-model') : null);
};
