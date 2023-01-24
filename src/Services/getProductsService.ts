import { Cart } from '../models/models'
import http from './httpService'

export const getProducts = async (): Promise<Cart[] | Boolean> => {
  try {
    return http.get('/products').then((res) => res.data)
  } catch (error) {
    return false
  }
}
