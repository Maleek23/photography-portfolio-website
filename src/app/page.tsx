import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Logo top left - Lower position */}
      <div className="absolute top-12 left-8 z-10">
        <img src="/images/logo.png" alt="Logo" className="h-[6.5rem] md:h-[7.5rem] object-contain" />
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

        {/* Center content - Button and signature */}
        <div className="relative z-10 text-center">
          <Link
            href="/home"
            className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-xl uppercase text-[1.125rem] font-[700] tracking-wide transition-all duration-500
            bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 backdrop-blur-xl 
            border-2 border-primary/60 text-white
            hover:from-primary/30 hover:via-primary/20 hover:to-primary/30
            hover:border-primary hover:scale-105
            shadow-[0_0_30px_rgba(37,99,235,0.6),0_0_60px_rgba(37,99,235,0.3),inset_0_0_20px_rgba(37,99,235,0.1)]
            hover:shadow-[0_0_50px_rgba(37,99,235,0.9),0_0_100px_rgba(37,99,235,0.5),inset_0_0_30px_rgba(37,99,235,0.2)]
            before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000"
          >
            <span className="relative z-10">Enter Portfolio</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
          
          {/* Signature-style name - below button - SMALLER TEXT */}
          <div className="mt-8">
            <h1 className="text-white text-[1rem] md:text-[1.125rem] font-[600] uppercase leading-tight tracking-wide mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              ABDULMALIK AJISEGIRI
            </h1>
            <p className="text-white/80 text-[0.625rem] md:text-[0.75rem] font-[400] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Photographer • Videographer • Visual Artist
            </p>
          </div>
        </div>
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
