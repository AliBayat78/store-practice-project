import { useEffect } from 'react'
import { useProducts, useProductsAction } from '../../context/ProductsProvider'
import { getProducts } from '../../Services/getProductsService'

const Main = () => {
  const products = useProducts()
  const setProducts = useProductsAction()

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return <div></div>
}

export default Main
