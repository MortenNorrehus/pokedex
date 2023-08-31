import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "react-feather";
import { useState, useEffect } from "react";
import { Thumbs } from "swiper/modules";

export const VerticalNavigation = ({
  allIds,
  setThumbsSwiper,
  setActiveBullet,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key == "ArrowDown") {
        swiper.slideNext();
        setActiveBullet(swiper.activeIndex);

        if (swiper.activeIndex == allIds.length - 1) {
          setActiveBullet(swiper.activeIndex);
        }
      }

      if (event.key == "ArrowUp") {
        swiper.slidePrev();
        setActiveBullet(swiper.activeIndex);
        if (swiper.activeIndex == 0) {
          setActiveBullet(0);
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <div className="absolute top-1/2 right-10 z-10 transform -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={() => {
          swiper.slidePrev();
          setActiveBullet(swiper.activeIndex);
        }}
      >
        <ChevronUp />
      </button>

      <Swiper
        direction="vertical"
        slidesPerView={10}
        slidesPerGroup={10}
        modules={[Thumbs]}
        watchSlidesProgress
        speed={2000}
        onSwiper={setThumbsSwiper}
        className="max-h-[300px]"
      >
        {allIds.map((id: number, index: number) => {
          return (
            <SwiperSlide
              key={id}
              className="h-full hover:text-white hover:text-xl transform transition-all duration-150 cursor-pointer"
              onClick={() => {
                setActiveBullet(index);
              }}
            >
              {id}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        onClick={() => {
          swiper.slideNext();
          setActiveBullet(swiper.activeIndex);
        }}
      >
        <ChevronDown />
      </button>
    </div>
  );
};
