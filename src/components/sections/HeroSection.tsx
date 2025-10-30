import { PORTFOLIO_OWNER_FULLNAME } from "@/lib/constant";
import React from "react";

function HeroSection() {
  return (
    <section className="relative">
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
