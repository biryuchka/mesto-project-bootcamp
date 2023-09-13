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

function NewCard(title_, src_) {
  const newCard = template.cloneNode(true);
  const buttonLike = newCard.querySelector('.element__like-btn');
  const buttonDelete = newCard.querySelector('.element__delete-btn');
  const imgCard = newCard.querySelector('.element__image');
  const titleCard = newCard.querySelector('.element__title');
  titleCard.textContent = title_;
  imgCard.src = src_;
  imgCard.alt = title_;
  elements.insertBefore(newCard, elements.firstChild);
  buttonLike.addEventListener('click', function() {
    buttonLike.classList.toggle('element__like-btn_active');
  });
  buttonDelete.addEventListener('click', function() {
    newCard.remove();
  });
  imgCard.addEventListener('click', function() {
    imgImagePopup.alt = title_;
    imgImagePopup.src = src_;
    titleImagePopup.textContent = title_;
    openPopup(popupImage)
  });
}
function closePopup(popup_) {
    popup_.classList.remove('popup_opened');
}
function openPopup(popup_) {
    popup_.classList.add('popup_opened');
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
    NewCard(inputCard.value, inputPhoto.value);
    inputCard.value = ""
    inputPhoto.value = ""
    closePopup(popupCard)
}
formCard.addEventListener('submit', submitFormCard);
buttonImageClose.addEventListener('click', function(){
    closePopup(popupImage)
});
