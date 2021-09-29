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
        <h2 className="text-3xl font-bold text-left">{lpLabel}</h2>
        <div className="coin-info flex  items-center">
          <div className="core p-2 flex-grow-1 text-center ">
            <span className="px-4 py-2 bg-orange-rasta text-white rounded-full">{multiplier}</span>
          </div>
          <div className="core p-2 text-left">
            <div className="bg-orange-rasta rounded-full w-12 h-12  ">
              <Image
                src={`/images/farms/${farmImage}.${farmImage === 'rasta' ? 'png' : 'svg'}`}
                alt={tokenSymbol}
                width={64}
                height={64}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <Image
        src={`/images/farms/${farmImage}.${farmImage === 'rasta' ? 'png' : 'svg'}`}
        alt={tokenSymbol}
        width={64}
        height={64}
      />
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading color="yellow" mb="4px">
          {lpLabel}
        </Heading>
        <Flex justifyContent="center">
          <MultiplierTag variant="yellow">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper> */}
    </>
  )
}

export default CardHeading
