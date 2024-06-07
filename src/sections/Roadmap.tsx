import SectionTitle from '../components/SectionTitle'
import Timeline from '../assets/Roadmap/timeline.svg'

const contentWrap =
  'bg-gradient-to-r from-[#2451B4] to-[#6E3DCD] p-px rounded-[4px] sm:max-w-[400px]'
const contentTitle =
  'text-[20px] font-archiaregular font-bold leading-[30px] mb-4 mt-0 text-white'
const contentText =
  'text-[14px] font-archiaregular leading-[24px] text-white m-0'

function Roadmap() {
  return (
    <div className="relative w-full pt-[60px] pb-[120px]">
      <div className="container">
        <SectionTitle>Roadmap</SectionTitle>
        <div className="text-center mt-10 xl:mt-5">
          <img src={Timeline} className="hidden mx-auto w-auto xl:block" />

          <div className="w-full flex flex-col items-center justify-center gap-[30px] lg:flex-row lg:flex-wrap lg:items-start">
            <div className={contentWrap}>
              <div className="bg-black p-[24px] text-left rounded-[4px] w-fit">
                <p className={contentTitle}>Q3/2024</p>
                <ul className={contentText + ` list-disc pl-5`}>
                  <li>Testnet version release</li>
                  <li>
                    Finalize development of core features : USDM Borrowing, USDM
                    Staking, and MARTEN Staking
                  </li>
                </ul>
              </div>
            </div>
            <div className={contentWrap}>
              <div className="bg-black p-[24px] text-left rounded-[4px] w-fit">
                <p className={contentTitle}>Q4/2024</p>
                <ul className={contentText + ` list-disc pl-5`}>
                  <li>Mainnet launch</li>
                  <li>Optimize user experience</li>
                  <li>
                    Add more oracle providers to have multiple sources of price
                    feed
                  </li>
                </ul>
              </div>
            </div>
            <div className={contentWrap}>
              <div className="bg-black p-[24px] text-left rounded-[4px] w-fit">
                <p className={contentTitle}>Q1/2025</p>
                <ul className={contentText + ` list-disc pl-5`}>
                  <li>
                    MartenV2 will upgrade to a multichain system across various
                    Layer 2 blockchains
                  </li>
                  <li>Support LSD tokens as collateral</li>
                  <li>
                    Expanding our reach and providing users with greater
                    flexibility and access to our services
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
