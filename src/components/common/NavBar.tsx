"use client";

import { useState } from "react";
import { X, Menu, Instagram, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/collections", label: "Photography" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Booking" },
    { href: "/contact", label: "Inquire" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/home") {
      return pathname === "/home";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-28 lg:h-36">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Leekshotit" 
              className="h-12 sm:h-16 md:h-24 lg:h-32 object-contain w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] xl:text-[15px] font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white light:text-gray-900 underline underline-offset-4"
                    : "text-white/80 light:text-gray-600 hover:text-white light:hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Instagram - hidden on landing page */}
            {pathname !== "/" && (
              <a
                href="https://instagram.com/leekshotit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
            )}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-white/80 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors duration-200 p-1"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
            <button
              onClick={toggleTheme}
              className="text-white/70 light:text-gray-600 hover:text-white light:hover:text-gray-900 transition-colors duration-200 p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenu(!menu)}
              className="text-white light:text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-background/98 backdrop-blur-xl z-[9998] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-6 sm:px-8 py-8 gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenu(false)}
                className={`text-xl sm:text-2xl font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-white light:text-gray-900"
                    : "text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {pathname !== "/" && (
              <a
                href="https://instagram.com/leekshotit"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenu(false)}
                className="flex items-center gap-3 text-xl sm:text-2xl font-medium text-white/60 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors duration-200 pt-4 border-t border-white/10 light:border-gray-200"
              >
                <Instagram size={22} strokeWidth={1.5} />
                Instagram
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
