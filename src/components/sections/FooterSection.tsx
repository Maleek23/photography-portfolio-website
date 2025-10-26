import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";

function FooterSection() {
  return (
    <section id="footer" className="bg-background">
      {/* Main Footer Content */}
      <div className="border-t border-lightDark px-4 md:px-[6rem] py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Branding Section */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[3rem] object-contain mb-3" />
            </Link>
            <p className="text-customGrayAlt text-[0.75rem] leading-relaxed max-w-sm mb-4">
              Self-taught HTX/DTX photographer, videographer, and visual artist capturing moments through a creative lens.
            </p>
            <div>
              <p className="text-white text-[0.75rem] font-[500] mb-1">Contact</p>
              <a href="mailto:leekshotit@gmail.com" className="text-primary text-[0.75rem] hover:underline">
                leekshotit@gmail.com
              </a>
              <p className="text-customGrayAlt text-[0.75rem] mt-0.5">Texas, USA</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="uppercase mb-3 text-white text-[0.75rem] font-[600]">Quick Links</p>
            <div className="flex flex-col gap-1.5">
              <Link href="/" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">About Me</Link>
              <Link href="/collections" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">Collections</Link>
              <Link href="/services" className="text-customGrayAlt text-[0.75rem] hover:text-primary transition-colors">Services</Link>
            </div>
          </div>

          {/* Collections */}
          <div>
            <p className="uppercase mb-3 text-white text-[0.75rem] font-[600]">Collections</p>
            <div className="flex flex-col gap-1.5">
              <p className="text-customGrayAlt text-[0.75rem]">Portraits</p>
              <p className="text-customGrayAlt text-[0.75rem]">Graduation</p>
              <p className="text-customGrayAlt text-[0.75rem]">Creative Projects</p>
              <p className="text-customGrayAlt text-[0.75rem]">Concerts/Events</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-lightDark px-4 md:px-[6rem] py-3">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-[0.675rem]">
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
