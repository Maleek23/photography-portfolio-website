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

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Portraits - Large Feature Card */}
        <Link
          href={`/collections/${portfolioData[0].slug}`}
          className="group cursor-pointer md:col-span-1 lg:col-span-2 lg:row-span-2"
        >
          <div className="relative overflow-hidden rounded-2xl w-full h-[300px] md:h-[400px] lg:h-full lg:min-h-[500px] bg-lightDark light:bg-gray-100">
            {!loadedImages[0] && (
              <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
            )}
            <Image
              src={portfolioData[0].imageUrl}
              alt={`${portfolioData[0].title} photography collection`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 66vw"
              className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                loadedImages[0] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoadedImages(prev => ({ ...prev, [0]: true }))}
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-white text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                {portfolioData[0].title}
              </h3>
            </div>
          </div>
        </Link>

        {/* Graduation - Top Right */}
        <Link
          href={`/collections/${portfolioData[1].slug}`}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl w-full h-[240px] md:h-[200px] lg:h-[240px] bg-lightDark light:bg-gray-100">
            {!loadedImages[1] && (
              <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
            )}
            <Image
              src={portfolioData[1].imageUrl}
              alt={`${portfolioData[1].title} photography collection`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                loadedImages[1] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoadedImages(prev => ({ ...prev, [1]: true }))}
              quality={90}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                {portfolioData[1].title}
              </h3>
            </div>
          </div>
        </Link>

        {/* Creative Projects - Middle Right */}
        <Link
          href={`/collections/${portfolioData[2].slug}`}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-2xl w-full h-[240px] md:h-[200px] lg:h-[240px] bg-lightDark light:bg-gray-100">
            {!loadedImages[2] && (
              <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
            )}
            <Image
              src={portfolioData[2].imageUrl}
              alt={`${portfolioData[2].title} photography collection`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                loadedImages[2] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoadedImages(prev => ({ ...prev, [2]: true }))}
              quality={90}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
              <h3 className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                {portfolioData[2].title}
              </h3>
            </div>
          </div>
        </Link>

        {/* Concerts/Events - Bottom Full Width */}
        <Link
          href={`/collections/${portfolioData[3].slug}`}
          className="group cursor-pointer md:col-span-2 lg:col-span-3"
        >
          <div className="relative overflow-hidden rounded-2xl w-full h-[200px] md:h-[220px] bg-lightDark light:bg-gray-100">
            {!loadedImages[3] && (
              <ImageSkeleton className="absolute inset-0" aspectRatio="auto" />
            )}
            <Image
              src={portfolioData[3].imageUrl}
              alt={`${portfolioData[3].title} photography collection`}
              fill
              sizes="100vw"
              className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                loadedImages[3] ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setLoadedImages(prev => ({ ...prev, [3]: true }))}
              quality={90}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="text-white text-[1.25rem] md:text-[1.5rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors duration-300">
                {portfolioData[3].title}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PortfolioSection;
