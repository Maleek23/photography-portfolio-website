"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const portfolioData: Record<string, { title: string; description: string; images: string[] }> = {
  portraits: {
    title: "Portraits",
    description: "Capturing personality and emotion through creative portrait photography",
    images: [
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
      "/images/portrait-yellow.jpg",
    ],
  },
  graduation: {
    title: "Graduation",
    description: "Celebrating your academic achievements with timeless graduation portraits",
    images: [
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
      "/images/graduation-nike.jpg",
    ],
  },
  "creative-projects": {
    title: "Creative Projects",
    description: "Pushing boundaries with artistic and conceptual photography",
    images: [
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
      "/images/creative-smoke.jpg",
    ],
  },
  "concerts-events": {
    title: "Concerts/Events",
    description: "High-energy concert and event photography capturing unforgettable moments",
    images: [
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
      "/images/portrait-yellow.jpg",
      "/images/graduation-nike.jpg",
      "/images/creative-smoke.jpg",
    ],
  },
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const category = portfolioData[params.category];

  if (!category) {
    notFound();
  }

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
          {/* Header */}
          <div className="mb-12">
            <Link href="/collections" className="text-primary text-[0.875rem] font-[500] hover:underline mb-4 inline-block">
              ← Back to Collections
            </Link>
            <h1 className="text-white text-[3rem] md:text-[4.5rem] font-[700] uppercase mb-4 tracking-tight">
              {category.title}
            </h1>
            <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] max-w-2xl">
              {category.description}
            </p>
          </div>

          {/* Photo Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-lg bg-lightDark cursor-pointer group border border-superGray hover:border-primary transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`${category.title} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-16 border-t border-superGray text-center">
            <h2 className="text-white text-[2rem] md:text-[3rem] font-[600] uppercase mb-4">
              Like What You See?
            </h2>
            <p className="text-customGrayAlt text-[1rem] mb-8 max-w-2xl mx-auto">
              Ready to book a session? Check out our pricing and availability.
            </p>
            <Link
              href="/services"
              className="inline-block bg-primary hover:bg-primary/80 text-white font-[600] px-8 py-4 rounded-lg uppercase text-[0.875rem] transition-all"
            >
              View Pricing & Book
            </Link>
          </div>
        </div>
        <FooterSection />
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src={selectedImage}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
