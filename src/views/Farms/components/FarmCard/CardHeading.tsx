import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, Image } from 'rasta-uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import * as FaIcons from 'react-icons/fa'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  farmImage?: string
  tokenSymbol?: string
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 0.25rem;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
`

const CardHeading: React.FC<ExpandableSectionProps> = ({
  lpLabel,
  multiplier,
  isCommunityFarm,
  farmImage,
  tokenSymbol,
}) => {
  return (
    <>
      <div className="items-detail flex flex-col border-b-2 pb-2 border-black flex-grow-1">
        <h2 className="text-2xl font-bold text-left">{lpLabel}</h2>
        <div className="coin-info flex  items-center">
          {lpLabel.includes('RASTA') && (
            <div className="core text-center items-center flex-grow-1 flex flex-row space-x-2 border-2 border-orange-rasta rounded-full py-1 px-2">
              <FaIcons.FaCheckCircle className="fill-current text-orange-rasta mx-auto my-auto text-2xl" />
              <span className="text">CORE</span>
            </div>
          )}
          <div className="core p-1 lg:p-2 flex-grow-1 text-center ">
            <span className="px-2 py-1 bg-orange-rasta text-white rounded-full">{multiplier}</span>
          </div>
          <div className="core p-1 lg:p-2 text-left">
            <div className="bg-orange-rasta rounded-full w-12 h-12  ">
              <Image src={`/images/farms/${farmImage}.svg`} alt={tokenSymbol} width={64} height={64} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardHeading
