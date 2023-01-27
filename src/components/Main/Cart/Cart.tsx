import { CartProps } from '../../../models/models'
import './cart.css'

const Cart = (props: CartProps) => {
  const { price, title, description, category, image } = props

  return (
    <div className="flex flex-col justify-center items-center bg-violet-300 w-1/3 h-96 p-8 m-2">
      <div className="border-violet-700 p-5 w-30 h-30 bg-white rounded-lg">
        <img className="w-24 h-24 bg-transparent" src={`${image}`} />
      </div>
      <p className="text-xl my-2">{title}</p>
      <div className="text-left flex flex-col items-start w-full">
        <span>Category: {category}</span>
        <p className="text-limit">description: {description}</p>
        <h4 className="my-2">Price: ${price}</h4>
      </div>
    </div>
  )
}

export default Cart
