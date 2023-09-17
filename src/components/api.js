const config = {
  baseUrl: 'https://nomoreparties.co/v1/exp-mipt-fbc-1',
  headers: {
    authorization: '38eae398-e73c-4871-95f5-7d4224be2f0d',
    'Content-Type': 'application/json'
  }
}

const checkResponse=(res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getProfileInfo=()=> {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err));
}

export const updateProfileInfo=(name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(res => checkResponse(res));
}


export const getCards=() => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err));
}

export const addCard=(title, link) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: title,
      link: link
    })
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err));
}

export function removeCard(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err)); 
}

export const addLike=(cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err));
}

export const removeLike=(cardId)=> {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err)); 
}


export function changeAvatar(avatarLink) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarLink
    })
  })
  .then(res => checkResponse(res))
  .catch(err => console.log(err));
}