"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PORTFOLIO_EMAIL, SOCIAL_INSTAGRAM, SOCIAL_TIKTOK } from "@/lib/constant";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const specialties = [
    "Portraits",
    "Graduation",
    "Creative Projects",
    "Concerts & Events",
  ];

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        {/* Hero Section */}
        <div className="relative px-4 md:px-[6rem] py-[4rem] md:py-[6rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
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
                quality={95}
              />
            </div>

            {/* Text Content */}
            <div 
              className="space-y-8"
              style={{
                transform: `translateY(${scrollY * -0.02}px)`,
              }}
            >
              <div>
                <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-4">
                  About Me
                </p>
                <h1 className="text-white text-[2.5rem] md:text-[4rem] font-[700] uppercase leading-tight mb-4">
                  Visual<br/>Storyteller
                </h1>
              </div>

              <div className="space-y-6 text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-[1.8]">
                <p>
                  I&apos;m <span className="text-white font-[600]">Malik</span> — a self-taught photographer, videographer, and visual artist based in Texas. What started as curiosity evolved into an obsession with freezing moments that matter.
                </p>
                <p>
                  My work celebrates <span className="text-primary font-[600]">high personified art</span> and authentic representation. I&apos;m drawn to the details most people overlook — the way natural light sculpts a face, the quiet confidence in someone&apos;s posture, the raw energy of a live performance. Every frame is intentional. Every session is a collaboration.
                </p>
                <p>
                  I specialize in capturing <span className="text-white font-[600]">melanin-richness</span> in its truest form. Too often, Black and brown skin is poorly lit or muted in photography. I&apos;ve spent years mastering lighting techniques that honor deep skin tones, bringing out warmth, texture, and dimension that standard photography misses.
                </p>
                <p>
                  Beyond technical skill, I bring <span className="text-white font-[600]">intentionality</span> to every shoot. Whether it&apos;s a graduation milestone, a creative concept, or a concert moment, I&apos;m not just documenting — I&apos;m translating your story into visual art. The goal isn&apos;t perfection; it&apos;s authenticity with cinematic quality.
                </p>
                <p className="text-white font-[500] text-[1.125rem] md:text-[1.25rem] leading-[1.6] pt-2">
                  I don&apos;t just take pictures. I create art that resonates, tells stories, and stands the test of time.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-6">
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
        <div className="px-4 md:px-[6rem] py-[4rem] md:py-[6rem] bg-gradient-to-b from-background via-superGray/10 to-background">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-3">
                Specialties
              </p>
              <h2 className="text-white text-[2rem] md:text-[3.5rem] font-[700] uppercase leading-tight mb-6">
                What I Do
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-10">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="glass glass-mobile-optimized glass-hover glass-lift p-7 md:p-6 rounded-xl text-center group"
                >
                  <p className="text-white text-[1.125rem] md:text-[1.25rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors">
                    {specialty}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center glass glass-mobile-optimized glass-hover p-7 md:p-8 rounded-2xl">
              <p className="text-customGrayAlt text-base md:text-[1.125rem] leading-[1.7]">
                I&apos;m also <span className="text-primary font-[600]">open to inquiries</span> for any creative projects, events, or <span className="text-white font-[500]">weddings</span>. Let&apos;s collaborate and bring your vision to life.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="px-4 md:px-[6rem] py-[4rem] md:py-[6rem]">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-primary pl-8 md:pl-10 py-6 md:py-8">
              <p className="text-white text-[1.5rem] md:text-[2.5rem] font-[600] leading-[1.4] mb-6">
                &ldquo;Photography is more than taking pictures — it&apos;s freezing emotion, telling stories, and creating art that resonates.&rdquo;
              </p>
              <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] font-[500]">
                — Malik&apos;s Approach
              </p>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="px-4 md:px-[6rem] py-[4rem] md:py-[6rem] bg-gradient-to-b from-background via-primary/5 to-background">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary text-[0.875rem] font-[600] uppercase tracking-widest mb-4">
              Let&apos;s Create Together
            </p>
            <h2 className="text-white text-[2rem] md:text-[3.5rem] font-[700] uppercase leading-tight mb-8">
              Ready to Work?
            </h2>
            <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-[1.7] mb-10">
              Whether you need portraits, event coverage, or want to collaborate on a creative project, I&apos;d love to hear from you.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
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
