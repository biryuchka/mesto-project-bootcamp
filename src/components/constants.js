export const profile = document.querySelector('.profile')
export const elements = document.querySelector('.elements')
export const buttonProfileEdit = profile.querySelector('.profile__edit-button')
export const buttonAddCard = profile.querySelector('.profile__add-button')

export const popupProfile = document.querySelector('.popup_profile')
export const buttonProfileClose = popupProfile.querySelector('.popup__close-btn')
export const profileName = profile.querySelector('.profile__title')
export const profileDescription = profile.querySelector('.profile__description')
export const inputProfile = popupProfile.querySelector('input[name="profile"]')
export const inputDescription = popupProfile.querySelector('input[name="description"]')
export const formProfile = popupProfile.querySelector('.form_profile')

export const popupCard = document.querySelector('.popup_card')
export const buttonCardClose = popupCard.querySelector('.popup__close-btn')
export const inputTitle = popupCard.querySelector('input[name="title"]')
export const inputLink = popupCard.querySelector('input[name="link"]')
export const formCard = popupCard.querySelector('.form_card')
export const template = document.getElementById('element').content.querySelector('.element')

export const popupImage = document.querySelector('.popup_show-card')
export const buttonImageClose = popupImage.querySelector('.popup__close-btn')
export const imgImagePopup = popupImage.querySelector('.popup__image')
export const titleImagePopup = popupImage.querySelector('.popup__title')

export const popupAvatar = document.querySelector('.popup_avatar')
export const buttonAvatarClose = popupAvatar.querySelector('.popup__close-btn')
export const inputAvatar = popupAvatar.querySelector('input[name="avatar"]')
export const formAvatar = popupAvatar.querySelector('.form_avatar')
export const buttonAvatar = profile.querySelector('.profile__avatar')
export const imgAvatar = profile.querySelector('.profile__avatar-image')

export const popupList = [popupProfile, popupCard, popupImage, popupAvatar]

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitBtnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__form-input_error',
    errorClass: 'popup__form-error_active'
  }

export let user = {
  "name": "Жак‑Ив Кусто",
  "about": "Исследователь океана",
  "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
  "_id": "e20537ed11237f86bbb20ccb",
  "cohort": "cohort0"
}  