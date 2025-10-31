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
          <div className="bg-gradient-to-b from-background via-primary/5 to-background">
            <div className="px-4 md:px-[6rem] flex flex-col gap-[3rem] md:gap-[5rem] py-[3rem] md:py-[5rem]">
              <PortfolioSection />
            </div>
          </div>
          <div className="bg-gradient-to-b from-background via-superGray/10 to-background">
            <div className="px-4 md:px-[6rem] py-[3rem] md:py-[5rem]">
              <ServiceSection />
            </div>
          </div>

          <FooterSection />
        </div>
      </div>
    </main>
  );
}
