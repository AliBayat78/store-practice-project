import { useEffect } from 'react'
import { useProducts, useProductsAction } from '../../context/ProductsProvider'
import { getProducts } from '../../Services/getProductsService'

const Main = () => {
  const products = useProducts()
  const setProducts = useProductsAction()

  useEffect(() => {
    console.log(getProducts())
    const data = getProducts().then((resp) => {
      return resp
    })
    console.log(data)
  }, [])

  return <div></div>
}

export default Main
