import profile_img from './images/profile_img.jpg'
import logo_header from './images/logo_header.svg'
import './pages/index.css';


import { buttonProfileEdit, buttonAddCard } from './components/constants.js'
import { popupProfile, buttonProfileClose, profileName, profileDescription, inputProfile, inputDescription, formProfile } from './components/constants.js'
import { popupCard, buttonCardClose, formCard,} from './components/constants.js';
import { popupImage, buttonImageClose, popupList } from './components/constants.js';

import { enableValidation } from "./components/validate.js";
import { renderCard, closePopup, openPopup, handleOverlay, submitFormCard, submitFormProfile} from './components/modal.js';
import { initialCards } from "./components/cards.js"         

enableValidation(
  '.popup__form',
  '.popup__form-input',
  '.popup__submit-btn',
  'popup__submit-btn_disabled',
  'popup__form-input_error',
  'popup__form-error_active'
);

buttonProfileEdit.addEventListener('click', function(){
    inputProfile.value = profileName.textContent;
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

initialCards.forEach(renderCard) 
popupList.forEach(handleOverlay)

