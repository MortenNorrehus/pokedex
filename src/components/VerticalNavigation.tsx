import { useSwiper, Swiper, SwiperSlide } from "swiper/react";
import { ChevronUp, ChevronDown } from "react-feather";
import { useEffect } from "react";
import { Thumbs } from "swiper/modules";
import { controlHorizontalSlide, formatOrder } from "./SliderFunctions";

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
    <div className="absolute top-1/2 md:right-10 right-0 z-10 transform -translate-x-1/2 -translate-y-1/2">
      <button
        className="text-slate-300 flex justify-center w-full h-[35px]"
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
              className="h-full text-slate-400 text-center hover:text-white hover:text-[1.2rem] transform transition-all duration-150 cursor-pointer"
            >
              {formatOrder(id)}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button
        className="text-slate-300 flex justify-center  w-full h-[35px]"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <ChevronDown />
      </button>
    </div>
  );
};
