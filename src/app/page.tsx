import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className="text-primary text-[1.5rem] md:text-[2rem] font-[600] mb-2">
            Leekshotit
          </h1>
        </div>

        {/* Main Title */}
        <h2 className="text-white text-[3rem] md:text-[5rem] lg:text-[7rem] font-[700] uppercase mb-4 leading-[0.9] tracking-tight">
          ABDULMALIK
          <br />
          AJISEGIRI
        </h2>

        {/* Subtitle */}
        <p className="text-customGrayAlt text-[1rem] md:text-[1.25rem] mb-12 max-w-2xl mx-auto">
          Photographer • Videographer • Visual Artist
        </p>

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
    </main>
  );
}
