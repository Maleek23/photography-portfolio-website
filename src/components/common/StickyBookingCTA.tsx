'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyBookingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
    >
      <Link
        href="/services"
        className="group relative flex items-center gap-3 bg-primary/80 backdrop-blur-xl hover:bg-primary/90 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 border border-white/10"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="font-medium">Book Session</span>
        <div className="absolute inset-0 rounded-full bg-primary opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
      </Link>
    </div>
  );
}
