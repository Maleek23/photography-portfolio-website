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
    { href: "/", label: "Home" },
    { href: "/collections", label: "Photography" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Booking" },
    { href: "/contact", label: "Inquire" },
    { href: "/about", label: "About" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "/home";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-b from-black/70 via-black/30 to-transparent dark:from-black/80 dark:via-black/40">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Logo - Simple Text */}
          <Link 
            href="/home" 
            className="text-3xl md:text-4xl font-bold text-white tracking-tight select-none"
          >
            L
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-medium transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-white underline underline-offset-4"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Instagram */}
            <a
              href="https://instagram.com/leekshotit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="text-white/70 hover:text-white transition-colors duration-200 p-1"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200 p-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMenu(!menu)}
              className="text-black dark:text-white p-2"
              aria-label="Toggle menu"
            >
              {menu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="lg:hidden fixed inset-0 top-20 bg-white dark:bg-black z-[9998] animate-in fade-in duration-200">
          <div className="flex flex-col px-8 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenu(false)}
                className={`text-2xl font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-black dark:text-white"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://instagram.com/leekshotit"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenu(false)}
              className="flex items-center gap-3 text-2xl font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
            >
              <Instagram size={24} strokeWidth={1.5} />
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
