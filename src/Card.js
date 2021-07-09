const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupTitle = popupTypeImage.querySelector(".popup__title");
import { openPopup } from "./index.js";
export default class Card {
    constructor(data, templateSelector) {
        this._title = data.name;
        this._image = data.link;
        this._alt = data.name;
        this._templateSelector = document.querySelector(templateSelector);
    }

    _getTemplate() {
        const cardElement = this._templateSelector.content.querySelector(".card").cloneNode(true);

        return cardElement;
    }

    _setEventListeners() {
        this._element.querySelector(".card__image").addEventListener("click", () => {
            this._handlerOpenPopup();
        });

        this._element.querySelector(".card__button").addEventListener("click", () => {
            this._handlerLike();
        });

        this._element.querySelector(".card__remove-button").addEventListener("click", () => {
            this._handlerDelete();
        });
    }

    _handlerLike() {
        this._element.querySelector(".card__button").classList.toggle("card__button_active");
    }

    _handlerDelete() {
        this._element.remove();
    }

    _handlerOpenPopup() {
        popupTitle.textContent = this._title;
        popupImage.src = this._image;
        popupImage.alt = this._alt;
        openPopup(popupTypeImage);
    }

    generateCard() {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector(".card__title").textContent = this._title;
        this._element.querySelector(".card__image").src = this._image;
        this._element.querySelector(".card__image").alt = this._title;

        return this._element;
    }
}