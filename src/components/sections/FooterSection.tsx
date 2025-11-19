import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";
import { SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";
import Image from "next/image";

function FooterSection() {
  return (
    <section id="footer" className="bg-background light:bg-white border-t border-superGray/30 light:border-gray-200">
      <div className="px-4 md:px-[6rem] py-6 md:py-8">
        {/* Top Row: Logo + Links */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 md:gap-12 mb-6">
          {/* Logo */}
          <Link href="/" className="inline-block">
            <Image src="/images/logo.png" width={150} height={56} alt="Leekshotit" className="h-[2.75rem] md:h-[3.5rem] w-auto object-contain" />
          </Link>

          {/* Links Row */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 md:gap-12">
            {/* Quick Links */}
            <div>
              <p className="text-white light:text-gray-900 text-[0.813rem] font-[600] uppercase tracking-wider mb-2">Quick Links</p>
              <div className="space-y-1.5">
                <Link href="/" className="block text-customGrayAlt light:text-gray-600 text-[0.875rem] hover:text-primary transition-colors">Home</Link>
                <Link href="/collections" className="block text-customGrayAlt light:text-gray-600 text-[0.875rem] hover:text-primary transition-colors">Collections</Link>
                <Link href="/services" className="block text-customGrayAlt light:text-gray-600 text-[0.875rem] hover:text-primary transition-colors">Booking</Link>
                <Link href="/about" className="block text-customGrayAlt light:text-gray-600 text-[0.875rem] hover:text-primary transition-colors">About</Link>
              </div>
            </div>

            {/* Collections */}
            <div>
              <p className="text-white light:text-gray-900 text-[0.813rem] font-[600] uppercase tracking-wider mb-2">Portfolio</p>
              <div className="space-y-1.5">
                <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem]">Portraits</p>
                <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem]">Graduation</p>
                <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem]">Creative</p>
                <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem]">Events</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-white light:text-gray-900 text-[0.813rem] font-[600] uppercase tracking-wider mb-2">Connect</p>
              <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem] mb-2">Texas, USA</p>
              <div className="flex items-center gap-2.5">
                <a href="mailto:leekshotit@gmail.com" className="hover:opacity-70 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
                <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Image src="/images/instagram_icon.png" width={15} height={15} alt="Instagram" className="w-[0.938rem] h-[0.938rem]" />
                </a>
                <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <Image src="/images/x_icon.png" width={15} height={15} alt="TikTok" className="w-[0.938rem] h-[0.938rem]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Copyright */}
        <div className="pt-4 border-t border-superGray/20 light:border-gray-200">
          <p className="text-customGrayAlt light:text-gray-500 text-[0.563rem]">© 2024 Leekshotit Photography</p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
