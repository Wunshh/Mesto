const initialCards = [
    {
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const cardList = document.querySelector(".grid-galery");

const popupTypeEditButtonOpen = document.querySelector(".profile__edit-button");
const popupTypeImageAddPhotoButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const formElementPopupTypeEdit = popupTypeEdit.querySelector(".form");
const nameInput = popupTypeEdit.querySelector(".form__user-info_user_name");
const jobInput = popupTypeEdit.querySelector(".form__user-info_user_job");
const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const formElementNewCard = popupTypeNewCard.querySelector(".form");

const formArray = {
    formSelector: ".form",
    inputSelector: ".form__user-info",
    submitButtonSelector: ".form__save-button",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "form__error_visible",
};

export { 
    formArray,
    initialCards, 
    cardList, 
    popupTypeEditButtonOpen, 
    popupTypeImageAddPhotoButton, 
    formElementPopupTypeEdit, 
    nameInput, 
    jobInput, 
    formElementNewCard 
};
