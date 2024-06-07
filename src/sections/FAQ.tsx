import { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import DropdownContext from '../context/DropdownContext'
import Dropdown from '../components/Dropdown'
import Button from '../components/Button'

function FAQ(): JSX.Element {
  const [openDropdown, setOpenDropdown] = useState('what-is-marten')

  return (
    <div className="relative w-full mx-auto py-[120px]">
      <div className="container">
        <SectionTitle>FAQ</SectionTitle>
        <div className="mx-auto lg:w-3/5 max-w-screen-2xl mt-[5rem]">
          <DropdownContext.Provider value={{ openDropdown, setOpenDropdown }}>
            <Dropdown id="what-is-marten" title="What is Marten Finance?">
              Marten enables users to mint USDM, a decentralized stablecoin
              fully collateralized by Ethereum LSD with a minimum collateral
              ratio of 110%. Our protocol represents capital efficiency,
              ensuring that liquidity is optimally utilized across collateral,
              redemption, liquidation, and staking pools.
            </Dropdown>
            <Dropdown id="use-marten" title="How can I use Marten Finance?">
              We offer strategic insights, advisory services and tailored
              solutions syncing your ventures seamlessly through the
              decentralized landscape.
            </Dropdown>
            <Dropdown
              id="key-benefits"
              title="What are the key benefits of Marten Finance?"
            >
              Join our vibrant Web3 hub. Network with industry builders, and be
              part of an elite community driving a decentralized future.
            </Dropdown>
            <Dropdown
              id="earn-money"
              title="How can I earn money on Marten Finance?"
            >
              Join our vibrant Web3 hub. Network with industry builders, and be
              part of an elite community driving a decentralized future.
            </Dropdown>
          </DropdownContext.Provider>

          <div className="flex items-center justify-center gap-[30px] mt-[50px]">
            <Button>Borrow now</Button>
            <Button type="secondary">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
