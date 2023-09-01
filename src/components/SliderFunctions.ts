export const fillIds = (initalSlide: number) => {
  const array = [];

  for (let index = initalSlide; index < 150; index++) {
    array.push(index);
  }
  return array;
};

type Slider = {
  slideNext(): unknown;
  slides: HTMLElement[];
};

export const controlHorizontalSlide = (
  activeBullet: number,
  horizontalSlider: Slider
) => {
  const range = Math.floor(activeBullet / 10);

  horizontalSlider.slides.forEach((item: HTMLElement) => {
    item.classList.remove("current-active");
  });

  horizontalSlider.slides[range].classList.add("current-active");

  if (range == 8) {
    horizontalSlider.slideNext();
  }
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

export const formatOrder = (id) => {
  if (id < 10) {
    id = "00" + id;
    return id;
  }
  if (id < 100) {
    id = "0" + id;
    return id;
  }
  return id;
};
