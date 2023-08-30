import { useState } from "react";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const HorizontalPagination = ({
  setInitialSlide,
  slidesPerPage,
  setActiveBullet,
  handlePaginate,
  setPaginate,
}) => {
  const divide = () => {
    const number = 150;
    const array = [];

    for (let index = 1; index <= number; index++) {
      if (index % 10 == 0) {
        const item = `${index - 9} - ${index}`;

        const obj = {
          range: item,
          start: index - 9,
        };
        array.push(obj);
      }
    }

    return array;
  };

  const numbers = divide();

  return (
    <Swiper
      modules={[Controller]}
      watchSlidesProgress
      slidesPerView={numbers.length}
      className="horizontal-pagination"
    >
      {numbers.map((number) => {
        return (
          <SwiperSlide
            key={number.start}
            onClick={() => {
              const slider = document.querySelector(".MORTEN").swiper;
              slider.slideTo(number.start - 1);
            }}
          >
            {number.range}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
