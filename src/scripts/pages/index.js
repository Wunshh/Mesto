import "../pages/index.css";
import Card from "../components/Card.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";

import { 
    formArray,
    initialCards, 
    cardList, 
    popupTypeEditButtonOpen, 
    popupTypeImageAddPhotoButton, 
    formElementPopupTypeEdit, 
    nameInput, 
    jobInput, 
    formElementNewCard 
} from "../utils/constants.js";

const formElementNewCardValidate = new FormValidator(formArray, formElementNewCard);
const formElementPopupTypeEditValidate = new FormValidator(formArray, formElementPopupTypeEdit);

formElementNewCardValidate.enableValidation();
formElementPopupTypeEditValidate.enableValidation();

const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();

function handleCardClick(link, name) {
    popupWithImage.open(link, name);
}

function createCard(item) {
    const card = new Card(item, handleCardClick, "#template-card").generateCard();

    return card;
}

const cards = new Section(
    {
        item: initialCards,
        renderer: (item) => {
            const card = createCard(item);
            cards.addItem(card);
        },
    },
    cardList
);

cards.renderItems();

function handleFormImageSubmit(item) {
    cardList.prepend(createCard(item));
    popupWithPhotoForm.close();
}

const popupWithPhotoForm = new PopupWithForm(".popup_type_new-card", handleFormImageSubmit);
popupWithPhotoForm.setEventListeners();

function handelOpenPopupTypeImage() {
    popupWithPhotoForm.open();
    formElementNewCardValidate.resetValidation();
}

popupTypeImageAddPhotoButton.addEventListener("click", handelOpenPopupTypeImage)

const userInfo = new UserInfo(nameInput, jobInput);

function handelOpenPopupTypeUserInfo() {
    popupWithUserInfo.open();
    userInfo.setUserInfo();
    formElementPopupTypeEditValidate.resetValidation();
}

const popupWithUserInfo = new PopupWithForm(".popup_type_edit", handleFormUserInfoSubmit);
popupWithUserInfo.setEventListeners();

popupTypeEditButtonOpen.addEventListener("click", handelOpenPopupTypeUserInfo);

function handleFormUserInfoSubmit() {
    userInfo.getUserInfo();
    popupWithUserInfo.close();
}