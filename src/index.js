import profile_img from './images/profile_img.jpg'
import logo_header from './images/logo_header.svg'
import './pages/index.css';


import { buttonProfileEdit, buttonProfileClose, formProfile,
        buttonAddCard, buttonCardClose, formCard, buttonImageClose,
        popupCard, popupImage, popupProfile, popupList, 
        inputProfile, inputDescription, profileName, profileDescription} from "./components/constants.js";

import {openPopup, closePopup, handleOverlay, handleEscape,
   submitFormCard, submitFormProfile, renderCard } from "./components/modal.js";
import { enableValidation } from "./components/validate.js";
import { initialCards } from "./components/cards.js";

buttonProfileEdit.addEventListener('click', function(){
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  openPopup(popupProfile) 
});
buttonProfileClose.addEventListener('click', function(){ closePopup(popupProfile) });
formProfile.addEventListener('submit', submitFormProfile);
buttonAddCard.addEventListener('click', function(){ openPopup(popupCard) });
buttonCardClose.addEventListener('click', function(){ closePopup(popupCard) });
formCard.addEventListener('submit', submitFormCard);
buttonImageClose.addEventListener('click', function(){
    closePopup(popupImage)
});


// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__form-input',
//   submitButtonSelector: '.popup__submit-btn',
//   inactiveButtonClass: 'popup__submit-btn_disabled',
//   inputErrorClass: 'popup__form-input_error',
//   errorClass: 'popup__form-error_active'
// });

