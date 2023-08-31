import { useState, useEffect } from "react";
import { ChevronLeft } from "react-feather";
import { Controller, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const HorizontalPagination = ({
  setInitialSlide,
  slidesPerPage,
  setActiveBullet,
  handlePaginate,
  setPaginate,
  activeSlide,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key == "ArrowRight") {
        swiper.slideNext();
      }

      if (event.key == "ArrowLeft") {
        swiper.slidePrev();
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

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
    <>
      <button
        onClick={() => {
          swiper.slidePrev();
          setActiveBullet(swiper.activeIndex);
        }}
      >
        <ChevronLeft />
      </button>
      <Swiper
        navigation
        modules={[Controller, Navigation]}
        watchSlidesProgress
        slidesPerView={8}
        className="horizontal-pagination"
      >
        {numbers.map((number, index) => {
          return (
            <SwiperSlide
              className={number.start == 1 ? "current-active" : ""}
              data-index={index}
              key={number.start}
              onClick={() => {
                const slider = document.querySelector(".MORTEN").swiper;
                slider.slideTo(number.start - 1, 2000);
                activeSlide(index);
              }}
            >
              {number.range}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
