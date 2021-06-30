export const formArray = {
    formSelector: ".form",
    inputSelector: ".form__user-info",
    submitButtonSelector: ".form__save-button",
    inactiveButtonClass: "form__save-button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "form__error_visible",
};

export default class FormValidator {
    constructor(form, formSelector) {
        this._inputSelector = form.inputSelector;
        this._submitButtonSelector = form.submitButtonSelector;
        this._inactiveButtonClass = form.inactiveButtonClass;
        this._inputErrorClass = form.inputErrorClass;
        this._errorClass = form.errorClass;
        this._form = formSelector;
    }
   
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  _сheckInputValidity = (inputElement) => {
    if (!inputElement.validity.valid || inputElement.validity.typeMismatch) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _setEventListener = (formElements) => {
    const inputList = Array.from(formElements.querySelectorAll(this._inputSelector ));
    const buttonElement = formElements.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", () => {
            this._сheckInputValidity(inputElement);
            this._toggleButtonState(inputList, buttonElement);
        });
    });
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
    } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };

  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
  };

   enableValidation = () => {
    this._setEventListener(this._form);
      this._form.addEventListener("submit", (evt) => {
         evt.preventDefault();
      });
   } 
} 
