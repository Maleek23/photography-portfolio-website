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
      {/* Animated Category Marquee with 3D depth */}
      <section className="w-full overflow-hidden bg-gradient-to-r from-lightDark via-superGray to-lightDark border-b border-superGray py-2 relative">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
        
        {/* Slower marquee with 3D perspective */}
        <div 
          className="flex animate-marquee whitespace-nowrap"
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden" }}
        >
          {[...categories, ...categories, ...categories].map((category, index) => (
            <div 
              key={index} 
              className="flex items-center mx-6 transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <span className="text-primary text-[1rem] mr-3 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]">★</span>
              <span className="text-white uppercase text-[0.875rem] md:text-[1rem] font-[600] tracking-widest drop-shadow-lg">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Images */}
      <section className="flex w-full md:px-[6rem] mt-[1rem]">
        <img
          src="/images/hero.png"
          className="hidden md:block grow"
          alt="photography showcase"
        />
        <img
          src="/images/hero_small.png"
          className="block md:hidden grow"
          alt="photography showcase"
        />
      </section>
    </section>
  );
}

export default HeroSection;
