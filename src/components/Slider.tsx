import { Slide } from "./Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Thumbs } from "swiper/modules";
import { useState, createContext } from "react";
import { HorizontalPagination } from "./HorizontalPagination";
import { fillIds } from "./SliderFunctions";
import { VerticalNavigation } from "./VerticalNavigation";

const initalSlide = 1;

export const SwiperContext = createContext(0);

export const Slider = () => {
  const ids = fillIds(initalSlide);
  const [activeBullet, setActiveBullet] = useState<number>(0);

  const [mainSwiper, setMainSwiper] = useState<object>();
  const [horizontalSwiper, setHorizontalSwiper] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Swiper
      modules={[Thumbs]}
      speed={1500}
      onSwiper={(swiper) => setMainSwiper(swiper)}
      direction={"vertical"}
      slidesPerView={1}
      className="!h-screen"
      thumbs={{ swiper: thumbsSwiper }}
    >
      {ids.map((id) => {
        return (
          <SwiperSlide key={id}>
            <Slide id={id} key={id} />
          </SwiperSlide>
        );
      })}
      ;
      <VerticalNavigation
        horizontalSwiper={horizontalSwiper}
        ids={ids}
        setThumbsSwiper={setThumbsSwiper}
      />
      <SwiperContext.Provider value={activeBullet}>
        <HorizontalPagination
          horizontalSwiper={horizontalSwiper}
          setHorizontalSwiper={setHorizontalSwiper}
          setActiveBullet={setActiveBullet}
          mainSwiper={mainSwiper}
        />
      </SwiperContext.Provider>
    </Swiper>
  );
};
