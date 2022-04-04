import { showAlert, showAlertError } from './util.js';

const imgForm = document.querySelector('.img-upload__form');

const setUserFormSubmit = (onSuccess) => {
  imgForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => showAlertError('Не удалось опубликовать изображение. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

const getData = (onSuccess) => {
  fetch('https://23.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((minPhoto) => {
      onSuccess(minPhoto);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess(),
        showAlert('Фотография успешно опубликована');
      } else {
        onFail('Не удалось опубликовать фотографию. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось опубликовать фотографию. Попробуйте ещё раз');
    });
};

export { getData, sendData, setUserFormSubmit };
