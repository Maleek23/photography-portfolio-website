import { PORTFOLIO_OWNER_FULLNAME } from "@/lib/constant";
import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Images */}
      <section className="flex w-full md:px-[6rem] mt-[1rem] md:mt-[7rem]">
        <Image
          src="/images/hero.png"
          width={1920}
          height={1080}
          className="hidden md:block grow"
          alt="photography showcase"
          priority
        />
        <Image
          src="/images/hero_small.png"
          width={800}
          height={1200}
          className="block md:hidden grow"
          alt="photography showcase"
          priority
        />
      </section>
    </section>
  );
}

export default HeroSection;
