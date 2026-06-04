"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  TrendingUp,
  Key,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronLeft,
  ChevronRight,
  X,
  Wifi,
  Car,
  Dumbbell,
  Waves,
  Shield,
  Trees,
  Menu,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";

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

// ============================================
// SOCIAL ICONS (Inline SVG)
// ============================================
const SocialIcon = ({ type, className = "w-6 h-6" }) => {
  const icons = {
    linkedin: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    instagram: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    facebook: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    whatsapp: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  };
  return icons[type] || null;
};

// ============================================
// HEADER
// ============================================
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={content.logos.header}
            alt="Team HUSTLERS Header Logo"
            className="h-8 sm:h-10 lg:h-12 w-auto drop-shadow-md"
          />
        </div>

        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {content.navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white/90 hover:text-[#D4AF37] transition-colors text-xs xl:text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 sm:px-6 py-4 space-y-2">
              {content.navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left text-white/90 hover:text-[#D4AF37] py-2 text-sm font-medium tracking-wide uppercase"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// ============================================
// HERO
// ============================================
const Hero = () => {
  const handleCtaClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={content.hero.backgroundImage}
          alt="Luxury Property"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={content.logos.hero}
            alt="Team HUSTLERS Hero Logo"
            className="h-[120px] sm:h-[180px] md:h-[220px] lg:h-[240px] w-auto mx-auto brightness-110 contrast-125 drop-shadow-2xl"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[#D4AF37] text-xs sm:text-sm md:text-lg lg:text-xl font-light tracking-[0.2em] sm:tracking-[0.3em] uppercase mt-4 sm:mt-6"
        >
          {content.brand.tagline}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-3 sm:mt-4 italic px-2"
        >
          {content.brand.subHeadline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white/70 text-xs sm:text-sm md:text-base mt-4 sm:mt-6 tracking-wide px-2"
        >
          In Partnership with {content.brand.partner}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          onClick={handleCtaClick}
          className="mt-6 sm:mt-8 lg:mt-10 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-[#D4AF37] text-black font-semibold tracking-widest uppercase text-xs sm:text-sm hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-[#D4AF37]/30"
        >
          {content.hero.ctaText}
        </motion.button>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center pt-1 sm:pt-2">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full" />
        </div>
      </div>
    </section>
  );
};

// ============================================
// ABOUT
// ============================================
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">
              {content.about.title}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mt-3 sm:mt-4 leading-tight">
              {content.about.heading}
            </h2>
            <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-gray-600 leading-relaxed text-sm sm:text-base">
              {content.about.paragraphs.map((para, idx) => (
                <p key={idx} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6"
          >
            {content.about.stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-50 border border-gray-100 p-4 sm:p-6 lg:p-8 text-center hover:border-[#D4AF37] transition-colors duration-300"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#D4AF37]">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-2 tracking-wide uppercase">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// SERVICES
// ============================================
const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % content.services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const iconMap = { Home, TrendingUp, Building2, Key };

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">What We Do</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mt-3 sm:mt-4">Our Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {content.services.map((service, idx) => {
            const IconComponent = iconMap[service.icon];
            const isActive = idx === activeIndex;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-5 sm:p-6 lg:p-8 border transition-all duration-500 cursor-default ${
                  isActive
                    ? "bg-black text-white border-[#D4AF37] shadow-2xl"
                    : "bg-white text-gray-900 border-gray-200 hover:border-[#D4AF37]"
                }`}
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6 ${isActive ? "text-[#D4AF37]" : "text-gray-900"}`}>
                  <IconComponent size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-medium mb-2 sm:mb-3 tracking-wide">{service.title}</h3>
                <p className={`text-xs sm:text-sm leading-relaxed ${isActive ? "text-white/80" : "text-gray-600"}`}>
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 space-x-2">
          {content.services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-1 transition-all duration-300 ${
                idx === activeIndex ? "w-8 sm:w-10 bg-[#D4AF37]" : "w-4 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// GALLERY
// ============================================
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.gallery.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openLightbox = (idx) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">Portfolio</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white mt-3 sm:mt-4">Gallery</h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex"
            >
              {content.gallery.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-1 sm:px-2">
                  <div
                    onClick={() => openLightbox(idx)}
                    className="relative group cursor-pointer overflow-hidden aspect-[16/10]"
                  >
                    <img
                      src={item.image}
                      alt={item.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-end justify-center">
                      <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-500 pb-4 sm:pb-8 px-2">
                        <p className="text-[#D4AF37] text-xs sm:text-sm lg:text-lg tracking-widest uppercase font-medium text-center">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + content.gallery.length) % content.gallery.length)}
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] text-black flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % content.gallery.length)}
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] text-black flex items-center justify-center hover:bg-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {content.gallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  idx === currentIndex ? "w-6 sm:w-10 bg-[#D4AF37]" : "w-4 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors z-10"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev - 1 + content.gallery.length) % content.gallery.length);
              }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev + 1) % content.gallery.length);
              }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#D4AF37] transition-colors"
            >
              <ChevronRight size={32} />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={content.gallery[lightboxIndex].image}
              alt={content.gallery[lightboxIndex].caption}
              className="max-w-full max-h-[80vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-4 sm:bottom-8 text-center left-0 right-0 px-4">
              <p className="text-[#D4AF37] text-sm sm:text-lg tracking-widest uppercase">
                {content.gallery[lightboxIndex].caption}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ============================================
// OUR PEOPLE
// ============================================
const OurPeople = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.people.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="people" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">The Team</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mt-3 sm:mt-4">Our People</h2>
        </motion.div>

        <div className="relative min-h-[350px] sm:min-h-[400px] lg:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-2xl">
                <img
                  src={content.people[currentIndex].image}
                  alt={content.people[currentIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-medium text-gray-900 mt-4 sm:mt-6 tracking-wide px-2">
                {content.people[currentIndex].name}
              </h3>
              <p className="text-[#D4AF37] text-xs sm:text-sm tracking-widest uppercase mt-2">
                {content.people[currentIndex].role}
              </p>
              <p className="text-gray-600 mt-3 sm:mt-4 max-w-md mx-auto leading-relaxed text-sm sm:text-base px-4">
                {content.people[currentIndex].bio}
              </p>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + content.people.length) % content.people.length)}
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] text-black flex items-center justify-center hover:bg-black hover:text-[#D4AF37] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % content.people.length)}
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] text-black flex items-center justify-center hover:bg-black hover:text-[#D4AF37] transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 space-x-2 sm:space-x-3">
          {content.people.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 sm:w-10 bg-[#D4AF37]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// TESTIMONIALS
// ============================================
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">Client Stories</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mt-3 sm:mt-4">Testimonials</h2>
        </motion.div>

        <div className="relative min-h-[250px] sm:min-h-[300px] lg:min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="text-center px-4"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#D4AF37] mx-auto mb-4 sm:mb-6" strokeWidth={1} />
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-gray-800 leading-relaxed italic">
                "{content.testimonials[currentIndex].quote}"
              </p>
              <div className="flex justify-center mt-4 sm:mt-6 space-x-1">
                {[...Array(content.testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              <div className="mt-4 sm:mt-6">
                <p className="text-gray-900 font-medium tracking-wide text-sm sm:text-base">
                  {content.testimonials[currentIndex].author}
                </p>
                <p className="text-[#D4AF37] text-xs sm:text-sm tracking-widest uppercase mt-1">
                  {content.testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10 space-x-2 sm:space-x-3">
          {content.testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-8 sm:w-10 bg-[#D4AF37]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============================================
// AVAILABLE UNITS
// ============================================
const AvailableUnits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [modalGalleryIndex, setModalGalleryIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % content.units.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (unit) => {
    setSelectedUnit(unit);
    setModalGalleryIndex(0);
    setModalOpen(true);
  };

  const amenityIcons = {
    "Swimming Pool": Waves,
    "Rooftop Pool": Waves,
    "Fitness Center": Dumbbell,
    "Private Gym": Dumbbell,
    "24/7 Security": Shield,
    "Concierge": Shield,
    "Parking": Car,
    "Valet Parking": Car,
    "Garden Lounge": Trees,
    "Sky Lounge": Trees,
    "High-Speed Internet": Wifi,
    "Business Center": Building2,
    "Lake Access": Waves,
    "Clubhouse": Home,
    "Jogging Paths": Trees,
    "Playgrounds": Trees,
    "Security": Shield,
    "Green Spaces": Trees,
  };

  return (
    <section id="units" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">Featured Properties</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-900 mt-3 sm:mt-4">Available Units</h2>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="flex"
            >
              {content.units.map((unit, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div
                    onClick={() => openModal(unit)}
                    className="bg-gray-50 border border-gray-200 hover:border-[#D4AF37] transition-all duration-500 cursor-pointer group overflow-hidden"
                  >
                    <div className="relative overflow-hidden aspect-[16/10]">
                      <img
                        src={unit.image}
                        alt={unit.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-[#D4AF37] text-black px-3 sm:px-4 py-1 sm:py-2 text-[10px] sm:text-xs font-semibold tracking-widest uppercase">
                        View Details
                      </div>
                    </div>
                    <div className="p-4 sm:p-6 lg:p-8">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 tracking-wide">{unit.title}</h3>
                      <div className="flex items-center mt-2 sm:mt-3 text-gray-600">
                        <MapPin size={14} className="text-[#D4AF37] mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm tracking-wide">{unit.location}</span>
                      </div>
                      <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                        <p className="text-[#D4AF37] text-base sm:text-lg lg:text-xl font-medium">{unit.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + content.units.length) % content.units.length)}
            className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 -translate-x-1 sm:-translate-x-2 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] text-black flex items-center justify-center hover:bg-black hover:text-[#D4AF37] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % content.units.length)}
            className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 translate-x-1 sm:translate-x-2 w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37] text-black flex items-center justify-center hover:bg-black hover:text-[#D4AF37] transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex justify-center mt-8 sm:mt-10 space-x-2">
            {content.units.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 transition-all duration-300 ${
                  idx === currentIndex ? "w-6 sm:w-10 bg-[#D4AF37]" : "w-4 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && selectedUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-5xl w-full max-h-[95vh] overflow-y-auto my-4 sm:my-8 rounded-sm"
            >
              <div className="sticky top-0 bg-white z-10 flex justify-between items-center p-4 sm:p-6 border-b border-gray-200">
                <h3 className="text-lg sm:text-2xl font-medium text-gray-900">{selectedUnit.title}</h3>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="relative aspect-[16/10] mb-4 sm:mb-6 overflow-hidden">
                  <img
                    src={selectedUnit.gallery[modalGalleryIndex].image}
                    alt={selectedUnit.gallery[modalGalleryIndex].label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white px-3 sm:px-4 py-1 sm:py-2 text-xs tracking-widest uppercase">
                    {selectedUnit.gallery[modalGalleryIndex].label}
                  </div>
                </div>

                <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2">
                  {selectedUnit.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setModalGalleryIndex(idx)}
                      className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-all ${
                        idx === modalGalleryIndex ? "border-[#D4AF37]" : "border-gray-200"
                      }`}
                    >
                      <img src={img.image} alt={img.label} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="md:col-span-2">
                    <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-2 sm:mb-3">About This Property</h4>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{selectedUnit.description}</p>
                  </div>
                  <div className="bg-gray-50 p-4 sm:p-6 border border-gray-200">
                    <p className="text-xs text-gray-600 tracking-wide uppercase">Location</p>
                    <p className="text-gray-900 font-medium mt-1 text-sm sm:text-base">{selectedUnit.location}</p>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-600 tracking-wide uppercase">Starting Price</p>
                      <p className="text-[#D4AF37] text-lg sm:text-2xl font-medium mt-1">{selectedUnit.price}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-3 sm:mb-4">Amenities</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
                    {selectedUnit.amenities.map((amenity, idx) => {
                      const IconComponent = amenityIcons[amenity] || Shield;
                      return (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-gray-50 border border-gray-200"
                        >
                          <IconComponent size={16} className="text-[#D4AF37] flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-gray-700 text-xs sm:text-sm">{amenity}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setModalOpen(false);
                    const el = document.querySelector("#contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="mt-6 sm:mt-8 w-full py-3 sm:py-4 bg-[#D4AF37] text-black font-semibold tracking-widest uppercase text-xs sm:text-sm hover:bg-black hover:text-[#D4AF37] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Inquire About This Unit</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

// ============================================
// CONTACT
// ============================================
const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <p className="text-[#D4AF37] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium">Reach Out</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mt-3 sm:mt-4">Get in Touch</h2>
          <p className="text-white/60 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base px-2">
            Ready to begin your journey? Connect with us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Phone className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-white/50 tracking-widest uppercase">Phone</p>
                <p className="text-white mt-1 text-sm sm:text-base">{content.contact.phone}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Mail className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-white/50 tracking-widest uppercase">Email</p>
                <p className="text-white mt-1 text-sm sm:text-base">{content.contact.email}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <MapPin className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-white/50 tracking-widest uppercase">Office</p>
                <p className="text-white mt-1 text-sm sm:text-base">{content.contact.address}</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 sm:space-x-4">
              <Clock className="text-[#D4AF37] mt-1 flex-shrink-0" size={18} />
              <div>
                <p className="text-xs text-white/50 tracking-widest uppercase">Hours</p>
                <p className="text-white mt-1 text-sm sm:text-base">{content.contact.hours}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs text-white/50 tracking-widest uppercase mb-4 sm:mb-6">Follow Us</p>
            <div className="flex space-x-3 sm:space-x-4 lg:space-x-6">
              {Object.keys(content.contact.socials).map((social) => (
                <a
                  key={social}
                  href={content.contact.socials[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 border-2 border-[#D4AF37] text-[#D4AF37] flex items-center justify-center hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
                >
                  <SocialIcon type={social} className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============================================
// FOOTER
// ============================================
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 lg:py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-base sm:text-lg lg:text-xl font-medium text-gray-900 tracking-wide">
              <sup className="text-[#D4AF37] text-xs sm:text-sm">Team</sup> HUSTLERS
            </h3>
            <p className="text-[#D4AF37] text-xs tracking-widest uppercase mt-2">
              {content.brand.tagline}
            </p>
            <p className="text-gray-600 text-xs sm:text-sm mt-3 sm:mt-4 leading-relaxed">
              {content.brand.footerTagline}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-gray-900 tracking-widest uppercase mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {content.navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(link.href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-gray-600 hover:text-[#D4AF37] transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-gray-900 tracking-widest uppercase mb-3 sm:mb-4">
              Connect
            </h4>
            <div className="flex space-x-3">
              {Object.keys(content.contact.socials).map((social) => (
                <a
                  key={social}
                  href={content.contact.socials[social]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-300 text-gray-600 flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300"
                >
                  <SocialIcon type={social} className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs sm:text-sm mt-4 sm:mt-6">
              {content.contact.email}
            </p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <p className="text-gray-500 text-xs tracking-wide text-center sm:text-left">
            © {currentYear} <sup className="text-[#D4AF37]">Team</sup> HUSTLERS UAE. All rights reserved.
          </p>
          <p className="text-[#D4AF37] text-xs tracking-widest uppercase">
            {content.brand.hashtag}
          </p>
        </div>
      </div>
    </footer>
  );
};

// ============================================
// MAIN APP
// ============================================
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <OurPeople />
      <Testimonials />
      <AvailableUnits />
      <Contact />
      <Footer />
    </div>
  );
}