import { FeaturedRecipesSection } from "@/components/FeaturedRecipesSection";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <Hero />
      <FeaturedRecipesSection />
    </div>
  );
}
