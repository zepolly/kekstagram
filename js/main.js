import { renderPhotos } from './min-photo.js';
import { modalUserClose } from './upload-img.js';
import './scale-img.js';
import './valdation.js';
import { getData, setUserFormSubmit } from './api.js'

getData((minPhoto) => {
  renderPhotos(minPhoto);
});

setUserFormSubmit(modalUserClose);
