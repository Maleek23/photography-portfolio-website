import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Logo top left - BIGGER */}
      <div className="absolute top-8 left-8 z-10">
        <img src="/images/logo.png" alt="Logo" className="h-[6rem] md:h-[8rem] object-contain" />
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Photo Grid Background - MORE VISIBLE */}
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-50">
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/portrait-yellow.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/graduation-nike.jpg" className="w-full h-full object-cover" alt="" />
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img src="/images/creative-smoke.jpg" className="w-full h-full object-cover" alt="" />
          </div>
        </div>

        {/* Dark overlay - LIGHTER */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/50"></div>

        {/* Center content - Just button */}
        <div className="relative z-10 text-center">
          <Link
            href="/home"
            className="group inline-flex items-center gap-3 bg-primary hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] text-white font-[600] px-10 py-5 rounded-lg uppercase text-[1rem] transition-all duration-300"
          >
            Enter Portfolio
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Bottom left - Name and subtitle */}
      <div className="absolute bottom-8 left-8 z-10">
        <h1 className="text-white text-[2rem] md:text-[2.5rem] font-[700] uppercase leading-tight tracking-tight mb-2">
          ABDULMALIK AJISEGIRI
        </h1>
        <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem] font-[400] mb-4">
          Photographer • Videographer • Visual Artist
        </p>
        
        {/* Social Icons - SMALLER & MORE SUBTLE */}
        <div className="flex gap-3 items-center">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-customGrayAlt/60 hover:text-primary transition-colors"
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
            className="text-customGrayAlt/60 hover:text-primary transition-colors"
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
