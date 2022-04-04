import { getRandomInt, getRandomArrayElement } from './util.js';

const PHOTO_COUNT = 25;
const likes = {
  MIN: 15,
  MAX: 200,
}

const DESCRIPTION_PHOTO = [
  'фотография красивой природы',
  'изображение наскальной живописи',
  'это моя собака',
  'очень красочный закат',
  'самый лучший парикмахер',
  'моя машина',
  'вот я с новым макияжем',
  'я на работе',
  'я дома',
  'я в театре',
];

const MESSAGE_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Ольга',
  'Олег',
  'Артем',
  'Андрей',
  'Анна',
  'Ира',
  'Никита',
  'Тимофей',
  'Митя',
  'Дмитрий',
];

let photos = [];

const createPhoto = () => {

  for (let i = 0; i < PHOTO_COUNT; i++) {
    photos.push({
      id: i,
      url: 'photos/' + (i + 1) + '.jpg',
      description: getRandomArrayElement(DESCRIPTION_PHOTO),
      likes: getRandomInt(likes.MIN, likes.MAX),
      comments: [{
        id: getRandomInt(1, 300),
        avatar: 'img/avatar-' + getRandomInt(1, 6) + '.svg',
        message: getRandomArrayElement(MESSAGE_COMMENTS),
        name: getRandomArrayElement(NAMES),
      }],
    })
  }
}

createPhoto();

export { photos };
