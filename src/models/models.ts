export interface Cart {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: any
  adjustments?: adjustmentsType
}

export interface adjustmentsType {
  brightness: number
  contrast: number
  saturate: number
  blur: number
}

export type ReactChildrenProps = {
  children?: React.ReactNode
}

export interface menuItemsType {
  title: string
  selected: boolean
  id: number
}
