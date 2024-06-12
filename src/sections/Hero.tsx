import Button from '../components/Button'
import { FaChartSimple } from 'react-icons/fa6'
import { BiLinkExternal } from 'react-icons/bi'
import { FaPercent } from 'react-icons/fa'
import { PiCurrencyDollarFill } from 'react-icons/pi'

function Hero(): JSX.Element {
  const contentTitle = 'text-white text-[28px] font-archia mt-0 mb-8'
  const contentText = 'text-white font-archia m-0'

  return (
    <div className="relative w-full mx-auto pt-[120px]">
      <div className="container">
        <div className="mx-auto max-w-screen-2xl">
          <div className="text-center">
            <h1 className="text-white text-[64px] mt-0 mb-4">
              0% interest loans
            </h1>
            <p className="text-[#989898] font-archia m-0">
              Borrow USDM against ETH
            </p>
          </div>

          <div className="flex items-center justify-center gap-[30px] mt-[50px]">
            <Button className="hover:cursor-not-allowed" tooltip="Coming soon">
              Borrow now
            </Button>
            <Button type="secondary" href="https://docs.marten.finance/">
              <div className="flex items-center gap-2">
                <span>Learn more</span>
                <BiLinkExternal />
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[30px] mt-[100px] p-[5rem] xl:flex-row">
        <div className="text-left max-w-[400px]">
          <FaChartSimple className="text-white text-[36px]" />
          <p className={contentTitle}>0% Interest Rate</p>
          <p className={contentText}>
            Marten charges a small, one-time fee to borrow USDM instead of
            highly variable interest rates.
          </p>
        </div>
        <div className="text-left max-w-[400px]">
          <FaPercent className="text-white text-[36px]" />
          <p className={contentTitle}>110% Collateral Ratio</p>
          <p className={contentText}>
            Marten's efficient liquidation mechanism allows users to get the
            most liquidity for their ETH
          </p>
        </div>
        <div className="text-left max-w-[400px]">
          <PiCurrencyDollarFill className="text-white text-[36px]" />
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
