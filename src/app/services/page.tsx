"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"grad" | "solo" | "events">("grad");
  const [showCalendly, setShowCalendly] = useState(false);
  const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "grad",
    packageTier: "",
    preferredDate: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          sessionType: "grad",
          packageTier: "",
          preferredDate: "",
          message: "",
        });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openCalendly = (url: string) => {
    if (url === "#") {
      window.open(`mailto:leekshotit@gmail.com?subject=Session Booking Inquiry&body=Hi, I'm interested in booking a ${activeTab} session. Please contact me with available dates.`, '_blank');
      return;
    }
    
    // Use Calendly's built-in popup if available, otherwise open in new tab
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({ url });
    } else {
      // Smooth fallback - open directly in new tab without alert
      window.open(url, '_blank');
    }
  };

  const closeCalendly = () => {
    setShowCalendly(false);
    setSelectedCalendlyUrl("");
  };

  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    
    if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
      document.head.appendChild(link);
    }
    
    // Load Calendly popup widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    
    script.onload = () => {
      console.log('Calendly script loaded');
    };
    
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.head.appendChild(script);
    }
    
    return () => {
      // Don't remove script on unmount to avoid reload issues
    };
  }, []);

  const gradPackages = [
    {
      name: "Bronze",
      price: 220,
      duration: "1 Hour",
      features: [
        "1 Outfit & 2 Locations",
        "20 Edited Images",
      ],
      accent: "#CD7F32",
      calendlyUrl: "https://calendly.com/leekshotit/60min",
    },
    {
      name: "Silver",
      price: 310,
      duration: "2 Hours",
      features: [
        "2 Outfits & 2-3 Locations",
        "30 Edited Images",
        "15 sec Cinematic Clip",
      ],
      popular: true,
      accent: "#C0C0C0",
      calendlyUrl: "https://calendly.com/leekshotit/graduation-silver-package",
    },
    {
      name: "Gold",
      price: 400,
      duration: "3 Hours",
      features: [
        "3-4 Outfits & 3 Locations",
        "35+ Edited Images",
        "30-45 sec Cinematic Clip",
      ],
      accent: "#FFD700",
      calendlyUrl: "https://calendly.com/leekshotit/graduation-gold-package-clone",
    },
  ];

  const soloPackages = [
    {
      name: "Bronze",
      price: 185,
      duration: "30 Minutes",
      features: [
        "1 Outfit & Location",
        "20 Edited Images",
      ],
      accent: "#CD7F32",
      calendlyUrl: "#",
    },
    {
      name: "Silver",
      price: 220,
      duration: "1 Hour",
      features: [
        "1-2 Outfits & Locations",
        "30 Edited Images",
      ],
      popular: true,
      accent: "#C0C0C0",
      calendlyUrl: "#",
    },
    {
      name: "Gold",
      price: 310,
      duration: "2 Hours",
      features: [
        "3 Outfits & Locations",
        "35+ Edited Images",
        "15 sec Cinematic Clip",
      ],
      accent: "#FFD700",
      calendlyUrl: "#",
    },
    {
      name: "Platinum",
      price: 400,
      duration: "3 Hours",
      features: [
        "4 Outfits & Locations",
        "40+ Edited Images",
        "15-30 sec Cinematic Clip",
      ],
      accent: "#2563EB",
      calendlyUrl: "#",
    },
  ];

  const eventsPackages = [
    {
      name: "Hourly Rate",
      price: 100,
      duration: "Per Hour",
      features: [
        "Professional Event Coverage",
        "All Edited Images Included",
        "Candid & Posed Shots",
        "Quick Turnaround",
      ],
      accent: "#2563EB",
      popular: true,
      calendlyUrl: "#",
    },
  ];

  const packages = activeTab === "grad" ? gradPackages : activeTab === "solo" ? soloPackages : eventsPackages;

  return (
    <main className="bg-background">
      <NavBar />

      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
            {/* Header */}
            <div className="mb-8 md:mb-12">
              <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
                Pricing
              </p>
              <h1 className="text-white text-[2.5rem] md:text-[4.5rem] font-[700] uppercase mb-3 md:mb-4 tracking-tight leading-tight">
                Booking & Services
              </h1>
              <p className="text-customGrayAlt text-[0.938rem] md:text-[1.125rem] max-w-2xl leading-relaxed">
                Professional photography sessions with all images professionally edited and delivered digitally
              </p>
            </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
            <a 
              href="#pricing" 
              className="px-4 py-2 glass glass-hover glass-lift border border-primary/50 text-primary text-[0.75rem] uppercase font-[500] rounded-xl"
            >
              Pricing
            </a>
            <a 
              href="#policy" 
              className="px-4 py-2 glass glass-hover glass-lift border border-white/10 text-customGrayAlt text-[0.75rem] uppercase font-[500] rounded-xl hover:text-primary"
            >
              Booking Policy
            </a>
            <a 
              href="/contact" 
              className="px-4 py-2 glass-thin glass-hover glass-lift bg-primary/80 text-white text-[0.75rem] uppercase font-[600] rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)]"
            >
              Contact First
            </a>
          </div>

          {/* Tab Switcher - Minimal */}
          <div id="pricing" className="flex gap-2 mb-8 md:mb-12 border-b border-superGray">
            <button
              onClick={() => setActiveTab("grad")}
              className={`pb-3 md:pb-4 px-4 md:px-6 font-[500] uppercase text-[0.75rem] md:text-[0.875rem] border-b-2 ${
                activeTab === "grad"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Graduation
            </button>
            <button
              onClick={() => setActiveTab("solo")}
              className={`pb-3 md:pb-4 px-4 md:px-6 font-[500] uppercase text-[0.75rem] md:text-[0.875rem] border-b-2 ${
                activeTab === "solo"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`pb-3 md:pb-4 px-4 md:px-6 font-[500] uppercase text-[0.75rem] md:text-[0.875rem] border-b-2 ${
                activeTab === "events"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Events
            </button>
          </div>

          {/* Pricing Cards - Redesigned */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`group relative glass glass-lift backdrop-blur-2xl rounded-2xl overflow-hidden ${
                  pkg.popular ? "border-primary shadow-lg shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40" : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accent Bar */}
                <div 
                  className="h-1.5"
                  style={{ backgroundColor: pkg.accent }}
                />

                {/* Popular Badge */}
                {pkg.popular && (
                  <div 
                    className="absolute top-5 -right-8 rotate-45 w-32 text-center py-1 text-[0.625rem] font-[700] uppercase tracking-wide"
                    style={{ backgroundColor: pkg.accent, color: '#000' }}
                  >
                    Popular
                  </div>
                )}

                <div className="p-4 md:p-6">
                  {/* Package Name with Icon */}
                  <div className="flex items-center justify-between mb-4 md:mb-5">
                    <h3 
                      className="text-[0.938rem] md:text-[1.125rem] font-[600] uppercase tracking-wide"
                      style={{ color: pkg.accent }}
                    >
                      {pkg.name}
                    </h3>
                    <div 
                      className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${pkg.accent}20` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={pkg.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                        <circle cx="12" cy="13" r="3"/>
                      </svg>
                    </div>
                  </div>

                  {/* Price - Responsive Sizing */}
                  <div className="mb-4 md:mb-5">
                    <div className="flex items-baseline gap-0.5">
                      <span className="text-customGrayAlt text-[0.875rem] md:text-[1rem] font-[400]">$</span>
                      <span 
                        className="text-[2.75rem] md:text-[3.5rem] font-[700] leading-none tracking-tighter"
                        style={{ color: pkg.accent }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-customGrayAlt text-[0.813rem] md:text-[0.875rem] mt-1">{pkg.duration}</p>
                  </div>

                  {/* Features with Checkmarks */}
                  <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="14" 
                          height="14" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke={pkg.accent}
                          strokeWidth="3" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className="flex-shrink-0 mt-0.5"
                        >
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        <p className="text-white text-[0.75rem] md:text-[0.813rem] leading-snug">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Book Button - More Prominent */}
                  <button
                    onClick={() => openCalendly(pkg.calendlyUrl)}
                    className="relative block w-full text-center font-[600] py-3 md:py-3.5 rounded-xl uppercase text-[0.688rem] md:text-[0.75rem] tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                    style={{ 
                      backgroundColor: pkg.accent,
                      color: '#000',
                    }}
                  >
                    <span className="relative z-10">Book Now</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* How It Works Section */}
          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray">
            <div className="text-center mb-10 md:mb-12">
              <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
                The Process
              </p>
              <h2 className="text-white text-[2rem] md:text-[3rem] font-[700] uppercase leading-tight">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
              {/* Step 1 */}
              <div className="relative text-center group">
                <div className="glass glass-mobile-optimized glass-hover glass-lift rounded-2xl p-6 md:p-8 h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-[1.5rem] md:text-[1.75rem] font-[700]">1</span>
                  </div>
                  <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase mb-3">Book</h3>
                  <p className="text-customGrayAlt text-base leading-relaxed">
                    Choose your package and schedule your session via Calendly or contact form
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative text-center group">
                <div className="glass glass-mobile-optimized glass-hover glass-lift rounded-2xl p-6 md:p-8 h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-[1.5rem] md:text-[1.75rem] font-[700]">2</span>
                  </div>
                  <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase mb-3">Prep</h3>
                  <p className="text-customGrayAlt text-base leading-relaxed">
                    We'll discuss your vision, location preferences, and outfit ideas before the shoot
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative text-center group">
                <div className="glass glass-mobile-optimized glass-hover glass-lift rounded-2xl p-6 md:p-8 h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-[1.5rem] md:text-[1.75rem] font-[700]">3</span>
                  </div>
                  <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase mb-3">Shoot</h3>
                  <p className="text-customGrayAlt text-base leading-relaxed">
                    Relax and be yourself while I capture your authentic moments and personality
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative text-center group">
                <div className="glass glass-mobile-optimized glass-hover glass-lift rounded-2xl p-6 md:p-8 h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-[1.5rem] md:text-[1.75rem] font-[700]">4</span>
                  </div>
                  <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase mb-3">Delivery</h3>
                  <p className="text-customGrayAlt text-base leading-relaxed">
                    Receive your professionally edited images digitally within 3-9 business days
                  </p>
                </div>
              </div>
            </div>

            {/* Deliverables Info */}
            <div className="mt-8 md:mt-10 max-w-3xl mx-auto">
              <div className="glass glass-mobile-optimized glass-hover p-6 md:p-8 rounded-2xl text-center">
                <h3 className="text-primary text-[1rem] md:text-[1.125rem] font-[600] uppercase mb-3">What You'll Receive</h3>
                <p className="text-customGrayAlt text-base md:text-[1.125rem] leading-relaxed">
                  All raw images provided without watermark + professionally edited high-resolution photos delivered via digital gallery. Cinematic video clips included in select packages.
                </p>
              </div>
            </div>
          </div>

          {/* Booking Policy Section */}
          <div id="policy" className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray">
            <h2 className="text-white text-[1.75rem] md:text-[2.5rem] font-[700] uppercase mb-6 md:mb-8 tracking-tight">
              More Info
            </h2>

            {/* Important Notice */}
            <div className="glass backdrop-blur-xl bg-primary/10 border-l-4 border-primary rounded-xl p-5 md:p-6 mb-8">
              <div className="flex items-start gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary flex-shrink-0 mt-1">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                <div>
                  <h3 className="text-primary text-[1rem] md:text-[1.125rem] font-[700] uppercase mb-2">Consultation Required</h3>
                  <p className="text-white text-[0.813rem] md:text-[0.875rem] leading-relaxed">
                    All bookings require a consultation beforehand. Please fill out the contact form before proceeding with any booking.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {/* Deposit & Payment */}
              <div className="glass glass-hover backdrop-blur-xl rounded-xl p-5 md:p-6">
                <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase mb-3">Deposit & Payment</h3>
                <ul className="space-y-2 text-customGrayAlt text-[0.813rem] md:text-[0.875rem]">
                  <li>• 50% non-refundable deposit to secure booking</li>
                  <li>• Final balance due at end of shoot</li>
                  <li>• Payment via Cash, Zelle, Apple Pay, Venmo or Cashapp</li>
                  <li>• Proofs sent after full payment</li>
                </ul>
              </div>

              {/* Delivery Times */}
              <div className="glass glass-hover backdrop-blur-xl rounded-xl p-5 md:p-6">
                <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase mb-3">Delivery Times</h3>
                <ul className="space-y-2 text-customGrayAlt text-[0.813rem] md:text-[0.875rem]">
                  <li>• Standard: 3-9 business days</li>
                  <li>• 24-hour rush: +$50 upcharge</li>
                  <li>• Turnaround starts after you make selects</li>
                </ul>
              </div>

              {/* Late Policy */}
              <div className="glass glass-hover backdrop-blur-xl rounded-xl p-5 md:p-6">
                <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M10 2h4"/>
                    <path d="M12 14v-4"/>
                    <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"/>
                    <path d="M9 17H4v5"/>
                  </svg>
                </div>
                <h3 className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase mb-3">Late Policy</h3>
                <ul className="space-y-2 text-customGrayAlt text-[0.813rem] md:text-[0.875rem]">
                  <li>• 15+ mins late: +$20 fee</li>
                  <li>• Overtime: $1.75 per minute</li>
                  <li>• 20+ mins late: session canceled, no refund</li>
                </ul>
              </div>

              {/* Rescheduling */}
              <div className="glass glass-hover backdrop-blur-xl rounded-xl p-5 md:p-6">
                <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                    <path d="M21 3v5h-5"/>
                  </svg>
                </div>
                <h3 className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase mb-3">Rescheduling</h3>
                <ul className="space-y-2 text-customGrayAlt text-[0.813rem] md:text-[0.875rem]">
                  <li>• Weather-related rescheduling allowed</li>
                  <li>• Rain forecast or temp below 65°F</li>
                  <li>• Cancellations require new deposit to rebook</li>
                </ul>
              </div>

              {/* Guests & Sessions */}
              <div className="glass glass-hover backdrop-blur-xl rounded-xl p-5 md:p-6">
                <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase mb-3">Session Details</h3>
                <ul className="space-y-2 text-customGrayAlt text-[0.813rem] md:text-[0.875rem]">
                  <li>• Maximum 2 guests allowed per session</li>
                  <li>• All raw images provided without watermark</li>
                  <li>• Professional editing on all delivered images</li>
                </ul>
              </div>

              {/* Agreement */}
              <div className="glass glass-hover backdrop-blur-xl rounded-xl p-5 md:p-6">
                <div className="w-10 h-10 mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M9 11 6 8 4 10l5 5L20 4l-2-2Z"/>
                  </svg>
                </div>
                <h3 className="text-white text-[0.938rem] md:text-[1rem] font-[600] uppercase mb-3">Agreement</h3>
                <p className="text-customGrayAlt text-[0.813rem] md:text-[0.875rem] leading-relaxed">
                  Deposit payment confirms you have read and agree to all Leekshotit Photography policies.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 md:mt-10 text-center">
              <p className="text-customGrayAlt text-[0.875rem] md:text-[0.938rem] mb-4">
                For bookings & inquiries visit <span className="text-primary">leekshotit.com</span> or email <a href="mailto:leekshotit@gmail.com" className="text-primary hover:underline">leekshotit@gmail.com</a>
              </p>
              <div className="flex items-center justify-center gap-4">
                <a href="https://www.tiktok.com/@leekshotit" target="_blank" rel="noopener noreferrer" className="text-customGrayAlt hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/leekshotit/" target="_blank" rel="noopener noreferrer" className="text-customGrayAlt hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <span className="text-white font-[500]">@leekshotit</span>
              </div>
            </div>
          </div>

          {/* Custom Projects & Weddings Section */}
          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
                Beyond Packages
              </p>
              <h2 className="text-white text-[2rem] md:text-[3rem] font-[700] uppercase leading-tight mb-6">
                Custom Projects & Weddings
              </h2>
              
              <div className="glass glass-mobile-optimized glass-hover p-6 md:p-10 rounded-2xl mb-8">
                <p className="text-customGrayAlt text-base md:text-[1.125rem] leading-relaxed mb-6">
                  Looking for something unique? I specialize in <span className="text-white font-[600]">creative collaborations</span>, special events, and am now accepting inquiries for <span className="text-primary font-[600]">wedding photography</span>.
                </p>
                <p className="text-customGrayAlt text-base md:text-[1.125rem] leading-relaxed mb-6">
                  Whether it's an artistic project that pushes boundaries, corporate event coverage, or capturing your big day, I bring the same passion and attention to detail to every shoot.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact">
                    <button className="glass-thin glass-hover glass-lift bg-primary/80 text-white font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] relative overflow-hidden">
                      <span className="relative z-10">Request Custom Quote</span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                    </button>
                  </a>
                  <a href="mailto:leekshotit@gmail.com">
                    <button className="glass glass-hover glass-lift text-white font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] overflow-hidden relative">
                      <span className="relative z-10">Email Directly</span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
                    </button>
                  </a>
                </div>
              </div>

              <p className="text-customGrayAlt text-base">
                <span className="text-primary font-[600]">Pro tip:</span> Include details about your vision, timeline, and budget in your initial inquiry for the fastest response.
              </p>
            </div>
          </div>
        </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
