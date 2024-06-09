import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import Logo from '../assets/logo.svg'

interface IHeaderNavigationProps {
  isOpen?: boolean
  onHide?: any
  onClick?: () => void
}

function HeaderNavigation(props: IHeaderNavigationProps): JSX.Element {
  const { isOpen, onHide } = props

  const handleCloseMenu = () => {
    if (onHide) {
      onHide()
    }
  }

  const navLink =
    'text-[14px] lg:text-[16px] font-semibold font-archia leading-[20px] tracking-tight text-white'
  const mobileMenuLink =
    'text-jet font-bold font-archia text-center leading-[20px] py-8 tracking-tight text-white hover:bg-black hover:text-white'
  const navaMobile = 'text-[20px] font-bold leading-6 text-left'

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.getElementById(hash.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <>
      <div className="relative hidden md:flex md:items-center md:justify-end md:gap-5 lg:gap-10 xl:gap-16 2xl:gap-24">
        <a className={navLink} href="#docs">
          Docs
        </a>
        <a className={navLink} href="#faq">
          FAQ
        </a>
        <a className={navLink} href="#roadmap">
          Roadmap
        </a>
        <a className={navLink} href="#more">
          More
        </a>
      </div>
      <div
        className={`absolute left-0 flex h-screen w-full flex-col justify-between bg-darknavi p-4 pb-0 transition-all duration-[0.5s] ease-[ease] lg:hidden ${
          isOpen
            ? 'visible top-0 z-10 opacity-100'
            : 'invisible z-[-1] opacity-0'
        }`}
      >
        <div className="flex items-center justify-between text-xl text-white">
          <a href="/">
            <img src={Logo} alt="" className="h-auto w-[100px]" />
          </a>
          <AiOutlineClose onClick={onHide} size={28} className="text-white" />
        </div>
        <ul className="list-none p-0">
          <li className={mobileMenuLink} onClick={handleCloseMenu}>
            <a className={navaMobile} href="#docs">
              Docs
            </a>
          </li>
          <li className={mobileMenuLink} onClick={handleCloseMenu}>
            <a className={navaMobile} href="#faq">
              FAQ
            </a>
          </li>
          <li className={mobileMenuLink} onClick={handleCloseMenu}>
            <a className={navaMobile} href="#roadmap">
              Roadmap
            </a>
          </li>
          <li className={mobileMenuLink} onClick={handleCloseMenu}>
            <a className={navaMobile} href="#more">
              More
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default HeaderNavigation
