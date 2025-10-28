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
