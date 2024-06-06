import Starknet from '../assets/starknet.svg'

function Footer(): JSX.Element {
  return (
    <div className="relative w-full mx-auto py-[40px]">
      <div className="container">
        <div className="mx-auto lg:w-1/2 max-w-screen-2xl">
          <div className="flex flex-col justify-between items-center gap-5 md:flex-row md:gap-0">
            <p className="text-[#989898] font-archiaregular m-0">
              Marten Finance @2024
            </p>
            <div className="text-white font-archiaregular flex justify-center items-center gap-2">
              Powered by
              <a href="https://www.starknet.io/" target="_blank">
                <img src={Starknet} alt="" className="w-[120px] h-auto" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
