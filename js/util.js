const ALERT_SHOW_TIME = 5000;

const Keys = {
  ESC: 'Esc',
  ESCAPE: 'Escape',
};

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '5px 3px';
  alertContainer.style.fontSize = '20px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'yellow';
  alertContainer.style.color = 'black';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    return -1;
  }

  if (max < min) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const checkingString = (string, maxLenght) => {
  return string.length <= maxLenght;
};

checkingString('Очень красивая фотография', 140);

const getRandomArrayElement = (array) => {
  return array[getRandomInt(0, array.length - 1)];
};

const isEscEvent = (evt) => {
  return evt.key === Keys.ESC || evt.key === Keys.ESCAPE;
};

export { getRandomInt, getRandomArrayElement, isEscEvent, showAlertError, showAlert };
