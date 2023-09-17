import { popupImage, popupList, profileName, profileDescription, inputProfile, inputDescription, 
  popupProfile, inputTitle, inputLink, popupCard, inputAvatar, popupAvatar, validationConfig} from "./constants"

import { user } from './constants.js';

export const closePopupImage=() => {
  popupImage.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape)
}

export const closePopup=(popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape)
}

export const openPopup=(popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape)
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