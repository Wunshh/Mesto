import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, handleFormSubmit) {
        super(popupSelector);
        this._form = this._popup.querySelector(".form");
        this._handleFormSubmit = handleFormSubmit;
    }

    setEventListeners() {
        this._popup.addEventListener("submit", (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });

        super.setEventListeners();
    }

    _getInputValues() {
        this._inputList = this._form.querySelectorAll(".form__user-info");
        this._formValues = {};

        this._inputList.forEach((input) => (this._formValues[input.name] = input.value));

        return this._formValues;
    }

    close() {
        super.close();

        this._form.reset();
    }
}
