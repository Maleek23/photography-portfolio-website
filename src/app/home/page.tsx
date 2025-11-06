"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ScrollReveal from "@/components/common/ScrollReveal";
import StickyBookingCTA from "@/components/common/StickyBookingCTA";
import { useEffect, useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="relative bg-background">
      {/* Smooth Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/[0.08] rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute bottom-1/3 left-0 w-[600px] h-[600px] bg-primary/[0.06] rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-superGray/[0.05] rounded-full blur-[100px] opacity-40"></div>
      </div>

      <StickyBookingCTA />
      <div className={`relative z-10 transition-opacity duration-300 ease-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <NavBar />
        
        <div className="pt-[10rem] lg:pt-0">
          <HeroSection />
          
          {/* Portfolio Section with Glassmorphism */}
          <ScrollReveal>
            <div className="px-4 md:px-[6rem] py-[3rem] md:py-[5rem]">
              <PortfolioSection />
            </div>
          </ScrollReveal>
          
          {/* Services Section with Glassmorphism */}
          <ScrollReveal delay={200}>
            <div className="px-4 md:px-[6rem] py-[3rem] md:py-[5rem]">
              <ServiceSection />
            </div>
          </ScrollReveal>

          <FooterSection />
        </div>
      </div>
    </main>
  );
}
