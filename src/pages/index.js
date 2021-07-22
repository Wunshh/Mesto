import "./index.css";
import Card from "../scripts/components/Card.js";

import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";

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
} from "../scripts/utils/constants.js";

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

const userInfo = new UserInfo({
    userName: ".profile__name", 
    userJob: ".profile__career"
});

function handelOpenPopupTypeUserInfo() {
    popupWithUserInfo.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.job;
    formElementPopupTypeEditValidate.resetValidation();
}

const popupWithUserInfo = new PopupWithForm(".popup_type_edit", handleFormUserInfoSubmit);
popupWithUserInfo.setEventListeners();

popupTypeEditButtonOpen.addEventListener("click", handelOpenPopupTypeUserInfo);

function handleFormUserInfoSubmit(data) {
    userInfo.setUserInfo(data.name, data.job);
    popupWithUserInfo.close();
}