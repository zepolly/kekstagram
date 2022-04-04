import { effectLevel, lastClass } from './effects.js';

const Scale = {
  MAX: 100,
  MIN: 25,
  STEP: 25,
};

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview > img');

const resetSettings = () => {
  imagePreview.style = 'transform: scale(1.00)';
  imagePreview.style.filter = '';
  if (lastClass) {
    imagePreview.classList.remove(lastClass);
  }

  scaleValue.value = '100%';
  effectLevel.classList.add('visually-hidden');
};

scaleBigger.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) + Scale.STEP;

  if (scale >= Scale.MAX) {
    scale = Scale.MAX;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

scaleSmaller.addEventListener('click', () => {
  let scale = parseInt(scaleValue.value, 10) - Scale.STEP;

  if (scale <= Scale.MIN) {
    scale = Scale.MIN;
  }

  scaleValue.value = scale + '%';
  scale = scale / 100;
  imagePreview.style.transform = 'scale(' + scale + ')';
});

export {resetSettings};
