class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl
    this._headers = headers
  }

  _getResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }

  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => this._getResponse(res))
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then(res => this._getResponse(res))
  }

  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(res => this._getResponse(res))
  }

  addCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(res => this._getResponse(res))
  }

  profileAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(res => this._getResponse(res))
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._getResponse(res))
  }

  changeLikeCardStatus(id, isLiked) {
    const like = (isLiked ? 'PUT' : 'DELETE')
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: like,
      headers: this._headers
    })
      .then(res => this._getResponse(res))
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
  headers: {
    authorization: '2e6c2161-1c89-4ad5-975b-fea0e2b810c0',
    'Content-Type': 'application/json'
  }
})

export default api