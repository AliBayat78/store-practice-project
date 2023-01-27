export interface Cart {
  id: number
  title: String
  price: String
  category: String
  description: String
  image: String
}

export type ReactChildrenProps = {
  children?: React.ReactNode
}

export interface CartProps {
  title: String
  description: String
  price: String
  image: String
  category: String
  id: number
}
