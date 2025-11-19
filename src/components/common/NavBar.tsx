"use client";

import { useState, useEffect } from "react";
import { X, Sun, Moon } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "@/contexts/ThemeContext";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme();

  const categories = [
    "PORTRAITS",
    "GRADUATION", 
    "CREATIVE PROJECTS",
    "CONCERTS/EVENTS",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setMenu(!menu);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenu(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenu(false);
  };

  return (
    <>
      <div className="md:sticky md:top-0 md:shadow-none z-[9999]">
        {/* DESKTOP */}
        <div 
          className="hidden lg:block animate-in fade-in zoom-in p-4 pt-0 pb-0 border-b transition-all duration-300"
          style={{
            backdropFilter: scrollY > 50 ? "blur(20px) saturate(180%)" : "none",
            backgroundColor: scrollY > 50 ? "rgba(0, 0, 0, 0.7)" : "rgb(0, 0, 0)",
            borderBottomColor: scrollY > 50 ? "rgba(255, 255, 255, 0.1)" : "rgba(148, 163, 184, 0.3)",
          }}
        >
        <div className="flex justify-between mx-[41px] gap-8 items-center">
          <div className="flex gap-[2.5rem] items-center">
            <div className="flex border-r border-r-superGray self-stretch h-[3.5rem]"></div>
            <Link href="/home" className="cursor-pointer flex items-center py-2">
              <Image src="/images/logo.png" width={200} height={72} alt="Leekshotit Logo" className="h-[4.5rem] w-auto object-contain" priority />
            </Link>
          </div>
          <div className="flex text-[16px] items-center select-none border border-white/10 h-[3rem] rounded-t-xl mt-[0.5rem] bg-white/5 backdrop-blur-sm">
            <Link
              href="/home"
              className="hover:text-white hover:rounded-tl-xl hover:bg-white/10 cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-white/10 self-stretch font-[500] text-customGrayAlt2 transition-all duration-200"
            >
              Home
            </Link>
            <Link
              href="/collections"
              className="hover:text-white hover:bg-white/10 cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-white/10 self-stretch font-[500] text-customGrayAlt2 transition-all duration-200"
            >
              Collections
            </Link>
            <Link
              href="/projects"
              className="hover:text-white hover:bg-white/10 cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-white/10 self-stretch font-[500] text-customGrayAlt2 transition-all duration-200"
            >
              Projects
            </Link>
            <Link
              href="/services"
              className="hover:text-white hover:bg-white/10 cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-white/10 self-stretch font-[500] text-customGrayAlt2 transition-all duration-200"
            >
              Booking
            </Link>
            <Link
              href="/about"
              className="hover:text-white hover:rounded-tr-xl hover:bg-white/10 cursor-pointer flex items-center px-[2.5rem] gap-2 self-stretch font-[500] text-customGrayAlt2 transition-all duration-200"
            >
              About Me
            </Link>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex gap-[2.5rem] items-center">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 text-customGrayAlt2 hover:text-white"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="text-2xl md:text-4xl font-extrabold uppercase text-white">
                <Link href="/contact">
                  <MainButton 
                    text="Contact Me" 
                    compact={true}
                  />
                </Link>
              </div>
              <div className="flex border-r border-r-superGray self-stretch h-[3.5rem]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] animate-in fade-in zoom-in border-b transition-all duration-300 ${
          menu ? "bg-primary/90 backdrop-blur-xl py-2 border-b-white/20" : "bg-background/80 backdrop-blur-md border-b-white/10"
        }`}
      >
        <div className="flex justify-between mx-[10px]">
          <div
            className={`flex gap-[50px] text-[16px] items-center select-none ${
              !menu ? "ml-[1rem]" : ""
            }`}
          >
            <div className="flex gap-4 items-center">
              {!menu && (
                <div className="flex border-r border-r-superGray self-stretch h-[4rem]"></div>
              )}
              <Link href="/home" className="cursor-pointer flex items-center py-2">
                <Image src="/images/logo.png" width={200} height={80} alt="Leekshotit Logo" className="h-[5rem] w-auto object-contain" priority />
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-white"
                onClick={toggleMenu}
              />
            ) : (
              <div className="flex items-center gap-3 select-none">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300 text-white mt-8"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <div className="flex items-center">
                  <div className="text-2xl md:text-4xl font-extrabold uppercase mt-8 text-white outline outline-[1px] outline-superGray rounded-tl-[1.25rem]">
                    <Image
                      src="/images/hamburger.png"
                      width={40}
                      height={40}
                      alt="menu"
                      className="cursor-pointer animate-in fade-in zoom-in"
                      onClick={toggleMenu}
                    />
                  </div>
                  {!menu && (
                    <div className="flex border-r border-r-superGray self-stretch h-[3.5rem] mr-3"></div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              <Link href="/home" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Home
              </Link>
              <Link href="/collections" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Collections
              </Link>
              <Link href="/projects" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Projects
              </Link>
              <Link href="/services" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Booking
              </Link>
              <Link href="/about" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                About Me
              </Link>
              <div className="flex flex-col gap-[40px] select-none">
                <Link href="/contact" onClick={() => setMenu(false)}>
                  <MainButton 
                    text="Contact Me" 
                    classes="hover:bg-background"
                  />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      </div>

      {/* Category Marquee - Right Under Header */}
      <section className="w-full overflow-hidden bg-gradient-to-r from-lightDark via-superGray to-lightDark border-b border-b-superGray py-3 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
        <div 
          className="flex animate-marquee whitespace-nowrap items-center"
          style={{ transform: "translateZ(0)", backfaceVisibility: "hidden", willChange: "transform" }}
        >
          {[...categories, ...categories, ...categories].map((category, index) => (
            <div 
              key={index} 
              className="flex items-center flex-shrink-0 mx-6 transition-transform duration-300 hover:scale-110 hover:text-primary"
            >
              <span className="text-primary text-[0.875rem] md:text-[1rem] mr-3 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)] flex-shrink-0">★</span>
              <span className="text-white uppercase text-[0.75rem] md:text-[0.875rem] font-[600] tracking-wide drop-shadow-lg flex-shrink-0">
                {category}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default NavBar;
