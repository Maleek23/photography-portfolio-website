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
