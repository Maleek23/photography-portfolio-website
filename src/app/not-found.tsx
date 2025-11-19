import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      {/* Background gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/[0.08] rounded-full blur-[120px] opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[100px] opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-primary text-[6rem] md:text-[8rem] font-[700] leading-none tracking-tight">
            404
          </h1>
        </div>

        {/* Glass card with message */}
        <div className="glass glass-mobile-optimized glass-hover rounded-3xl p-8 md:p-12 mb-8">
          <h2 className="text-white text-[1.5rem] md:text-[2rem] font-[700] uppercase mb-4 leading-tight">
            Page Not Found
          </h2>
          <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem] leading-relaxed mb-6">
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
          </p>

          {/* Navigation options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <Link
              href="/home"
              className="glass glass-hover glass-lift bg-primary/80 backdrop-blur-xl text-white font-[600] py-4 px-6 rounded-xl uppercase text-[0.875rem] shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.7)] transition-all duration-300 hover:scale-105"
            >
              Go Home
            </Link>
            <Link
              href="/collections"
              className="glass glass-hover glass-lift backdrop-blur-xl text-white font-[600] py-4 px-6 rounded-xl uppercase text-[0.875rem] border border-white/20 hover:border-primary transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-4 text-[0.875rem]">
          <Link href="/services" className="text-customGrayAlt hover:text-primary transition-colors">
            Services
          </Link>
          <span className="text-customGrayAlt2">•</span>
          <Link href="/about" className="text-customGrayAlt hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-customGrayAlt2">•</span>
          <Link href="/blog" className="text-customGrayAlt hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="text-customGrayAlt2">•</span>
          <Link href="/contact" className="text-customGrayAlt hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
