const cardsTemplate = document.querySelector("#template-card").content;
const cardList = document.querySelector(".grid-galery");

const popupTypeEditButtonOpen = document.querySelector(".profile__edit-button");
const popupTypeImageAddPhotoButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeEditButtonClose = popupTypeEdit.querySelector(".popup__close-button");
const formElement = popupTypeEdit.querySelector(".form");
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

function toggleModal(modal) {
    modal.classList.toggle("popup_open");
}

function openPopupTypeEdit() {
    toggleModal(popupTypeEdit);

    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;
}

popupTypeEditButtonOpen.addEventListener("click", openPopupTypeEdit);

popupTypeImageAddPhotoButton.addEventListener("click", () => toggleModal(popupTypeNewCard));
popupTypeImageCloseButton.addEventListener("click", () => toggleModal(popupTypeImage));
popupTypeEditButtonClose.addEventListener("click", () => toggleModal(popupTypeEdit));
popupNewCardButtonClose.addEventListener("click", () => toggleModal(popupTypeNewCard));

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;

    toggleModal(popupTypeEdit);
}

formElement.addEventListener("submit", handleProfileFormSubmit);

function createCard(cardData) {
    const cardTemplate = cardsTemplate.cloneNode(true);

    const cardTitle = cardTemplate.querySelector(".card__title");
    const cardImage = cardTemplate.querySelector(".card__image");

    const {name, link} = cardData;

    cardTitle.textContent = name;
    cardImage.alt = name;
    cardImage.src = link;
    
    setEventListeners(cardTemplate);

    const popupOpenImage = cardImage;
    const popupOpenTitle = cardTitle;

    popupOpenImage.addEventListener("click", function (element) {
        popupImage.src = popupOpenImage.src;
        popupImage.alt = popupOpenImage.alt;
        popupTitle.textContent = popupOpenTitle.textContent;

        toggleModal(popupTypeImage);
    });

    return cardTemplate;
}

function createCards(element) {
  const newCard = createCard(element);
  cardList.append(newCard);
}

initialCards.forEach((element) => {
    createCards(element);
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

function createNewCards(element) {
    const createNewCards = createCard(element);
    cardList.prepend(createNewCards);
  }

function handleFormElementNewCardeSubmit(submit) {
    submit.preventDefault();

    createNewCards({name: photoNameInput.value, link: photoSrcInput.value});

    toggleModal(popupTypeNewCard);

    formElementNewCard.reset();
}

formElementNewCard.addEventListener("submit", handleFormElementNewCardeSubmit);