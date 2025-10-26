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
              Pricing
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

          {/* Booking Inquiry Form */}
          <div className="mt-16 pt-16 border-t border-superGray">
            <div className="mb-12">
              <h2 className="text-white text-[2.5rem] md:text-[3.5rem] font-[700] uppercase mb-4 tracking-tight">
                Book A Session
              </h2>
              <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem]">
                Ready to schedule your shoot? Fill out the form below and I'll get back to you within 24 hours to confirm availability and details.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white text-[0.875rem] font-[500] mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white text-[0.875rem] font-[500] mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-white text-[0.875rem] font-[500] mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="sessionType" className="block text-white text-[0.875rem] font-[500] mb-2">
                    Session Type *
                  </label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    required
                    value={formData.sessionType}
                    onChange={handleChange}
                    className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="grad">Graduation Session</option>
                    <option value="solo">Solo Session</option>
                    <option value="events">Event/Concert</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="packageTier" className="block text-white text-[0.875rem] font-[500] mb-2">
                    Package Tier *
                  </label>
                  <select
                    id="packageTier"
                    name="packageTier"
                    required
                    value={formData.packageTier}
                    onChange={handleChange}
                    className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="">Select a package</option>
                    <option value="bronze">Bronze</option>
                    <option value="silver">Silver</option>
                    <option value="gold">Gold</option>
                    {formData.sessionType === "solo" && <option value="platinum">Platinum</option>}
                    {formData.sessionType === "events" && <option value="hourly">Hourly Rate</option>}
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-white text-[0.875rem] font-[500] mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white text-[0.875rem] font-[500] mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-lightDark border border-superGray rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me more about your vision, location preferences, specific shots you want, etc."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full md:w-auto bg-primary hover:bg-primary/80 text-white font-[600] px-12 py-4 rounded-lg uppercase text-[0.875rem] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Submit Booking Request"}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-[0.875rem]">
                  ✓ Booking request sent successfully! I'll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-[0.875rem]">
                  ✗ Something went wrong. Please email me directly at leekshotit@gmail.com
                </p>
              )}
            </form>
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
