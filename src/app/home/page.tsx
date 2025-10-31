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
          
          {/* Portfolio Section with Smooth Blue Gradient */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.15] via-primary/[0.08] to-background"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/[0.12] rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/[0.08] rounded-full blur-[100px] opacity-70"></div>
            <div className="px-4 md:px-[6rem] flex flex-col gap-[3rem] md:gap-[5rem] py-[5rem] md:py-[8rem] relative">
              <PortfolioSection />
            </div>
          </div>
          
          {/* Services Section with Smooth Gray/Blue Mix */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-superGray/[0.08] to-primary/[0.05]"></div>
            <div className="absolute top-20 left-0 w-[700px] h-[700px] bg-superGray/[0.10] rounded-full blur-[140px] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/[0.06] rounded-full blur-[100px] opacity-60"></div>
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
