"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
import Link from "next/link";
import Image from "next/image";
import ImageSkeleton from "@/components/common/ImageSkeleton";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CollectionsPage() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const collections = [
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                    loadedImages[collection.id] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [collection.id]: true }))}
                  quality={85}
                  priority={collection.id < 2}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-sm md:text-base font-medium">
                      {collection.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-white light:text-gray-900 text-sm font-medium">
                  {collection.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-white/40 light:text-gray-400 group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
