"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PortfolioSection() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const portfolioData = [
    {
      id: 0,
      title: "Portraits",
      subtitle: "Studio & Natural Light",
      slug: "portraits",
      imageUrl: "/images/portraits-cover.jpg",
    },
    {
      id: 1,
      title: "Graduation",
      subtitle: "Celebrate Your Milestone",
      slug: "graduation",
      imageUrl: "/images/graduation-cover.jpg",
    },
    {
      id: 2,
      title: "Creative",
      subtitle: "Artistic Vision",
      slug: "creative-projects",
      imageUrl: "/images/creative-projects-cover.jpg",
    },
    {
      id: 3,
      title: "Events",
      subtitle: "Concerts & Live Moments",
      slug: "concerts-events",
      imageUrl: "/images/concerts-events-cover.jpg",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="" id="portfolio">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white light:text-gray-900 text-[1.25rem] md:text-[1.5rem] font-[500] uppercase tracking-wider">
          Collections
        </h2>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <Link 
            href="/collections"
            className="text-white/50 light:text-gray-500 text-[0.813rem] font-[400] hover:text-white light:hover:text-gray-900 transition-colors"
          >
            View All →
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {portfolioData.map((item, index) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group cursor-pointer flex-shrink-0 snap-start"
          >
            <div className="relative overflow-hidden rounded-2xl w-[280px] md:w-[350px] lg:w-[400px] aspect-[3/4] bg-lightDark light:bg-gray-100">
              {!loadedImages[index] && (
                <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
              )}
              <Image
                src={item.imageUrl}
                alt={`${item.title} photography collection`}
                fill
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 400px"
                className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                  loadedImages[index] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                quality={90}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white/60 text-[0.75rem] md:text-[0.813rem] uppercase tracking-widest mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.subtitle}
                </p>
                <h3 className="text-white text-[1.5rem] md:text-[2rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center gap-2 text-white/60 group-hover:text-white transition-colors">
                  <span className="text-[0.813rem]">Explore</span>
                  <ChevronRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
