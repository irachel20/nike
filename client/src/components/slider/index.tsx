import { Swiper } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper/modules";
import React, { ReactNode } from "react";

type MySliderProps = {
  children: ReactNode[];
  anotherProp: number;
};

export const Slider: React.FC<MySliderProps> = ({ children, anotherProp }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel]}
      spaceBetween={50}
      slidesPerView={anotherProp}
      loop={true}
      autoplay={{ delay: 1500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {children}
    </Swiper>
  );
};
