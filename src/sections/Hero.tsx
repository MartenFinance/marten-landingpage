import Button from '../components/Button'

function Hero(): JSX.Element {
  return (
    <div className="relative w-full mx-auto py-[120px]">
      <div className="container">
        <div className="mx-auto lg:w-1/2 max-w-screen-2xl">
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

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Hero
