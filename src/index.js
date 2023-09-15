import { buttonProfileEdit, buttonProfileClose, formProfile,
        buttonAddCard, buttonCardClose, formCard, buttonImageClose,
        popupCard, popupImage, popupProfile, popupList, 
        inputProfile, inputDescription, profileName, profileDescription} from "./components/constants";

import * as modals from "./components/modal";
import { enableValidation } from "./components/validate";


buttonProfileEdit.addEventListener('click', function(){
    inputProfile.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
    openPopup(popupProfile) 
});
buttonProfileClose.addEventListener('click', function(){ modals.closePopup(popupProfile) });

formProfile.addEventListener('submit', modals.submitFormProfile);
buttonAddCard.addEventListener('click',  modals.openPopup(popupCard));
buttonCardClose.addEventListener('click', modals.closePopup(popupCard));
formCard.addEventListener('submit', modals.submitFormCard);
buttonImageClose.addEventListener('click', modals.closePopup(popupImage));

modals.makeCards();
popupList.forEach(modals.handleOverlay);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__form-input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__form-input_error',
  errorClass: 'popup__form-error_active'
});