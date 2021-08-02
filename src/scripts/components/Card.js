export default class Card { 
    constructor({ item, handleCardClick, templateSelector, userId, handlerOpenDeletePopup, handlerLikeAdd }) { 
        this._item = item;
        this._title = item.name; 
        this._image = item.link; 
        this._alt = item.name;
        this._likes = item.likes;
        this._ownerId = item.owner._id;
        this._cardId = item._id;
        this._userId = userId;
        this._templateSelector = document.querySelector(templateSelector); 
        this._handleCardClick = handleCardClick;
        this.handlerOpenDeletePopup = handlerOpenDeletePopup;
        this._handlerLikeAdd = handlerLikeAdd;
    } 
 
    _getTemplate() { 
        const cardElement = this._templateSelector.content.querySelector(".card").cloneNode(true); 
 
        return cardElement; 
    } 
 
    _setEventListeners() { 
        this._element.querySelector(".card__button").addEventListener("click", () => { 
            this._handlerLikeAdd(); 
        }); 
 
        this._element.querySelector(".card__remove-button").addEventListener("click", () => { 
            this.handlerOpenDeletePopup(); 
        }); 
 
        this._element.querySelector(".card__image").addEventListener("click", () => { 
            this._handleCardClick(this._image, this._title); 
        }); 
    } 

    _deleteButton() {
        if (this._ownerId === this._userId) {
        this._element.querySelector(".card__remove-button").classList.add("card__remove-button_visible");
       }
    }
    
    likeContains() {
        return this._isLikeContains
    }

    handlerLike() { 
        this._isLikeContains = this._likes.filter((item) => {
           return item._id === this._userId
        }).length > 0;
        if (this._isLikeContains) {
            this._element.querySelector(".card__button").classList.add("card__button_active");
        } else {
            this._element.querySelector(".card__button").classList.remove("card__button_active"); 
        }
    } 
 
    handlerDeleteCard() { 
        this._element.remove(); 
    }

    handlerCardIdReturn() {
        return this._cardId;
    }
 
    generateCard() { 
        this._element = this._getTemplate(); 
 
        this._setEventListeners(); 

        this._deleteButton();

        this.handlerLike(this._item);

        this._element.querySelector(".card__title").textContent = this._title; 
        this._element.querySelector(".card__image").src = this._image; 
        this._element.querySelector(".card__image").alt = this._alt;
        this._element.querySelector(".card__botton-counter").textContent = Array.from(this._likes).length;
 
        return this._element; 
    } 
}                                       