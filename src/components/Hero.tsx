import Image from "next/image";

import { Button } from "@/ui/Button";

export const Hero = () => {
  return (
    <div className="relative h-hero w-full overflow-hidden">
      <Image
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hero.webp`}
        alt="Culinary Image"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
        quality={80}
        priority
        className="brightness-[0.5]"
      />

      {/* Hero Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/10 px-4 text-center">
        <h1 className="font-montserrat mb-4 text-5xl font-bold uppercase text-white md:text-7xl">
          Helping Others <br /> Live & Travel
        </h1>
        <p className="roboto mb-8 max-w-xl text-base leading-6 text-white md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolorum omnis voluptatum accusamus maiores nulla veniam explicabo quas
          necessitatibus itaque?
        </p>
        <Button
          variant="filled"
          bgColor="bg-primary-3"
          size="sm"
          href={"/all-places/"}
        >
          Explore All Places
        </Button>
      </div>
    </div>
  );
};
