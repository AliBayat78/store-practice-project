import { Cart } from '../../models/models'
import http from '../httpService'

export const updateProduct = (id: number, product: Cart) => {
  return http.put(`/products/${id}`, product)
}
