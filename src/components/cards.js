export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];


import { template, imgImagePopup, titleImagePopup, popupImage } from "./constants"  
import { openPopup } from "./modal"  


export const createCard=(card_) => {
  const newCard = template.cloneNode(true);
  const buttonLike = newCard.querySelector('.element__like-btn');
  const buttonDelete = newCard.querySelector('.element__delete-btn');
  const imgCard = newCard.querySelector('.element__image');
  const titleCard = newCard.querySelector('.element__title');
  titleCard.textContent = card_.name;
  imgCard.src = card_.link;
  imgCard.alt = card_.name;
  buttonLike.addEventListener('click', function() {
    buttonLike.classList.toggle('element__like-btn_active');
  });
  buttonDelete.addEventListener('click', function() {
    newCard.remove();
  });
  imgCard.addEventListener('click', function() {
    imgImagePopup.alt = card_.name;
    imgImagePopup.src = card_.link;
    titleImagePopup.textContent = card_.name;
    openPopup(popupImage)
  });
  return newCard
}
