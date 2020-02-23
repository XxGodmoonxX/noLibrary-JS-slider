window.addEventListener('DOMContentLoaded', () => {});

window.addEventListener('load', () => {
  const slider = document.querySelector('.slider');
  const sliderWrapper = document.querySelector('.slider__wrapper');
  const sliderItem = document.querySelectorAll('.slider__item');
  const sliderItemArray = Array.prototype.slice.call(sliderItem);

  const firstSliderItemClone = sliderItemArray[0].cloneNode(true);
  const lastSliderItemClone = sliderItemArray[sliderItemArray.length - 1].cloneNode(true);

  sliderWrapper.append(firstSliderItemClone);
  sliderWrapper.prepend(lastSliderItemClone);
});
