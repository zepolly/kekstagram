import { isEscEvent } from './util.js';

const MAX_LENGTH_SYMBOLS = 20;
const MAX_COUNT_HASHTAGS = 5;

const inputHashtag = document.querySelector('.text__hashtags');
const inputComment = document.querySelector('.text__description');

inputHashtag.addEventListener('input', () => {
  inputHashtag.setCustomValidity('');

  const inputText = inputHashtag.value.toLowerCase().trim();
  if (!inputText) {
    return;
  }

  const inputArray = inputText.split(/\s+/);
  if (inputArray.length === 0) {
    return;
  }

  const isStartNotHashtag = inputArray.some((item) => {
    return item[0] !== '#';
  });
  if (isStartNotHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег должен начинаться с символа #');
  }

  const isOnlyLatticeHashtag = inputArray.some((item) => {
    return item === '#';
  });
  if (isOnlyLatticeHashtag) {
    inputHashtag.setCustomValidity('Хэш-тег должен состоять не только из решетки')
  }

  const isSplitSpaceHashtag = inputArray.some((item) => {
    return item.indexOf('#', 1) >= 1;
  });
  if (isSplitSpaceHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги должны разделяться пробелами');
  }

  const isRepeatingHashtag = inputArray.some((item, i, arr) => {
    return arr.indexOf(item, i + 1) >= i + 1;
  });
  if (isRepeatingHashtag) {
    inputHashtag.setCustomValidity('Хэш-теги не должны повторяться');
  }

  const isLongHashtag = inputArray.some((item) => {
    return item.length > MAX_LENGTH_SYMBOLS;
  });
  if (isLongHashtag) {
    inputHashtag.setCustomValidity('Максимальная длина хэш-тега 20 символов, включая решетку');
  }

  if (inputArray.length > MAX_COUNT_HASHTAGS) {
    inputHashtag.setCustomValidity('Максимальное число хэш-тегов - 5');
  }
});

const onEscapeDown = (evt) => {
  if (isEscEvent) {
    evt.preventDefault();
    evt.stopPropagation();
  }
};

inputHashtag.addEventListener('keydown', onEscapeDown);
inputComment.addEventListener('keydown', onEscapeDown);
