import React from "react";
import Link from "next/link";
import { Instagram } from "lucide-react";

function FooterSection() {
  return (
    <footer className="bg-background light:bg-gray-50 border-t border-white/10 light:border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/images/logo.png" 
                alt="Leekshotit" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/60 light:text-gray-500 text-sm leading-relaxed">
              Houston & Dallas based photographer specializing in portraits, graduation, and events.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white light:text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Navigate
            </h4>
            <div className="space-y-3">
              <Link href="/" className="block text-white/60 light:text-gray-500 text-sm hover:text-white light:hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/collections" className="block text-white/60 light:text-gray-500 text-sm hover:text-white light:hover:text-gray-900 transition-colors">
                Photography
              </Link>
              <Link href="/services" className="block text-white/60 light:text-gray-500 text-sm hover:text-white light:hover:text-gray-900 transition-colors">
                Booking
              </Link>
              <Link href="/about" className="block text-white/60 light:text-gray-500 text-sm hover:text-white light:hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white light:text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <div className="space-y-3">
              <p className="text-white/60 light:text-gray-500 text-sm">Graduation Sessions</p>
              <p className="text-white/60 light:text-gray-500 text-sm">Solo Portraits</p>
              <p className="text-white/60 light:text-gray-500 text-sm">Events & Concerts</p>
              <p className="text-white/60 light:text-gray-500 text-sm">Creative Projects</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white light:text-gray-900 text-sm font-semibold uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <p className="text-white/60 light:text-gray-500 text-sm">Houston & Dallas, TX</p>
              <a 
                href="mailto:leekshotit@gmail.com" 
                className="block text-white/60 light:text-gray-500 text-sm hover:text-primary transition-colors"
              >
                leekshotit@gmail.com
              </a>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="https://instagram.com/leekshotit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 light:text-gray-500 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://tiktok.com/@leekshotit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 light:text-gray-500 hover:text-primary transition-colors"
                  aria-label="TikTok"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 light:border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 light:text-gray-400 text-xs">
            © 2024 Leekshotit Photography. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="text-white/40 light:text-gray-400 text-xs hover:text-white light:hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <Link href="/policies" className="text-white/40 light:text-gray-400 text-xs hover:text-white light:hover:text-gray-600 transition-colors">
              Policies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
