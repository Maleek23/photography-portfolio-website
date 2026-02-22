"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Script from "next/script";
import { useState } from "react";
import { pricingData } from "@/lib/pricingData";

interface CalendlyGlobal {
  initPopupWidget: (config: { url: string }) => void;
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"grad" | "solo" | "events">("grad");

  const openCalendly = (url: string) => {
    if (url === "#") {
      window.open(`mailto:leekshotit@gmail.com?subject=Session Booking Inquiry&body=Hi, I'm interested in booking a ${activeTab} session. Please contact me with available dates.`, '_blank');
      return;
    }

    const calendly = (window as Window & { Calendly?: CalendlyGlobal }).Calendly;
    if (calendly) {
      calendly.initPopupWidget({ url });
    } else {
      window.open(url, '_blank');
    }
  };

  const packages = pricingData[activeTab].packages;

  return (
    <main className="bg-background light:bg-white">
      <GrainOverlay />
      <NavBar />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        rel="stylesheet"
        href="https://assets.calendly.com/assets/external/widget.css"
      />

      <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
          <div className="px-4 md:px-[6rem] pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16">
            
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-4">
              Pricing
            </p>
            <h1 className="text-white light:text-gray-900 text-[2.25rem] md:text-[3.5rem] font-[700] leading-tight mb-4">
              Book a Session
            </h1>
            <p className="text-customGrayAlt light:text-gray-600 text-[1rem] md:text-[1.125rem] leading-relaxed max-w-2xl mx-auto">
              Professional photography with cinematic editing and digital delivery
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center gap-3 mb-8 md:mb-10">
            <button
              onClick={() => setActiveTab("grad")}
              className={`px-6 md:px-8 py-3 rounded-xl font-[600] uppercase text-[0.813rem] tracking-wide transition-all ${
                activeTab === "grad"
                  ? "glass bg-primary/20 light:bg-primary/30 text-primary border border-primary/50"
                  : "glass light:bg-gray-100/50 text-customGrayAlt light:text-gray-600 hover:text-white light:hover:text-gray-900 border border-white/10 light:border-gray-200 hover:border-white/20 light:hover:border-gray-300"
              }`}
            >
              Graduation
            </button>
            <button
              onClick={() => setActiveTab("solo")}
              className={`px-6 md:px-8 py-3 rounded-xl font-[600] uppercase text-[0.813rem] tracking-wide transition-all ${
                activeTab === "solo"
                  ? "glass bg-primary/20 light:bg-primary/30 text-primary border border-primary/50"
                  : "glass light:bg-gray-100/50 text-customGrayAlt light:text-gray-600 hover:text-white light:hover:text-gray-900 border border-white/10 light:border-gray-200 hover:border-white/20 light:hover:border-gray-300"
              }`}
            >
              Solo
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-6 md:px-8 py-3 rounded-xl font-[600] uppercase text-[0.813rem] tracking-wide transition-all ${
                activeTab === "events"
                  ? "glass bg-primary/20 light:bg-primary/30 text-primary border border-primary/50"
                  : "glass light:bg-gray-100/50 text-customGrayAlt light:text-gray-600 hover:text-white light:hover:text-gray-900 border border-white/10 light:border-gray-200 hover:border-white/20 light:hover:border-gray-300"
              }`}
            >
              Events
            </button>
          </div>

          {/* Pricing Cards */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-8 md:mb-12 ${packages.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative group glass backdrop-blur-xl rounded-2xl transition-all duration-300 ${
                  pkg.popular 
                    ? "border-primary shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 scale-105" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Accent Bar */}
                <div 
                  className="h-1 rounded-t-2xl overflow-hidden"
                  style={{ backgroundColor: pkg.accent }}
                />

                {/* Popular Badge */}
                {pkg.popular && (
                  <div 
                    className="absolute top-4 -right-8 rotate-45 w-32 text-center py-1 text-[0.625rem] font-[700] uppercase tracking-wide"
                    style={{ backgroundColor: pkg.accent, color: '#000' }}
                  >
                    Popular
                  </div>
                )}

                <div className="p-6 md:p-8">
                  {/* Package Name */}
                  <div className="flex items-center justify-between mb-5">
                    <h3 
                      className="text-[1.125rem] md:text-[1.25rem] font-[600] uppercase tracking-wide"
                      style={{ color: pkg.accent }}
                    >
                      {pkg.name}
                    </h3>
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${pkg.accent}20` }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={pkg.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                        <circle cx="12" cy="13" r="3"/>
                      </svg>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-customGrayAlt text-[1rem] font-[400]">$</span>
                      <span 
                        className="text-[3rem] md:text-[3.5rem] font-[700] leading-none"
                        style={{ color: pkg.accent }}
                      >
                        {pkg.price}
                      </span>
                    </div>
                    <p className="text-customGrayAlt text-[0.875rem] mt-1">{pkg.duration}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
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
                        <p className="text-white light:text-gray-900 text-[0.875rem] leading-snug">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => openCalendly(pkg.calendlyUrl)}
                    className="w-full font-[600] py-3.5 rounded-xl uppercase text-[0.75rem] tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-xl"
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

          {/* Booking Policies - Simplified */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-white text-[1.75rem] md:text-[2.25rem] font-[700] leading-tight mb-8 text-center">
              Important Policies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {/* Payment */}
              <div className="glass glass-mobile-optimized rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="14" x="2" y="5" rx="2"/>
                    <line x1="2" x2="22" y1="10" y2="10"/>
                  </svg>
                </div>
                <h3 className="text-white text-[1rem] font-[600] uppercase mb-2">Deposit</h3>
                <p className="text-customGrayAlt text-[0.875rem] leading-relaxed">
                  50% non-refundable deposit required to secure your session
                </p>
              </div>

              {/* Delivery */}
              <div className="glass glass-mobile-optimized rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <h3 className="text-white text-[1rem] font-[600] uppercase mb-2">Delivery</h3>
                <p className="text-customGrayAlt text-[0.875rem] leading-relaxed">
                  Professionally edited images delivered within 3-9 business days
                </p>
              </div>

              {/* Rescheduling */}
              <div className="glass glass-mobile-optimized rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/>
                    <path d="M21 3v5h-5"/>
                  </svg>
                </div>
                <h3 className="text-white text-[1rem] font-[600] uppercase mb-2">Rescheduling</h3>
                <p className="text-customGrayAlt text-[0.875rem] leading-relaxed">
                  Weather-related changes allowed. Other cancellations require new deposit
                </p>
              </div>
            </div>

            {/* Policy Acceptance Notice */}
            <div className="glass glass-mobile-optimized rounded-xl p-6 md:p-8 border-2 border-primary/30">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" x2="12" y1="8" y2="12"/>
                    <line x1="12" x2="12.01" y1="16" y2="16"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white text-[1rem] md:text-[1.125rem] font-[600] mb-2">
                    Before You Book
                  </h3>
                  <p className="text-customGrayAlt text-[0.875rem] md:text-[0.938rem] leading-relaxed mb-4">
                    By booking a session, you agree to our booking policies including deposit requirements, delivery timelines, cancellation terms, and usage rights.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href="/policies"
                      className="inline-block text-center glass glass-hover glass-lift bg-primary/20 text-primary font-[600] py-3 px-6 rounded-xl uppercase text-[0.75rem] border border-primary/50 hover:bg-primary/30 transition-all"
                    >
                      Read Full Policies
                    </a>
                    <a 
                      href="/contact"
                      className="inline-block text-center glass glass-hover glass-lift bg-white/5 text-white font-[600] py-3 px-6 rounded-xl uppercase text-[0.75rem] border border-white/10 hover:bg-white/10 transition-all"
                    >
                      Contact Me First
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
        <FooterSection />
    </main>
  );
}
