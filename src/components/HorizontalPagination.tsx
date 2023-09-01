import { useState, useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Controller, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { controlHorizontalSlide, Divide } from "./SliderFunctions";
import { SwiperContext } from "./Slider";

export const HorizontalPagination = ({
  setActiveBullet,
  mainSwiper,
  horizontalSwiper,
  setHorizontalSwiper,
}) => {
  const activeBullet = useContext(SwiperContext);

  console.log("active", activeBullet);

  const number = 10;

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
          if (activeBullet < 140) {
            controlHorizontalSlide(activeBullet + number, horizontalSwiper);
            mainSwiper.slideTo(activeBullet + number, 3000);
            setActiveBullet((prev: number) => prev + number);
          }
          break;
        case "ArrowLeft":
          if (activeBullet > 0) {
            controlHorizontalSlide(activeBullet - number, horizontalSwiper);
            mainSwiper.slideTo(activeBullet - number, 3000);
            setActiveBullet((prev: number) => prev - number);
          }
          break;
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  const swiperSlide = useSwiperSlide();
  return (
    <div className="horizontal-pagination">
      <button
        onClick={() => {
          horizontalSwiper.slidePrev();
        }}
      >
        <ChevronLeft />
      </button>
      <Swiper
        modules={[Controller]}
        watchSlidesProgress
        onSwiper={(swiper) => setHorizontalSwiper(swiper)}
        onSlideChange={(swiper) => console.log(swiper)}
        slidesPerView="auto"
        spaceBetween={30}
      >
        {Divide().map((number, index) => {
          return (
            <SwiperSlide
              className={
                number.start == 1 && activeBullet == 0
                  ? "current-active !w-auto"
                  : "!w-auto"
              }
              data-index={index}
              key={number.start}
              onClick={() => {
                controlHorizontalSlide(number.start, horizontalSwiper);
                mainSwiper.slideTo(number.start - 1, 3000);
              }}
            >
              {number.range}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button
        onClick={() => {
          horizontalSwiper.slideNext();
        }}
      >
        <ChevronRight />
      </button>
    </div>
  );
};
