"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Logo top left - Fade in from top */}
      <div 
        className={`absolute top-12 left-8 z-10 transition-all duration-1000 ${
          loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}
      >
        <img src="/images/logo.png" alt="Logo" className="h-[9rem] md:h-[11rem] object-contain" />
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-end justify-center px-4 relative pb-[20vh]">
        {/* Photo Grid Background - Fade in with scale */}
        <div 
          className={`absolute inset-0 grid grid-cols-3 gap-2 p-4 transition-all duration-1200 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* 1st photo - creative smoke */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/creative-smoke.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          {/* 2nd photo - back portrait */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/back-portrait.png" className="w-full h-full object-cover" alt="" />
          </div>
          {/* 3rd photo - heart portrait */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/heart-portrait.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/15"></div>

        {/* Center content - Button fades in from center */}
        <div 
          className={`relative z-10 text-center transition-all duration-1000 delay-300 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Link
            href="/home"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg uppercase text-[0.875rem] font-[600] tracking-wide transition-all duration-300
            backdrop-blur-sm border-2 border-white/80 text-white
            hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <span>Enter Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom right - Signature fades in from right */}
      <div 
        className={`absolute bottom-8 right-8 z-10 text-right transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      >
        <h1 className="text-white text-[1rem] md:text-[1.125rem] font-[600] uppercase leading-tight tracking-wide mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          ABDULMALIK AJISEGIRI
        </h1>
        <p className="text-white/80 text-[0.625rem] md:text-[0.75rem] font-[400] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Photographer • Videographer • Visual Artist
        </p>
      </div>

      {/* Bottom left - Social Icons fade in from left */}
      <div 
        className={`absolute bottom-8 left-8 z-10 transition-all duration-1000 delay-500 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="flex gap-3 items-center">
          <a 
            href="https://instagram.com/leekshotitt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://tiktok.com/@leekshotit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
