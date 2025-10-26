import { PORTFOLIO_OWNER_FULLNAME, PORTFOLIO_BRAND_NAME } from "@/lib/constant";
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
      <section className="flex justify-center items-center flex-col px-4 md:px-[6rem] py-[4rem] md:py-[6rem] gap-6">
        <div className="text-center">
          <p className="text-customGray uppercase text-[1.125rem] md:text-[1.375rem] font-[500] mb-4">
            {PORTFOLIO_BRAND_NAME}
          </p>
          <p className="uppercase font-[600] text-[2.75rem] md:text-[5.5rem] text-white leading-tight">
            {PORTFOLIO_OWNER_FULLNAME}
          </p>
          <p className="text-customGrayAlt text-[1rem] md:text-[1.25rem] font-[400] mt-4">
            Photographer • Videographer • Artist
          </p>
        </div>
      </section>

      {/* Animated Category Marquee */}
      <section className="w-full overflow-hidden bg-lightDark border-y border-superGray py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Duplicate items for seamless loop */}
          {[...categories, ...categories, ...categories].map((category, index) => (
            <div key={index} className="flex items-center mx-8">
              <span className="text-primary text-[1.5rem] mr-4">★</span>
              <span className="text-white uppercase text-[1.125rem] md:text-[1.5rem] font-[500] tracking-wider">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Images */}
      <section className="flex w-full md:px-[6rem] mt-[3rem]">
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
