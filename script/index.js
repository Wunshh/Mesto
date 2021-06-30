import Card from "./Card.js";

import { initialCards } from "./initial-сards.js";
import { formArray } from "./FormValidator.js";
import FormValidator from "./FormValidator.js";

const cardList = document.querySelector(".grid-galery"); 

const popupTypeEditButtonOpen = document.querySelector(".profile__edit-button"); 
const popupTypeImageAddPhotoButton = document.querySelector(".profile__add-button"); 
 
const popupTypeEdit = document.querySelector(".popup_type_edit"); 
const popupTypeEditButtonClose = popupTypeEdit.querySelector(".popup__close-button"); 
const formElementPopupTypeEdit = popupTypeEdit.querySelector(".form"); 
const nameInput = popupTypeEdit.querySelector(".form__user-info_user_name"); 
const jobInput = popupTypeEdit.querySelector(".form__user-info_user_job"); 
 
export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardButtonClose = popupTypeNewCard.querySelector(".popup__close-button"); 
const photoNameInput = popupTypeNewCard.querySelector(".form__user-info_photo_name"); 
const photoSrcInput = popupTypeNewCard.querySelector(".form__user-info_photo_src"); 
const formElementNewCard = popupTypeNewCard.querySelector(".form"); 
 
const popupTypeImage = document.querySelector(".popup_type_image"); 
const popupTypeImageCloseButton = popupTypeImage.querySelector(".popup__close-button"); 
const popupImage = popupTypeImage.querySelector(".popup__image"); 
const popupTitle = popupTypeImage.querySelector(".popup__title");  


const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");

const popups = document.querySelectorAll('.popup');

popups.forEach((popup) => {
    popup.addEventListener ('click', (evt) => {
        if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-button')) {
        closePopup(popup);
    }   
    });
});

function handlerEsc(evt) {
    if (evt.key === 'Escape') {
        const modal = document.querySelector(".popup_open");
        closePopup(modal);
    }
}

function closePopup(modal) {
    modal.classList.remove("popup_open");
    document.removeEventListener("keydown", handlerEsc); 
}

function openPopup(modal) {
    modal.classList.add("popup_open");
    document.addEventListener("keydown", handlerEsc); 
}


function openPopupTypeEdit() {
    openPopup(popupTypeEdit);
    
    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;

    const formElementPopupTypeEditValidate = new FormValidator(formArray, formElementPopupTypeEdit);
    formElementPopupTypeEditValidate.enableValidation(); 
}

popupTypeEditButtonOpen.addEventListener("click", openPopupTypeEdit);
popupTypeImageAddPhotoButton.addEventListener("click", () => openPopup(popupTypeNewCard));

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;

    closePopup(popupTypeEdit);
}

formElementPopupTypeEdit.addEventListener("submit", handleProfileFormSubmit);

popupTypeNewCard.addEventListener("submit", function(evt) {
    evt.preventDefault();

    const card = new Card(({ name: photoNameInput.value, link: photoSrcInput.value }), ".grid-galery");
    const cardElement = card.generateCard();
    cardList.prepend(cardElement);

    closePopup(popupTypeNewCard);

    formElementNewCard.reset(); 
    
    const formElementNewCardValidate = new FormValidator(formArray, formElementNewCard);
    formElementNewCardValidate.enableValidation(); 
});


initialCards.forEach((item) => {
    const card = new Card(item, ".grid-galery");
    const cardElement = card.generateCard();
    cardList.append(cardElement);
});


const formElementNewCardValidate = new FormValidator(formArray, formElementNewCard);
formElementNewCardValidate.enableValidation();

const formElementPopupTypeEditValidate = new FormValidator(formArray, formElementPopupTypeEdit);
formElementPopupTypeEditValidate.enableValidation();