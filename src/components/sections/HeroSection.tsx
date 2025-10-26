import { PORTFOLIO_OWNER_FULLNAME } from "@/lib/constant";
import React from "react";

function HeroSection() {
  const categories = [
    "CREATIVE & CONCEPT",
    "FASHION & PORTRAIT", 
    "EVENTS",
    "COMMERCIAL",
  ];

  return (
    <section>
      {/* Hero Content */}
      <section className="flex justify-center items-center flex-col px-4 md:px-[6rem] py-[2rem] md:py-[3rem] gap-3">
        <div className="text-center">
          <p className="text-customGray uppercase text-[1rem] md:text-[1.25rem] font-[500] mb-2">
            Stunning Creativity by
          </p>
          <p className="uppercase font-[600] text-[2.5rem] md:text-[5rem] text-white leading-tight">
            {PORTFOLIO_OWNER_FULLNAME}
          </p>
        </div>
      </section>

      {/* Animated Category Marquee */}
      <section className="w-full overflow-hidden bg-lightDark border-y border-superGray py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate items for seamless loop */}
          {[...categories, ...categories, ...categories].map((category, index) => (
            <div key={index} className="flex items-center mx-6">
              <span className="text-primary text-[1.25rem] mr-3">★</span>
              <span className="text-white uppercase text-[1rem] md:text-[1.25rem] font-[500] tracking-wider">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Images */}
      <section className="flex w-full md:px-[6rem] mt-[2rem]">
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
