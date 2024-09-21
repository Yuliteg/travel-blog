"use client";

import { useRef, useState } from "react";

import { SwiperSlide } from "swiper/react";

import { featuredRecipes } from "@/lib/constants";
import { Card } from "@/ui/Card";
import { SectionTitle } from "@/ui/SectionTitle";

import { CardSlider } from "./CardSlider";

export const FeaturedRecipesSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false
  });

  const handleSlideChange = (isBeginning: boolean, isEnd: boolean) => {
    setSliderState({ isBeginning, isEnd });
  };

  return (
    <div className="my-20 flex w-full flex-col gap-5 rounded-xl border border-stroke bg-[#F0EBE1] px-4 py-4">
      <div className="flex justify-between py-3">
        <SectionTitle title="Featured Recipes" fontSize="3xl" />

        <div className="flex gap-3">
          <button
            ref={prevRef}
            className={`rounded-full bg-white p-2 shadow-md ${
              sliderState.isBeginning ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={sliderState.isBeginning}
          >
            Prev
          </button>
          <button
            ref={nextRef}
            className={`rounded-full bg-white p-2 shadow-md ${
              sliderState.isEnd ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={sliderState.isEnd}
          >
            Next
          </button>
        </div>
      </div>
      <CardSlider
        prevRef={prevRef}
        nextRef={nextRef}
        onSlideChange={handleSlideChange}
      >
        {featuredRecipes.map((recipe) => (
          <SwiperSlide key={recipe.id}>
            <Card
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              prepTime={recipe.prepTime}
              serves={recipe.serves}
              badge={recipe.badge}
            />
          </SwiperSlide>
        ))}
      </CardSlider>
    </div>
  );
};
