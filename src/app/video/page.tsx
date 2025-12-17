"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Link from "next/link";
import { Play } from "lucide-react";

export default function VideoPage() {
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

        <div className="relative aspect-video max-w-5xl bg-superGray light:bg-gray-100 mb-12 md:mb-16 overflow-hidden group cursor-pointer">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-primary/90 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="white" />
            </div>
          </div>
          <p className="absolute bottom-6 left-6 text-white/60 light:text-gray-500 text-sm">
            Showreel coming soon
          </p>
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
            Let's Create Something
          </h2>
          <p className="text-customGrayAlt light:text-gray-600 text-[0.938rem] md:text-[1rem] max-w-xl mx-auto mb-8">
            Have a video project in mind? Let's discuss your vision.
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
