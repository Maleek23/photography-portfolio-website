import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServiceSection from "@/components/sections/ServiceSection";

export default function Home() {
  return (
    <main className="bg-background">
      <NavBar />
      <div className="pt-[10rem] lg:pt-0">
        <HeroSection />
        <div className="px-4 md:px-[6rem] flex flex-col gap-[3rem] md:gap-[5rem] mt-[3rem] md:mt-[5rem]">
          <PortfolioSection />
          <ServiceSection />
        </div>

        <FooterSection />
      </div>
    </main>
  );
}
