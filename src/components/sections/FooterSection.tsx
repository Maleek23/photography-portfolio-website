"use client";

import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";

function FooterSection() {
  return (
    <footer>
      <div className="px-4 md:px-[6rem] py-12">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left: Logo + Tagline */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <img 
                src="/images/logo.png" 
                alt="Leekshotit" 
                className="h-8 w-auto object-contain" 
              />
            </Link>
            <span className="text-white/40 light:text-gray-400 text-sm hidden sm:inline">
              Dallas, Austin & Houston Photographer
            </span>
          </div>

          {/* Center: Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link href="/collections" className="text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors">
              Photography
            </Link>
            <Link href="/video" className="text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors">
              Video
            </Link>
            <Link href="/services" className="text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors">
              Booking
            </Link>
            <Link href="/contact" className="text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors">
              Contact
            </Link>
            <Link href="/policies" className="text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors">
              Policies
            </Link>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com/leekshotitt"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 light:text-gray-500 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://tiktok.com/@leekshotit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/60 light:text-gray-500 hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6">
          <p className="text-white/30 light:text-gray-400 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Leekshotit Photography
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
