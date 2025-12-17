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
      description: "Capturing personality, style, and the essence of individuals",
      imageUrl: "/images/portraits-cover.jpg",
    },
    {
      id: 1,
      title: "Graduation",
      slug: "graduation",
      description: "Documenting milestone moments and celebrating achievements",
      imageUrl: "/images/graduation-cover.jpg",
    },
    {
      id: 2,
      title: "Creative",
      slug: "creative-projects",
      description: "Pushing boundaries through experimental and conceptual photography",
      imageUrl: "/images/creative-projects.jpg",
    },
    {
      id: 3,
      title: "Concerts/Events",
      slug: "concerts-events",
      description: "Live music, performances, and unforgettable experiences",
      imageUrl: "/images/concerts-events-cover.jpg",
    },
  ];

  return (
    <main className="bg-background light:bg-white">
      <GrainOverlay />
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            <div className="mb-8 md:mb-10">
              <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-widest mb-2">
                Portfolio
              </p>
              <h1 className="text-white light:text-gray-900 text-[2rem] md:text-[2.75rem] font-[700] uppercase mb-2 leading-tight">
                Collections
              </h1>
              <p className="text-customGrayAlt light:text-gray-600 text-[0.875rem] md:text-[1rem] max-w-3xl leading-relaxed">
                Explore my work across different creative categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
              {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5] max-h-[420px] glass glass-lift glass-hover hover:border-primary transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary/20"
              >
                {!loadedImages[collection.id] && (
                  <ImageSkeleton className="absolute inset-0" aspectRatio="4/5" />
                )}
                <Image
                  src={collection.imageUrl}
                  alt={`${collection.title} photography collection`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages[collection.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [collection.id]: true }))}
                  loading="lazy"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 light:from-white/95 via-black/50 light:via-white/50 to-transparent">
                  {/* Glassmorphic bottom bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 backdrop-blur-xl bg-white/10 light:bg-gray-100/80 border-t border-white/20 light:border-gray-200 group-hover:bg-white/15 light:group-hover:bg-gray-100/90 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="relative z-10 text-white light:text-gray-900 text-[1.5rem] md:text-[1.75rem] font-[600] mb-2 md:mb-3 uppercase tracking-wide leading-tight">
                      {collection.title}
                    </h3>
                    <p className="relative z-10 text-customGrayAlt2 light:text-gray-600 text-[0.875rem] md:text-[1rem] leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            </div>
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
