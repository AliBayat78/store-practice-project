export interface Cart {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: any
}

export type ReactChildrenProps = {
  children?: React.ReactNode
}

export interface menuItemsType {
  title: string
  selected: boolean
  id: number
}

export interface adjustments {
  brightness: number
  contrast: number
  saturate: number
  blur: number
}
