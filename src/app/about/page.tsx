"use client";

import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import FooterSection from "@/components/sections/FooterSection";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-background relative overflow-hidden">
      {/* Parallax Background Layers */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-primary/5 via-background to-background -z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div 
        className="fixed top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
        style={{
          transform: `translate(${scrollY * 0.3}px, ${scrollY * 0.4}px)`,
        }}
      />
      <div 
        className="fixed bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10"
        style={{
          transform: `translate(${scrollY * -0.2}px, ${scrollY * -0.3}px)`,
        }}
      />

      <NavBar />
      <div className="pt-[10rem] lg:pt-0 relative">
        <div 
          className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]"
          style={{
            transform: `translateY(${scrollY * -0.1}px)`,
          }}
        >
          <AboutSection />
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
