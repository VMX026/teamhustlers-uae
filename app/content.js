// ============================================
// CENTRALIZED CONTENT MANAGEMENT
// ============================================
const content = {
  brand: {
    name: "HUSTLERS",
    superscript: "Team",
    tagline: "Building Your Dreams",
    subHeadline: "Quiet Grind. Loud Results.",
    partner: "AyalaLand International Sales",
    footerTagline: "Helping OFWs build homes. Creating legacies.",
    hashtag: "#TeamHustlersUAE",
  },
  logos: {
    header: "/images/logo/logo-white.png",
    hero: "/images/logo/logo-white.png"
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Our People", href: "#people" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Available Units", href: "#units" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    backgroundImage: "images/background/hero.png",
    ctaText: "Start Your Journey",
    ctaHref: "#contact",
  },
  about: {
    title: "About Us",
    heading: "Prestige. Trust. Ambition.",
    paragraphs: [
      "<sup>Team</sup> HUSTLERS UAE is a premier real estate consultancy proudly partnered with AyalaLand International Sales. We specialize in helping overseas Filipinos and international investors secure premium properties that appreciate in value and stand the test of time.",
      "Our mission is simple: to turn your dreams into addresses. Whether you're buying your first home, expanding your investment portfolio, or seeking expert property management, we deliver results with integrity, discretion, and relentless dedication.",
    ],
    stats: [
      { value: "500+", label: "Properties Sold" },
      { value: "₱2B+", label: "Portfolio Value" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "10+", label: "Years Experience" },
    ],
  },
  services: [
    {
      icon: "Home",
      title: "Property Buying",
      description: "Expert guidance through every step of acquiring your dream home or investment property in prime locations.",
    },
    {
      icon: "TrendingUp",
      title: "Property Selling",
      description: "Strategic marketing and valuation services to maximize your property's market value and ensure a swift sale.",
    },
    {
      icon: "Building2",
      title: "Investment Consulting",
      description: "Data-driven insights and personalized strategies to build a resilient, high-yield real estate portfolio.",
    },
    {
      icon: "Key",
      title: "Property Management",
      description: "End-to-end management services for landlords, ensuring tenant satisfaction and optimal asset performance.",
    },
  ],
  gallery: [
    {
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/14cfedc39-1ec6-9518-a9e2-dd0f4a3baf45.png",
      caption: "Elegant Living Spaces",
    },
    {
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/171863aab-8d3d-4cad-8b81-f16aa75fe258.png",
      caption: "Rooftop Infinity Pool",
    },
    {
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1bc0b29c1-f4d1-4139-80bb-323e83705b15.png",
      caption: "Serene Master Suites",
    },
    {
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1497ea0f7-bd18-40d7-8e50-f12eb5cd9af2.png",
      caption: "Modern Architecture",
    },
  ],
  people: [
    {
      image: "/images/team/jane.jpeg",
      name: "Mrs. Jane",
      role: "Senior Associate Manager",
      bio: "I don't just present options, I help you see possibilities and build the right path towards your future.",
    },
    {
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1d716e910-bb0c-9101-bd87-02affeac5bc8.png",
      name: "Sofia Reyes",
      role: "Investment Strategist",
      bio: "Specialist in OFW investment portfolios and AyalaLand pre-selling units.",
    },
    {
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1ba038120-5099-41d2-b247-7d67fbf58496.png",
      name: "Daniel Santos",
      role: "Client Relations Director",
      bio: "Dedicated to delivering white-glove service from inquiry to turnover.",
    },
  ],
  testimonials: [
    {
      quote: "Team HUSTLERS made my dream of owning an AyalaLand condo in BGC a reality. Their transparency and hustle are unmatched.",
      author: "Maria Lourdes T.",
      role: "OFW in Dubai",
      rating: 5,
    },
    {
      quote: "I've worked with many agencies, but none match the professionalism and results-driven approach of this team. Truly building legacies.",
      author: "Roberto Villanueva",
      role: "Property Investor",
      rating: 5,
    },
    {
      quote: "From consultation to turnover, every detail was handled with care. My family now has a home we're proud of.",
      author: "Jennifer & Mark Lim",
      role: "First-time Homebuyers",
      rating: 5,
    },
  ],
  units: [
    {
      id: 1,
      title: "The Azure Residences",
      location: "BGC, Taguig City",
      price: "Starting at ₱12.5M",
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1ec6d6aa5-948b-4803-aaf8-d3356bbeb2ce.png",
      description: "A prestigious 45-storey residential tower offering panoramic views of Manila Bay and the city skyline. Features world-class amenities, smart home technology, and direct access to premium retail and dining.",
      amenities: ["Swimming Pool", "Fitness Center", "24/7 Security", "Parking", "Garden Lounge", "High-Speed Internet"],
      gallery: [
        { label: "Kitchen", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1e3587835-98da-4414-9a60-1f960ca9172d.png" },
        { label: "Living Room", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1fbbfcf37-ce3e-4509-935d-18c1d53c010e.png" },
        { label: "Bedroom", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/19a736e21-516d-4782-8e54-3c44681adc30.png" },
        { label: "Balcony", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/194279565-7af1-4cab-b531-64e798785882.png" },
        { label: "Exterior", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1e5213098-badd-4bc1-bb2d-8167753e3200.png" },
      ],
    },
    {
      id: 2,
      title: "The Meridian Towers",
      location: "Makati CBD",
      price: "Starting at ₱18.9M",
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1497ea0f7-bd18-40d7-8e50-f12eb5cd9af2.png",
      description: "Ultra-luxury condominium in the heart of Makati's financial district. Designed for discerning professionals and investors seeking exclusivity, convenience, and unmatched capital appreciation.",
      amenities: ["Rooftop Pool", "Private Gym", "Concierge", "Valet Parking", "Sky Lounge", "Business Center"],
      gallery: [
        { label: "Kitchen", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1e3587835-98da-4414-9a60-1f960ca9172d.png" },
        { label: "Living Room", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/14cfedc39-1ec6-9518-a9e2-dd0f4a3baf45.png" },
        { label: "Bedroom", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1bc0b29c1-f4d1-4139-80bb-323e83705b15.png" },
        { label: "Balcony", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/194279565-7af1-4cab-b531-64e798785882.png" },
        { label: "Exterior", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1ec6d6aa5-948b-4803-aaf8-d3356bbeb2ce.png" },
      ],
    },
    {
      id: 3,
      title: "The Alveo Land Estates",
      location: "Nuvali, Sta. Rosa",
      price: "Starting at ₱8.2M",
      image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/171863aab-8d3d-4cad-8b81-f16aa75fe258.png",
      description: "Master-planned community offering serene lakefront living with resort-style amenities. Perfect for families seeking space, nature, and long-term value growth in South Luzon's premier township.",
      amenities: ["Lake Access", "Clubhouse", "Jogging Paths", "Playgrounds", "Security", "Green Spaces"],
      gallery: [
        { label: "Kitchen", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1e3587835-98da-4414-9a60-1f960ca9172d.png" },
        { label: "Living Room", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1fbbfcf37-ce3e-4509-935d-18c1d53c010e.png" },
        { label: "Bedroom", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/19a736e21-516d-4782-8e54-3c44681adc30.png" },
        { label: "Balcony", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/194279565-7af1-4cab-b531-64e798785882.png" },
        { label: "Exterior", image: "https://image.qwenlm.ai/public_source/0d85a3ce-a516-4d6c-a350-e1ca6261d345/1e5213098-badd-4bc1-bb2d-8167753e3200.png" },
      ],
    },
  ],
  contact: {
    phone: "+971 4 123 4567",
    email: "hello@teamhustlers.ae",
    address: "Business Bay, Dubai, United Arab Emirates",
    hours: "Mon - Sat: 9:00 AM - 7:00 PM GST",
    socials: {
      instagram: "https://www.instagram.com/teamhustlers_ayalaland?igsh=MThsenRsZjM5aGR5cQ%3D%3D&utm_source=qr",
      facebook: "https://www.facebook.com/share/17ruWSx4S6/?mibextid=wwXIfr"
    },
  },
};