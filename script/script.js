let popupButtonOpen = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector(".popup");
let popupButtonClose = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__user-info_user_name");
let jobInput = document.querySelector(".form__user-info_user_job");
let profileName = document.querySelector(".profile__name");
let profileCareer = document.querySelector(".profile__career");
let saveButton = document.querySelector(".form__save-button");

function openPopup() {
    popupClose.classList.add("popup_open");

    nameInput.value = profileName.textContent;
    jobInput.value = profileCareer.textContent;
}

function closePopup() {
    popupClose.classList.remove("popup_open");
}


popupButtonOpen.addEventListener("click", openPopup);

popupButtonClose.addEventListener("click", closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileCareer.textContent = jobInput.value;

    closePopup()
}

formElement.addEventListener("submit", formSubmitHandler);