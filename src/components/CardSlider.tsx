"use client";

import { ReactNode } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import { NavigationOptions } from "swiper/types";

interface CardSliderProps {
  prevRef?: React.RefObject<HTMLButtonElement>;
  nextRef?: React.RefObject<HTMLButtonElement>;
  // eslint-disable-next-line
  onSlideChange: (isBeginning: boolean, isEnd: boolean) => void;
  children: ReactNode;
}

export const CardSlider: React.FC<CardSliderProps> = ({
  prevRef,
  nextRef,
  onSlideChange,
  children
}) => {
  return (
    <div className="mx-auto w-full max-w-screen-lg">
      <Swiper
        spaceBetween={35}
        slidesPerView={3}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current
        }}
        onBeforeInit={(swiper) => {
          const navigation = swiper.params.navigation as NavigationOptions;

          if (prevRef?.current && nextRef?.current && navigation) {
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }
        }}
        onSlideChange={(swiper) => {
          onSlideChange(swiper.isBeginning, swiper.isEnd);
        }}
      >
        {children}
      </Swiper>
    </div>
  );
};
