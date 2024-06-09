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
    <div className="relative">
      <div
        className="flex justify-between items-center py-8 hover:cursor-pointer"
        onClick={() => toggleDropdown(id)}
      >
        <p className="text-white text-[26px] font-archia m-0 hover:text-[#6E3DCD]">
          {title}
        </p>
        <BsChevronDown
          fill="#fff"
          className={`duration-500 ${isOpen ? 'rotate-180' : ''}`}
        />
      </div>
      <div
        className={`text-white font-archia mb-[30px] ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {children}
      </div>
      <div className="h-px w-full bg-gradient-to-r from-[#2451B4] to-[#6E3DCD]"></div>
    </div>
  )
}

export default Dropdown
