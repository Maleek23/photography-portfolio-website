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
      alert("This booking option is not yet set up. Please contact leekshotit@gmail.com to book.");
      return;
    }
    
    console.log('Opening Calendly with URL:', url);
    
    // Use Calendly's built-in popup
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      console.log('Calendly found, opening popup');
      (window as any).Calendly.initPopupWidget({ url });
    } else {
      console.error('Calendly not loaded yet');
      alert('Calendly is loading, please try again in a moment or click OK to open in new tab.');
      // Fallback to direct link if script not loaded
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
      calendlyUrl: "#",
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
      calendlyUrl: "#",
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
        <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-white text-[2.5rem] md:text-[4.5rem] font-[700] uppercase mb-3 md:mb-4 tracking-tight leading-tight">
              Booking & Services
            </h1>
            <p className="text-customGrayAlt text-[0.938rem] md:text-[1.125rem] max-w-2xl leading-relaxed">
              Professional photography sessions with all images professionally edited and delivered digitally
            </p>
          </div>

          {/* Tab Switcher - Minimal */}
          <div className="flex gap-2 mb-8 md:mb-12 border-b border-superGray">
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
                className={`group relative bg-gradient-to-b from-lightDark to-background border rounded-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-200 ${
                  pkg.popular ? "border-primary shadow-lg shadow-primary/20" : "border-superGray/50 hover:border-superGray"
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

                <div className="p-5 md:p-6">
                  {/* Package Name with Icon */}
                  <div className="flex items-center justify-between mb-5 md:mb-6">
                    <h3 
                      className="text-[1rem] md:text-[1.125rem] font-[600] uppercase tracking-wide"
                      style={{ color: pkg.accent }}
                    >
                      {pkg.name}
                    </h3>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${pkg.accent}20` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={pkg.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                        <circle cx="12" cy="13" r="3"/>
                      </svg>
                    </div>
                  </div>

                  {/* Price - Bigger & Bolder */}
                  <div className="mb-5 md:mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-customGrayAlt text-[1rem] font-[400]">$</span>
                      <span 
                        className="text-[3.5rem] md:text-[4rem] font-[700] leading-none tracking-tighter"
                        style={{ color: pkg.accent }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-customGrayAlt text-[0.875rem] mt-1">{pkg.duration}</p>
                  </div>

                  {/* Features with Checkmarks */}
                  <div className="space-y-3 mb-6 md:mb-7">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
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
                        <p className="text-white text-[0.813rem] md:text-[0.875rem] leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Book Button - More Prominent */}
                  <button
                    onClick={() => openCalendly(pkg.calendlyUrl)}
                    className="block w-full text-center font-[600] py-3.5 rounded-lg uppercase text-[0.75rem] tracking-widest transition-all duration-200 hover:shadow-lg"
                    style={{ 
                      backgroundColor: pkg.accent,
                      color: '#000',
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info - Subtle */}
          <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-superGray">
            <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-2 md:gap-y-3 text-[0.813rem] md:text-[0.875rem] text-customGrayAlt">
              <p>50% deposit required for all bookings</p>
              <p>3-9 day delivery time</p>
              <p>$50 upcharge for 24-hour delivery</p>
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
