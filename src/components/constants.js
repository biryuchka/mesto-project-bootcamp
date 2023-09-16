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

export const popupList = [popupProfile, popupCard, popupImage]

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__form-input',
    submitBtnSelector: '.popup__submit-btn',
    inactiveBtnClass: 'popup__submit-btn_disabled',
    inputErrorClass: 'popup__form-input_error',
    errorClass: 'popup__form-error_active'
  }