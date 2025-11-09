"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";

function PortfolioSection() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const portfolioData = [
    {
      id: 0,
      title: "Portraits",
      slug: "portraits",
      imageUrl: "/images/portraits-cover.jpg",
    },
    {
      id: 1,
      title: "Graduation",
      slug: "graduation",
      imageUrl: "/images/graduation-cover.jpg",
    },
    {
      id: 2,
      title: "Creative Projects",
      slug: "creative-projects",
      imageUrl: "/images/creative-projects-cover.jpg",
    },
    {
      id: 3,
      title: "Concerts/Events",
      slug: "concerts-events",
      imageUrl: "/images/concerts-events-cover.jpg",
    },
  ];

  return (
    <section className="" id="portfolio">
      {/* Header with View All */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-baseline gap-3">
          <h2 className="text-white text-[1.75rem] md:text-[2.5rem] font-[600] uppercase">
            Collections
          </h2>
          <p className="text-customGrayAlt text-[0.813rem] md:text-[0.938rem]">
            Browse by category
          </p>
        </div>
        <Link 
          href="/collections"
          className="text-primary text-[0.813rem] md:text-[0.938rem] font-[500] hover:underline uppercase tracking-wider"
        >
          View All →
        </Link>
      </div>

      {/* Enhanced Horizontal Scroll */}
      <div className="relative">
        <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 w-max">
            {portfolioData.map((item) => (
              <Link
                key={item.id}
                href={`/collections/${item.slug}`}
                className="group relative overflow-hidden rounded-2xl cursor-pointer w-[260px] md:w-[300px] h-[420px] md:h-[500px] bg-lightDark flex-shrink-0 border border-white/10 hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-2"
              >
                {!loadedImages[item.id] && (
                  <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
                )}
                <Image
                  src={item.imageUrl}
                  alt={`${item.title} photography collection`}
                  fill
                  sizes="(min-width: 768px) 300px, 260px"
                  className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
                  loading="lazy"
                  quality={85}
                />
                {/* GLASSMORPHISM Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  {/* Frosted Glass Bottom Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-xl bg-white/10 border-t border-white/20 group-hover:bg-white/15 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    <h3 className="relative z-10 text-white text-[1.25rem] md:text-[1.5rem] font-[600] uppercase tracking-wide leading-tight drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Scroll Hint */}
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden"></div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default PortfolioSection;
