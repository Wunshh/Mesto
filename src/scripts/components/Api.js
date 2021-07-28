const myId = "a872eaaa840b9f74f006f988";
const cardDeleteBottun = document.querySelector(".card__remove-button");

export default class Api {
  constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
  }

  getInitialCards() {
      return fetch(`${this._url}/cards`, {
          method: "GET",
          headers: this._headers,
      })
      .then((res) => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  postCards(item) {
      return fetch(`${this._url}/cards`, {
          method: "POST",
          body: JSON.stringify({
            name: item.name,
            link: item.link,
          }),
          headers: this._headers,
      })
      .then((res) => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  getUserInfo() {
      return fetch(`${this._url}/users/me`, {
          method: 'GET',
          headers: this._headers,
      })
      .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

