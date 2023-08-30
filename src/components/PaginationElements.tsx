import { useSwiper } from "swiper/react";
import { ChevronDown, ChevronUp } from "react-feather";
import { useState } from "react";

export const Bullet = ({ id, index }: { id: number; index: number }) => {
  const swiper = useSwiper();

  const handleActive = (e) => {
    const bullets = document.querySelectorAll(".swiper-bullet-pagination");
    bullets.forEach((bullet) => {
      bullet.classList.remove("swiper-pagination-bullet-active");
    });
    e.target.classList.add("swiper-pagination-bullet-active");
  };

  return (
    <span
      data-active={swiper.activeIndex == index ? "active" : ""}
      data-slideid={index}
      onClick={(e) => {
        handleActive(e);
        console.log(e.target.dataset.slideid);
        swiper.slideTo(e.target.dataset.slideid);
      }}
      className={
        swiper.activeIndex == index
          ? "swiper-bullet-pagination swiper-pagination-bullet-active"
          : "swiper-bullet-pagination"
      }
    >
      {id}
    </span>
  );
};

export const PaginationNavigation = ({
  prev,
  next,
  setInitialSlide,
  slidesPerPage,
  updateSlider,
  updateBullets = { updateBullets },
}: {
  prev: boolean;
  next: boolean;
  setInitialSlide: any;
  slidesPerPage: number;
}) => {
  const swiper = useSwiper();
  return (
    <>
      {prev && (
        <button
          onClick={() => {
            swiper.slidePrev();
            //swiper.slideTo(0, 500);
            // updateBullets();
            // setInitialSlide((prev: number) => prev - slidesPerPage);
          }}
        >
          <ChevronUp />
        </button>
      )}
      {next && (
        <button
          onClick={() => {
            swiper.slideNext();
            console.log(swiper.activeIndex);
            updateBullets();
            // updateSlider(swiper);
            // swiper.slideTo(12);
            //setInitialSlide((prev: number) => prev + slidesPerPage);
          }}
        >
          <ChevronDown />
        </button>
      )}
    </>
  );
};
