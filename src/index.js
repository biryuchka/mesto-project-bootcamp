import './pages/index.css';

import { elements, validationConfig, buttonProfileEdit, buttonAddCard, inputTitle, inputLink, imgAvatar } from './components/constants.js'
import { popupProfile, buttonProfileClose, profileName, profileDescription, inputProfile, inputDescription, formProfile } from './components/constants.js'
import { popupCard, buttonCardClose, formCard,} from './components/constants.js';
import { popupImage, buttonImageClose } from './components/constants.js';
import { popupAvatar, buttonAvatarClose, buttonAvatar, inputAvatar, formAvatar } from './components/constants.js';
import { user } from './components/constants.js';

import { clearErrors } from "./components/validate.js";
import { enableValidation } from "./components/validate.js";
import { closePopupImage, closePopup, openPopup } from './components/modal.js';
import { createCard } from "./components/cards.js"   
import { updateProfileInfo, addCard, changeAvatar, 
         getProfileInfo, getCards } from "./components/api.js";


const openProdilePopup=() => {
  clearErrors(popupProfile, validationConfig.inputErrorClass, validationConfig.errorClass)
  inputProfile.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
  const submitBtn = popupProfile.querySelector(validationConfig.submitBtnSelector);
  submitBtn.classList.remove(validationConfig.inactiveBtnClass);
  submitBtn.disabled = false;
  openPopup(popupProfile) 
}

const openCardPopup=() => { 
  clearErrors(popupCard, validationConfig.inputErrorClass, validationConfig.errorClass)
  inputTitle.value = "";
  inputLink.value = "";
  const submitBtn = popupCard.querySelector(validationConfig.submitBtnSelector);
  submitBtn.classList.add(validationConfig.inactiveBtnClass);
  submitBtn.disabled = true;
  openPopup(popupCard);
}

const openAvatarPopup=() => {
  clearErrors(popupAvatar, validationConfig.inputErrorClass, validationConfig.errorClass)
  inputAvatar.value = "";
  const submitBtn = popupAvatar.querySelector(validationConfig.submitBtnSelector);
  submitBtn.classList.add(validationConfig.inactiveBtnClass);
  submitBtn.disabled = true;
  openPopup(popupAvatar);
}         


function changeUser_toInfo(info) {
  user._id = info._id;
  user.avatar = info.avatar;
  user.name = info.name;
  user.about = info.about;
  profileName.textContent = info.name;
  profileDescription.textContent = info.about;
  imgAvatar.src = info.avatar;
}

const submitFormProfile=(event) => {
  event.preventDefault();
  const submitBtn = popupProfile.querySelector('.popup__submit-btn')
  submitBtn.textContent = "Сохранение..."

  updateProfileInfo(inputProfile.value, inputDescription.value)
  .then((info) => {
    changeUser_toInfo(info);
    closePopup(popupProfile);
  })
  .catch(err => console.log(err))
  .finally(() => submitBtn.textContent = "Сохранить")
}
const submitFormCard=(event) => {
  event.preventDefault();

  const submitBtn = popupCard.querySelector('.popup__submit-btn')
  submitBtn.textContent = "Сохранение..."

  const card_ = {name : inputTitle.value, link: inputLink.value}
  addCard(card_.name, card_.link)
  .then((info) => {
    renderCard(info);
    closePopup(popupCard);
    inputTitle.value = "";
    inputLink.value = "";
  })
  .finally(() => submitBtn.textContent = "Создать")
  .catch(err => console.log(err));
}

const submitFormAvatar=(event) => {
  event.preventDefault();

  const submitBtn = popupAvatar.querySelector('.popup__submit-btn')
  submitBtn.textContent = "Сохранение..."

  changeAvatar(inputAvatar.value)
  .then((info) => {
    changeUser_toInfo(info);
    closePopup(popupAvatar);
    inputAvatar.value = "";
  })
  .finally(() => submitBtn.textContent = "Создать")
  .catch(err => console.log(err));
}

const renderCard=(object) => {
  const newCard = createCard(object);
  elements.prepend(newCard);
}
const makeCards=(allCards) => {
  allCards.forEach(renderCard) 
}

enableValidation(validationConfig);

buttonProfileEdit.addEventListener('click', openProdilePopup);
buttonAddCard.addEventListener('click', openCardPopup);
buttonAvatar.addEventListener('click', openAvatarPopup);
buttonProfileClose.addEventListener('click', function(){ closePopup(popupProfile); });
buttonAvatarClose.addEventListener('click', function(){ closePopup(popupAvatar); });
buttonCardClose.addEventListener('click', function() { closePopup(popupCard); });
buttonImageClose.addEventListener('click', closePopupImage);
formProfile.addEventListener('submit', submitFormProfile);
formCard.addEventListener('submit', submitFormCard);
formAvatar.addEventListener('submit', submitFormAvatar);


function init() {
  Promise.all([
    getProfileInfo(),
    getCards()
  ]).then(([userInfo, allCards]) => {
      changeUser_toInfo(userInfo);
      makeCards(allCards);
  })
  .catch(err => console.log(err))
}
init()