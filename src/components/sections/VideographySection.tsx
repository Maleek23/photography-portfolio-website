"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function VideographySection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-2">Motion</p>
          <h2 className="text-[1.5rem] md:text-[2rem] font-medium text-white light:text-gray-900">
            Videography
          </h2>
        </div>
        <Link 
          href="/video" 
          className="hidden md:flex items-center gap-2 text-white/60 light:text-gray-600 hover:text-primary transition-colors text-sm"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div 
        className="relative aspect-video bg-black overflow-hidden cursor-pointer group"
        onClick={handlePlay}
      >
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          preload="auto"
          poster="/videos/showreel-horizontal-poster.jpg"
        >
          <source src="/videos/showreel-horizontal.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors">
            <Play className="w-8 h-8 text-white fill-white ml-1" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white/80 text-sm md:text-base">
            Bringing stories to life through cinematic motion
          </p>
        </div>
      </div>

      <Link 
        href="/video" 
        className="flex md:hidden items-center justify-center gap-2 text-white/60 light:text-gray-600 hover:text-primary transition-colors text-sm mt-8"
      >
        View All Videos
        <ArrowRight className="w-4 h-4" />
      </Link>
    </section>
  );
}
