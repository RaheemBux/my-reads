import axios from "axios"

const api = "https://reactnd-books-api.udacity.com"


// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(20).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  axios.get(`${api}/books/${bookId}`, { headers })

export const getAll = () =>
  axios.get(`${api}/books`, { headers })

export const create = (book) =>
  axios.post(`${api}/books`,book,{headers}).then(res => console.log(res))
 
export const update = (id, book) =>
  //axios.put(`${api}/books/${book.id}`,{headers},shelf)
  //console.log(book.id)
  fetch(`${api}/books}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ book })
  }).then(res => res.json())

export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
