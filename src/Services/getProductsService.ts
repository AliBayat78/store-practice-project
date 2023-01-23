import http from './httpService'

export const getProducts = async () => {
  return await http.get('/products')
}
