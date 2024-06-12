import { useState } from 'react'
import { BiLinkExternal } from 'react-icons/bi'
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
              <ul>
                <li className="mb-4">
                  USDM borrowers can use ETH as collateral to borrow USDM with
                  no interest, maintaining their ETH positions while investing.
                </li>
                <li className="mb-4">
                  Stability Providers stake USDM to earn liquidated collateral
                  and rewards, supporting system solvency.
                </li>
                <li className="mb-4">
                  MARTEN stakers get 100% of the protocol's revenue in USDM and
                  ETH LSD, boosting ecosystem growth. USDM redeemers exchange
                  USDM for collateral to keep its price at $1.
                </li>
              </ul>
            </Dropdown>
            <Dropdown
              id="key-benefits"
              title="What are the key benefits of Marten Finance?"
            >
              The key benefits of Marten Finance include:
              <ul>
                <li className="mb-4">
                  <strong>Zero-interest borrowing</strong> against ETH
                  collateral, enabling users to maintain their ETH positions
                  while accessing liquidity.
                </li>
                <li className="mb-4">
                  <strong>Stability Pool rewards</strong>, where users earn
                  liquidated collateral and incentives for maintaining system
                  solvency.
                </li>
                <li className="mb-4">
                  <strong>MARTEN stakers</strong> receive 100% of protocol
                  revenue, enhancing profitability for participants.
                </li>
                <li className="mb-4">
                  <strong>Efficient capital use</strong> and enhanced liquidity,
                  ensuring a secure and profitable DeFi platform.
                </li>
              </ul>
            </Dropdown>
            <Dropdown
              id="earn-money"
              title="How can I earn money on Marten Finance?"
            >
              You can earn money on Marten Finance in the following ways:
              <ul>
                <li className="mb-4">
                  <strong>Borrow USDM</strong>: Leverage your ETH collateral to
                  borrow USDM at a high loan-to-value ratio with no interest
                  charges.
                </li>
                <li className="mb-4">
                  <strong>Provide Stability</strong>: Stake USDM in the
                  Stability Pool to earn a share of liquidated collateral and
                  rewards for early participation.
                </li>
                <li className="mb-4">
                  <strong>Stake MARTEN</strong>: Stake MARTEN tokens to receive
                  100% of the protocol's revenue, paid out in USDM and ETH LSD.
                </li>
                <li className="mb-4">
                  <strong>Redeem USDM</strong>: Exchange USDM for collateral at
                  its face value to maintain USDM's peg to the US dollar.
                </li>
              </ul>
            </Dropdown>
          </DropdownContext.Provider>

          <div className="flex items-center justify-center gap-[30px] mt-[50px]">
            <Button tooltip="Coming soon" className="hover:cursor-not-allowed">
              Borrow Now
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
    </div>
  )
}

export default FAQ
