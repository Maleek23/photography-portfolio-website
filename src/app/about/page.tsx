"use client";

import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import GrainOverlay from "@/components/common/GrainOverlay";
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
    <main className="bg-background light:bg-white">
      <GrainOverlay />
      <NavBar />
      <div className="pt-32 md:pt-40 lg:pt-44">
        <div className="bg-gradient-to-b from-primary/5 light:from-primary/2 via-background light:via-white to-background light:to-white">
          
          {/* Hero Section - Full Width with Centered Content */}
          <div className="relative flex items-center justify-center px-4 md:px-[6rem] py-12 md:py-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              
              {/* Profile Image - Larger, More Prominent */}
              <div 
                className="relative order-2 lg:order-1"
                style={{
                  transform: `translateY(${scrollY * 0.03}px)`,
                }}
              >
                <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 overflow-hidden rounded-3xl group">
                  <Image
                    src="/images/about-profile.jpg" 
                    alt="Abdulmalik Ajisegiri - Houston Dallas Photographer" 
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    quality={95}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 light:from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Bio Content */}
              <div 
                className="order-1 lg:order-2 text-center lg:text-left"
                style={{
                  transform: `translateY(${scrollY * -0.02}px)`,
                }}
              >
                <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-3">
                  About Me
                </p>
                
                <h1 className="text-white light:text-gray-900 text-[2rem] md:text-[2.75rem] font-[700] uppercase leading-tight mb-6">
                  Visual<br/>Storyteller
                </h1>

                <div className="space-y-6 text-customGrayAlt light:text-gray-600 text-[1.063rem] md:text-[1.125rem] leading-[1.75] max-w-xl mx-auto lg:mx-0">
                  <p>
                    I&apos;m <span className="text-white light:text-gray-900 font-[600]">Malik</span>, a self-taught photographer, videographer, and visual artist based in Texas. What started as curiosity evolved into an obsession with capturing moments that matter.
                  </p>
                  
                  <p>
                    My work celebrates <span className="text-primary font-[600]">intentionality in every frame</span> and <span className="text-white light:text-gray-900 font-[600]">authentic collaboration</span> in every session.
                  </p>
                  
                  <p>
                    I specialize in capturing <span className="text-white light:text-gray-900 font-[600]">high-end art</span> in its truest form. Beyond technical skill, I bring intentionality to every shoot. Whether it&apos;s a graduation milestone, a creative concept, or a concert moment, I&apos;m not just documenting — I&apos;m translating your story into visual art.
                  </p>
                  
                  <p className="text-white light:text-gray-900 font-[600] text-[1.188rem] md:text-[1.313rem] pt-4">
                    I don&apos;t just take pictures and videos. I create art that resonates, tells stories, and stands the test of time.
                  </p>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
                  <Link href="/services">
                    <button className="relative glass-thin glass-hover glass-lift bg-primary/90 text-white font-[600] px-10 py-4 rounded-2xl uppercase text-[0.875rem] tracking-wider shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 overflow-hidden">
                      <span className="relative z-10">Book Session</span>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
                    </button>
                  </Link>
                  <Link href="/collections">
                    <button className="glass glass-hover glass-lift text-white light:text-gray-900 font-[600] px-10 py-4 rounded-2xl uppercase text-[0.875rem] tracking-wider overflow-hidden relative border border-white/10 light:border-gray-200">
                      <span className="relative z-10">View Work</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

          {/* What I Do Section - Cleaner Grid */}
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            
            <div className="text-center mb-8 md:mb-12">
              <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-4">
                Specialties
              </p>
              <h2 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2rem] font-[700] uppercase leading-tight">
                What I Do
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="glass glass-mobile-optimized glass-hover glass-lift p-10 rounded-2xl text-center group transition-all duration-300 hover:scale-105 light:bg-gray-100/50"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 light:bg-primary/20 flex items-center justify-center border-2 border-primary/30 group-hover:border-primary group-hover:bg-primary/20 transition-all duration-300">
                    <span className="text-primary text-[1.5rem] font-[700]">{index + 1}</span>
                  </div>
                  <p className="text-white light:text-gray-900 text-[1.125rem] font-[600] uppercase tracking-wide group-hover:text-primary transition-colors">
                    {specialty}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center glass glass-mobile-optimized glass-hover p-8 md:p-10 rounded-3xl max-w-3xl mx-auto border border-white/5 light:border-gray-200 light:bg-gray-100/50">
              <p className="text-customGrayAlt light:text-gray-600 text-[1.063rem] md:text-[1.125rem] leading-[1.7]">
                I&apos;m also <span className="text-primary font-[600]">open to inquiries</span> for any creative projects, events, or <span className="text-white light:text-gray-900 font-[600]">weddings</span>. Let&apos;s collaborate and bring your vision to life.
              </p>
            </div>
          </div>
        </div>

          {/* Philosophy Quote - Centered, Bold */}
          <div className="px-4 md:px-[6rem] py-12 md:py-16 bg-gradient-to-b from-background light:from-white via-primary/5 light:via-primary/2 to-background light:to-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-primary/20 text-[6rem] font-serif leading-none">&ldquo;</div>
              <p className="text-white light:text-gray-900 text-[1.75rem] md:text-[2.75rem] font-[600] leading-[1.3] mb-8 relative z-10">
                Photography is more than taking pictures — it&apos;s freezing emotion, telling stories, and creating art that resonates.
              </p>
              <p className="text-primary text-[1.063rem] md:text-[1.125rem] font-[600] uppercase tracking-widest">
                — Malik
              </p>
            </div>
          </div>
          </div>

          {/* Connect Section - Modern CTA */}
          <div className="px-4 md:px-[6rem] py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-12">
              <p className="text-primary text-[0.813rem] font-[600] uppercase tracking-[0.2em] mb-4">
                Let&apos;s Create Together
              </p>
              <h2 className="text-white light:text-gray-900 text-[1.5rem] md:text-[2rem] font-[700] uppercase leading-tight mb-6">
                Ready to Work?
              </h2>
              <p className="text-customGrayAlt light:text-gray-600 text-[1.063rem] md:text-[1.125rem] leading-[1.7] max-w-2xl mx-auto">
                Whether you need portraits, event coverage, or want to collaborate on a creative project, I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Email Card */}
              <a 
                href={`mailto:${PORTFOLIO_EMAIL}`}
                className="glass glass-mobile-optimized glass-hover glass-lift p-8 rounded-2xl group transition-all duration-300 hover:scale-105 light:bg-gray-100/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 light:bg-primary/30 flex items-center justify-center border-2 border-primary/50 group-hover:bg-primary/30 light:group-hover:bg-primary/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-customGrayAlt light:text-gray-500 text-[0.875rem] uppercase tracking-wider mb-1">Email</p>
                    <p className="text-white light:text-gray-900 text-[1.063rem] font-[500] group-hover:text-primary transition-colors">{PORTFOLIO_EMAIL}</p>
                  </div>
                </div>
              </a>

              {/* Social Card */}
              <div className="glass glass-mobile-optimized glass-hover glass-lift p-8 rounded-2xl light:bg-gray-100/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-primary/20 light:bg-primary/30 flex items-center justify-center border-2 border-primary/50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </div>
                  <div className="text-left flex-1">
                    <p className="text-customGrayAlt light:text-gray-500 text-[0.875rem] uppercase tracking-wider mb-2">Follow Me</p>
                    <div className="flex items-center gap-3">
                      <a href={SOCIAL_INSTAGRAM} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                        <img src="/images/instagram_icon.png" alt="Instagram" className="w-7 h-7" />
                      </a>
                      <a href={SOCIAL_TIKTOK} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                        <img src="/images/x_icon.png" alt="TikTok" className="w-7 h-7" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <button className="glass-thin glass-hover glass-lift bg-primary/90 text-white font-[600] px-12 py-5 rounded-2xl uppercase text-[0.875rem] tracking-wider shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Book Now</span>
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
                </button>
              </Link>
              <Link href="/collections">
                <button className="glass glass-hover glass-lift border-2 border-primary/50 text-primary hover:bg-primary/10 font-[600] px-12 py-5 rounded-2xl uppercase text-[0.875rem] tracking-wider transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">View Portfolio</span>
                </button>
              </Link>
            </div>
          </div>
          </div>
        </div>

        <FooterSection />
      </div>
    </main>
  );
}
