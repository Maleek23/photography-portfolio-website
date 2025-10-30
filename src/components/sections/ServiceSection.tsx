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
      <div className="mb-8">
        <h2 className="text-white text-[2rem] md:text-[3rem] font-[600] uppercase mb-2">
          Services
        </h2>
        <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem]">
          Professional photography packages for every moment
        </p>
      </div>

      {/* Service Cards - Premium Design */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative bg-gradient-to-br ${service.gradient} border border-superGray rounded-2xl p-8 hover:border-transparent transition-all duration-500 ${service.borderGlow} overflow-hidden`}
          >
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Icon */}
            <div className={`${service.accentColor} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-white text-[1.75rem] md:text-[2rem] font-[600] uppercase mb-3 leading-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-customGrayAlt2 text-[0.938rem] mb-6 leading-relaxed">
              {service.description}
            </p>
            
            {/* Price */}
            <div className={`mb-6 ${service.accentColor}`}>
              <p className="text-[1.75rem] md:text-[2rem] font-[700]">
                {service.priceRange}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className={`${service.accentColor} text-[1rem] mt-1 flex-shrink-0`}>✓</span>
                  <p className="text-customGrayAlt text-[0.875rem] leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-16">
        <Link
          href="/services"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-[600] px-10 py-5 rounded-xl uppercase text-[0.938rem] md:text-[1rem] tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
        >
          View All Packages & Pricing
          <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </section>
  );
}

export default ServiceSection;
