export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add("popup_open");
        document.addEventListener("keydown", this._handlerEscClose);
    }

    close() {
        this._popup.classList.remove("popup_open");
        document.removeEventListener("keydown", this._handlerEscClose)
    }

    _handlerEscClose(evt) {
        if (evt.key === "Escape") {
            const modal = this._popup.querySelector(".popup_open");
            this.close(modal);
        }
    }

    _handleCloseOverlay(evt) {
        if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__close-button")) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector(".popup__close-button").addEventListener("click", () => {
            this.close();
        });

        this._popup.addEventListener("click", (evt) => {
            this._handleCloseOverlay(evt);
        });
    }
}
