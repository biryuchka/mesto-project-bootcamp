import profile_img from './images/profile_img.jpg'
import logo_header from './images/logo_header.svg'
import './pages/index.css';


import { elements, validationConfig, buttonProfileEdit, buttonAddCard, inputTitle, inputLink } from './components/constants.js'
import { popupProfile, buttonProfileClose, profileName, profileDescription, inputProfile, inputDescription, formProfile } from './components/constants.js'
import { popupCard, buttonCardClose, formCard,} from './components/constants.js';
import { popupImage, buttonImageClose } from './components/constants.js';

import { enableValidation } from "./components/validate.js";
import { closePopup, openProdilePopup, openCardPopup} from './components/modal.js';
import { initialCards, createCard } from "./components/cards.js"   

const submitFormProfile=(event) => {
  event.preventDefault();
  profileName.textContent = inputProfile.value;
  profileDescription.textContent = inputDescription.value;
  closePopup(popupProfile)
}
const submitFormCard=(event) => {
  event.preventDefault();
  const card_ = {name : inputTitle.value, link: inputLink.value}
  renderCard(card_)
  inputTitle.value = ""
  inputLink.value = ""
  closePopup(popupCard)
}

const renderCard=(object) => {
  const newCard = createCard(object);
  elements.prepend(newCard);
}

enableValidation(validationConfig);

buttonProfileEdit.addEventListener('click', openProdilePopup);
buttonAddCard.addEventListener('click', openCardPopup);
buttonProfileClose.addEventListener('click', function(){ closePopup(popupProfile); });
buttonCardClose.addEventListener('click', function() { closePopup(popupCard); });
buttonImageClose.addEventListener('click', function() { closePopup(popupImage) });
formProfile.addEventListener('submit', submitFormProfile);
formCard.addEventListener('submit', submitFormCard);
initialCards.forEach(renderCard) 

