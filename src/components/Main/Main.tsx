import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useProducts, useProductsAction } from '../../context/ProductsProvider'
import { Cart } from '../../models/models'
import { getProducts } from '../../Services/CRUD/getProductsService'
import { PostProduct } from '../../Services/CRUD/postProductService'
import CartComponent from './Cart/Cart'
import SkeletonComponent from './Cart/Skeleton-Cart/SkeletonCart'
import ImageEditor from './ImageEditor/ImageEditor'

const Main = () => {
  const products = useProducts()
  const setProducts = useProductsAction()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [Product, setProduct] = useState<Cart>({
    title: '',
    description: '',
    category: '',
    image: undefined,
    price: 0,
    id: Math.random(),
  })

  //? Fetch Products when Components mount
  useEffect(() => {
    setTimeout(() => {
      getProducts()
        .then((res) => {
          setProducts(res)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err)
        })
    }, 2000)
  }, [])

  const addProductHandler = async (Product: Cart): Promise<void> => {
    try {
      await PostProduct(Product).then((res) =>
        toast(`status code: ${res.status} - Using Fake API`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        }),
      )

      //? empty the state and inputs
      setProduct({
        title: '',
        description: '',
        category: '',
        image: undefined,
        price: 0,
        id: Math.random(),
      })
      await getProducts()
        .then((res) => {
          setProducts(res)
        })
        .catch((err) => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-row justify-around items-center bg-violet-300 w-1/3 h-96 box-content p-10 rounded-lg m-2">
        {Product.image ? <ImageEditor image={Product.image} /> : null}
        <div className="flex flex-col justify-around items-center w-1/3 h-96 box-content p-10 rounded-lg m-2">
          <h3>Add Product</h3>
          <input
            className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
            placeholder="title"
            value={Product.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...Product, title: e.target.value })
            }
          />
          <input
            className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
            placeholder="category"
            value={Product.category}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...Product, category: e.target.value })
            }
          />
          <input
            className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
            placeholder="description"
            value={Product.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...Product, description: e.target.value })
            }
          />
          <input
            className="rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
            placeholder="price"
            type="number"
            value={Product.price}
            min="0.01"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProduct({ ...Product, price: Number(e.target.value) })
            }
          />
          <input
            type="file"
            className="text-violet-300 translate-x-1/4 ml-12"
            accept=".JPEG, .PNG, .jpg, image/*"
            name="img"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (!e.target.files) return
              setProduct({ ...Product, image: URL.createObjectURL(e.target.files[0]) })
            }}
          />
          <button
            onClick={() => addProductHandler(Product)}
            className="bg-white w-20 h-10 rounded-lg hover:bg-violet-300 hover:text-blue-500 hover:text-lg ease-in-out duration-300"
          >
            Add
          </button>
        </div>
      </div>
      <div className="w-full h-full flex flex-row flex-wrap justify-around items-center">
        {products.length > 6 &&
          !isLoading &&
          products.map((item) => (
            <CartComponent
              id={item.id}
              key={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        {isLoading &&
          [0, 0, 0, 0, 0, 0].map(() => {
            return <SkeletonComponent />
          })}
      </div>
    </div>
  )
}

export default Main
