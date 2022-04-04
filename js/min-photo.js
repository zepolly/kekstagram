import { show } from './big-photo.js';

const photosList = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderPhoto = (photo) => {
  const minPhoto = photoTemplate.cloneNode(true);

  minPhoto.querySelector('.picture__img').src = photo.url;
  minPhoto.querySelector('.picture__likes').textContent = photo.likes;
  minPhoto.querySelector('.picture__comments').textContent = photo.comments.length;

  minPhoto.addEventListener('click', (evt) => {
    evt.preventDefault();
    show(photo);
  })

  return minPhoto;
};

const renderPhotos = (minPhoto) => {
  const picturesListFragment = document.createDocumentFragment();

  minPhoto.forEach((photo) => {
    picturesListFragment.appendChild(renderPhoto(photo));
  });

  photosList.appendChild(picturesListFragment);
}

export { renderPhotos };
