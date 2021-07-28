export default class Card {
    constructor(item, handleCardClick, templateSelector) {
        this._title = item.name;
        this._image = item.link;
        this._alt = item.name;
        this._handleCardClick = handleCardClick; 
        this._templateSelector = document.querySelector(templateSelector);
    }

    _getTemplate() {
        const cardElement = this._templateSelector.content.querySelector(".card").cloneNode(true);

        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();

        this._element.querySelector(".card__title").textContent = this._title;
        this._element.querySelector(".card__image").src = this._image;
        this._element.querySelector(".card__image").alt = this._alt;

        return this._element;
    }
}

// _setEventListeners() {
//     this._element.querySelector(".card__button").addEventListener("click", () => {
//         this._handlerLike();
//     });

//     this._element.querySelector(".card__remove-button").addEventListener("click", () => {
//         this._handlerDelete();
//     });

//     this._element.querySelector(".card__image").addEventListener("click", () => {
//         this._handleCardClick(this._image, this._title);
//     });
// }

// _handlerLike() {
//     this._element.querySelector(".card__button").classList.toggle("card__button_active");
// }

// _handlerDelete() {
//     this._element.remove();
// }