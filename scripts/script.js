const popupTypeEditButtonOpen = document.querySelector(".profile__edit-button");
const popupTypeImageAddPhotoButton = document.querySelector(".profile__add-button");

const popupTypeEdit = document.querySelector(".popup_type_edit");
const popupTypeEditButtonClose = popupTypeEdit.querySelector(".popup__close-button");
const formElement = popupTypeEdit.querySelector(".form");
const nameInput = popupTypeEdit.querySelector(".form__user-info_user_name");
const jobInput = popupTypeEdit.querySelector(".form__user-info_user_job");
const saveButton = popupTypeEdit.querySelector(".form__save-button");

const popupTypeNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardButtonClose = popupTypeNewCard.querySelector(".popup__close-button");
const photoNameInput = popupTypeNewCard.querySelector(".form__user-info_photo_name");
const photoSrcInput = popupTypeNewCard.querySelector(".form__user-info_photo_src");
const formElementNewCard = popupTypeNewCard.querySelector(".form");
const popupTypeNewCardSaveButton = popupTypeNewCard.querySelector(".form__save-button");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupTypeImageCloseButton = popupTypeImage.querySelector(".popup__close-button");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupTitle = popupTypeImage.querySelector(".popup__title");

const profileName = document.querySelector(".profile__name");
const profileCareer = document.querySelector(".profile__career");

const cardButton = document.querySelector(".card__button");
const cardList = document.querySelector(".grid-galery");

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
popupNewCardButtonClose.addEventListener("click", () => toggleModal(popupTypeNewCard));
popupTypeImageCloseButton.addEventListener("click", () => toggleModal(popupTypeImage));
popupTypeEditButtonClose.addEventListener("click", () => toggleModal(popupTypeEdit));

function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;

    toggleModal(popupTypeEdit);
}

formElement.addEventListener("submit", handleProfileFormSubmit);




// function initialCardElement(element) {
//     const cardTemplate = document.querySelector("#template-card").content.cloneNode(true);

//     cardTemplate.querySelector(".card__title").textContent = element.name;
//     cardTemplate.querySelector(".card__image").src = element.link;
//     cardTemplate.querySelector(".card__image").alt = element.name;

//     const popupOpenImage = cardTemplate.querySelector(".card__image");

//     const popupOpenTitle = cardTemplate.querySelector(".card__title");
//     console.log(popupOpenTitle);

//     popupOpenImage.addEventListener("click", function (element) {
//         toggleModal(popupTypeImage);
//         popupImage.src = popupOpenImage.src;
//         popupImage.alt = popupOpenImage.alt;
//         popupTitle.textContent = popupOpenTitle.textContent;
//     });

//     setEventListeners(cardTemplate);

//     cardList.append(cardTemplate);
// }

function createCard(element) {
   const cardTemplate = document.querySelector("#template-card").content.cloneNode(true);
   cardTemplate.querySelector(".card__title").textContent = element.name;
   cardTemplate.querySelector(".card__image").src = element.link;
   cardTemplate.querySelector(".card__image").alt = element.name;
   
   setEventListeners(cardTemplate);

    const popupOpenImage = cardTemplate.querySelector(".card__image");

    const popupOpenTitle = cardTemplate.querySelector(".card__title");

    popupOpenImage.addEventListener("click", function (element) {
        popupImage.src = popupOpenImage.src;
        popupImage.alt = popupOpenImage.alt;
        popupTitle.textContent = popupOpenTitle.textContent;

        toggleModal(popupTypeImage);
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

// function initialNewCard(submit) {
//     const newCardTemplate = document.querySelector("#template-card").content.cloneNode(true);

//     newCardTemplate.querySelector(".card__title").textContent = photoNameInput.value;
//     newCardTemplate.querySelector(".card__image").src = photoSrcInput.value;
//     newCardTemplate.querySelector(".card__image").alt = photoNameInput.value;

//     const popupOpenImage = newCardTemplate.querySelector(".card__image");

//     const popupOpenTitle = newCardTemplate.querySelector(".card__title");
//     console.log(popupOpenTitle);

//     popupOpenImage.addEventListener("click", function (element) {
//         toggleModal(popupTypeImage);
//         popupImage.src = popupOpenImage.src;
//         popupImage.alt = popupOpenImage.alt;
//         popupTitle.textContent = popupOpenTitle.textContent;
//     });

//     setEventListeners(newCardTemplate);

//     cardList.prepend(newCardTemplate);

//     toggleModal(popupTypeNewCard);

//     submit.preventDefault();

//     formElementNewCard.reset()
// }

// popupTypeNewCardSaveButton.addEventListener("click", initialNewCard);