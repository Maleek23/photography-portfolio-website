import React from "react";

function PortfolioSection() {
  const portfolioData = [
    {
      id: 0,
      title: "Creative & Concept",
      count: "24 Projects",
      imageUrl: "/images/lady_1.png",
    },
    {
      id: 1,
      title: "Fashion & Portrait",
      count: "18 Projects",
      imageUrl: "/images/lady_2.png",
    },
    {
      id: 2,
      title: "Events",
      count: "32 Projects",
      imageUrl: "/images/box.png",
    },
    {
      id: 3,
      title: "Commercial",
      count: "15 Projects",
      imageUrl: "/images/hero.png",
    },
  ];

  return (
    <section className="" id="portfolio">
      {/* Compact Header */}
      <div className="flex items-baseline gap-4 mb-6">
        <h2 className="text-white text-[2rem] md:text-[3rem] font-[600] uppercase">
          Collections
        </h2>
        <p className="text-customGrayAlt text-[1rem] md:text-[1.125rem]">
          Explore my work by category
        </p>
      </div>

      {/* Horizontal Scrolling Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[3/4] bg-lightDark"
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-[1.25rem] font-[600] mb-1 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-primary text-[0.875rem] font-[500]">
                  {item.count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PortfolioSection;
