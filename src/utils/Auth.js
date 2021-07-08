class Auth {
  constructor({ url }) {
    this.url = url;
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  register = (name, email, password) => {
    return fetch(`${this.url}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  };
  login = (email, password) => {
    return fetch(`${this.url}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, email }),
    })
      .then(this._checkResponse)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      });
  };

  getContent = (token) => {
    return fetch(`${this.url}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      });
  };
}
const config = {
    url: 'https://api.movie.emil.nomoredomains.club/',
  };
  
const auth = new Auth(config)
export default auth;