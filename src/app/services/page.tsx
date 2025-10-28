"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { useState } from "react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"grad" | "solo" | "events">("grad");
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
    },
  ];

  const packages = activeTab === "grad" ? gradPackages : activeTab === "solo" ? soloPackages : eventsPackages;

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-white text-[3rem] md:text-[4.5rem] font-[700] uppercase mb-4 tracking-tight">
              Booking & Services
            </h1>
            <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] max-w-2xl">
              Professional photography sessions with all images professionally edited and delivered digitally
            </p>
          </div>

          {/* Tab Switcher - Minimal */}
          <div className="flex gap-2 mb-12 border-b border-superGray">
            <button
              onClick={() => setActiveTab("grad")}
              className={`pb-4 px-6 font-[500] uppercase text-[0.875rem] transition-all border-b-2 ${
                activeTab === "grad"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Graduation
            </button>
            <button
              onClick={() => setActiveTab("solo")}
              className={`pb-4 px-6 font-[500] uppercase text-[0.875rem] transition-all border-b-2 ${
                activeTab === "solo"
                  ? "border-primary text-white"
                  : "border-transparent text-customGrayAlt hover:text-white"
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`pb-4 px-6 font-[500] uppercase text-[0.875rem] transition-all border-b-2 ${
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
                  <div className="absolute top-4 right-4 text-primary text-[0.625rem] font-[600] uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  {/* Package Name */}
                  <h3 
                    className="text-[1rem] font-[500] uppercase tracking-wider mb-8"
                    style={{ color: pkg.accent }}
                  >
                    {pkg.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-start mb-2">
                      <span className="text-white text-[0.875rem] mt-2">$</span>
                      <span className="text-white text-[3.5rem] font-[300] leading-none tracking-tight">{pkg.price}</span>
                    </div>
                    <p className="text-customGrayAlt text-[0.875rem]">{pkg.duration}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8 pt-6 border-t border-superGray">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div 
                          className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                          style={{ backgroundColor: pkg.accent }}
                        ></div>
                        <p className="text-customGrayAlt2 text-[0.875rem] leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Book Button - Minimal */}
                  <a
                    href="mailto:leekshotit@gmail.com"
                    className="block w-full text-center border font-[500] py-3 rounded uppercase text-[0.75rem] tracking-widest transition-all hover:bg-opacity-10"
                    style={{ 
                      borderColor: pkg.accent,
                      color: pkg.accent,
                    }}
                  >
                    Book Session
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info - Subtle */}
          <div className="mt-12 pt-8 border-t border-superGray">
            <div className="flex flex-wrap gap-x-12 gap-y-3 text-[0.875rem] text-customGrayAlt">
              <p>50% deposit required for all bookings</p>
              <p>3-9 day delivery time</p>
              <p>$50 upcharge for 24-hour delivery</p>
            </div>
          </div>

          {/* Calendly Booking Section */}
          <div className="mt-16 pt-16 border-t border-superGray">
            <div className="mb-8">
              <h2 className="text-white text-[2.5rem] md:text-[3.5rem] font-[700] uppercase mb-4 tracking-tight">
                Book A Session
              </h2>
              <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem]">
                Choose your preferred time and date below. Select the session type that matches the package you want.
              </p>
            </div>

            {/* Calendly Embed - Placeholder */}
            <div className="bg-lightDark border border-superGray rounded-lg p-8 md:p-12 text-center">
              <div className="max-w-2xl mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto mb-6">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                <h3 className="text-white text-[1.5rem] font-[600] mb-4">
                  Calendly Booking Widget
                </h3>
                <p className="text-customGrayAlt text-[1rem] mb-6 leading-relaxed">
                  Once you create your free Calendly account, paste your embed code below to replace this placeholder. 
                  Clients will be able to see your real-time availability and book sessions instantly.
                </p>
                <div className="bg-background border border-superGray rounded p-4 text-left">
                  <p className="text-customGrayAlt2 text-[0.875rem] font-mono">
                    {`<!-- Calendly inline widget begin -->`}<br/>
                    {`<div class="calendly-inline-widget" ...>`}<br/>
                    {`<!-- Calendly inline widget end -->`}
                  </p>
                </div>
                <p className="text-customGrayAlt text-[0.875rem] mt-6">
                  Get started at <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">calendly.com</a> - it's free!
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
