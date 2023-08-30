export const fillIds = (SlidesPerPage: number, initalSlide: number) => {
  const array = [];

  for (let index = initalSlide; index < 150; index++) {
    array.push(index);
  }
  return array;
};

export const addButtons = (ids) => {
  console.log("ids", ids);
  const verticalSlider = document.querySelector(".vertical-pagination");
  ids?.map((id) => {
    const bullet = document.createElement("span");
    const bulletNumber = document.createTextNode(id);
    bullet.onclick = () => {
      swiper.slideTo(2);
    };
    bullet.appendChild(bulletNumber);
    verticalSlider?.append(bullet);
  });

  const buttonNext = document.createElement("button");
  const buttonPrev = document.createElement("button");
  const next = document.createTextNode("Button Next");
  const prev = document.createTextNode("Button Prev");

  buttonNext.onclick = function () {
    changePage(1);
  };
  buttonPrev.onclick = function () {
    changePage(0);
  };

  buttonNext.appendChild(next);
  buttonPrev.appendChild(prev);
  verticalSlider?.append(buttonNext);
  verticalSlider?.prepend(buttonPrev);
};
