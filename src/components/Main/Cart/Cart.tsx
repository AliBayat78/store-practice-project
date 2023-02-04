import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Cart } from '../../../models/models'
import { deleteProduct } from '../../../Services/deleteProductService'
import './cart.css'

const CartComponent = (props: Cart) => {
  const { price, title, description, category, image, id } = props

  const deleteHandler = async (id: number): Promise<void> => {
    try {
      await deleteProduct(id).then((res) =>
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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-violet-300 w-1/3 h-96 box-content p-10 rounded-lg m-2">
      <div className="border-violet-700 p-5 w-30 h-30 bg-white rounded-lg">
        <img className="w-24 h-24 bg-transparent" src={`${image}`} />
      </div>
      <p className="text-xl my-2">{title}</p>
      <div className="text-left flex flex-col items-start w-full">
        <span>Category: {category}</span>
        <p className="text-limit">description: {description}</p>
        <h4 className="my-2">Price: ${price}</h4>
      </div>
      <button
        onClick={() => deleteHandler(id)}
        className="w-12 h-4 p-2.5 box-content flex justify-center items-center text-white rounded-lg bg-red-500 hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  )
}

export default CartComponent
