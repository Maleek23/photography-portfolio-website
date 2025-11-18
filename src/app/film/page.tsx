"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { useState } from "react";
import Link from "next/link";

// Film/Video data - similar to projectData but video-focused
const films = [
  {
    id: 1,
    title: "Senior Year Cinematic",
    category: "Graduation Films",
    description: "A 3-minute cinematic edit celebrating the journey from freshman to graduate",
    thumbnail: "/images/graduation-nike.jpg",
    videoUrl: "", // YouTube embed URL goes here
    duration: "3:24",
    date: "May 2024",
  },
  {
    id: 2,
    title: "Downtown Dreams",
    category: "Creative Films",
    description: "Urban exploration meets fashion in this atmospheric short film",
    thumbnail: "/images/creative-smoke.jpg",
    videoUrl: "", // YouTube embed URL goes here
    duration: "2:15",
    date: "October 2024",
  },
  {
    id: 3,
    title: "Live Performance Recap",
    category: "Concert Films",
    description: "High-energy concert recap showcasing the best moments from the night",
    thumbnail: "/images/hero.png",
    videoUrl: "", // YouTube embed URL goes here
    duration: "4:30",
    date: "September 2024",
  },
];

export default function FilmPage() {
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="bg-gradient-to-b from-primary/5 via-background to-background">
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
            {/* Header */}
            <div className="mb-8 md:mb-12 text-center">
              <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-4">
                Film & Videography
              </p>
              <h1 className="text-white text-[2.5rem] md:text-[5rem] font-[700] uppercase leading-tight mb-6">
                Cinematic Storytelling
              </h1>
              <p className="text-customGrayAlt text-[1rem] md:text-[1.25rem] leading-relaxed max-w-3xl mx-auto">
                Beyond still photography, I create cinematic films that bring moments to life through motion, music, and emotion.
              </p>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {films.map((film) => (
                <div
                  key={film.id}
                  className="glass glass-hover glass-lift backdrop-blur-xl rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300"
                  onClick={() => setSelectedFilm(film.id)}
                >
                  {/* Thumbnail with Play Button */}
                  <div className="relative aspect-video overflow-hidden bg-lightDark">
                    <img
                      src={film.thumbnail}
                      alt={film.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center group-hover:scale-110 transition-all shadow-[0_0_40px_rgba(37,99,235,0.6)]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 right-3 bg-black/80 text-white px-3 py-1 rounded-lg text-[0.813rem] font-[600]">
                      {film.duration}
                    </div>
                  </div>

                  {/* Film Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-primary text-[0.75rem] font-[600] uppercase tracking-wider">
                        {film.category}
                      </span>
                      <span className="text-customGrayAlt text-[0.75rem]">•</span>
                      <span className="text-customGrayAlt text-[0.75rem]">{film.date}</span>
                    </div>

                    <h3 className="text-white text-[1.25rem] font-[600] mb-2 group-hover:text-primary transition-colors">
                      {film.title}
                    </h3>

                    <p className="text-customGrayAlt text-[0.875rem] leading-relaxed">
                      {film.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="glass glass-mobile-optimized p-8 md:p-12 rounded-3xl text-center max-w-4xl mx-auto">
              <h2 className="text-white text-[1.75rem] md:text-[2.25rem] font-[600] mb-4">
                Want a Cinematic Film?
              </h2>
              <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-relaxed mb-6">
                From graduation recaps to creative projects, I create films that capture the energy and emotion of your moment.
              </p>
              <Link href="/services">
                <button className="glass-thin glass-hover glass-lift bg-primary/90 text-white font-[600] px-10 py-4 rounded-2xl uppercase text-[0.875rem] tracking-wider shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>

      {/* Video Lightbox Modal */}
      {selectedFilm && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedFilm(null)}
        >
          <button
            onClick={() => setSelectedFilm(null)}
            className="absolute top-8 right-8 text-white hover:text-primary transition-colors z-[10000] text-[2rem] w-12 h-12 flex items-center justify-center"
          >
            ×
          </button>
          
          <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              {films.find(f => f.id === selectedFilm)?.videoUrl ? (
                <iframe
                  src={films.find(f => f.id === selectedFilm)?.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={films.find(f => f.id === selectedFilm)?.title}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="text-[1.5rem] mb-4">Video Coming Soon</p>
                    <p className="text-customGrayAlt">Add your YouTube/Vimeo link to display the video</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Video Info Below Player */}
            <div className="mt-6 text-center">
              <h3 className="text-white text-[1.5rem] md:text-[2rem] font-[600] mb-2">
                {films.find(f => f.id === selectedFilm)?.title}
              </h3>
              <p className="text-customGrayAlt text-[1rem]">
                {films.find(f => f.id === selectedFilm)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
