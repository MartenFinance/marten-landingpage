import Starknet from '../assets/starknet.svg'
import LogoImg from '../assets/logo.svg'

function Footer(): JSX.Element {
  return (
    <div className="mx-auto bg-darknavi pb-2 pt-5 sm:pb-4 lg:py-7 2xl:py-12">
      <div className="container">
        <div className="mx-auto w-full max-w-screen-2xl">
          <img src={LogoImg} alt="" />
          <div className="flex justify-center items-center gap-2">
            <p className="text-white font-inter">Powered by</p>
            <img src={Starknet} alt="" className="w-[120px] h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
