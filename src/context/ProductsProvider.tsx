import { Cart, ReactChildrenProps } from '../models/models'
import React, { useContext, useState } from 'react'

const ProductsContext = React.createContext<Cart[] | undefined>([])
const ProductsContextDispatcher = React.createContext<
  React.Dispatch<React.SetStateAction<Cart[] | undefined>>
>(() => {})

const ProductsProvider = ({ children }: ReactChildrenProps) => {
  const [products, setProducts] = useState<Cart[]>()

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  )
}

export default ProductsProvider

export const useProducts = () => useContext(ProductsContext)
export const useProductsAction = () => useContext(ProductsContextDispatcher)
