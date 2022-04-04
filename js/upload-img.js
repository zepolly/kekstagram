import { isEscEvent } from './util.js';
import { resetSettings } from './scale-img.js';

const modalWindow = document.querySelector('.img-upload__overlay');
const modalOpen = document.querySelector('.img-upload__input');
const modalClose = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

modalOpen.addEventListener('input', () => {
  resetSettings();
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent) {
      evt.preventDefault();
      modalWindow.classList.add('hidden');
    }
  });
});

modalClose.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  modalOpen.value = '';
});

const modalUserClose = () => {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  modalOpen.value = '';
};

export { modalOpen, modalUserClose };
