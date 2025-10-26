import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";

function FooterSection() {
  return (
    <section id="footer" className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-lightDark px-4 md:px-[6rem] py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Branding Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[4rem] object-contain mb-4" />
            </Link>
            <p className="text-customGrayAlt text-[0.875rem] leading-relaxed max-w-sm">
              Self-taught HTX/DTX photographer, videographer, and visual artist capturing moments through a creative lens.
            </p>
            <div className="mt-6">
              <p className="text-white text-[0.875rem] font-[500] mb-2">Contact</p>
              <a href="mailto:leekshotit@gmail.com" className="text-primary text-[0.875rem] hover:underline">
                leekshotit@gmail.com
              </a>
              <p className="text-customGrayAlt text-[0.875rem] mt-1">Texas, USA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="uppercase mb-4 text-white text-[0.875rem] font-[600]">Quick Links</p>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-customGrayAlt text-[0.875rem] hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-customGrayAlt text-[0.875rem] hover:text-primary transition-colors">About Me</Link>
              <Link href="/collections" className="text-customGrayAlt text-[0.875rem] hover:text-primary transition-colors">Collections</Link>
              <a href="#services" className="text-customGrayAlt text-[0.875rem] hover:text-primary transition-colors">Services</a>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="uppercase mb-4 text-white text-[0.875rem] font-[600]">Collections</p>
            <div className="flex flex-col gap-2">
              <p className="text-customGrayAlt text-[0.875rem]">Portraits</p>
              <p className="text-customGrayAlt text-[0.875rem]">Graduation</p>
              <p className="text-customGrayAlt text-[0.875rem]">Creative Projects</p>
              <p className="text-customGrayAlt text-[0.875rem]">Concerts/Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lightDark px-4 md:px-[6rem] py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[0.75rem]">
          <p className="text-customGrayAlt">© 2024 Leekshotit Photography. All rights reserved.</p>
          <Socials />
          <div className="flex gap-4 text-customGrayAlt">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
