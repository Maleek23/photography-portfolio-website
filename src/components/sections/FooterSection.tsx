import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";
import { SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

function FooterSection() {
  return (
    <section id="footer" className="bg-background">
      <div className="px-4 md:px-[6rem] py-3 md:py-8">
        {/* Logo */}
        <Link href="/" className="inline-block mb-2 md:mb-4">
          <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[2rem] md:h-[3.5rem] object-contain" />
        </Link>

        {/* Main Content Grid - Super Compact */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-8 mb-2 md:mb-6">
          {/* Contact */}
          <div>
            <p className="text-white text-[0.688rem] font-[600] uppercase mb-1.5">Contact</p>
            <p className="text-customGrayAlt text-[0.688rem] mb-1.5">Texas, USA</p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a href="mailto:leekshotit@gmail.com" className="hover:opacity-80 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/instagram_icon.png" alt="Instagram" className="w-4 h-4" />
              </a>
              <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src="/images/x_icon.png" alt="TikTok" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-[0.688rem] font-[600] uppercase mb-1.5">Quick Links</p>
            <div className="flex flex-col gap-1">
              <Link href="/" className="text-customGrayAlt text-[0.688rem] hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-customGrayAlt text-[0.688rem] hover:text-primary transition-colors">About Me</Link>
              <Link href="/collections" className="text-customGrayAlt text-[0.688rem] hover:text-primary transition-colors">Collections</Link>
              <Link href="/services" className="text-customGrayAlt text-[0.688rem] hover:text-primary transition-colors">Services</Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="text-white text-[0.688rem] font-[600] uppercase mb-1.5">Collections</p>
            <div className="flex flex-col gap-1">
              <p className="text-customGrayAlt text-[0.688rem]">Portraits</p>
              <p className="text-customGrayAlt text-[0.688rem]">Graduation</p>
              <p className="text-customGrayAlt text-[0.688rem]">Creative Projects</p>
              <p className="text-customGrayAlt text-[0.688rem]">Concerts/Events</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-2 md:pt-4">
          <p className="text-customGrayAlt text-[0.625rem]">© 2024 Leekshotit Photography</p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
