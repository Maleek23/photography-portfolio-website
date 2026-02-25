"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Link from "next/link";
import { useRef } from "react";

export default function VideoPage() {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <main className="bg-background light:bg-white min-h-screen">
      <GrainOverlay />
      <NavBar />

      <div className="px-4 md:px-[6rem] pt-32 md:pt-40 lg:pt-44 pb-12 md:pb-16">

        <div className="mb-10 md:mb-12">
          <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-widest mb-2">
            Motion
          </p>
          <h1 className="text-white light:text-gray-900 text-[2rem] md:text-[2.75rem] font-[700] uppercase mb-3 tracking-tight leading-tight">
            Videography
          </h1>
          <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1rem] max-w-2xl leading-relaxed">
            Cinematic video production bringing your vision to life through motion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 items-end">
          <div className="md:col-span-1">
            <div
              className="relative aspect-[9/16] bg-black overflow-hidden cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(videoRef1)}
              onMouseLeave={() => handleMouseLeave(videoRef1)}
            >
              <video
                ref={videoRef1}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="none"
                poster="/videos/showreel-poster.jpg"
              >
                <source src="/videos/showreel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all pointer-events-none">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:opacity-0 transition-opacity">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-center text-customGrayAlt light:text-gray-500 text-[0.813rem] mt-3 uppercase tracking-wider">Showreel</p>
          </div>
          <div className="md:col-span-2">
            <div
              className="relative aspect-video bg-black overflow-hidden cursor-pointer group"
              onMouseEnter={() => handleMouseEnter(videoRef2)}
              onMouseLeave={() => handleMouseLeave(videoRef2)}
            >
              <video
                ref={videoRef2}
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                preload="none"
                poster="/videos/cinematic-poster.jpg"
              >
                <source src="/videos/cinematic.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-all pointer-events-none">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:opacity-0 transition-opacity">
                  <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-center text-customGrayAlt light:text-gray-500 text-[0.813rem] mt-3 uppercase tracking-wider">Cinematic Reel</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 md:mb-16">
          <div className="bg-superGray/50 light:bg-gray-50 p-6 md:p-8 border border-white/5 light:border-gray-200">
            <h3 className="text-white light:text-gray-900 text-[1.25rem] font-[600] uppercase mb-3">
              Event Coverage
            </h3>
            <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem] leading-relaxed">
              Multi-camera event filming with professional editing and same-day highlights
            </p>
          </div>

          <div className="bg-superGray/50 light:bg-gray-50 p-6 md:p-8 border border-white/5 light:border-gray-200">
            <h3 className="text-white light:text-gray-900 text-[1.25rem] font-[600] uppercase mb-3">
              Music Videos
            </h3>
            <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem] leading-relaxed">
              Creative direction and cinematography for artists and musicians
            </p>
          </div>

          <div className="bg-superGray/50 light:bg-gray-50 p-6 md:p-8 border border-white/5 light:border-gray-200">
            <h3 className="text-white light:text-gray-900 text-[1.25rem] font-[600] uppercase mb-3">
              Short Films
            </h3>
            <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem] leading-relaxed">
              Narrative and documentary-style storytelling with cinematic visuals
            </p>
          </div>
        </div>

        <div className="pt-12 md:pt-16 border-t border-superGray light:border-gray-200 text-center">
          <h2 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2rem] font-[600] uppercase mb-4 leading-tight">
            Let&apos;s Create Something
          </h2>
          <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1rem] max-w-xl mx-auto mb-8">
            Have a video project in mind? Let&apos;s discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-[600] px-8 py-4 uppercase text-[0.875rem] transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <FooterSection />
    </main>
  );
}
