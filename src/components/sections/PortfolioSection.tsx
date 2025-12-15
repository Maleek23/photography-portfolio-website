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
          <h2 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2rem] font-[600] uppercase">
            Collections
          </h2>
          <p className="text-customGrayAlt light:text-gray-600 text-[0.813rem] md:text-[0.938rem]">
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

      {/* 2x2 Grid with Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.map((item) => (
          <Link
            key={item.id}
            href={`/collections/${item.slug}`}
            className="group cursor-pointer"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl w-full h-[280px] md:h-[380px] lg:h-[420px] bg-lightDark light:bg-gray-100">
              {!loadedImages[item.id] && (
                <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
              )}
              <Image
                src={item.imageUrl}
                alt={`${item.title} photography collection`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                  loadedImages[item.id] ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => setLoadedImages(prev => ({ ...prev, [item.id]: true }))}
                quality={90}
                priority={item.id === 0}
                loading={item.id === 0 ? undefined : "lazy"}
              />
            </div>
            {/* Title Below Image */}
            <h3 className="text-white light:text-gray-900 text-[1.25rem] md:text-[1.5rem] font-[600] uppercase tracking-wide mt-4 group-hover:text-primary transition-colors duration-300">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
