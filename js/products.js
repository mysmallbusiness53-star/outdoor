// SOLARA OUTDOOR - Product Catalogue
// Prices in ZAR (South African Rand) - PLACEHOLDERS: Update with actual prices
// Product names and descriptions are placeholders based on visual analysis of supplied images.
// Replace with accurate product data from supplier.

const products = [
  {
    id: "gt-green-pro",
    name: "Professional Garden Tool Set – Emerald",
    slug: "professional-garden-tool-set-emerald",
    price: 899,
    comparePrice: 1199,
    currency: "ZAR",
    category: "garden-tools",
    categoryName: "Garden Tools",
    shortDesc: "Complete 10-piece professional gardening kit in durable emerald green case.",
    description: "Elevate your gardening experience with this comprehensive professional tool set. Includes trowels, cultivator, weeder, pruners, spray bottle and more, neatly organised in a rugged carry case. Perfect for both beginners and seasoned gardeners. High-quality materials designed for longevity and comfort.",
    images: [
      "images/H3e55ec1d0cd64b558a9389f2e577ecd6H.jpg",
      "images/Ha75a4844f1be43b4bee120d8979ad537k.jpg"
    ],
    colors: ["Emerald Green"],
    stock: 25,
    featured: true,
    newArrival: false,
    tags: ["bestseller", "tools"]
  },
  {
    id: "gt-floral-violet",
    name: "Floral Garden Tool Set – Violet Bloom",
    slug: "floral-garden-tool-set-violet-bloom",
    price: 949,
    comparePrice: 1299,
    currency: "ZAR",
    category: "garden-tools",
    categoryName: "Garden Tools",
    shortDesc: "Elegant floral-patterned 10-piece gardening set in soft violet case.",
    description: "A beautifully designed gardening collection featuring soft floral handles and a stylish violet case. Includes all essential tools for planting, weeding, pruning and watering. Ideal as a gift or for those who appreciate refined outdoor aesthetics.",
    images: [
      "images/Hc1f835aaec7441aea4278bc959989316s.jpg",
      "images/H84c8f37aabb14aa39e6d73894bebe5c7B.jpg",
      "images/H0337a8b3fb554d528c65d80a69c53e83L.jpg"
    ],
    colors: ["Violet"],
    stock: 18,
    featured: true,
    newArrival: true,
    tags: ["gift", "tools"]
  },
  {
    id: "gt-dual-set",
    name: "Dual Colour Garden Tool Collection",
    slug: "dual-colour-garden-tool-collection",
    price: 1699,
    comparePrice: 2199,
    currency: "ZAR",
    category: "garden-tools",
    categoryName: "Garden Tools",
    shortDesc: "Two complete tool sets – Emerald and Violet – for the ultimate garden companion.",
    description: "Own both signature colourways. This dual collection offers the full professional Emerald set and the elegant Violet Bloom set. Perfect for households that garden together or as a premium gift package.",
    images: [
      "images/H84c8f37aabb14aa39e6d73894bebe5c7B.jpg"
    ],
    colors: ["Emerald Green", "Violet"],
    stock: 12,
    featured: false,
    newArrival: true,
    tags: ["bundle"]
  },
  {
    id: "rm-luba-pro",
    name: "SOLARA Autonomous Lawn Mower – Pro",
    slug: "solara-autonomous-lawn-mower-pro",
    price: 24999,
    comparePrice: 29999,
    currency: "ZAR",
    category: "lawn-care",
    categoryName: "Lawn Care",
    shortDesc: "Intelligent robotic lawn mower with triple positioning technology for precise, wire-free mowing.",
    description: "Experience effortless lawn care with our flagship autonomous mower. Featuring NetRTK + AI Vision + INS Navigation for centimetre-level accuracy. Handles tight corners, narrow passages and works under trees. Ideal for medium to large lawns. Quiet operation and smart app control (configuration required).",
    images: [
      "images/Sa5bd26851d5a49b0921e4a0e9a8575dcd.jpg"
    ],
    colors: ["Pearl White"],
    stock: 5,
    featured: true,
    newArrival: true,
    tags: ["premium", "smart"]
  },
  {
    id: "pc-portable",
    name: "SOLARA Portable Pool Cleaner",
    slug: "solara-portable-pool-cleaner",
    price: 8999,
    comparePrice: 10999,
    currency: "ZAR",
    category: "pool-care",
    categoryName: "Pool Care",
    shortDesc: "Ultra-portable robotic pool cleaner with fast-drain design for effortless retrieval.",
    description: "Keep your pool pristine with this advanced portable robotic cleaner. Designed for pools up to 900 ft² and depths up to 2.6m. Fast drain feature for quick retrieval. Comprehensive coverage for all common pool shapes. Lightweight and easy to store.",
    images: [
      "images/H1f3d0fb70c554147920c12060a2ade58I.jpg",
      "images/Hb8df82d44c33479ab6cc0d7f4b7bb08bA.jpg"
    ],
    colors: ["White / Black"],
    stock: 8,
    featured: true,
    newArrival: false,
    tags: ["premium", "pool"]
  },
  {
    id: "pt-keelat-drill",
    name: "KEELAT Cordless Brushless Drill Kit",
    slug: "keelat-cordless-brushless-drill-kit",
    price: 1899,
    comparePrice: 2499,
    currency: "ZAR",
    category: "power-tools",
    categoryName: "Power Tools",
    shortDesc: "Professional cordless brushless driver drill with full accessory kit and lithium battery.",
    description: "Powerful and versatile KEELAT cordless brushless drill set. Includes drill, battery, charger, extensive bit set and durable case. Ideal for home improvement, DIY and professional use. Long-lasting lithium battery performance.",
    images: [
      "images/762719753_28575529328701916_8598157533834602329_n.jpg"
    ],
    colors: ["Yellow / Black"],
    stock: 30,
    featured: false,
    newArrival: false,
    tags: ["tools", "diy"]
  },
  {
    id: "of-banzai-waterpark",
    name: "Banzai Party 3-in-1 Splash Water Park",
    slug: "banzai-party-3in1-splash-water-park",
    price: 2499,
    comparePrice: 3299,
    currency: "ZAR",
    category: "outdoor-fun",
    categoryName: "Outdoor Fun",
    shortDesc: "Massive 3-in-1 water park with sprinkler, water slide and inflatable pool for family fun.",
    description: "Transform your backyard into a water wonderland. Features a long water slide with sprinkler, inflatable pool and multiple splash activities. Perfect for summer gatherings and keeping children entertained for hours. Easy to set up and deflate for storage.",
    images: [
      "images/704731973_122119497633244690_1762907833678368150_n.jpg"
    ],
    colors: ["Multi"],
    stock: 15,
    featured: true,
    newArrival: true,
    tags: ["kids", "summer"]
  },
  {
    id: "gt-classic-green",
    name: "Classic Garden Essentials Kit",
    slug: "classic-garden-essentials-kit",
    price: 749,
    comparePrice: null,
    currency: "ZAR",
    category: "garden-tools",
    categoryName: "Garden Tools",
    shortDesc: "Essential hand tools for everyday gardening tasks.",
    description: "A carefully curated selection of must-have hand tools for planting, cultivating and maintaining your garden beds and pots. Durable construction with comfortable grips.",
    images: [
      "images/H20e329eed85d4a10ba50603967211d16o.jpg"
    ],
    colors: ["Green"],
    stock: 40,
    featured: false,
    newArrival: false,
    tags: ["essentials"]
  }
];

// Categories
const categories = [
  { id: "all", name: "All Products", slug: "all" },
  { id: "garden-tools", name: "Garden Tools", slug: "garden-tools" },
  { id: "lawn-care", name: "Lawn Care", slug: "lawn-care" },
  { id: "pool-care", name: "Pool Care", slug: "pool-care" },
  { id: "power-tools", name: "Power Tools", slug: "power-tools" },
  { id: "outdoor-fun", name: "Outdoor Fun", slug: "outdoor-fun" }
];

// Helper functions
function getProductById(id) {
  return products.find(p => p.id === id);
}

function getProductBySlug(slug) {
  return products.find(p => p.slug === slug);
}

function getProductsByCategory(catId) {
  if (catId === "all") return products;
  return products.filter(p => p.category === catId);
}

function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

function getNewArrivals() {
  return products.filter(p => p.newArrival);
}

function formatPrice(price) {
  return "R " + price.toLocaleString("en-ZA");
}
