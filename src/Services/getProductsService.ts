import { Cart } from '../models/models'
import http from './httpService'

export const getProducts = async (): Promise<Cart[]> => {
  return http
    .get('/products')
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
      return false
    })
}
