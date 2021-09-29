import React, { useEffect, useState, forwardRef, useImperativeHandle, Ref } from 'react'

import * as FaIcons from 'react-icons/fa'
import * as RiIcons from 'react-icons/ri'
import * as IoIcons from 'react-icons/io'
import * as Io5Icons from 'react-icons/io5'
import * as AiIcons from 'react-icons/ai'
import * as GiIcons from 'react-icons/gi'
import MenuItem from './MenuItem'

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)

  const menu = [
    {
      label: 'Home',
      path: '/',
      icon: <FaIcons.FaHome className="inline-block" />,
      parent: false,
      child: [],
    },
    {
      label: 'About',
      path: '/about',
      icon: <RiIcons.RiErrorWarningFill className="inline-block" />,
      parent: false,
      child: [],
    },
    {
      label: 'Trade',
      path: '#',
      icon: <IoIcons.IoIosSwap className="inline-block" />,
      parent: true,
      child: [
        {
          path: 'https://exchange.rasta.finance',
          label: 'Exchange',
        },
        {
          path: 'https://exchange.rasta.finance/#/pool',
          label: 'Liquidity',
        },
      ],
    },
    {
      label: 'Farms',
      path: '#',
      icon: <RiIcons.RiCoinLine className="inline-block" />,
      parent: true,
      child: [
        {
          path: '/farms',
          label: 'Mr. Rasta',
        },
        {
          path: 'https://mrasta-six.vercel.app/farms/history',
          label: 'Mrs. Rasta',
        },
      ],
    },
    {
      label: 'Pools',
      path: '#',
      icon: <GiIcons.GiTwoCoins className="inline-block" />,
      parent: true,
      child: [
        {
          path: '/pools',
          label: 'Mr. Rasta',
        },
        {
          path: 'https://m.rasta.finance/pools',
          label: 'Mrs. Rasta',
        },
      ],
    },
    {
      label: "LaunchPad - Coming Soon",
      path: '#',
      icon: <AiIcons.AiFillStar className="inline-block" />,
      parent: false,
      child: [],
    },
    {
      label: 'Community',
      path: '#',
      icon: <Io5Icons.IoChatboxEllipsesOutline className="inline-block" />,
      parent: true,
      child: [
        {
          path: "https://t.me/rastafinance",
          label: 'Telegram',
        },
        {
          path: 'https://coinmarketcap.com/currencies/rasta-finance/',
          label: 'Coin Market Cap',
        },
        {
          path: 'https://docs.rasta.finance',
          label: 'Whitepaper',
        },
        {
          path: 'https://rastafinance.medium.com',
          label: 'Medium',
        },
        {
          path: 'https://dappradar.com/binance-smart-chain/defi/rasta-finance',
          label: 'Dapp Radar',
        },
        {
          path: 'https://dex.guru/token/0xe3e8cc42da487d1116d26687856e9fb684817c52-bsc',
          label: 'Chart',
        },
      ],
    },
    {
      label: 'Contact',
      path: '/contact/',
      icon: <FaIcons.FaPhone className="inline-block transform rotate-90" />,
      parent: false,
      child: [],
    },
  ]

  return (
    <div className="navbar text-white">
      <span className="menu-bars text-2xl cursor-pointer">
        <FaIcons.FaBars onClick={showSidebar} />
      </span>
      <nav
        className={`h-full w-auto top-0 py-6 px-8 bg-gray-rasta z-50 fixed transition duration-1000 ${
          sidebar ? 'left-0' : '-left-full'
        }`}
      >
        <span className="menu-bars absolute right-4 text-3xl text-white cursor-pointer">
          <FaIcons.FaRegWindowClose onClick={showSidebar} />
        </span>
        <ul className="menu-items text-white mt-12 text-2xl space-y-4">
          {menu.map((item, index) => {
            return <MenuItem key={index} menu={item} showSidebar={showSidebar} />
          })}
        </ul>
      </nav>
    </div>
  )
}
