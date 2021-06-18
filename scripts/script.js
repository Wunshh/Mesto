const cardsTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".grid-galery");

const popupTypeEditButtonOpen = document.querySelector(".profile__edit-button");
const popupTypeImageAddPhotoButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeEditButtonClose = popupTypeEdit.querySelector(".popup__close-button");
const formElementPopupTypeEdit = popupTypeEdit.querySelector(".form");
const nameInput = popupTypeEdit.querySelector(".form__user-info_user_name");
const jobInput = popupTypeEdit.querySelector(".form__user-info_user_job");

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
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
})

function handlerEsc(evt) {
    if (evt.key === 'Escape') {
        const modal = document.querySelector(".popup_open");
        closePopup(modal);
    }
}

function closePopup(modal) {
    modal.classList.remove("popup_open");
}

function openPopup(modal) {
    enableValidation(formArray);
    modal.classList.add("popup_open");
}

function openPopupTypeEdit() {
    openPopup(popupTypeEdit);

    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;
    enableValidation(formArray);
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

function createCard(cardData) {
    const cardTemplate = cardsTemplate.cloneNode(true);

    const {name, link} = cardData;

    const cardTitle = cardTemplate.querySelector(".card__title");
    const cardImage = cardTemplate.querySelector(".card__image");

    cardTitle.textContent = name;
    cardImage.alt = name;
    cardImage.src = link;

    setEventListeners(cardTemplate);

    const popupOpenImage = cardImage;
    const popupOpenTitle = cardTitle;

    popupOpenImage.addEventListener("click", function (element) {
        popupImage.src = link;
        popupImage.alt = name;
        popupTitle.textContent = name;

        openPopup(popupTypeImage);
    });

    return cardTemplate;
}

function addCard(element) {
    const newCard = createCard(element);
    cardList.append(newCard);
}

initialCards.forEach((element) => {
    addCard(element);
});

function handlerDelete(evt) {
    evt.target.closest(".card").remove();
}

function handlerLike(evt) {
    evt.target.classList.toggle("card__button_active");
}

function setEventListeners(element) {
    element.querySelector(".card__remove-button").addEventListener("click", handlerDelete);
    element.querySelector(".card__button").addEventListener("click", handlerLike);
}

function prependCard(element) {
    const prependCard = createCard(element);
    cardList.prepend(prependCard);
}

function handleFormElementNewCardeSubmit(submit) {
    submit.preventDefault();

    prependCard({ name: photoNameInput.value, link: photoSrcInput.value });

    closePopup(popupTypeNewCard);

    formElementNewCard.reset();

    toggleButtonState(inputList, buttonElement, config);
}

formElementNewCard.addEventListener("submit", handleFormElementNewCardeSubmit);