let popupButtonOpen = document.querySelector(".profile__edit-button");
let popupClose = document.querySelector(".popup");
let popupButtonClose = document.querySelector(".popup__close-button");
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__user-info_name");
let jobInput = document.querySelector(".form__user-info_job");
let profilName = document.querySelector(".profile__name");
let profilCareer = document.querySelector(".profile__career");
let saveButton = document.querySelector(".form__save-button");

function closeOrOpenPopup() {
    popupClose.classList.toggle("popup_open");
}

popupButtonOpen.addEventListener("click", closeOrOpenPopup);

popupButtonClose.addEventListener("click", closeOrOpenPopup);

function formSubmitHandler(evt) {
    evt.preventDefault();

    profilName.textContent = nameInput.value;
    profilCareer.textContent = jobInput.value;

    saveButton.addEventListener("click", closeOrOpenPopup);
}

formElement.addEventListener("submit", formSubmitHandler);