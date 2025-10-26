"use client";

import React from "react";
import Link from "next/link";

function PortfolioSection() {
  const portfolioData = [
    {
      id: 0,
      title: "Portraits",
      count: "24",
      imageUrl: "/images/lady_1.png",
    },
    {
      id: 1,
      title: "Graduation",
      count: "18",
      imageUrl: "/images/lady_2.png",
    },
    {
      id: 2,
      title: "Creative Projects",
      count: "32",
      imageUrl: "/images/box.png",
    },
    {
      id: 3,
      title: "Concerts/Events",
      count: "15",
      imageUrl: "/images/hero.png",
    },
  ];

  return (
    <section className="" id="portfolio">
      {/* Header with View All */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-baseline gap-4">
          <h2 className="text-white text-[2rem] md:text-[3rem] font-[600] uppercase">
            Collections
          </h2>
          <p className="text-customGrayAlt text-[0.875rem] md:text-[1rem]">
            Browse by category
          </p>
        </div>
        <Link 
          href="/collections"
          className="text-primary text-[0.875rem] md:text-[1rem] font-[500] hover:underline uppercase tracking-wider"
        >
          View All →
        </Link>
      </div>

      {/* Enhanced Horizontal Scroll */}
      <div className="relative">
        <div className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-4 w-max">
            {portfolioData.map((item) => (
              <Link
                key={item.id}
                href="/collections"
                className="group relative overflow-hidden rounded-lg cursor-pointer w-[280px] md:w-[320px] aspect-[3/4] bg-lightDark flex-shrink-0 border border-transparent hover:border-primary transition-all duration-300"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary text-[2rem] font-[700]">
                        {item.count}
                      </span>
                      <span className="text-customGrayAlt text-[0.875rem] uppercase">
                        Projects
                      </span>
                    </div>
                    <h3 className="text-white text-[1.125rem] font-[600] uppercase tracking-wide leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Scroll Hint */}
        <div className="absolute right-0 top-0 bottom-4 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden"></div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

export default PortfolioSection;
