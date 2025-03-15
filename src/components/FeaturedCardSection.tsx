"use client";

import { useRef, useState } from "react";

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SwiperSlide } from "swiper/react";

import { featuredPlaces } from "@/lib/constants";
import { Card } from "@/ui/Card";
import { SectionTitle } from "@/ui/SectionTitle";

import { CardSlider } from "./CardSlider";

export const FeaturedCardSection: React.FC = () => {
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
    <div className="my-20 w-full flex-col gap-5 rounded-xl border border-stroke px-4 pb-4">
      <div className="flex justify-between py-6">
        <SectionTitle title="Featured Places" fontSize="3xl" />

        <div className="flex gap-3">
          <button
            ref={prevRef}
            className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-md transition-all duration-200 ${
              sliderState.isBeginning
                ? "border-customBorder bg-customBg text-gray-500"
                : "border-[#d1c7a8] bg-[#efda99] text-gray-800"
            }`}
            disabled={sliderState.isBeginning}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
          </button>
          <button
            ref={nextRef}
            className={`flex h-10 w-10 items-center justify-center rounded-full border shadow-md transition-all duration-200 ${
              sliderState.isEnd
                ? "border-customBorder bg-customBg text-gray-500"
                : "border-[#d1c7a8] bg-[#efda99] text-gray-800"
            }`}
            disabled={sliderState.isEnd}
          >
            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </button>
        </div>
      </div>
      <CardSlider
        prevRef={prevRef}
        nextRef={nextRef}
        onSlideChange={handleSlideChange}
      >
        {featuredPlaces.map((place) => (
          <SwiperSlide key={place.id}>
            <Card
              title={place.title}
              description={place.description}
              image={place.image}
            />
          </SwiperSlide>
        ))}
      </CardSlider>
    </div>
  );
};
