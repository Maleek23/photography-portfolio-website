"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";
import { useState } from "react";

export default function CollectionsPage() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const collections = [
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
      imageUrl: "/images/creative-projects.jpg",
    },
    {
      id: 3,
      title: "Events",
      slug: "concerts-events",
      imageUrl: "/images/concerts-events-cover.jpg",
    },
  ];

  return (
    <main className="bg-background light:bg-white min-h-screen">
      <GrainOverlay />
      <NavBar />
      <div className="px-4 md:px-[6rem] pt-32 md:pt-40 lg:pt-44 pb-16 md:pb-24">
        <div className="mb-10 md:mb-12">
          <p className="text-primary text-xs font-medium uppercase tracking-widest mb-3">
            Portfolio
          </p>
          <h1 className="text-white light:text-gray-900 text-2xl md:text-3xl font-medium">
            Collections
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.id}
              href={`/collections/${collection.slug}`}
              className="group relative overflow-hidden"
            >
              <div className="relative w-full aspect-[3/4]">
                {!loadedImages[collection.id] && (
                  <ImageSkeleton className="absolute inset-0" aspectRatio="3/4" />
                )}
                <Image
                  src={collection.imageUrl}
                  alt={`${collection.title} photography collection`}
                  fill
                  sizes="(max-width: 768px) 50vw, 50vw"
                  className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedImages[collection.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [collection.id]: true }))}
                  quality={85}
                  priority={collection.id < 2}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="text-white text-base md:text-lg font-medium">
                    {collection.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
