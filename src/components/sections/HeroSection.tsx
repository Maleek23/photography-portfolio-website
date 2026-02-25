"use client";

import React from "react";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative">
      {/* Tagline */}
      <div className="px-4 md:px-[6rem] mb-6 md:mb-10">
        <div className="max-w-3xl">
          <h1 className="text-white/90 light:text-gray-900 text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-[600] leading-[1.1] tracking-tight">
            Every frame has a{" "}
            <span className="text-primary italic">feeling.</span>
          </h1>
          <p className="text-white/40 light:text-gray-500 text-[0.875rem] md:text-[1rem] mt-3 md:mt-4 max-w-lg tracking-wide">
            Photography & film rooted in culture, emotion, and intention.
          </p>
        </div>
      </div>

      {/* Hero Images */}
      <section className="flex w-full md:px-[6rem]">
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
