import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useProductsAction } from '../../../context/ProductsProvider'
import { Cart } from '../../../models/models'
import { deleteProduct } from '../../../Services/CRUD/deleteProductService'
import { getProducts } from '../../../Services/CRUD/getProductsService'
import { updateProduct } from '../../../Services/CRUD/putProductService'
import './cart.css'

const CartComponent = (props: Cart) => {
  const setProducts = useProductsAction()
  const { price, title, description, category, image, id, adjustments } = props
  const [edit, setEdit] = useState<boolean>(false)
  const [updatedCart, setUpdatedCart] = useState<Cart>({
    category: '',
    title: '',
    description: '',
    price: 0,
    image: image,
    id: id,
    adjustments: { brightness: 100, contrast: 100, saturate: 100, blur: 0 },
  })

  const deleteHandler = async (id: number): Promise<void> => {
    try {
      await deleteProduct(id).then((res) =>
        toast(`status code: ${res.status} - Deleted - Using Fake API`, {
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
    } catch (error) {
      console.log(error)
    }
  }

  const updateHandler = async (id: number) => {
    if (edit) {
      try {
        await updateProduct(id, updatedCart).then((res) =>
          toast(`status code: ${res.status}- Edited - Using Fake API`, {
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
        await getProducts()
          .then((res) => {
            setProducts(res)
          })
          .catch((err) => console.log(err))
      } catch (error) {
        console.log(error)
      }
      setEdit((prevState) => !prevState)
    } else {
      setEdit((prevState) => !prevState)
    }
  }

  const getImageStyles = () => {
    const filters = `brightness(${adjustments?.brightness}%) contrast(${adjustments?.contrast}%) saturate(${adjustments?.saturate}%) blur(${adjustments?.blur}px)`
    return { filter: filters }
  }

  return (
    <div className="overflow-hidden flex flex-col justify-center items-center bg-violet-300 w-1/3 h-96 box-content p-10 rounded-lg m-2">
      <div className="border-violet-700 p-5 w-30 h-30 bg-white rounded-lg">
        <img className="w-24 h-24 bg-transparent" style={getImageStyles()} src={`${image}`} />
      </div>

      {/* Edit Button Clicked -> state edit become true -> Title Become Input and Reverse */}
      {edit ? (
        <input
          type="text"
          className="text-xl my-2 w-2/3 rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
          defaultValue={title}
          onChange={(e) => setUpdatedCart({ ...updatedCart, title: e.target.value })}
        />
      ) : (
        <p className="text-xl my-2">{title}</p>
      )}

      {/* Edit Button Clicked -> state edit become true -> Category, Description, Price Become Input and Reverse */}
      <div className="text-left flex flex-col items-start w-full">
        {edit ? (
          <>
            <input
              type="text"
              className="text-xl my-2 w-1/3 rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
              defaultValue={category}
              onChange={(e) => setUpdatedCart({ ...updatedCart, category: e.target.value })}
            />
            <textarea
              style={{ resize: 'none' }}
              className="text-xl my-2 w-2/3 h-28 rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
              defaultValue={description}
              onChange={(e) => setUpdatedCart({ ...updatedCart, description: e.target.value })}
            />
            <input
              type="number"
              min={0.01}
              className="text-xl my-2 w-1/3 rounded-lg outline-none border-2 border-blue-400 focus:border-blue-700 p-0.5 ease-in-out duration-300"
              defaultValue={price}
              onChange={(e) => setUpdatedCart({ ...updatedCart, price: Number(e.target.value) })}
            />
          </>
        ) : (
          <>
            <span>Category: {category}</span>
            <p className="text-limit">description: {description}</p>
            <h4 className="my-2">Price: ${price}</h4>
          </>
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-row">
        <button
          onClick={() => deleteHandler(id)}
          className="w-12 h-4 mr-5 p-2.5 box-content flex justify-center items-center text-white rounded-lg bg-red-500 hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={() => updateHandler(id)}
          className="w-12 h-4 p-2.5 box-content flex justify-center items-center text-white rounded-lg bg-blue-500 hover:bg-blue-700"
        >
          {edit ? 'Update' : 'Edit'}
        </button>
      </div>
    </div>
  )
}

export default CartComponent
