import { useEffect, useContext } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { Controller } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
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

  return (
    <div className="horizontal-pagination">
      <button
        className="text-slate-300 flex justify-center w-auto h-[35px]"
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
                "text-slate-400 hover:text-white hover:text-[1.2rem] transform transition-all duration-150 cursor-pointer !w-auto " +
                (number.start == 1 && activeBullet == 0 ? "current-active" : "")
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
        className="text-slate-300 flex justify-center w-auto h-[35px]"
        onClick={() => {
          horizontalSwiper.slideNext();
        }}
      >
        <ChevronRight />
      </button>
    </div>
  );
};
