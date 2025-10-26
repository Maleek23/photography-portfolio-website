import NavBar from "@/components/common/NavBar";
import AboutSection from "@/components/sections/AboutSection";
import FooterSection from "@/components/sections/FooterSection";

export default function AboutPage() {
  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <div className="px-4 md:px-[6rem] py-[5rem] md:py-[8rem]">
          <AboutSection />
        </div>
        <FooterSection />
      </div>
    </main>
  );
}
