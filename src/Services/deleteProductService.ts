import http from "./httpService";

export const deleteProduct = (productId: number) => {
    return http.delete(`/products/${productId}`)
}