const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupTitle = popupTypeImage.querySelector(".popup__title");

export default class Card {
    constructor(data, containerSelector) {
        this._title = data.name;
        this._image = data.link;
        this._alt = data.name;
        this._container = document.querySelector(containerSelector);
    }

    _setEventListeners() {
        this._element.querySelector(".card__remove-button").addEventListener("click", () => {
            this._handlerDelete();
        });

        this._element.querySelector(".card__button").addEventListener("click", () => {
            this._handlerLike();
        });

        this._element.querySelector(".card__image").addEventListener("click", () => {
            this._handlerOpenPopup();
        });

        document.addEventListener("keydown", () => {
            this._handlerClosePopup();
        });
    }

    _handlerDelete() {
        this._element.remove();
    }

    _handlerLike() {
        this._element.querySelector(".card__button").classList.toggle("card__button_active");
    }

    _handlerOpenPopup() {
        popupTitle.textContent = this._title;
        popupImage.src = this._image;
        popupImage.alt = this._image;
        popupTypeImage.classList.add("popup_open");
    }

    _handlerClosePopup() {
        popupTypeImage.classList.remove("popup_open");
    }

    _handlerEsc(evt) {
        if (evt.key === "Escape") {
            _handlerClosePopup();
        }
    }

    // _handleFormElementNewCardeSubmit(evt) {
    //   evt.preventDefault();

    //   this._element.querySelector(".card__title").value = this._title.userPhoto; 
    //   this._element.querySelector(".card__image").src = this._image.userScr;
    //   this._element.querySelector(".card__image").alt = this._title.userPhoto;
      
    //   evt.target.reset();
    // }

    _getTemplate() {
        const cardElement = document
        .querySelector("#template-card")
        .content
        .querySelector(".card")
        .cloneNode(true);
  
      return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
    
        this._element.querySelector(".card__title").textContent = this._title;
        this._element.querySelector(".card__image").src = this._image;
        this._element.querySelector(".card__image").alt = this._title;

        this._element.querySelector(".card__title").value = this._title.userPhoto; 
        this._element.querySelector(".card__image").value = this._image.userScr;
        this._element.querySelector(".card__image").value = this._title.userPhoto;
    
        return this._element;       
    }
}