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
          headers: this._headers,
          body: JSON.stringify({
            name: item.name,
            link: item.link,
          })
      })
      .then((res) => {
          if (res.ok) {
              return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
  }

  handlerdeleteCards(item) {
    return fetch(`${this._url}/cards/${item}`, {
        method: 'DELETE',
        headers: this._headers,
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
 

  handlerlLike(item) {
    return fetch(`${this._url}/cards/likes/${item}`, {
        method: 'PUT',
        headers: this._headers,
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
  
  handlerlDeleteLike(item) {
    return fetch(`${this._url}/cards/likes/${item}`, {
        method: 'DELETE',
        headers: this._headers,
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  getUserInfoFromServer() {
      return fetch(`${this._url}/users/me`, {
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

  updateUserData(item) {
    return fetch(`${this._url}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            name: item.name,
            about: item.about
        })
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  updateUserAvatar(item) {
    return fetch(`${this._url}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
            avatar: item.link,
        })
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

