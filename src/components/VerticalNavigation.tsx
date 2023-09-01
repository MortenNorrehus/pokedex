import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "react-feather";
import { useEffect } from "react";
import { Thumbs } from "swiper/modules";
import { controlHorizontalSlide } from "./SliderFunctions";

export const VerticalNavigation = ({
  ids,
  setThumbsSwiper,
  horizontalSwiper,
}) => {
  const swiper = useSwiper();

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
          swiper.slideNext();
          controlHorizontalSlide(swiper.activeIndex, horizontalSwiper);
          break;
        case "ArrowUp":
          swiper.slidePrev();
          controlHorizontalSlide(swiper.activeIndex, horizontalSwiper);
          break;
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
    <div className="absolute top-1/2 right-10 z-10 transform -translate-x-1/2 -translate-y-1/2">
      <button
        onClick={() => {
          swiper.slidePrev();
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
        {ids.map((id: number) => {
          return (
            <SwiperSlide
              key={id}
              className="h-full hover:text-white hover:text-xl transform transition-all duration-150 cursor-pointer"
            >
              {id}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ChevronDown />
      </button>
    </div>
  );
};
