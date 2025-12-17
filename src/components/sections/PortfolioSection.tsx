"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";
import { ArrowUpRight } from "lucide-react";

function PortfolioSection() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  
  const portfolioData = [
    {
      id: 0,
      title: "Portraits",
      slug: "portraits",
      imageUrl: "/images/portraits/mariam.png",
    },
    {
      id: 1,
      title: "Graduation",
      slug: "graduation",
      imageUrl: "/images/graduation/MEE01153.png",
    },
    {
      id: 2,
      title: "Creative",
      slug: "creative-projects",
      imageUrl: "/images/creative/creative-1.jpg",
    },
    {
      id: 3,
      title: "Events",
      slug: "concerts-events",
      imageUrl: "/images/concerts/MEE04552.jpg",
    },
  ];

  return (
    <section className="" id="portfolio">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-white light:text-gray-900 text-[1.25rem] md:text-[1.5rem] font-[500] uppercase tracking-wider">
          Collections
        </h2>
        <Link 
          href="/collections"
          className="text-white/50 light:text-gray-500 text-[0.813rem] font-[400] hover:text-white light:hover:text-gray-900 transition-colors"
        >
          View All →
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {portfolioData.map((item, index) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group relative overflow-hidden"
          >
            <div className="relative w-full aspect-[3/4]">
              {!loadedImages[index] && (
                <ImageSkeleton className="absolute inset-0" aspectRatio="3/4" />
              )}
              <Image
                src={item.imageUrl}
                alt={`${item.title} photography collection`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                  loadedImages[index] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                quality={85}
                priority={index < 2}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-sm md:text-base font-medium">
                    {item.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            
            <div className="mt-3 flex items-center justify-between group-hover:opacity-0 transition-opacity duration-300">
              <h3 className="text-white light:text-gray-900 text-sm font-medium">
                {item.title}
              </h3>
              <ArrowUpRight className="w-4 h-4 text-white/40 light:text-gray-400 group-hover:text-primary transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
