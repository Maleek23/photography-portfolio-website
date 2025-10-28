import React from "react";
import { Separator } from "../ui/separator";
import Socials from "../common/Socials";
import Link from "next/link";

function FooterSection() {
  return (
    <section id="footer" className="bg-background">
      {/* Minimalist Footer */}
      <div className="px-4 md:px-[6rem] py-8 md:py-12">
        <div className="flex flex-col items-center text-center gap-6 md:gap-8">
          {/* Logo */}
          <Link href="/">
            <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[3.5rem] md:h-[4.5rem] object-contain" />
          </Link>
          
          {/* Social Icons */}
          <Socials />
          
          {/* Email */}
          <a href="mailto:leekshotit@gmail.com" className="text-customGrayAlt text-[0.875rem] hover:text-primary transition-colors">
            leekshotit@gmail.com
          </a>
          
          {/* Copyright */}
          <p className="text-customGrayAlt text-[0.75rem]">
            © 2024 Leekshotit Photography
          </p>
        </div>
      </div>
    </section>
  );
}

export default FooterSection;
