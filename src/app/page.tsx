"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import NavBar from "@/components/common/NavBar";

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const photos = [
    { src: "/images/creative-smoke.jpg", alt: "Creative smoke portrait photography by Leekshotit" },
    { src: "/images/back-portrait.png", alt: "Artistic back portrait photography session" },
    { src: "/images/heart-portrait.jpg", alt: "Heart portrait creative photography by Leekshotit" },
  ];

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <NavBar />

      {/* Main content */}
      <div className="min-h-screen flex items-end justify-center px-4 relative pb-[20vh]">
        {/* Desktop: Photo Grid Background - Fade in with scale */}
        <div
          className={`hidden md:grid absolute inset-0 grid-cols-3 gap-2 p-4 transition-all duration-800 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {photos.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="33vw"
                quality={85}
              />
            </div>
          ))}
        </div>

        {/* Mobile: Slideshow Background */}
        <div
          className={`md:hidden absolute inset-0 p-2 transition-all duration-800 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative h-full overflow-hidden rounded-lg">
            {photos.map((photo, index) => (
              <Image
                key={index}
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                priority={index === 0}
                sizes="100vw"
                quality={85}
              />
            ))}

            {/* Slideshow indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-white w-6'
                      : 'bg-white/50 hover:bg-white/75 w-2'
                  }`}
                  style={{ minWidth: index === currentSlide ? '24px' : '8px', minHeight: '8px', padding: '8px 0', backgroundClip: 'content-box' }}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Light overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/15"></div>

        {/* Center content - Button fades in from center */}
        <div
          className={`relative z-10 text-center transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <Link
            href="/home"
            prefetch={true}
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg uppercase text-[0.875rem] font-[600] tracking-wide transition-all duration-300
            backdrop-blur-sm border-2 border-white/80 text-white
            hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <span>Enter Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom right - Signature fades in from right */}
      <div
        className={`absolute bottom-8 right-8 z-10 text-right transition-all duration-700 delay-300 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`}
      >
        <h1 className="text-white text-[1rem] md:text-[1.125rem] font-[600] uppercase leading-tight tracking-wide mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          ABDULMALIK AJISEGIRI
        </h1>
        <p className="text-white/80 text-[0.625rem] md:text-[0.75rem] font-[400] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Photographer • Videographer • Visual Artist
        </p>
      </div>

      {/* Bottom left - Social Icons fade in from left */}
      <div
        className={`absolute bottom-8 left-8 z-10 transition-all duration-700 delay-300 ${
          loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}
      >
        <div className="flex gap-3 items-center">
          <a
            href="https://instagram.com/leekshotitt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="https://tiktok.com/@leekshotit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
          <a
            href="https://www.youtube.com/@Leekshotit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
              <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
          </a>
          <a
            href="https://www.pinterest.com/leekshotit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-all duration-300 hover:scale-110 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
