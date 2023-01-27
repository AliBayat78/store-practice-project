import { CartProps } from '../../../models/models'

const Cart = (props: CartProps) => {
  const { price, title, description, category, image } = props

  return (
    <div className="flex flex-col justify-center items-center bg-violet-300 w-1/3 p-5">
      <div className="border-violet-700 p-5 w-30 h-30 bg-white rounded-lg">
        <img className="w-24 h-24 bg-transparent" src={`${image}`} />
      </div>
      <div className="flex flex-col justify-center items-start w-full">
        <h3>{title}</h3>
        <span>{category}</span>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  )
}

export default Cart
