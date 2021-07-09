import './styles/index.css';
import Card from "./Card.js";

import { initialCards } from "./initial-сards.js";
import { formArray } from "./FormValidator.js";
import FormValidator from "./FormValidator.js";

const cardList = document.querySelector(".grid-galery");

const popupTypeEditButtonOpen = document.querySelector(".profile__edit-button");
const popupTypeImageAddPhotoButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const formElementPopupTypeEdit = popupTypeEdit.querySelector(".form");
const nameInput = popupTypeEdit.querySelector(".form__user-info_user_name");
const jobInput = popupTypeEdit.querySelector(".form__user-info_user_job");

export const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const photoNameInput = popupTypeNewCard.querySelector(".form__user-info_photo_name");
const photoSrcInput = popupTypeNewCard.querySelector(".form__user-info_photo_src");
const formElementNewCard = popupTypeNewCard.querySelector(".form");

const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");

const popups = document.querySelectorAll(".popup");

const formElementNewCardValidate = new FormValidator(formArray, formElementNewCard);
const formElementPopupTypeEditValidate = new FormValidator(formArray, formElementPopupTypeEdit);

formElementNewCardValidate.enableValidation();
formElementPopupTypeEditValidate.enableValidation();

popups.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
            closePopup(popup);
        }
    });
});

function handlerEsc(evt) {
    if (evt.key === "Escape") {
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

export { openPopup };

function openPopupTypeEdit() {
    openPopup(popupTypeEdit);

    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;

    formElementPopupTypeEditValidate.resetValidation();
}

popupTypeEditButtonOpen.addEventListener("click", openPopupTypeEdit);

popupTypeImageAddPhotoButton.addEventListener("click", () => {
    openPopup(popupTypeNewCard);

    formElementNewCardValidate.resetValidation();
});

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;

    closePopup(popupTypeEdit);
}

formElementPopupTypeEdit.addEventListener("submit", handleProfileFormSubmit);

function createCard(data) {
    const card = new Card(data, "#template-card").generateCard();

    return card;
}

popupTypeNewCard.addEventListener("submit", function (evt) {
    evt.preventDefault();

    cardList.prepend(createCard({ name: photoNameInput.value, link: photoSrcInput.value }));

    closePopup(popupTypeNewCard);

    formElementNewCard.reset();
});

initialCards.forEach((item) => {
    cardList.append(createCard(item));
});