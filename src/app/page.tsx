import { FeaturedCardSection } from "@/components/FeaturedCardSection";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Hero />
      <div className="w-full px-5 py-5 md:px-10 lg:px-20">
        <FeaturedCardSection />
      </div>
    </div>
  );
}
