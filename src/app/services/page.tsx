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
              className={`pb-3 md:pb-4 px-4 md:px-6 font-[500] uppercase text-[0.75rem] md:text-[0.875rem] transition-all border-b-2 ${
                activeTab === "grad"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Graduation
            </button>
            <button
              onClick={() => setActiveTab("solo")}
              className={`pb-3 md:pb-4 px-4 md:px-6 font-[500] uppercase text-[0.75rem] md:text-[0.875rem] transition-all border-b-2 ${
                activeTab === "solo"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`pb-3 md:pb-4 px-4 md:px-6 font-[500] uppercase text-[0.75rem] md:text-[0.875rem] transition-all border-b-2 ${
                activeTab === "events"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Events
            </button>
          </div>

          {/* Pricing Table - Clean */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-background border ${
                  pkg.popular ? "border-primary" : "border-superGray"
                } rounded-lg overflow-hidden transition-all duration-300`}
                style={{
                  borderTopColor: pkg.accent,
                  borderTopWidth: '3px',
                }}
              >
                {/* Popular Label - Minimal */}
                {pkg.popular && (
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 text-primary text-[0.563rem] md:text-[0.625rem] font-[600] uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Package Name */}
                  <h3 
                    className="text-[0.875rem] md:text-[1rem] font-[500] uppercase tracking-wider mb-6 md:mb-8"
                    style={{ color: pkg.accent }}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex items-start mb-2">
                      <span className="text-white text-[0.75rem] md:text-[0.875rem] mt-2">$</span>
                      <span className="text-white text-[3rem] md:text-[3.5rem] font-[300] leading-none tracking-tight">{pkg.price}</span>
                    </div>
                    <p className="text-customGrayAlt text-[0.813rem] md:text-[0.875rem]">{pkg.duration}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 md:space-y-3 mb-6 md:mb-8 pt-5 md:pt-6 border-t border-superGray">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div 
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: pkg.accent }}
                        ></div>
                        <p className="text-customGrayAlt2 text-[0.813rem] md:text-[0.875rem] leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Book Button - Opens Calendly Modal */}
                  <button
                    onClick={() => openCalendly(pkg.calendlyUrl)}
                    className="block w-full text-center border font-[500] py-3 rounded uppercase text-[0.75rem] tracking-widest transition-all hover:bg-opacity-10 cursor-pointer"
                    style={{ 
                      borderColor: pkg.accent,
                      color: pkg.accent,
                    }}
                  >
                    Book {pkg.name}
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

          {/* Setup Instructions */}
          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-superGray">
            <div className="bg-lightDark border border-primary/20 rounded-lg p-6 md:p-8">
              <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] mb-3 md:mb-4 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary md:w-6 md:h-6">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
                Calendly Setup Instructions
              </h3>
              <div className="text-customGrayAlt text-[0.813rem] md:text-[0.875rem] space-y-2 md:space-y-3 leading-relaxed">
                <p><strong className="text-white">Step 1:</strong> Create your free Calendly account at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">calendly.com</a></p>
                <p><strong className="text-white">Step 2:</strong> Set up different event types for each package:</p>
                <ul className="list-disc list-inside ml-4 space-y-1 text-customGrayAlt2">
                  <li>Graduation - Bronze, Silver, Gold</li>
                  <li>Solo - Bronze, Silver, Gold, Platinum</li>
                  <li>Events - Hourly Rate</li>
                </ul>
                <p><strong className="text-white">Step 3:</strong> Copy each event type's booking link from Calendly</p>
                <p><strong className="text-white">Step 4:</strong> Update the <code className="bg-background px-2 py-1 rounded text-primary">calendlyUrl</code> values in the code for each package</p>
                <p className="text-customGrayAlt2 text-[0.75rem] mt-4 pt-4 border-t border-superGray">
                  Currently setup: Graduation Bronze ✓ | Remaining: 7 packages to configure
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
