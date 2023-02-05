import { AxiosResponse } from 'axios'
import { Cart } from '../models/models'
import http from './httpService'

export const PostProduct = (product: Cart): Promise<AxiosResponse<Cart, Cart>> => {
  return http.post('/products', { product })
}
