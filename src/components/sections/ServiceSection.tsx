import React from "react";
import Link from "next/link";

function ServiceSection() {
  const services = [
    {
      title: "Grad Sessions",
      description: "Celebrate your achievement with professional graduation photography",
      priceRange: "$220 - $400",
      features: ["Bronze, Silver & Gold packages", "Up to 3 hours", "Up to 35+ edited images", "Cinematic clips available"],
      gradient: "from-amber-950/30 via-background to-background",
      accentColor: "text-amber-400",
      borderGlow: "hover:shadow-[0_0_30px_rgba(251,191,36,0.15)]",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      title: "Solo Sessions",
      description: "Personal portrait sessions for any occasion",
      priceRange: "$185 - $400",
      features: ["Bronze through Platinum packages", "30 mins to 3 hours", "Up to 40+ edited images", "Cinematic clips available"],
      gradient: "from-primary/30 via-background to-background",
      accentColor: "text-primary",
      borderGlow: "hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      title: "Events/Concerts",
      description: "Professional coverage for concerts, parties, and special events",
      priceRange: "$100/hour",
      features: ["Hourly rate", "All edited images included", "Candid & posed shots", "Quick turnaround"],
      gradient: "from-purple-950/30 via-background to-background",
      accentColor: "text-purple-400",
      borderGlow: "hover:shadow-[0_0_30px_rgba(192,132,252,0.15)]",
      icon: (
        <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="" id="services">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-white light:text-gray-900 text-[1.75rem] md:text-[2.5rem] font-[600] uppercase mb-1">
          Services
        </h2>
        <p className="text-customGrayAlt light:text-gray-600 text-[0.813rem] md:text-[0.938rem]">
          Professional photography packages for every moment
        </p>
      </div>

      {/* Service Cards - GLASSMORPHISM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative bg-white/5 light:bg-gray-100/50 backdrop-blur-2xl border border-white/10 light:border-gray-200 rounded-2xl p-6 hover:bg-white/10 light:hover:bg-gray-100/70 hover:border-white/20 light:hover:border-gray-300 transition-all duration-500 ${service.borderGlow} overflow-hidden hover:-translate-y-2 hover:shadow-2xl`}
          >
            {/* Animated glass shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
            
            {/* Icon */}
            <div className={`${service.accentColor} mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative z-10`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-white light:text-gray-900 text-[1.5rem] md:text-[1.75rem] font-[600] uppercase mb-2 leading-tight relative z-10">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-customGrayAlt2 light:text-gray-500 text-[0.875rem] mb-4 leading-relaxed relative z-10">
              {service.description}
            </p>
            
            {/* Price */}
            <div className={`mb-4 ${service.accentColor} relative z-10`}>
              <p className="text-[1.5rem] md:text-[1.75rem] font-[700]">
                {service.priceRange}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2 relative z-10">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className={`${service.accentColor} text-[0.875rem] mt-0.5 flex-shrink-0`}>✓</span>
                  <p className="text-customGrayAlt light:text-gray-600 text-[0.813rem] leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button - GLASSMORPHISM */}
      <div className="text-center mt-12">
        <Link
          href="/services"
          className="group relative inline-flex items-center gap-3 bg-primary/80 backdrop-blur-xl border border-white/20 hover:bg-primary text-white font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] md:text-[0.938rem] tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] hover:scale-105 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent rounded-xl opacity-50"></div>
          <span className="relative z-10">View All Packages & Pricing</span>
          <span className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </section>
  );
}

export default ServiceSection;
