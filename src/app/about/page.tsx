"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_EMAIL, SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const specialties = [
    { 
      title: "Portraits", 
      image: "/images/portrait-yellow.jpg",
      description: "Capturing authentic personality and confidence"
    },
    { 
      title: "Graduation", 
      image: "/images/graduation-nike.jpg",
      description: "Celebrating your milestone moments"
    },
    { 
      title: "Creative", 
      image: "/images/creative-smoke.jpg",
      description: "Pushing artistic boundaries"
    },
    { 
      title: "Events", 
      image: "/images/portrait-yellow.jpg",
      description: "High-energy live moments"
    },
  ];

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        {/* Hero Section */}
        <div className="relative px-4 md:px-[6rem] py-[3rem] md:py-[5rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image */}
            <div 
              className="relative overflow-hidden rounded-2xl aspect-[4/5] group"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <Image
                src="/images/about-profile.jpg" 
                alt="Abdulmalik Ajisegiri - Houston Dallas Photographer" 
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-white text-[2rem] md:text-[3rem] font-[700] uppercase leading-tight">
                  Abdulmalik<br/>Ajisegiri
                </p>
                <p className="text-primary text-[1rem] md:text-[1.125rem] font-[500] mt-2">
                  HTX/DTX Photographer
                </p>
              </div>
            </div>

            {/* Text Content */}
            <div 
              className="space-y-6"
              style={{
                transform: `translateY(${scrollY * -0.02}px)`,
              }}
            >
              <div>
                <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
                  About Me
                </p>
                <h1 className="text-white text-[2.5rem] md:text-[4rem] font-[700] uppercase leading-tight mb-6">
                  Visual<br/>Storyteller
                </h1>
              </div>

              <div className="space-y-4 text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-[600]">Malik</span> — a self-taught photographer, videographer, and artist based in Texas. What started as curiosity evolved into an obsession with freezing moments that matter.
                </p>
                <p>
                  My work celebrates <span className="text-primary font-[600]">melanin-richness</span> and authentic representation. Every frame is intentional — the way light hits skin, confidence in someone&apos;s eyes, the energy of a performance.
                </p>
                <p className="text-white font-[500]">
                  I don&apos;t just take pictures. I create art that resonates.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/services">
                  <button className="relative glass-thin glass-hover glass-lift bg-primary/80 text-white font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] overflow-hidden">
                    <span className="relative z-10">Book a Session</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="glass glass-hover glass-lift text-white font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] overflow-hidden relative">
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-50"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* What I Do Section */}
        <div className="px-4 md:px-[6rem] py-[3rem] md:py-[5rem] bg-gradient-to-b from-background via-superGray/10 to-background">
          <div className="text-center mb-12">
            <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
              Specialties
            </p>
            <h2 className="text-white text-[2rem] md:text-[3.5rem] font-[700] uppercase leading-tight">
              What I Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer glass glass-hover glass-lift"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Image
                  src={specialty.image} 
                  alt={`${specialty.title} photography specialty`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className={`object-cover transition-all duration-700 group-hover:scale-110 ${
                    loadedImages[index] ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
                  loading="lazy"
                  quality={85}
                />
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                  hoveredCard === index 
                    ? 'from-primary/90 via-primary/50 to-transparent' 
                    : 'from-black/80 via-black/30 to-transparent'
                }`}></div>
                
                {/* Glassmorphic bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 backdrop-blur-xl bg-white/10 border-t border-white/20 group-hover:bg-white/15 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className={`relative z-10 text-white text-[1.5rem] font-[700] uppercase transition-all duration-300 ${
                    hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-1'
                  }`}>
                    {specialty.title}
                  </p>
                  <p className={`relative z-10 text-white/90 text-[0.813rem] mt-1 transition-all duration-500 ${
                    hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}>
                    {specialty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="px-4 md:px-[6rem] py-[3rem] md:py-[5rem]">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-primary pl-6 md:pl-8 py-4">
              <p className="text-white text-[1.5rem] md:text-[2.5rem] font-[600] leading-relaxed mb-4">
                &ldquo;Photography is more than taking pictures — it&apos;s freezing emotion, telling stories, and creating art that resonates.&rdquo;
              </p>
              <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem]">
                — Malik&apos;s Approach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center group">
                <div className="text-primary text-[3rem] font-[700] mb-2 transition-transform duration-300 group-hover:scale-110">
                  100+
                </div>
                <p className="text-white text-[1.125rem] font-[500]">Sessions</p>
                <p className="text-customGrayAlt text-[0.875rem] mt-1">Completed</p>
              </div>
              <div className="text-center group">
                <div className="text-primary text-[3rem] font-[700] mb-2 transition-transform duration-300 group-hover:scale-110">
                  4
                </div>
                <p className="text-white text-[1.125rem] font-[500]">Categories</p>
                <p className="text-customGrayAlt text-[0.875rem] mt-1">Of Expertise</p>
              </div>
              <div className="text-center group">
                <div className="text-primary text-[3rem] font-[700] mb-2 transition-transform duration-300 group-hover:scale-110">
                  100%
                </div>
                <p className="text-white text-[1.125rem] font-[500]">Passion</p>
                <p className="text-customGrayAlt text-[0.875rem] mt-1">Every Shot</p>
              </div>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="px-4 md:px-[6rem] py-[3rem] md:py-[5rem] bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
              Let&apos;s Create Together
            </p>
            <h2 className="text-white text-[2rem] md:text-[3.5rem] font-[700] uppercase leading-tight mb-6">
              Ready to Work?
            </h2>
            <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-relaxed mb-8">
              Whether you need portraits, event coverage, or want to collaborate on a creative project, I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <a href={`mailto:${PORTFOLIO_EMAIL}`} className="flex items-center gap-3 text-white hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span className="text-[1.125rem]">{PORTFOLIO_EMAIL}</span>
              </a>
              <div className="flex items-center gap-4">
                <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <img src="/images/instagram_icon.png" alt="Instagram" className="w-8 h-8" />
                </a>
                <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  <img src="/images/x_icon.png" alt="TikTok" className="w-8 h-8" />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/collections">
                <button className="glass glass-hover glass-lift border-2 border-primary text-primary hover:bg-primary/20 font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] relative overflow-hidden">
                  <span className="relative z-10">View Portfolio</span>
                </button>
              </Link>
              <Link href="/services">
                <button className="glass-thin glass-hover glass-lift bg-primary/80 text-white font-[600] px-8 py-4 rounded-xl uppercase text-[0.875rem] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] relative overflow-hidden">
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </main>
  );
}
