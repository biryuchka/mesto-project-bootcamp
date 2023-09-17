import './pages/index.css';


import { elements, validationConfig, buttonProfileEdit, buttonAddCard, inputTitle, inputLink, imgAvatar } from './components/constants.js'
import { popupProfile, buttonProfileClose, profileName, profileDescription, inputProfile, inputDescription, formProfile } from './components/constants.js'
import { popupCard, buttonCardClose, formCard,} from './components/constants.js';
import { popupImage, buttonImageClose } from './components/constants.js';
import { popupAvatar, buttonAvatarClose, buttonAvatar, inputAvatar, formAvatar } from './components/constants.js';
import { user } from './components/constants.js';

import { enableValidation } from "./components/validate.js";
import { closePopup, openProdilePopup, openCardPopup, openAvatarPopup} from './components/modal.js';
import { createCard } from "./components/cards.js"   
import { updateProfileInfo, addCard, changeAvatar, 
         getProfileInfo, getCards } from "./components/api.js";


function changeUser_toInfo(info) {
  user._id = info._id;
  user.avatar = info.avatar;
  user.name = info.name;
  user.about = info.about;
  inputProfile.value = info.name;
  inputDescription.value = info.about;
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
  .finally(() => submitBtn.textContent = "Сохранить")
  .catch(err => console.log(err));
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
buttonImageClose.addEventListener('click', function() { closePopup(popupImage) });
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