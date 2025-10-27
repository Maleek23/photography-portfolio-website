import { PORTFOLIO_OWNER_FULLNAME } from "@/lib/constant";
import React from "react";

function HeroSection() {
  const categories = [
    "PORTRAITS",
    "GRADUATION", 
    "CREATIVE PROJECTS",
    "CONCERTS/EVENTS",
  ];

  return (
    <section className="relative">
      {/* Simple Clean Hero */}
      <section className="flex justify-center items-center flex-col px-4 md:px-[6rem] py-[2rem] md:py-[2.5rem]">
        <div className="text-center max-w-5xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[1px] w-12 bg-primary"></div>
            <p className="text-primary uppercase text-[0.75rem] md:text-[0.875rem] font-[600] tracking-widest">
              Stunning Creativity
            </p>
            <div className="h-[1px] w-12 bg-primary"></div>
          </div>
          
          <h1 className="uppercase font-[700] text-[2.5rem] md:text-[4.5rem] text-white leading-[0.95] tracking-tight mb-3">
            {PORTFOLIO_OWNER_FULLNAME}
          </h1>
          
          <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem] font-[400] tracking-wide">
            Photographer • Videographer • Visual Artist
          </p>
        </div>
      </section>

      {/* Animated Category Marquee */}
      <section className="w-full overflow-hidden bg-lightDark border-y border-superGray py-2">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...categories, ...categories, ...categories].map((category, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="text-primary text-[0.875rem] mr-2">★</span>
              <span className="text-white uppercase text-[0.75rem] md:text-[0.875rem] font-[500] tracking-wider">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Bento Grid */}
      <section className="w-full px-4 md:px-[6rem] mt-[1rem]">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-[300px_1fr_500px_300px] md:grid-rows-[280px_280px] gap-3 h-[560px]">
          {/* Column 1: Top small + bottom small */}
          <div className="space-y-3">
            <div className="h-[calc(50%-6px)] overflow-hidden rounded-lg bg-blue-600">
              <img src="/images/portrait-yellow.jpg" className="w-full h-full object-cover" alt="Portrait" />
            </div>
            <div className="h-[calc(50%-6px)] overflow-hidden rounded-lg bg-teal-600">
              <img src="/images/graduation-nike.jpg" className="w-full h-full object-cover" alt="Graduation" />
            </div>
          </div>
          
          {/* Column 2: Large center portrait */}
          <div className="row-span-2 overflow-hidden rounded-lg bg-amber-200">
            <img src="/images/creative-smoke.jpg" className="w-full h-full object-cover object-center" alt="Creative" />
          </div>
          
          {/* Column 3: Large portrait on right */}
          <div className="row-span-2 overflow-hidden rounded-lg bg-orange-600">
            <img src="/images/portrait-yellow.jpg" className="w-full h-full object-cover" alt="Portrait showcase" />
          </div>
          
          {/* Column 4: Top + bottom */}
          <div className="space-y-3">
            <div className="h-[calc(50%-6px)] overflow-hidden rounded-lg bg-gray-200">
              <img src="/images/graduation-nike.jpg" className="w-full h-full object-cover" alt="Style" />
            </div>
            <div className="h-[calc(50%-6px)] overflow-hidden rounded-lg bg-gray-400">
              <img src="/images/creative-smoke.jpg" className="w-full h-full object-cover" alt="Creative shot" />
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="grid md:hidden grid-cols-2 gap-2 auto-rows-[200px]">
          <div className="overflow-hidden rounded-lg">
            <img src="/images/portrait-yellow.jpg" className="w-full h-full object-cover" alt="Portrait" />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img src="/images/creative-smoke.jpg" className="w-full h-full object-cover" alt="Creative" />
          </div>
          <div className="col-span-2 overflow-hidden rounded-lg">
            <img src="/images/graduation-nike.jpg" className="w-full h-full object-cover" alt="Graduation" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
