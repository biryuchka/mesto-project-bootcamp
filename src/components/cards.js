import { template, imgImagePopup, titleImagePopup, popupImage } from "./constants"  
import { openPopup } from "./modal"  
import { addLike, removeLike, removeCard } from "./api";
import { user } from './constants.js';

const handleLikes=(id, likesNum, buttonLike) => {
  if (buttonLike.classList.contains('element__like-btn_active')) {
    removeLike(id)
    .then((element) => {
      likesNum.textContent = element.likes.length;
      buttonLike.classList.remove('element__like-btn_active');
    })
    .catch(err => console.log(err))
  } else {
    addLike(id)
    .then((element) => {
      likesNum.textContent = element.likes.length;
      buttonLike.classList.add('element__like-btn_active');
    })
    .catch(err => console.log(err))
  }
}

function handleRemove(card, id) {
  removeCard(id)
  .then(() => {
      card.remove();
  })
  .catch(err => console.log(err));
}

export const createCard=(card_) => {
  const newCard = template.cloneNode(true);
  const buttonLike = newCard.querySelector('.element__like-btn');
  const buttonDelete = newCard.querySelector('.element__delete-btn');
  const imgCard = newCard.querySelector('.element__image');
  const titleCard = newCard.querySelector('.element__title');
  const likesNumber = newCard.querySelector('.element__like-num');
  titleCard.textContent = card_.name;
  imgCard.src = card_.link;
  imgCard.alt = card_.name;
  likesNumber.textContent = card_.likes.length;
  buttonLike.addEventListener('click', function() {
    handleLikes(card_._id, likesNumber, buttonLike)
  });
  let isLiked = card_.likes.some(item => item._id == user._id);
  if (isLiked) {
    buttonLike.classList.add('element__like-btn_active');
  }
  
  if (card_.owner._id === user._id) {
    buttonDelete.addEventListener('click', function() {
      handleRemove(newCard, card_._id);
    });
  } else {
    buttonDelete.disabled = true;
  }

  imgCard.addEventListener('click', function() {
    imgImagePopup.alt = card_.name;
    imgImagePopup.src = card_.link;
    titleImagePopup.textContent = card_.name;
    openPopup(popupImage)
  });
  return newCard
}

