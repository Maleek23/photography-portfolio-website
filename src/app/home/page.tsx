"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  
  const categories = [
    "PORTRAITS",
    "GRADUATION", 
    "CREATIVE PROJECTS",
    "CONCERTS/EVENTS",
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="bg-background">
      <div className={`transition-opacity duration-300 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <NavBar />
        
        {/* Category Marquee - Right Under Header */}
        <section className="w-full overflow-hidden bg-gradient-to-r from-lightDark via-superGray to-lightDark border-b border-b-superGray py-2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
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
        
        <div className="pt-[10rem] lg:pt-0">
          <HeroSection />
          <div className="px-4 md:px-[6rem] flex flex-col gap-[3rem] md:gap-[5rem] mt-[3rem] md:mt-[5rem] mb-[5rem] md:mb-[8rem]">
            <PortfolioSection />
            <ServiceSection />
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
}
