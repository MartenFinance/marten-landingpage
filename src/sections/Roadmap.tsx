import SectionTitle from '../components/SectionTitle'
import Background from '../assets/Roadmap/background.svg'
import Timeline from '../assets/Roadmap/timeline.svg'

const contentWrap =
  'bg-gradient-to-r from-[#2451B4] to-[#6E3DCD] p-px rounded-[4px] max-w-[400px]'
const contentTitle =
  'text-[20px] font-archiaregular font-bold leading-[30px] mb-4 mt-0 text-white'
const contentText =
  'text-[14px] font-archiaregular leading-[24px] text-white m-0'

function Roadmap() {
  return (
    <div className="relative mx-auto w-full py-[40px]">
      <img
        src={Background}
        className="absolute w-auto h-full z-0 right-0 top-0"
      />
      <div className="container">
        <SectionTitle>Roadmap</SectionTitle>
        <div className="relative text-center mt-5">
          <img src={Timeline} className="hidden w-auto xl:block" />

          <div className="-mt-2 w-full flex auto-rows-fr flex-col items-center justify-center gap-[30px] lg:flex-row lg:flex-wrap">
            <div className={contentWrap}>
              <div className="bg-black p-[24px] text-left rounded-[4px] w-fit">
                <p className={contentTitle}>Q3/2024</p>
                <p className={contentText}>
                  Complete development of Marten V1: Allowing users to deposit
                  only ETH and receive USDM in return
                </p>
              </div>
            </div>
            <div className={contentWrap}>
              <div className="bg-black p-[24px] text-left rounded-[4px] w-fit">
                <p className={contentTitle}>Q4/2024</p>
                <ul className={contentText + ` list-disc pl-5`}>
                  <li>Optimize user experience</li>
                  <li>
                    Add more oracle providers to have multiple sources of price
                    feed - Support LSD tokens as collateral
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
                    Layer 2 solutions
                  </li>
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
