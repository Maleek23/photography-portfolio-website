import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Logo top left - Much Bigger */}
      <div className="absolute top-12 left-8 z-10">
        <img src="/images/logo.png" alt="Logo" className="h-[9rem] md:h-[11rem] object-contain" />
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-end justify-center px-4 relative pb-[20vh]">
        {/* Photo Grid Background - FULL BRIGHTNESS, NO FADE */}
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
          {/* 1st photo - creative smoke (by logo) */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/creative-smoke.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          {/* 2nd photo - back portrait (middle) */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/back-portrait.png" className="w-full h-full object-cover" alt="" />
          </div>
          {/* 3rd photo - graduation guy (right) */}
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/graduation-nike.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        {/* Light overlay for text readability only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/15"></div>

        {/* Center content - Outline button, no fill */}
        <div className="relative z-10 text-center">
          <Link
            href="/home"
            className="group inline-flex items-center gap-2 px-8 py-3 rounded-lg uppercase text-[0.875rem] font-[600] tracking-wide transition-all duration-300
            backdrop-blur-sm border-2 border-white/80 text-white
            hover:border-white hover:bg-white/10 hover:scale-105"
          >
            <span>Enter Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom right - Signature */}
      <div className="absolute bottom-8 right-8 z-10 text-right">
        <h1 className="text-white text-[1rem] md:text-[1.125rem] font-[600] uppercase leading-tight tracking-wide mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          ABDULMALIK AJISEGIRI
        </h1>
        <p className="text-white/80 text-[0.625rem] md:text-[0.75rem] font-[400] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          Photographer • Videographer • Visual Artist
        </p>
      </div>

      {/* Bottom left - Social Icons only */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="flex gap-3 items-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a 
            href="https://tiktok.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
