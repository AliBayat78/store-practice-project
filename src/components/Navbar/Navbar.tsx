import { arrayMoveMutable } from 'array-move'
import { useState } from 'react'
import { isTemplateSpan } from 'typescript'
import { menuItemsType } from '../../models/models'

const Navbar = () => {
  const [menuItems, setMenuItems] = useState<menuItemsType[]>([
    { title: 'Home', selected: true, id: 1 },
    { title: 'Cart', selected: false, id: 2 },
    { title: 'Shoes', selected: false, id: 3 },
    { title: 'Shirts', selected: false, id: 4 },
    { title: 'Hats', selected: false, id: 5 },
  ])

  const selectItemHandler = (id: number) => {
    const cloneState = [...menuItems]

    cloneState.map((item) => {
      if (item.selected) {
        item.selected = false
      }
      return item
    })

    const index = cloneState.findIndex((item) => item.id === id)
    const copySelectedItem = { ...menuItems[index] }

    copySelectedItem.selected = true
    cloneState[index] = copySelectedItem

    // changing the index in state
    arrayMoveMutable(cloneState, index, 2)

    setMenuItems(cloneState)
  }

  return (
    <div className="bg-violet-200 w-full h-12 flex flex-row justify-center items-center">
      {menuItems.map((item) => {
        return (
          <button
            onClick={() => selectItemHandler(item.id)}
            key={Math.random()}
            className={`hover:bg-white hover:text-violet-800 m-5 p-2 rounded-md ${
              item.selected ? 'bg-white text-violet-800' : ''
            }`}
          >
            {item.title}
          </button>
        )
      })}
    </div>
  )
}

export default Navbar
