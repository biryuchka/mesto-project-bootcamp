import { popupList, profileName, profileDescription, inputProfile, inputDescription, 
  popupProfile, inputTitle, inputLink, popupCard, inputAvatar, popupAvatar, validationConfig} from "./constants"

import { clearErrors } from "./validate.js";
import { user } from './constants.js';

export const closePopup=(popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape)
  clearErrors(popup, validationConfig.inputErrorClass, validationConfig.errorClass)
}

export const openPopup=(popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape)
}

export const openProdilePopup=() => {
  inputProfile.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  const submitBtn = popupProfile.querySelector(validationConfig.submitBtnSelector);
  submitBtn.classList.remove(validationConfig.inactiveBtnClass);
  submitBtn.disabled = false;
  openPopup(popupProfile) 
}

export const openCardPopup=() => { 
  inputTitle.value = "";
  inputLink.value = "";
  const submitBtn = popupCard.querySelector(validationConfig.submitBtnSelector);
  submitBtn.classList.add(validationConfig.inactiveBtnClass);
  submitBtn.disabled = true;
  openPopup(popupCard);
}

export const openAvatarPopup=() => {
  inputAvatar.value = "";
  const submitBtn = popupCard.querySelector(validationConfig.submitBtnSelector);
  submitBtn.classList.add(validationConfig.inactiveBtnClass);
  submitBtn.disabled = true;
  openPopup(popupAvatar);
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup); 
  }
}

const handleOverlay=(popup_) =>{
  popup_.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')){
      closePopup(popup_);
    }
  })
}

const handlePopups=() => {
  popupList.forEach(handleOverlay);
}
handlePopups()