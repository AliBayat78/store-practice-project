import { CartProps } from '../../../models/models'

const Cart = (props: CartProps) => {
  const { price, title, description, category, image } = props

  return (
    <div>
      <img src={`${image}`} />
      <div>
        <h3>{title}</h3>
        <span>{category}</span>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  )
}

export default Cart
