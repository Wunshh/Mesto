import "./index.css";
import Card from "../scripts/components/Card.js";

import FormValidator from "../scripts/components/FormValidator.js";
import Section from "../scripts/components/Section.js";
import UserInfo from "../scripts/components/UserInfo.js";
import PopupWithImage from "../scripts/components/PopupWithImage.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Api from "../scripts/components/Api.js";
import PopupWithSubmit from "../scripts/components/PopupWithSubmit.js";

import { 
    formArray,
    cardList, 
    popupTypeEditButtonOpen, 
    popupTypeImageAddPhotoButton, 
    formElementPopupTypeEdit, 
    nameInput, 
    jobInput, 
    formElementNewCard,
    buttonOpenPopupUserAvatar, 
    formElementPopupNewAvatar
} from "../scripts/utils/constants.js";


const formElementNewCardValidate = new FormValidator(formArray, formElementNewCard);
const formElementPopupTypeEditValidate = new FormValidator(formArray, formElementPopupTypeEdit);
const formElementPopupNewAvatarValidate = new FormValidator(formArray, formElementPopupNewAvatar);

formElementNewCardValidate.enableValidation();
formElementPopupTypeEditValidate.enableValidation();
formElementPopupNewAvatarValidate.enableValidation();

const config = {
    url: "https://mesto.nomoreparties.co/v1/cohort-26",
    headers: {
        authorization: "bf09fd5b-3c45-4e70-9b69-806c8df2b150",
        "Content-Type": "application/json",
    },
};
const api = new Api(config);

const userInfo = new UserInfo({
    userName: ".profile__name",
    userJob: ".profile__career",
    userAvatar: ".profile__avatar",
    userId: null,
});

function handleFormUserInfoSubmit(item) {
    api.updateUserData(item)
        .then((item) => {
            userInfo.setUserInfo(item);
            popupWithUserInfo.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupWithUserInfo.renderLoading(false);
        });
}

const popupWithUserInfo = new PopupWithForm(".popup_type_edit", handleFormUserInfoSubmit);
popupWithUserInfo.setEventListeners();

function handelOpenPopupTypeUserInfo() {
    popupWithUserInfo.open();
    const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    jobInput.value = userData.about;
    formElementPopupTypeEditValidate.resetValidation();
}

popupTypeEditButtonOpen.addEventListener("click", handelOpenPopupTypeUserInfo);


function handleFormUserAvatarSubmit(item) {
    api.updateUserAvatar(item)
        .then((item) => {
            userInfo.setUserInfo(item);
            popupChangeUserAvatar.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupChangeUserAvatar.renderLoading(false);
        });
}

buttonOpenPopupUserAvatar.addEventListener("click", () => {
    popupChangeUserAvatar.open();
    formElementPopupNewAvatarValidate.resetValidation();
});

const popupChangeUserAvatar = new PopupWithForm(".popup_type_avatar", handleFormUserAvatarSubmit);
popupChangeUserAvatar.setEventListeners();

const popupWithImage = new PopupWithImage(".popup_type_image");
popupWithImage.setEventListeners();

function handleFormImageSubmit(item) {
    api.postCards(item)
        .then((item) => {
            cardList.prepend(createCard(item));
            popupWithPhotoForm.close();
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {
            popupWithPhotoForm.renderLoading(false);
        });
}

const popupWithPhotoForm = new PopupWithForm(".popup_type_new-card", handleFormImageSubmit);
popupWithPhotoForm.setEventListeners();

function handelOpenPopupTypeImage() {
    popupWithPhotoForm.open();
    formElementNewCardValidate.resetValidation();
}

popupTypeImageAddPhotoButton.addEventListener("click", handelOpenPopupTypeImage);

const cards = new Section(
    {
        renderer: (item) => {
            cards.addItem(createCard(item));
        },
    },
    cardList
);

Promise.all([api.getInitialCards(), api.getUserInfoFromServer()])
    .then(([dataCards, dataUser]) => {
        cards.renderItems(dataCards);
        userInfo.setUserInfo(dataUser);
    })
    .catch((err) => {
        console.log(err);
    });

function handleCardClick(link, name) {
    popupWithImage.open(link, name);
}

function handlerDelete(card) {
    popupDeleteCard.open();
    popupDeleteCard.handleFormDelete(() => {
        api.handlerdeleteCards(card.handlerCardIdReturn())
            .then(() => {
                card.handlerDeleteCard();
                popupDeleteCard.close();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                popupDeleteCard.renderLoading(false);
            });
    });
}

function createCard(item) {
    const card = new Card({
        item: item,
        handleCardClick: handleCardClick,
        templateSelector: "#template-card",
        userId: "a872eaaa840b9f74f006f988",
        handlerOpenDeletePopup: () => handlerDelete(card),
        handlerLikeAdd: () => handlerLike(card, item),
    });

    return card.generateCard();
}

const popupDeleteCard = new PopupWithSubmit(".popup_delete_image");
popupDeleteCard.setEventListeners();

function handlerLike(card, item) {
    const likeSwitch = card.likeContains(item) ? api.handlerlDeleteLike(item._id) : api.handlerlLike(item._id);
    likeSwitch
        .then((item) => {
            card.handlerLike(item);
        })
        .catch((err) => {
            console.log(err);
        });
}