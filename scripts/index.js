'use strict';

const profile = document.querySelector('.profile')
const elements = document.querySelector('.elements')
const buttonProfileEdit = profile.querySelector('.profile__edit-button')
const buttonAddCard = profile.querySelector('.profile__add-button')

const popupProfile = document.querySelector('.popup_profile')
const buttonProfileClose = popupProfile.querySelector('.popup__close-btn')
const profileName = profile.querySelector('.profile__title')
const profileDescription = profile.querySelector('.profile__description')
const inputName = popupProfile.querySelector('input[name="name"]')
const inputDescription = popupProfile.querySelector('input[name="description"]')
const formProfile = popupProfile.querySelector('.form_profile')

const popupCard = document.querySelector('.popup_card')
const buttonCardClose = popupCard.querySelector('.popup__close-btn')
const inputCard = popupCard.querySelector('input[name="name"]')
const inputPhoto = popupCard.querySelector('input[name="photo"]')
const formCard = popupCard.querySelector('.form_card')
const template = document.getElementById('element').content.querySelector('.element')

const popupImage = document.querySelector('.popup_show-card')
const buttonImageClose = popupImage.querySelector('.popup__close-btn')
const imgImagePopup = popupImage.querySelector('.popup__image')
const titleImagePopup = popupImage.querySelector('.popup__title')

const popupList = [popupProfile, popupCard, popupImage]

function createCard(card_) {
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
function renderCard(object) {
  const newCard = createCard(object);
  elements.prepend(newCard);
}

function closePopup(popup_) {
    popup_.classList.remove('popup_opened');
    document.removeEventListener('keydown', handleEscape)
}
function openPopup(popup_) {
    popup_.classList.add('popup_opened');
    document.addEventListener('keydown', handleEscape)
}

function handleEscape(event) {
  if (event.key === 'Escape') {
    popupList.forEach((popup_) => {
      if (popup_.classList.contains('popup_opened')) {
        closePopup(popup_)
      }
    })
  }
}

function handleOverlay(popup_) {
  popup_.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('popup_opened')) {
      closePopup(popup_);
    }
  })
}

buttonProfileEdit.addEventListener('click', function(){
    inputName.value = profileName.textContent;
    inputDescription.value = profileDescription.textContent;
    openPopup(popupProfile) 
});
buttonProfileClose.addEventListener('click', function(){ closePopup(popupProfile) });
function submitFormProfile(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileDescription.textContent = inputDescription.value;
    closePopup(popupProfile)
}
formProfile.addEventListener('submit', submitFormProfile);
buttonAddCard.addEventListener('click', function(){ openPopup(popupCard) });
buttonCardClose.addEventListener('click', function(){ closePopup(popupCard) });
function submitFormCard(event) {
    event.preventDefault();
    const card_ = {name : inputCard.value, link: inputPhoto.value}
    renderCard(card_)
    inputCard.value = ""
    inputPhoto.value = ""
    closePopup(popupCard)
}
formCard.addEventListener('submit', submitFormCard);
buttonImageClose.addEventListener('click', function(){
    closePopup(popupImage)
});

function makeCards() {
  initialCards.forEach(renderCard) 
}
makeCards()

popupList.forEach(handleOverlay)