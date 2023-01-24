import axios from 'axios'

axios.defaults.baseURL = 'https://fakestoreapi.com'

// const http = axios.create({ baseURL: 'https://fakestoreapi.com' })


const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
}

export default http
