import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import Link from "next/link";

export default function CollectionsPage() {
  const collections = [
    {
      id: 0,
      title: "Portraits",
      slug: "portraits",
      description: "Capturing personality, style, and the essence of individuals",
      count: "24 Projects",
      imageUrl: "/images/lady_1.png",
    },
    {
      id: 1,
      title: "Graduation",
      slug: "graduation",
      description: "Documenting milestone moments and celebrating achievements",
      count: "18 Projects",
      imageUrl: "/images/lady_2.png",
    },
    {
      id: 2,
      title: "Creative Projects",
      slug: "creative-projects",
      description: "Pushing boundaries through experimental and conceptual photography",
      count: "32 Projects",
      imageUrl: "/images/box.png",
    },
    {
      id: 3,
      title: "Concerts/Events",
      slug: "concerts-events",
      description: "Live music, performances, and unforgettable experiences",
      count: "15 Projects",
      imageUrl: "/images/hero.png",
    },
  ];

  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
          <div className="mb-12">
            <h1 className="text-white text-[3rem] md:text-[5rem] font-[700] uppercase mb-4">
              Collections
            </h1>
            <p className="text-customGrayAlt text-[1.125rem] md:text-[1.25rem] max-w-3xl">
              Explore my work across different creative categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.slug}`}
                className="group relative overflow-hidden rounded-lg cursor-pointer h-[480px] md:h-[560px] bg-lightDark border border-superGray hover:border-primary transition-all duration-300"
              >
                <img
                  src={collection.imageUrl}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-primary text-[0.875rem] font-[600] mb-2 uppercase tracking-wider">
                      {collection.count}
                    </p>
                    <h3 className="text-white text-[1.75rem] font-[600] mb-3 uppercase tracking-wide">
                      {collection.title}
                    </h3>
                    <p className="text-customGrayAlt2 text-[1rem] leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
