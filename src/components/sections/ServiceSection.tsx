"use client";

import React, { useState } from "react";

function ServiceSection() {
  const [activeTab, setActiveTab] = useState<"grad" | "solo">("grad");

  const gradPackages = [
    {
      name: "Bronze",
      price: 220,
      duration: "1 Hour",
      features: [
        "1 Outfit & 2 Locations",
        "20 Edited Images",
      ],
      color: "from-amber-700 to-amber-900",
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
      color: "from-gray-400 to-gray-600",
      popular: true,
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
      color: "from-yellow-500 to-yellow-700",
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
      color: "from-amber-700 to-amber-900",
    },
    {
      name: "Silver",
      price: 220,
      duration: "1 Hour",
      features: [
        "1-2 Outfits & Locations",
        "30 Edited Images",
      ],
      color: "from-gray-400 to-gray-600",
      popular: true,
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
      color: "from-yellow-500 to-yellow-700",
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
      color: "from-primary to-blue-700",
    },
  ];

  const packages = activeTab === "grad" ? gradPackages : soloPackages;

  return (
    <section className="" id="services">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-white text-[2rem] md:text-[3rem] font-[600] uppercase mb-2">
          Services & Pricing
        </h2>
        <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem]">
          Professional photography packages tailored to your needs
        </p>
      </div>

      {/* Tab Switcher */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setActiveTab("grad")}
          className={`px-6 py-3 rounded-lg font-[600] uppercase text-[0.875rem] transition-all ${
            activeTab === "grad"
              ? "bg-primary text-white"
              : "bg-lightDark text-customGrayAlt hover:bg-superGray"
          }`}
        >
          Grad Sessions
        </button>
        <button
          onClick={() => setActiveTab("solo")}
          className={`px-6 py-3 rounded-lg font-[600] uppercase text-[0.875rem] transition-all ${
            activeTab === "solo"
              ? "bg-primary text-white"
              : "bg-lightDark text-customGrayAlt hover:bg-superGray"
          }`}
        >
          Solo Sessions
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative group bg-lightDark border-2 ${
              pkg.popular ? "border-primary" : "border-superGray"
            } rounded-xl p-6 hover:border-primary transition-all duration-300 hover:scale-105`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[0.75rem] font-[600] px-4 py-1 rounded-full uppercase">
                Popular
              </div>
            )}

            {/* Package Name with Gradient */}
            <div className={`bg-gradient-to-r ${pkg.color} text-white text-center py-3 rounded-lg mb-4`}>
              <h3 className="text-[1.25rem] font-[700] uppercase tracking-wide">
                {pkg.name}
              </h3>
            </div>

            {/* Price */}
            <div className="text-center mb-4">
              <span className="text-primary text-[0.875rem] font-[500]">$</span>
              <span className="text-white text-[3rem] font-[700] leading-none">{pkg.price}</span>
            </div>

            {/* Duration */}
            <div className="text-center mb-6">
              <p className="text-customGrayAlt text-[0.875rem] uppercase tracking-wider">
                {pkg.duration}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {pkg.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-primary text-[1rem] mt-1">✓</span>
                  <p className="text-customGrayAlt2 text-[0.875rem] leading-tight">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Book Button */}
            <button className="w-full bg-primary hover:bg-primary/80 text-white font-[600] py-3 rounded-lg uppercase text-[0.875rem] transition-all">
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-8 bg-lightDark border border-superGray rounded-lg p-6">
        <h4 className="text-white text-[1.125rem] font-[600] mb-4">Important Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[0.875rem]">
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p className="text-customGrayAlt2">
              <span className="text-white font-[500]">50% deposit</span> required for all bookings
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p className="text-customGrayAlt2">
              <span className="text-white font-[500]">3-9 day</span> delivery time
            </p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-primary">•</span>
            <p className="text-customGrayAlt2">
              <span className="text-white font-[500]">$50 upcharge</span> for 24-hour delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
