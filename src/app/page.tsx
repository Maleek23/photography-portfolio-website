import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Logo top left */}
      <div className="absolute top-8 left-8 z-10">
        <img src="/images/logo.png" alt="Logo" className="h-[4rem] md:h-[5rem] object-contain" />
      </div>

      {/* Main content */}
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        {/* Photo Grid Background */}
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-30">
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black/70"></div>

        {/* Center content */}
        <div className="relative z-10 text-center">
          <h1 className="text-white text-[4rem] md:text-[6rem] lg:text-[8rem] font-[700] uppercase leading-[0.9] tracking-tight mb-12">
            ABDULMALIK
            <br />
            AJISEGIRI
          </h1>

          {/* Enter Button */}
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

      {/* Bottom left subtitle */}
      <div className="absolute bottom-8 left-8 z-10">
        <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem] font-[400]">
          Photographer • Videographer • Visual Artist
        </p>
      </div>
    </main>
  );
}
