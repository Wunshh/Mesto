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
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);
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
        errorElement.textContent = "";
    };

    _сheckInputValidity = (inputElement) => {
        if (!inputElement.validity.valid || inputElement.validity.typeMismatch) {
            this._showInputError(inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(inputElement);
        }
    };

    resetValidation() {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement);
        });
    }

    _setEventListener = () => {
        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener("input", () => {
                this._сheckInputValidity(inputElement);
                this._toggleButtonState();
            });
        });
    };

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass);
        }
    };

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    };

    enableValidation = () => {
        this._setEventListener();
        this._form.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
    };
}
