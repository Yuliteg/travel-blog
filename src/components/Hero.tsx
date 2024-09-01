import Image from "next/image";

import { Button } from "@/ui/Button";

export const Hero = () => {
  return (
    <div className="relative h-hero w-full overflow-hidden rounded-xl">
      <Image
        src="/recipe/hero.webp"
        alt="Culinary Image"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        className="z-0"
      />
      <div className="absolute inset-0 z-10 bg-[#262522] opacity-60"></div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-montserrat mb-4 text-5xl font-bold uppercase text-white md:text-7xl">
          Unleash Culinary <br /> Excellence
        </h1>
        <p className="roboto mb-8 max-w-xl text-base leading-6 text-white md:text-xl">
          Explore a world of flavors, discover <br /> handcrafted recipes, and
          let the aroma of <br /> our passion for cooking fill your kitchen.
        </p>
        <Button variant="filled" color="bg-orange-400" size="sm">
          Explore All Recipes
        </Button>
      </div>
    </div>
  );
};
