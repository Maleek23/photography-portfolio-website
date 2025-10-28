import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";
import { SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

function FooterSection() {
  return (
    <section id="footer" className="bg-background">
      <div className="px-4 md:px-[6rem] py-4 md:py-10">
        {/* Logo */}
        <Link href="/" className="inline-block mb-3 md:mb-6">
          <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[2.25rem] md:h-[4rem] object-contain" />
        </Link>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-4 md:mb-8">
          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <p className="text-white text-[0.75rem] font-[600] uppercase mb-2">Contact</p>
            <div className="space-y-2">
              <p className="text-customGrayAlt text-[0.75rem]">Texas, USA</p>
              
              {/* Social Icons - All Same Size */}
              <div className="flex items-center gap-2.5">
                <a href="mailto:leekshotit@gmail.com" className="hover:opacity-80 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
                <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="/images/instagram_icon.png" alt="Instagram" className="w-[1.125rem] h-[1.125rem]" />
                </a>
                <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                  <img src="/images/x_icon.png" alt="TikTok" className="w-[1.125rem] h-[1.125rem]" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white text-[0.75rem] font-[600] uppercase mb-2">Quick Links</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">About Me</Link>
              <Link href="/collections" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">Collections</Link>
              <Link href="/services" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">Services</Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="text-white text-[0.75rem] font-[600] uppercase mb-2">Collections</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-customGrayAlt text-[0.75rem]">Portraits</p>
              <p className="text-customGrayAlt text-[0.75rem]">Graduation</p>
              <p className="text-customGrayAlt text-[0.75rem]">Creative Projects</p>
              <p className="text-customGrayAlt text-[0.75rem]">Concerts/Events</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-3 md:pt-6">
          <p className="text-customGrayAlt text-[0.688rem]">© 2024 Leekshotit Photography. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
