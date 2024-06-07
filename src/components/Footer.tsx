import Starknet from '../assets/starknet.svg'
import { SiGitbook } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { FaTelegram, FaXTwitter } from 'react-icons/fa6'

function Footer(): JSX.Element {
  return (
    <div className="relative w-full mx-auto py-[40px]">
      <div className="container">
        <div className="mx-auto max-w-screen-2xl">
          <div className="flex flex-col justify-between items-center gap-5 md:flex-row md:gap-0">
            <p className="order-1 text-[#989898] font-archiaregular m-0">
              Marten Finance @2024
            </p>

            <div className="order-3 text-white font-archiaregular flex justify-center items-center gap-2 md:order-2">
              Powered by
              <a href="https://www.starknet.io/" target="_blank">
                <img src={Starknet} alt="" className="w-[120px] h-auto" />
              </a>
            </div>

            <div className="order-2 flex justify-between items-center gap-5 md:order-3">
              <a href="https://x.com/MartenFinance" target="_blank">
                <FaXTwitter className="text-[20px] text-white" />
              </a>
              <a href="#" target="_blank">
                <FaTelegram className="text-[20px] text-white" />
              </a>
              <a href="https://github.com/MartenFinance" target="_blank">
                <FaGithub className="text-[20px] text-white" />
              </a>
              <a href="https://docs.marten.finance/" target="_blank">
                <SiGitbook className="text-[20px] text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
