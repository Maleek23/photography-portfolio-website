"use client";

import { PORTFOLIO_OWNER_FULLNAME } from "@/lib/constant";
import React, { useEffect, useRef, useState } from "react";

function HeroSection() {
  const categories = [
    "PORTRAITS",
    "GRADUATION", 
    "CREATIVE PROJECTS",
    "CONCERTS/EVENTS",
  ];

  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Hero Content with Glass Morphism */}
      <section 
        ref={heroRef}
        className="relative flex justify-center items-center flex-col px-4 md:px-[6rem] py-[2rem] md:py-[2.5rem] min-h-[60vh]"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div 
          className="relative text-center max-w-5xl"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
            transition: "transform 0.1s ease-out",
          }}
        >
          {/* Glass Card Container */}
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl opacity-50" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-[1px] w-12 bg-primary shadow-lg shadow-primary/50"></div>
                <p className="text-primary uppercase text-[0.875rem] md:text-[1rem] font-[600] tracking-widest drop-shadow-lg">
                  Stunning Creativity
                </p>
                <div className="h-[1px] w-12 bg-primary shadow-lg shadow-primary/50"></div>
              </div>
              
              <h1 
                className="uppercase font-[700] text-[2.75rem] md:text-[5.5rem] text-white leading-[0.95] tracking-tight"
                style={{
                  textShadow: "0 0 40px rgba(37, 99, 235, 0.5), 0 4px 20px rgba(0, 0, 0, 0.8)",
                  transform: `translateZ(20px)`,
                }}
              >
                {PORTFOLIO_OWNER_FULLNAME}
              </h1>
              
              <p 
                className="text-customGrayAlt text-[0.875rem] md:text-[1rem] font-[400] mt-3 tracking-wide"
                style={{
                  transform: `translateZ(10px)`,
                }}
              >
                Photographer • Videographer • Visual Artist
              </p>
            </div>

            {/* Glass Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-3xl pointer-events-none" />
          </div>

          {/* Floating Accent Elements */}
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
        </div>
      </section>

      {/* Animated Category Marquee with Parallax */}
      <section 
        className="relative w-full overflow-hidden bg-lightDark border-y border-superGray py-2"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {[...categories, ...categories, ...categories].map((category, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="text-primary text-[0.875rem] mr-2">★</span>
              <span className="text-white uppercase text-[0.75rem] md:text-[0.875rem] font-[500] tracking-wider">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Hero Images with Parallax */}
      <section 
        className="relative flex w-full md:px-[6rem] mt-[2rem]"
        style={{
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      >
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

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}

export default HeroSection;
