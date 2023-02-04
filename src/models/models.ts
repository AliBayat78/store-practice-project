export interface Cart {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

export type ReactChildrenProps = {
  children?: React.ReactNode
}
