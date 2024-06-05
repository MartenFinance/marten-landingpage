import { useEffect, useState } from 'react'
import Navigation from './Navigation'
import LogoImg from '../assets/logo.svg'
import { CiMenuBurger } from 'react-icons/ci'

function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleScrollEvent = () => {
    if (typeof window !== 'undefined') {
      const _scrolled = window.scrollY || document.documentElement.scrollTop
      setScrolled(_scrolled > 100)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    handleScrollEvent()
  }, [])

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true)
  }

  return (
    <div className="w-full md:py-3 xl:py-5 bg-darknavi">
      <div className="container">
        <div className="relative z-10 mx-auto flex w-full items-center justify-between py-3.5 md:py-0">
          <a href="/">
            <img src={LogoImg} alt="" className="w-auto sm1:w-[53px]" />
          </a>
          <div className="mx-auto flex w-full items-center justify-center">
            <Navigation
              isOpen={mobileMenuOpen}
              onHide={() => setMobileMenuOpen(false)}
            />
          </div>
          <div
            className="border-none text-xl md:hidden"
            onClick={handleMobileMenuOpen}
          >
            <CiMenuBurger className="text-dark size-[20px] sm1:size-[25px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
