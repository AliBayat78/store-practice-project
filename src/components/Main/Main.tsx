import { useEffect } from 'react'
import { useProducts, useProductsAction } from '../../context/ProductsProvider'
import { getProducts } from '../../Services/getProductsService'
import Cart from './Cart/Cart'
import './main.css'

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

  return (
    <div className="w-full h-full flex flex-row flex-wrap justify-around items-center">
      {products?.map((item) => {
        return (
          <Cart
            id={item.id}
            key={item.id}
            title={item.title}
            category={item.category}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )
      })}
    </div>
  )
}

export default Main
