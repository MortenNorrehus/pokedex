import { Slide } from "./Slide";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useEffect } from "react";
import {
  EffectFade,
  Navigation,
  Pagination,
  Controller,
  Thumbs,
} from "swiper/modules";
import { useState } from "react";
import { HorizontalPagination } from "./HorizontalPagination";
import { fillIds } from "./SliderFunctions";
import { VerticalNavigation } from "./VerticalNavigation";

const SlidesPerPage = 10;
const maxPokemons = 500;

export const Slider = () => {
  const [initalSlide, setInitialSlide] = useState(1);
  const [ids, setIds] = useState(fillIds(SlidesPerPage, initalSlide));
  const [slides, setSlides] = useState();

  const [activeBullet, setActiveBullet] = useState(1);
  const [paginate, setPaginate] = useState(1);
  const [direction, setDirection] = useState();

  useEffect(() => {
    if (activeBullet == ids.length - 1) {
      setInitialSlide((prev: number) => prev + SlidesPerPage);
      updateSlider();
      return;
    }

    if (activeBullet % ids.length == 2) {
      setInitialSlide((prev: number) => prev - SlidesPerPage);
      updateSlider();
      return;
    }
  }, [activeBullet]);

  const handlePaginate = () => {
    const slider = document.querySelector(".MORTEN").swiper;
    paginateSlider();
    slider.update();
    slider.slideTo(0);
  };

  useEffect(() => {
    const mySlides = ids.map((id) => {
      return (
        <SwiperSlide className={id} key={id}>
          <Slide id={id} key={id} />
        </SwiperSlide>
      );
    });
    setSlides(mySlides);
    //updateSlider();
  }, []);

  const loadSlides = () => {
    console.log("fsgsfghs");
    const nextIds = fillIds(SlidesPerPage, maxPokemons - SlidesPerPage);

    const prevSlides = maxPokemons - SlidesPerPage;
    const prevIds = fillIds(SlidesPerPage, prevSlides);

    const allIds = [...ids, ...nextIds];

    console.log("allids", allIds);

    const mySlides = allIds.map((id) => {
      return (
        <SwiperSlide className={id} key={id}>
          <Slide id={id} key={id} />
        </SwiperSlide>
      );
    });

    setIds(allIds);
    setSlides(mySlides);
  };

  useEffect(() => {
    handlePaginate();
  }, [paginate]);

  const paginateSlider = () => {
    const newIds = fillIds(SlidesPerPage, initalSlide);
    const allIds = newIds;

    const mySlides = allIds.map((id) => {
      return (
        <SwiperSlide className={id} key={id}>
          <Slide id={id} key={id} />
        </SwiperSlide>
      );
    });

    setIds(allIds);
    setSlides(mySlides);
  };

  const updateSlider = () => {
    const nextIds = fillIds(SlidesPerPage, initalSlide + SlidesPerPage);

    const prevSlides = maxPokemons - SlidesPerPage;
    const prevIds = fillIds(SlidesPerPage, prevSlides);

    const allIds = [...ids, ...nextIds];

    const mySlides = allIds.map((id) => {
      return (
        <SwiperSlide className={id} key={id}>
          <Slide id={id} key={id} />
        </SwiperSlide>
      );
    });

    setIds(allIds);
    setSlides(mySlides);
  };

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Controller, Thumbs]}
      speed={800}
      initialSlide={3}
      direction={"vertical"}
      slidesPerView={1}
      className="!h-screen MORTEN"
      thumbs={{ swiper: thumbsSwiper }}
    >
      {slides}

      <VerticalNavigation allIds={ids} setThumbsSwiper={setThumbsSwiper} />

      <HorizontalPagination
        setInitialSlide={setInitialSlide}
        slidesPerPage={SlidesPerPage}
        setActiveBullet={setActiveBullet}
        handlePaginate={handlePaginate}
        setPaginate={setPaginate}
      />
    </Swiper>
  );
};
