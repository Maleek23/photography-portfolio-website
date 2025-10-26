"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import MainButton from "./MainButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const [scrollY, setScrollY] = useState(0);

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
    <div className="md:sticky md:top-0 md:shadow-none z-[9999]">
      {/* DESKTOP */}
      <div 
        className="hidden lg:block animate-in fade-in zoom-in bg-background p-4 pt-0 pb-0 border-b border-b-superGray"
        style={{
          backdropFilter: scrollY > 50 ? "blur(12px)" : "none",
          backgroundColor: scrollY > 50 ? "rgba(0, 0, 0, 0.8)" : "rgb(0, 0, 0)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="flex justify-between mx-[41px] gap-8 items-center">
          <div className="flex gap-[2.5rem] items-center">
            <div className="flex border-r border-r-superGray self-stretch h-[3.5rem]"></div>
            <Link href="/" className="cursor-pointer flex items-center py-2">
              <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[4.5rem] object-contain" />
            </Link>
          </div>
          <div className="flex text-[16px] items-center select-none border border-superGray h-[3rem] rounded-t-[0.75rem] mt-[0.5rem]">
            <Link
              href="/"
              className="hover:text-white hover:rounded-tl-[0.75rem] hover:bg-superGray cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-superGray self-stretch font-[500] text-customGrayAlt2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-superGray self-stretch font-[500] text-customGrayAlt2"
            >
              About Me
            </Link>
            <Link
              href="/collections"
              className="hover:text-white hover:bg-superGray cursor-pointer flex items-center px-[2.5rem] gap-2 border-r border-r-superGray self-stretch font-[500] text-customGrayAlt2"
            >
              Collections
            </Link>
            <Link
              href="/services"
              className="hover:text-white hover:rounded-tr-[0.75rem] hover:bg-superGray cursor-pointer flex items-center px-[2.5rem] gap-2 self-stretch font-[500] text-customGrayAlt2"
            >
              Services
            </Link>
          </div>
          <div className="flex items-center gap-[40px] select-none">
            <div className="flex gap-[2.5rem] items-center">
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
        className={`block lg:hidden shadow-sm fixed top-0 w-full z-[999] bg-background animate-in fade-in zoom-in border-b border-b-superGray ${
          menu ? "bg-primary py-2" : ""
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
                <div className="flex border-r border-r-superGray self-stretch h-[5rem]"></div>
              )}
              <Link href="/" className="cursor-pointer flex items-center py-2">
                <img src="/images/logo.png" alt="Leekshotit Logo" className="h-[5.5rem] object-contain" />
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
              <div className="flex items-center gap-[40px] select-none">
                <div className="flex items-center">
                  <div className="text-2xl md:text-4xl font-extrabold uppercase mt-8 text-white outline outline-[1px] outline-superGray rounded-tl-[1.25rem]">
                    <img
                      src="/images/hamburger.png"
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
              <Link href="/" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Home
              </Link>
              <Link href="/about" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                About Me
              </Link>
              <Link href="/collections" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Collections
              </Link>
              <Link href="/services" onClick={() => setMenu(false)} className="text-white cursor-pointer">
                Services
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
  );
}

export default NavBar;
