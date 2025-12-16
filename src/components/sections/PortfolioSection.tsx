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
      title: "Creative",
      slug: "creative-projects",
      imageUrl: "/images/creative-projects-cover.jpg",
    },
    {
      id: 3,
      title: "Events",
      slug: "concerts-events",
      imageUrl: "/images/concerts-events-cover.jpg",
    },
  ];

  return (
    <section className="" id="portfolio">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
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

      {/* Horizontal 4-Column Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {portfolioData.map((item, index) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-lightDark light:bg-gray-100">
              {!loadedImages[index] && (
                <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
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
                quality={90}
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-[0.938rem] md:text-[1.125rem] font-[500] uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
