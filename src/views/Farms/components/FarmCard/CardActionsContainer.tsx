import React, { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { provider } from 'web3-core'
import { getContract } from 'utils/erc20'
import { getAddress } from 'utils/addressHelpers'
import { Button, Flex, Text } from 'rasta-uikit'
import { Farm } from 'state/types'
import { useFarmFromSymbol, useFarmUser } from 'state/hooks'
import * as FaIcons from 'react-icons/fa'
import useI18n from 'hooks/useI18n'
import UnlockButton from 'components/UnlockButton'
import { useApprove } from 'hooks/useApprove'
import StakeAction from './StakeAction'
import HarvestAction from './HarvestAction'
import Wallet from '../CardElements/Wallet'

const Action = styled.div`
  padding-top: 16px;
`
export interface FarmWithStakedValue extends Farm {
  apy?: BigNumber
}

interface FarmCardActionsProps {
  farm: FarmWithStakedValue
  ethereum?: provider
  account?: string
  addLiquidityUrl?: string
}

const CardActions: React.FC<FarmCardActionsProps> = ({ farm, ethereum, account, addLiquidityUrl }) => {
  const TranslateString = useI18n()
  const [requestedApproval, setRequestedApproval] = useState(false)
  const { pid, lpAddresses } = useFarmFromSymbol(farm.lpSymbol)
  const { allowance, tokenBalance, stakedBalance, earnings } = useFarmUser(pid)
  const lpAddress = getAddress(lpAddresses)
  const lpName = farm.lpSymbol.toUpperCase()
  const isApproved = account && allowance && allowance.isGreaterThan(0)

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpAddress)
  }, [ethereum, lpAddress])

  const { onApprove } = useApprove(lpContract)

  const handleApprove = useCallback(async () => {
    try {
      setRequestedApproval(true)
      await onApprove()
      setRequestedApproval(false)
    } catch (e) {
      console.error(e)
    }
  }, [onApprove])

  const renderApprovalOrStakeButton = () => {
    return isApproved ? (
      <StakeAction
        stakedBalance={stakedBalance}
        tokenBalance={tokenBalance}
        tokenName={lpName}
        pid={pid}
        addLiquidityUrl={addLiquidityUrl}
      />
    ) : (
      <button type="button" disabled={requestedApproval} onClick={handleApprove} className="w-full flex flex-row text-white py-2 bg-gradient-to-r from-yellow-rasta to-green-rasta items-center justify-center space-x-4 text-xl rounded-xl cursor-pointer">
        <FaIcons.FaWallet/>
        <span>{TranslateString(758, 'Approve Contract')}</span>
      </button>
    )
  }

  return (
    <Action>
      {/* <Flex>
        <Text bold textTransform="uppercase" color="yellow" fontSize="12px" pr="3px"> */}
      {/* TODO: Is there a way to get a dynamic value here from useFarmFromSymbol? */}
      {/* RASTA
        </Text>
        <Text bold textTransform="uppercase" fontSize="12px">
          {TranslateString(1072, 'Earned')}
        </Text>
      </Flex>
      <HarvestAction earnings={earnings} pid={pid} /> */}
      {/* <Flex>
        <Text bold textTransform="uppercase" color="yellow" fontSize="12px" pr="3px">
          {lpName}
        </Text>
        <Text bold textTransform="uppercase" fontSize="12px">
          {TranslateString(1074, 'Staked')}
        </Text>
      </Flex> */}
      {!account ? <Wallet /> : renderApprovalOrStakeButton()}
    </Action>
  )
}

export default CardActions
