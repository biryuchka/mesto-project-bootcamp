const buttonProfileEdit = document.querySelector('.profile__edit-button')
const buttonProfileClose = document.querySelector('.popup__close-btn')
const popupProfile = document.querySelector('.popup__profile')
const profile = document.querySelector('.profile')
const inputName = popupProfile.querySelector('input[name="name"]')
const inputDescription = popupProfile.querySelector('input[name="description"]')
const formProfile = popupProfile.querySelector('.profile__form')

function closePopup(popup_) {
    popup_.classList.remove('popup_opened');
}

buttonProfileEdit.addEventListener('click', function(){
    inputName.value = profile.querySelector('.profile__title').textContent;
    inputDescription.value = profile.querySelector('.profile__description').textContent;
    popupProfile.classList.add('popup_opened');
});

buttonProfileClose.addEventListener('click', function(){
    closePopup(popupProfile)
});

function submitFormProfile(event) {
    event.preventDefault();
    profile.querySelector('.profile__title').textContent = inputName.value;
    profile.querySelector('.profile__description').textContent = inputDescription.value;
    closePopup(popupProfile)
}

formProfile.addEventListener('submit', submitFormProfile);