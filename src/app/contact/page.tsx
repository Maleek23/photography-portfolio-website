"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="bg-background light:bg-white">
      <GrainOverlay />
      <NavBar />
      <div className="pt-32 md:pt-40 lg:pt-44">
        <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="mb-8 md:mb-12">
                <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
                  Contact
                </p>
                <h1 className="text-white light:text-gray-900 text-[2.25rem] md:text-[3.5rem] font-[700] uppercase mb-3 md:mb-4 tracking-tight leading-tight">
                  Get In Touch
                </h1>
                <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1.125rem] leading-relaxed">
                  Have a question, custom project idea, or collaboration opportunity? Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
                <p className="text-customGrayAlt2 light:text-gray-500 text-[0.813rem] md:text-[0.875rem] mt-2 md:mt-3">
                  For session bookings, please visit the <a href="/services" className="text-primary hover:underline">Booking & Services</a> page.
                </p>
              </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white light:text-gray-900 text-[0.875rem] font-[500] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full glass light:bg-gray-50 backdrop-blur-xl border border-white/10 light:border-gray-200 rounded-xl px-4 py-3 text-white light:text-gray-900 focus:border-primary focus:bg-white/10 light:focus:bg-gray-100 focus:outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white light:text-gray-900 text-[0.875rem] font-[500] mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full glass light:bg-gray-50 backdrop-blur-xl border border-white/10 light:border-gray-200 rounded-xl px-4 py-3 text-white light:text-gray-900 focus:border-primary focus:bg-white/10 light:focus:bg-gray-100 focus:outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-white light:text-gray-900 text-[0.875rem] font-[500] mb-2">
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full glass light:bg-gray-50 backdrop-blur-xl border border-white/10 light:border-gray-200 rounded-xl px-4 py-3 text-white light:text-gray-900 focus:border-primary focus:bg-white/10 light:focus:bg-gray-100 focus:outline-none transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white light:text-gray-900 text-[0.875rem] font-[500] mb-2">
                      What can I help you with? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full glass light:bg-gray-50 backdrop-blur-xl border border-white/10 light:border-gray-200 rounded-xl px-4 py-3 text-white light:text-gray-900 focus:border-primary focus:bg-white/10 light:focus:bg-gray-100 focus:outline-none transition-all resize-none"
                      placeholder="Examples: General questions about services, custom project inquiries, collaboration opportunities, media inquiries, pricing questions, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="relative w-full glass-thin glass-hover glass-lift bg-primary/80 backdrop-blur-xl text-white font-[600] py-4 rounded-xl uppercase text-[0.875rem] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] overflow-hidden"
                  >
                    <span className="relative z-10">{status === "sending" ? "Sending..." : "Send Message"}</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                  </button>

                  {status === "success" && (
                    <p className="text-green-500 text-[0.875rem] text-center">
                      ✓ Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-red-500 text-[0.875rem] text-center">
                      ✗ Something went wrong. Please email me directly at leekshotit@gmail.com
                    </p>
                  )}
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-white text-[1.5rem] font-[600] uppercase mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                      <div>
                        <p className="text-customGrayAlt text-[0.875rem] mb-1">Email</p>
                        <a href="mailto:leekshotit@gmail.com" className="text-white hover:text-primary transition-colors">
                          leekshotit@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mt-1">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      <div>
                        <p className="text-customGrayAlt text-[0.875rem] mb-1">Location</p>
                        <p className="text-white">Texas, USA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-white text-[1.5rem] font-[600] uppercase mb-4">
                    Follow Me
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/leekshotitt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-lightDark border border-superGray rounded-lg flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>
                    <a
                      href="https://tiktok.com/@leekshotit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-lightDark border border-superGray rounded-lg flex items-center justify-center hover:border-primary transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="bg-lightDark border border-superGray rounded-lg p-6">
                  <h3 className="text-white text-[1.125rem] font-[600] mb-3">
                    Response Time
                  </h3>
                  <p className="text-customGrayAlt text-[0.875rem] leading-relaxed">
                    I typically respond within 24 hours. For urgent inquiries, please email me directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        <FooterSection />
      </div>
    </main>
  );
}
