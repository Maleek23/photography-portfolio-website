"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="bg-background">
      <div className={`transition-opacity duration-300 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <NavBar />
        
        <div className="pt-[10rem] lg:pt-0">
          <HeroSection />
          
          {/* Portfolio Section with Blue Gradient */}
          <div className="relative bg-gradient-to-br from-primary/20 via-primary/10 to-background overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="px-4 md:px-[6rem] flex flex-col gap-[3rem] md:gap-[5rem] py-[5rem] md:py-[8rem] relative">
              <PortfolioSection />
            </div>
          </div>
          
          {/* Services Section with Gray/Blue Mix */}
          <div className="relative bg-gradient-to-bl from-superGray/20 via-background to-primary/10 overflow-hidden">
            <div className="absolute top-10 left-10 w-80 h-80 bg-superGray/15 rounded-full blur-3xl"></div>
            <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem] relative">
              <ServiceSection />
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
}
