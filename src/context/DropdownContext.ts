import { createContext } from 'react'

type DropdownContextType = {
  openDropdown: string
  setOpenDropdown: (id: string) => void
}

const DropdownContext = createContext<DropdownContextType>({
  openDropdown: '',
  setOpenDropdown: () => {},
})

export default DropdownContext
