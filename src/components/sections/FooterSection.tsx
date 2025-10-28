import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";
import { SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

function FooterSection() {
  return (
    <section id="footer" className="bg-background">
      {/* Minimal Footer */}
      <div className="px-4 md:px-[6rem] py-3 md:py-10">
        {/* Mobile: Single Column Compact | Desktop: Multi-column */}
        <div className="flex flex-col md:grid md:grid-cols-4 gap-3 md:gap-8">
          {/* Logo + Contact */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[2.5rem] md:h-[4.5rem] object-contain mb-2 md:mb-4" />
            </Link>
            
            {/* Contact Icons - Mobile Horizontal */}
            <div className="flex items-center gap-3 md:flex-col md:items-start md:gap-1">
              <a href="mailto:leekshotit@gmail.com" className="flex items-center gap-1.5 text-primary text-[0.688rem] hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/images/instagram_icon.png" alt="Instagram" className="w-[1.125rem] h-[1.125rem] opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <img src="/images/x_icon.png" alt="TikTok" className="w-[1.125rem] h-[1.125rem] opacity-80 hover:opacity-100 transition-opacity" />
              </a>
              <span className="text-customGrayAlt text-[0.688rem] md:hidden">•</span>
              <p className="text-customGrayAlt text-[0.688rem]">Texas, USA</p>
            </div>
            
            {/* Desktop: Email and Location separate */}
            <div className="hidden md:block space-y-1">
              <a href="mailto:leekshotit@gmail.com" className="flex items-center gap-2 text-primary text-[0.75rem] hover:underline">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                leekshotit@gmail.com
              </a>
              <p className="text-customGrayAlt text-[0.75rem]">Texas, USA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="uppercase mb-1 md:mb-3 text-white text-[0.625rem] md:text-[0.75rem] font-[600]">Quick Links</p>
            <div className="flex flex-col gap-0.5 md:gap-1">
              <Link href="/" className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem] hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem] hover:text-primary transition-colors">About Me</Link>
              <Link href="/collections" className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem] hover:text-primary transition-colors">Collections</Link>
              <Link href="/services" className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem] hover:text-primary transition-colors">Services</Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="uppercase mb-1 md:mb-3 text-white text-[0.625rem] md:text-[0.75rem] font-[600]">Collections</p>
            <div className="flex flex-col gap-0.5 md:gap-1">
              <p className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem]">Portraits</p>
              <p className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem]">Graduation</p>
              <p className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem]">Creative Projects</p>
              <p className="text-customGrayAlt text-[0.625rem] md:text-[0.75rem]">Concerts/Events</p>
            </div>
          </div>
        </div>

        {/* Copyright Only */}
        <div className="mt-3 md:mt-8 pt-2 md:pt-6 text-center md:text-left">
          <p className="text-customGrayAlt text-[0.625rem]">© 2024 Leekshotit Photography</p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
