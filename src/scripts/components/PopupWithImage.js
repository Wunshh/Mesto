import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopup = this._popup.querySelector(".popup__image");
        this._titlePopup = this._popup.querySelector(".popup__subtitle");
    }

    open(link, name) {
        this._titlePopup.textContent = name;
        this._imagePopup.src = link;
        this._imagePopup.alt = name;

        super.open();
    }
}

