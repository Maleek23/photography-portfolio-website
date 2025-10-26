import React from "react";
import Link from "next/link";

function ServiceSection() {
  const services = [
    {
      title: "Grad Sessions",
      description: "Celebrate your achievement with professional graduation photography",
      priceRange: "$220 - $400",
      features: ["Bronze, Silver & Gold packages", "Up to 3 hours", "Up to 35+ edited images", "Cinematic clips available"],
    },
    {
      title: "Solo Sessions",
      description: "Personal portrait sessions for any occasion",
      priceRange: "$185 - $400",
      features: ["Bronze through Platinum packages", "30 mins to 3 hours", "Up to 40+ edited images", "Cinematic clips available"],
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

      {/* Service Cards - Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-lightDark border border-superGray rounded-xl p-6 hover:border-primary transition-all duration-300"
          >
            <h3 className="text-white text-[1.5rem] font-[600] uppercase mb-2">
              {service.title}
            </h3>
            <p className="text-customGrayAlt2 text-[0.875rem] mb-4">
              {service.description}
            </p>
            
            <div className="mb-4">
              <p className="text-primary text-[1.25rem] font-[600]">
                {service.priceRange}
              </p>
            </div>

            <div className="space-y-2 mb-6">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-primary text-[0.75rem]">✓</span>
                  <p className="text-customGrayAlt text-[0.75rem]">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center">
        <Link
          href="/services"
          className="inline-block bg-primary hover:bg-primary/80 text-white font-[600] px-8 py-4 rounded-lg uppercase text-[0.875rem] transition-all"
        >
          View All Packages & Pricing →
        </Link>
      </div>
    </section>
  );
}

export default ServiceSection;
