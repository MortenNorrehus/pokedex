import { Bullet, PaginationNavigation } from "./PaginationElements";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller } from "swiper/modules";
import { useEffect, useState } from "react";
import { VerticalNavigation } from "./VerticalNavigation";

export const VerticalPagination = ({
  ids,
  setInitialSlide,
  slidesPerPage,
  updateSlider,
  allIds,
  setSecondSwiper,
  firstSwiper,
}: {
  ids: number[];
  setInitialSlide: any;
  slidesPerPage: number;
}) => {
  const [bullets, setBullets] = useState();

  useEffect(() => {
    updateBullets();
  }, [allIds]);

  const updateBullets = () => {
    const Bullets = allIds.map((id, index) => {
      return (
        <SwiperSlide className={id} key={id}>
          <Bullet id={id} index={index} key={id} />
        </SwiperSlide>
      );
    });

    setBullets(Bullets);
  };

  return (
    <div className="vertical-pagination">
      <VerticalNavigation />

      {/*  <PaginationNavigation
        updateBullets={updateBullets}
        prev={true}
        next={false}
        setInitialSlide={setInitialSlide}
        slidesPerPage={slidesPerPage}
        updateSlider={updateSlider}
      />

      <Swiper
        modules={[Controller]}
        direction="vertical"
        slidesPerView={10}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        {bullets}
      </Swiper>

      {/* {ids.map((id: number, index: number) => {
        return <Bullet id={id} index={index} key={id} />;
      })} *
      <PaginationNavigation
        updateBullets={updateBullets}
        next={true}
        prev={false}
        setInitialSlide={setInitialSlide}
        slidesPerPage={slidesPerPage}
        updateSlider={updateSlider}
    /> */}
    </div>
  );
};
