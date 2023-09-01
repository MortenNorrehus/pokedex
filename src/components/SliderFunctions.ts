export const fillIds = (SlidesPerPage: number, initalSlide: number) => {
  const array = [];

  for (let index = initalSlide; index < 150; index++) {
    array.push(index);
  }
  return array;
};

export const controlHorizontalSlide = (
  activeBullet: number,
  horizontalSlider: object
) => {
  const range = Math.floor(activeBullet / 10);

  horizontalSlider.slides.forEach((item) => {
    item.classList.remove("current-active");
  });

  horizontalSlider.slides[range].classList.add("current-active");

  horizontalSlider.slideNext();
};

export const Divide = () => {
  const number = 150;
  const array = [];

  for (let index = 1; index <= number; index++) {
    if (index % 10 == 0) {
      const item = `${index - 9} - ${index}`;
      const obj = {
        range: item,
        start: index - 9,
      };
      array.push(obj);
    }
  }

  return array;
};
