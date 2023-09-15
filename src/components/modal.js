import {popupList, imgImagePopup, titleImagePopup, popupImage, elements,
    profileName, profileDescription, inputProfile, inputDescription, popupProfile, 
    inputTitle, inputLink, popupCard} from "./constants"

import initialCards from "./cards"

export function clearErrors(popup) {
  const forms = Array.from(popup.querySelectorAll('.popup__form-error'))
  forms.forEach((form_) => {
    if (form_.classList.contains('popup__form-error_active')) {
      form_.classList.remove('popup__form-error_active');
    }
  })
  const inputs = Array.from(popup.querySelectorAll('.popup__form-input'))
  inputs.forEach((input_) => {
    if (input_.classList.contains('popup__form-input_error')) {
      input_.classList.remove('popup__form-input_error');
    }
  })
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  if (popup == popupCard) {
    inputTitle.value = "";
    inputLink.value = "";
  }
  document.removeEventListener('keydown', handleEscape)
  clearErrors(popup)
}

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape)
}

export function handleEscape(event) {
  if (event.key === 'Escape') {
    popupList.forEach((popup_) => {
      if (popup_.classList.contains('popup_opened')) {
        closePopup(popup_)
      }
    })
  }
}
  
export function handleOverlay(popup) {
  popup.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
  })
}


export function createCard(card) {
  const newCard = template.cloneNode(true);
  const buttonLike = newCard.querySelector('.element__like-btn');
  const buttonDelete = newCard.querySelector('.element__delete-btn');
  const imgCard = newCard.querySelector('.element__image');
  const titleCard = newCard.querySelector('.element__title');
  titleCard.textContent = card.name;
  imgCard.src = card.link;
  imgCard.alt = card.name;
  buttonLike.addEventListener('click', function() {
    buttonLike.classList.toggle('element__like-btn_active');
  });
  buttonDelete.addEventListener('click', function() {
    newCard.remove();
  });
  imgCard.addEventListener('click', function() {
    imgImagePopup.alt = card.name;
    imgImagePopup.src = card.link;
    titleImagePopup.textContent = card.name;
    openPopup(popupImage)
  });
  return newCard
}

export function renderCard(object) {
  const newCard = createCard(object);
  elements.prepend(newCard);
}

export function submitFormProfile(event) {
  event.preventDefault();
  profileName.textContent = inputProfile.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(popupProfile)
}

export function submitFormCard(event) {
  event.preventDefault();
  const card_ = {name : inputTitle.value, link: inputLink.value}
  renderCard(card_)
  closePopup(popupCard)
}


export function makeCards() {
  initialCards.forEach(renderCard) 
};