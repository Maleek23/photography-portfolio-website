import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

export default function CollectionsPage() {
  const collections = [
    {
      id: 0,
      title: "Creative & Concept",
      description: "Pushing boundaries through experimental and conceptual photography",
      count: "24 Projects",
      imageUrl: "/images/lady_1.png",
    },
    {
      id: 1,
      title: "Fashion & Portrait",
      description: "Capturing style, personality, and the essence of individuals",
      count: "18 Projects",
      imageUrl: "/images/lady_2.png",
    },
    {
      id: 2,
      title: "Events",
      description: "Documenting concerts, graduations, and memorable moments",
      count: "32 Projects",
      imageUrl: "/images/box.png",
    },
    {
      id: 3,
      title: "Commercial",
      description: "Professional photography for brands and businesses",
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
              <div
                key={collection.id}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] bg-lightDark border border-superGray hover:border-primary transition-all duration-300"
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
              </div>
            ))}
          </div>
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
