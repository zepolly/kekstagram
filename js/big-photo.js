const bigPhoto = document.querySelector('.big-picture');
const body = document.querySelector('body');
const bigPhotoClose = bigPhoto.querySelector('.big-picture__cancel');

const countComments = document.querySelector('.social__comment-count');
const loaderComments = document.querySelector('.comments-loader');
countComments.classList.add('hidden');
loaderComments.classList.add('hidden');

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const commentList = document.querySelector('.social__comments')

const onBigPhotoCloseClick = () => {
  bigPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  bigPhotoClose.removeEventListener('click', onBigPhotoCloseClick);
  commentList.innerHTML = '';
};

const renderComment = (comment) => {
  const commentSimilar = commentTemplate.cloneNode(true);

  commentSimilar.querySelector('.social__picture').src = comment.avatar;
  commentSimilar.querySelector('.social__picture').alt = comment.name;
  commentSimilar.querySelector('.social__text').textContent = comment.message;

  return commentSimilar;
};

const renderComments = (comments) => {
  let commentsListFragment = document.createDocumentFragment();

  comments.forEach(comment => {
    commentsListFragment.appendChild(renderComment(comment));
  });

  commentList.appendChild(commentsListFragment);
}

const show = (photo) => {
  body.classList.add('modal-open');
  bigPhoto.querySelector('.big-picture__img > img').src = photo.url;
  bigPhoto.querySelector('.likes-count').textContent = photo.likes;
  bigPhoto.querySelector('.comments-count').textContent = photo.comments.length;
  bigPhoto.querySelector('.social__caption').textContent = photo.description;

  bigPhotoClose.addEventListener('click', onBigPhotoCloseClick);
  renderComments(photo.comments);

  bigPhoto.classList.remove('hidden');
};

export { show };
