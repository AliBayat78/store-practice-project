import { useEffect, useState } from 'react'
import { useProducts, useProductsAction } from '../../context/ProductsProvider'
import { Cart } from '../../models/models'
import { getProducts } from '../../Services/getProductsService'
import CartComponent from './Cart/Cart'
import './main.css'

const Main = () => {
  const products = useProducts()
  const setProducts = useProductsAction()

  const [Product, setProduct] = useState<Cart>({
    title: '',
    description: '',
    category: '',
    image: '',
    price: 0,
    id: Math.random(),
  })

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
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-around items-center bg-violet-300 w-1/3 h-96 box-content p-10 rounded-lg m-2">
        <h3>Add Product</h3>
        <input
          className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
          placeholder="title"
          onChange={(e) => setProduct({ ...Product, title: e.target.value })}
        />
        <input
          className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
          placeholder="category"
          onChange={(e) => setProduct({ ...Product, category: e.target.value })}
        />
        <input
          className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
          placeholder="description"
          onChange={(e) => setProduct({ ...Product, description: e.target.value })}
        />
        <input
          className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
          placeholder="price"
          type="number"
          min="0.01"
          onChange={(e) => setProduct({ ...Product, price: Number(e.target.value) })}
        />
        <input
          type="file"
          className="text-violet-300 translate-x-1/4 ml-12"
          accept=".JPEG, .PNG, .jpg, image/*"
          name="img"
          onChange={(e) => setProduct({ ...Product, image: e.target.value })}
        />
        <button className="bg-white w-20 h-10 rounded-lg hover:bg-violet-300 hover:text-blue-500 hover:text-lg ease-in-out duration-300">
          Add
        </button>
      </div>

      <div className="w-full h-full flex flex-row flex-wrap justify-around items-center">
        {products?.map((item) => {
          return (
            <CartComponent
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
    </div>
  )
}

export default Main
