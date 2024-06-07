import Button from '../components/Button'
import { FaChartSimple } from 'react-icons/fa6'
import { FaPercent } from 'react-icons/fa'
import { PiCurrencyDollarFill } from 'react-icons/pi'

function Hero(): JSX.Element {
  const contentTitle =
    'text-[#16181f] text-[28px] font-archiaregular mt-0 mb-8'
  const contentText = 'text-[#16181f] font-archiaregular m-0'

  return (
    <div className="relative w-full mx-auto pt-[120px]">
      <div className="container">
        <div className="mx-auto max-w-screen-2xl">
          <div className="text-center">
            <p className="text-white text-[64px] font-archiaregular mt-0 mb-10">
              0% interest loans
            </p>
            <p className="text-[#989898] font-archiaregular m-0">
              Borrow USDM against ETH
            </p>
          </div>

          <div className="flex items-center justify-center gap-[30px] mt-[50px]">
            <Button>Borrow now</Button>
            <Button type="secondary">Learn more</Button>
          </div>
        </div>
      </div>
      <div className="bg-white flex flex-col items-center justify-center gap-[30px] mt-[50px] p-[3rem] xl:flex-row">
        <div className="text-left max-w-[400px]">
          <FaChartSimple className="text-[#16181f] text-[36px]" />
          <p className={contentTitle}>0% Interest Rate</p>
          <p className={contentText}>
            Marten charges a small, one-time fee to borrow USDM instead of
            highly variable interest rates.
          </p>
        </div>
        <div className="text-left max-w-[400px]">
          <FaPercent className="text-[#16181f] text-[36px]" />
          <p className={contentTitle}>110% Collateral Ratio</p>
          <p className={contentText}>
            Marten's efficient liquidation mechanism allows users to get the
            most liquidity for their ETH
          </p>
        </div>
        <div className="text-left max-w-[400px]">
          <PiCurrencyDollarFill className="text-[#16181f] text-[36px]" />
          <p className={contentTitle}>Unstoppable Stablecoin</p>
          <p className={contentText}>
            USDM is an immutable, decentralized stablecoin with no centralized
            counterparty risk.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
