import { useState } from 'react'
import Navigation from './Navigation'
import LogoImg from '../assets/logo.svg'
import { CiMenuBurger } from 'react-icons/ci'

function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <div className="w-full text-center md:py-3 xl:py-5">
      <div className="container">
        <div className="relative mx-auto flex items-center justify-between py-3.5 md:py-0">
          <a href="/">
            <img src={LogoImg} alt="" className="w-auto sm1:w-[53px]" />
          </a>
          <Navigation
            isOpen={mobileMenuOpen}
            onHide={() => setMobileMenuOpen(false)}
          />
          <div
            className="border-none text-xl md:hidden"
            onClick={handleMobileMenuOpen}
          >
            <CiMenuBurger className="text-white size-[20px] sm1:size-[25px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
