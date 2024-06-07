import { useContext } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import DropdownContext from '../context/DropdownContext'

interface IDropdownProps {
  id: string
  title: string
  children: React.ReactNode
}

function Dropdown(props: IDropdownProps): JSX.Element {
  const { id, title, children } = props

  const { openDropdown, setOpenDropdown } = useContext(DropdownContext)
  const isOpen = openDropdown === id

  const toggleDropdown = (id: string) => {
    if (openDropdown === id) {
      setOpenDropdown('')
    } else {
      setOpenDropdown(id)
    }
  }

  return (
    <div className="relative border-b border-white">
      <div
        className="flex justify-between items-center py-6 hover:cursor-pointer"
        onClick={() => toggleDropdown(id)}
      >
        <p className="text-white text-[26px] font-archiaregular m-0 hover:text-[#6E3DCD]">
          {title}
        </p>
        <BsChevronDown fill="#FFDD3F" />
      </div>
      <div
        className={`text-white font-archiaregular mb-[30px] ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
    </div>
  )
}

export default Dropdown
