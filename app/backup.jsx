'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { 
  Home, Building2, TrendingUp, Briefcase, MapPin, Phone, Mail, 
  Camera, Globe, User, MessageCircle, ChevronLeft, 
  ChevronRight, X, Bed, Bath, Square, Menu, CheckCircle2 
} from 'lucide-react';

// ==========================================
// CONTENT CONFIGURATION
// ==========================================
const content = {
  text: {
    brand: "HUSTLERS",
    tagline: "Building Your Dreams.",
    subHeadline: "Quiet Grind. Loud Results.",
    aboutTitle: "About Us",
    aboutDesc: "Team HUSTLERS UAE is a premier real estate consultancy partnered with AyalaLand International Sales. We specialize in helping Overseas Filipino Workers (OFWs) and investors build lasting legacies through strategic property investments.",
    servicesTitle: "Our Services",
    galleryTitle: "Gallery",
    peopleTitle: "Team HUSTLERS — Our People, Our Strength",
    testimonialsTitle: "What Our Clients Say",
    unitsTitle: "Available Units",
    contactTitle: "Get In Touch",
    footerTagline: "Helping OFWs build homes. Creating legacies.",
  },
  links: {
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/971500000000",
    email: "mailto:contact@teamhustlers.ae",
    phone: "tel:+971500000000"
  },
  contact: {
    phone: "+971 50 000 0000",
    email: "contact@teamhustlers.ae",
    address: "Dubai Marina, Dubai, UAE"
  },
  services: [
    { icon: "Home", title: "Property Buying", description: "Expert guidance in finding and acquiring your dream property with seamless transactions." },
    { icon: "TrendingUp", title: "Property Selling", description: "Strategic marketing and valuation to maximize your property's market potential." },
    { icon: "Briefcase", title: "Investment Consulting", description: "Data-driven insights and portfolio strategies for high-yield real estate investments." },
    { icon: "Building2", title: "Property Management", description: "Comprehensive management services to maintain and grow your asset's value." }
  ],
  gallery: [
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1a9b8b1de-5800-436d-b8a3-9ca91c91d3ba.png", caption: "Luxury Living Spaces" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/17fe78e55-bd21-4f4c-9f26-2ae76aa47c62.png", caption: "Premium Bedrooms" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1ba42942c-e4ac-46b0-afcd-421e27d007c2.png", caption: "Stunning City Views" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1ba42942c-e4ac-46b0-afcd-421e27d007c2.png", caption: "Stunning City Views" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1ba42942c-e4ac-46b0-afcd-421e27d007c2.png", caption: "Stunning City Views" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1ba42942c-e4ac-46b0-afcd-421e27d007c2.png", caption: "Stunning City Views" }
  ],
  people: [
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/16060f40d-aa36-4edd-af60-7c79318eb9ea.png", name: "Marcus Chen", role: "Lead Investment Advisor", contact: "+971 50 123 4567" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/122e21d0d-f160-429e-9ab4-f18f04bd98b8.png", name: "Sarah Lin", role: "Senior Property Consultant", contact: "+971 50 234 5678" },
    { image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1f73e5078-2a68-440c-b7ab-f0f4737128e8.png", name: "David Reyes", role: "Client Relations Manager", contact: "+971 50 345 6789" }
  ],
  testimonials: [
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1c9bc2241-0449-4a9e-b617-8b76e771be1d.png", name: "Roberto Santos", quote: "Team HUSTLERS made my dream of owning a home in the UAE a reality. Their professionalism and dedication are unmatched." },
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1fcf7fb78-47b8-408c-be52-5144855ec648.png", name: "Maria Cruz", quote: "As an OFW, investing back home was daunting. They guided me every step of the way with transparency and trust." },
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1fcf7fb78-47b8-408c-be52-5144855ec648.png", name: "Maria Cruz", quote: "As an OFW, investing back home was daunting. They guided me every step of the way with transparency and trust." },
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1fcf7fb78-47b8-408c-be52-5144855ec648.png", name: "Maria Cruz", quote: "As an OFW, investing back home was daunting. They guided me every step of the way with transparency and trust." },
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1fcf7fb78-47b8-408c-be52-5144855ec648.png", name: "Maria Cruz", quote: "As an OFW, investing back home was daunting. They guided me every step of the way with transparency and trust." },
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1fcf7fb78-47b8-408c-be52-5144855ec648.png", name: "Maria Cruz", quote: "As an OFW, investing back home was daunting. They guided me every step of the way with transparency and trust." },
    { avatar: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1fcf7fb78-47b8-408c-be52-5144855ec648.png", name: "Maria Cruz", quote: "As an OFW, investing back home was daunting. They guided me every step of the way with transparency and trust." }
  ],
  units: [
    {
      title: "The Aurelia Residences",
      location: "Dubai Marina, UAE",
      price: "Starting at AED 1.2M",
      description: "A masterpiece of modern architecture offering unparalleled luxury and breathtaking views of the marina.",
      amenities: ["3 Bedrooms", "2 Bathrooms", "1,800 sq ft", "Smart Home System", "Private Balcony"],
      image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1b2938039-3d32-464a-b130-815bb5087673.png",
      insideImages: [
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/153f4c6c9-126b-48c2-80f8-7127ba1977be.png",
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1a9b8b1de-5800-436d-b8a3-9ca91c91d3ba.png",
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/17fe78e55-bd21-4f4c-9f26-2ae76aa47c62.png",
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1ba42942c-e4ac-46b0-afcd-421e27d007c2.png"
      ]
    },
    {
      title: "The Obsidian Tower",
      location: "Business Bay, UAE",
      price: "Starting at AED 950K",
      description: "Sleek, sophisticated, and strategically located in the heart of Dubai's business district.",
      amenities: ["2 Bedrooms", "2 Bathrooms", "1,400 sq ft", "Concierge Service", "Rooftop Pool"],
      image: "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/11c1210a8-d557-4d61-99bc-b1141eb85f3f.png",
      insideImages: [
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1596901b9-0045-9754-a44a-c4afc27a2bbb.png",
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/153f4c6c9-126b-48c2-80f8-7127ba1977be.png",
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/17fe78e55-bd21-4f4c-9f26-2ae76aa47c62.png",
        "https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/1ba42942c-e4ac-46b0-afcd-421e27d007c2.png"
      ]
    }
  ]
};

const iconMap = { Home, TrendingUp, Briefcase, Building2, MapPin, Phone, Mail, MessageCircle, Bed, Bath, Square, CheckCircle2 };

const Logo = ({ light = false }) => (
  <div className={`flex items-baseline gap-1 font-heading font-bold text-2xl ${light ? 'text-white' : 'text-black'}`}>
    <sup className="text-[#D4AF37] text-xs md:text-sm font-medium mt-[-10px]">Team</sup>
    <span>HUSTLERS</span>
  </div>
);

const SectionTitle = ({ title, subtitle, light = false }) => (
  <div className="text-center mb-16 md:mb-24">
    <h2 className={`font-heading text-4xl md:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-black'}`}>
      {title}
    </h2>
    {subtitle && <p className={`font-body text-lg md:text-xl ${light ? 'text-gray-300' : 'text-gray-600'}`}>{subtitle}</p>}
    <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6"></div>
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Gallery', 'Our People', 'Testimonials', 'Available Units', 'Contact'];

  const scrollToSection = (id) => {
    const element = document.getElementById(id.toLowerCase().replace(' ', '-'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#000000]/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Logo light={true} />
        <nav className="hidden lg:flex gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="font-btn text-white hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider"
            >
              {link}
            </button>
          ))}
        </nav>
        <button className="lg:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu size={28} />
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#000000] border-t border-[#D4AF37]/20"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="font-btn text-white hover:text-[#D4AF37] transition-colors text-left text-lg uppercase tracking-wider"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
    <div className="absolute inset-0">
      <img 
        src="https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/17fa7d28d-888a-4750-b97d-9aff773fb370.png" 
        alt="AyalaLand x Hustlers" 
        className="w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90"></div>
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-baseline justify-center gap-2 mb-6">
          <sup className="text-[#D4AF37] text-xl md:text-2xl font-heading font-medium">Team</sup>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">HUSTLERS</h1>
        </div>
        <p className="font-body text-2xl md:text-3xl text-[#D4AF37] mb-4 italic">{content.text.tagline}</p>
        <p className="font-body text-lg md:text-xl text-gray-300 mb-10 tracking-wide">{content.text.subHeadline}</p>
        <a 
          href="#available-units" 
          onClick={(e) => { e.preventDefault(); document.getElementById('available-units').scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-block bg-[#D4AF37] text-black font-btn font-semibold px-10 py-4 rounded-none hover:bg-white transition-colors duration-300 uppercase tracking-widest text-sm"
        >
          Explore Properties
        </a>
      </motion.div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-[#FFFFFF] py-24 md:py-32 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={content.text.aboutTitle} light={false} />
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed">
            {content.text.aboutDesc}
          </p>
          <div className="mt-8 flex gap-8">
            <div>
              <p className="font-heading text-4xl font-bold text-[#D4AF37]">100+</p>
              <p className="font-body text-sm text-gray-500 uppercase tracking-wider">Properties Sold</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-[#D4AF37]">50+</p>
              <p className="font-body text-sm text-gray-500 uppercase tracking-wider">Happy Clients</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden">
            <img 
              src="https://image.qwenlm.ai/public_source/e3ba5c4e-2852-4904-9f5e-69ed7c556a45/11c1210a8-d557-4d61-99bc-b1141eb85f3f.png" 
              alt="About Us" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#D4AF37] hidden md:block"></div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="bg-[#F9F9F9] py-24 md:py-32 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={content.text.servicesTitle} light={false} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {content.services.map((service, idx) => {
          const Icon = iconMap[service.icon];
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#D4AF37]"
            >
              <Icon className="w-10 h-10 text-[#D4AF37] mb-6" />
              <h3 className="font-heading text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="bg-[#1A1A1A] py-24 md:py-32 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={content.text.galleryTitle} light={true} />
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-12"
      >
        {content.gallery.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="group relative overflow-hidden aspect-[4/3] cursor-pointer">
              <img 
                src={item.image} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <p className="font-heading text-[#D4AF37] text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.caption}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#D4AF37] transition-all duration-300 pointer-events-none"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

const OurPeople = () => (
  <section id="our-people" className="bg-[#FFFFFF] py-24 md:py-32 px-6 md:px-12 lg:px-24">
    <div className="max-w-5xl mx-auto">
      <SectionTitle title={content.text.peopleTitle} light={false} />
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        className="pb-12"
      >
        {content.people.map((person, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
              <div className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0 overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-black mb-2">{person.name}</h3>
                <p className="font-body text-[#D4AF37] text-lg mb-6 uppercase tracking-wider">{person.role}</p>
                <p className="font-body text-gray-600 flex items-center justify-center md:justify-start gap-2">
                  <Phone size={18} className="text-[#D4AF37]" />
                  {person.contact}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

const Testimonials = () => (
  <section id="testimonials" className="bg-[#000000] py-24 md:py-32 px-6 md:px-12 lg:px-24">
    <div className="max-w-7xl mx-auto">
      <SectionTitle title={content.text.testimonialsTitle} light={true} />
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }
        }}
        className="pb-12"
      >
        {content.testimonials.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#1A1A1A] p-10 md:p-14 border border-[#D4AF37]/20 h-full flex flex-col">
              <div className="flex items-center gap-6 mb-8">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#D4AF37]"
                />
                <div>
                  <h4 className="font-heading text-xl font-bold text-[#D4AF37]">{item.name}</h4>
                  <p className="font-body text-gray-400 text-sm">Verified Client</p>
                </div>
              </div>
              <p className="font-body text-white text-lg leading-relaxed italic flex-grow">
                "{item.quote}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

const UnitModal = ({ unit, onClose }) => {
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 hover:bg-[#D4AF37] hover:text-black transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="relative aspect-video bg-gray-100">
          <img 
            src={unit.insideImages[imgIndex]} 
            alt="Interior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {unit.insideImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setImgIndex(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === imgIndex ? 'bg-[#D4AF37]' : 'bg-white/50'}`}
              />
            ))}
          </div>
          <button 
            onClick={() => setImgIndex((prev) => prev === 0 ? unit.insideImages.length - 1 : prev - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => setImgIndex((prev) => (prev + 1) % unit.insideImages.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 hover:bg-[#D4AF37] hover:text-black transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="p-8 md:p-12">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-black mb-2">{unit.title}</h3>
          <p className="font-body text-[#D4AF37] text-lg mb-6 flex items-center gap-2">
            <MapPin size={18} /> {unit.location}
          </p>
          <p className="font-body text-gray-700 text-lg leading-relaxed mb-8">{unit.description}</p>
          
          <div className="mb-8">
            <h4 className="font-heading text-xl font-bold text-black mb-4">Amenities & Features</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {unit.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-[#D4AF37] flex-shrink-0" />
                  <span className="font-body text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="font-body text-sm text-gray-500 uppercase tracking-wider mb-1">Charm Pricing</p>
              <p className="font-heading text-3xl font-bold text-[#D4AF37]">{unit.price}</p>
            </div>
            <a 
              href={content.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black font-btn font-semibold px-8 py-4 hover:bg-black hover:text-[#D4AF37] transition-colors uppercase tracking-widest text-sm"
            >
              Inquire Now
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AvailableUnits = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);

  return (
    <section id="available-units" className="bg-[#F9F9F9] py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={content.text.unitsTitle} light={false} />
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }
          }}
          className="pb-16"
        >
          {content.units.map((unit, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={unit.image} 
                    alt={unit.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black font-btn font-bold px-4 py-2 text-sm uppercase tracking-wider">
                    For Sale
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold text-black mb-2">{unit.title}</h3>
                  <p className="font-body text-gray-500 text-sm mb-4 flex items-center gap-2">
                    <MapPin size={16} className="text-[#D4AF37]" /> {unit.location}
                  </p>
                  <p className="font-body text-gray-700 text-sm mb-6 line-clamp-2">{unit.description}</p>
                  <div className="flex items-center gap-4 mb-6 text-gray-600">
                    <span className="flex items-center gap-1 text-sm"><Bed size={16} /> 3</span>
                    <span className="flex items-center gap-1 text-sm"><Bath size={16} /> 2</span>
                    <span className="flex items-center gap-1 text-sm"><Square size={16} /> 1,800 sqft</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-gray-100 pt-6">
                    <p className="font-heading text-xl font-bold text-[#D4AF37]">{unit.price}</p>
                    <button 
                      onClick={() => setSelectedUnit(unit)}
                      className="font-btn text-sm font-semibold text-black border-b-2 border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors uppercase tracking-wider"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <AnimatePresence>
        {selectedUnit && <UnitModal unit={selectedUnit} onClose={() => setSelectedUnit(null)} />}
      </AnimatePresence>
    </section>
  );
};

// Contact Section
const Contact = () => (
  <section id="contact" className="bg-[#000000] py-24 md:py-32 px-6 md:px-12 lg:px-24">
    <div className="max-w-5xl mx-auto text-center">
      <SectionTitle title={content.text.contactTitle} light={true} />
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col items-center">
          <Phone className="w-8 h-8 text-[#D4AF37] mb-4" />
          <p className="font-body text-white text-lg">{content.contact.phone}</p>
        </div>
        <div className="flex flex-col items-center">
          <Mail className="w-8 h-8 text-[#D4AF37] mb-4" />
          <p className="font-body text-white text-lg">{content.contact.email}</p>
        </div>
        <div className="flex flex-col items-center">
          <MapPin className="w-8 h-8 text-[#D4AF37] mb-4" />
          <p className="font-body text-white text-lg">{content.contact.address}</p>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        {[
          { icon: User, href: content.links.linkedin },
          { icon: Camera, href: content.links.instagram },
          { icon: Globe, href: content.links.facebook },
          { icon: MessageCircle, href: content.links.whatsapp }
        ].map((social, idx) => {
          const Icon = social.icon;
          return (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300"
            >
              <Icon size={24} />
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

// Footer Section
const Footer = () => (
  <footer className="bg-[#FFFFFF] py-16 px-6 md:px-12 lg:px-24 border-t border-gray-100">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <Logo light={false} />
        <p className="font-body text-gray-600 mt-4 text-sm leading-relaxed">
          {content.text.footerTagline}
        </p>
      </div>
      <div className="md:text-center">
        <p className="font-heading text-sm font-bold text-black uppercase tracking-widest mb-4">Follow Us</p>
        <div className="flex md:justify-center gap-6">
            {[User, Camera, Globe, MessageCircle].map((Icon, idx) => (
            <a key={idx} href="#" className="text-[#D4AF37] hover:text-black transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
      <div className="md:text-right">
        <p className="font-body text-gray-400 text-sm mb-2">#TeamHustlersUAE</p>
        <p className="font-body text-gray-400 text-sm mb-6">#BuildingYourDreams</p>
        <p className="font-heading text-xs text-gray-400 uppercase tracking-wider">
          © 2026 Team HUSTLERS UAE. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <>
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/montserrat@5.0.0/index.css');
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/poppins@5.0.0/index.css');
        @import url('https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.0/index.css');
        
        .font-heading { font-family: 'Montserrat', sans-serif; }
        .font-body { font-family: 'Poppins', sans-serif; }
        .font-btn { font-family: 'Inter', sans-serif; }
        
        .swiper-pagination-bullet {
          background: #D4AF37 !important;
          opacity: 0.5 !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
        .swiper-button-next, .swiper-button-prev {
          color: #D4AF37 !important;
        }
      `}</style>
      <div className="font-body antialiased">
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
    </>
  );
}
