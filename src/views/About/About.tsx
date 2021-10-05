import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as FaIcons from 'react-icons/fa'
import * as Io5Icons from 'react-icons/io5'
import Header from './components/HeroSection'
import Card from './components/CardSection'
import Dsc from './components/DescriptionSection'
import CardButton from './components/CardButton'
import TeamSlide from './components/TeamSlide'
import LetsConnect from './components/LetsConnect'
import LeafBg from '../../assets/leaf-bg.jpg'
import AboutHeader from '../../assets/lion-about.jpg'
import BurdyProfile from '../../assets/senor-burdy.png'
import EvoProfile from '../../assets/senor-evo.png'

export default function About() {
  const cardSection = [
    {
      icon: <AiIcons.AiFillQuestionCircle />,
      title: 'What’s Rasta?',
      desc: `The precious $RASTA token is the official Token of the RastaFinance eco-system.
        Through its decentralized exchange (DEX) and architecture, RastaFinance is putting the people's money, back into the people's hands `,
    },
    {
      icon: <FaIcons.FaLink />,
      title: 'Connect Directly to Your Wallet',
      desc: `The Rasta.Finance platform connects straight to your smart chain wallet,
        in order to ensure swift interaction with our DeFi protocols. Please find the guide on connecting your Binance Smart Chain (BSC) enabled wallet. `,
    },
    {
      icon: <FaIcons.FaUsers />,
      title: 'Join a Community that Cares',
      desc: `Farming the $RASTA token involves staking your coins to provide liquidity for the
        RastaDEX. By a whole community doing this together, we grow the community and make it easier for new Rastas to join`,
    },
  ]
  const cardBtnItem = [
    { label: 'Rasta<br>Token', link: '#' },
    { label: 'MRasta<br>Token', link: '#' },
    { label: 'Factory<br>Address', link: '#' },
    { label: 'Router<br>Address', link: '#' },
    { label: 'Bouyancy<br>Fund Address', link: '#' },
    { label: 'Rasta <br>Trust Fund <br>Address', link: '#' },
  ]

  const team = [
    {
      name: '@SeñorBurdy',
      position: 'Founder & CEO',
      avatar: BurdyProfile,
    },
    {
      name: '@SeñorEVO',
      position: 'RastaOperations',
      avatar: EvoProfile,
    },
    {
      name: '@typhoncrypto',
      position: 'RastaDevelopment',
      avatar: EvoProfile,
    },
  ]
  const letsConnect = {
    heading: 'Rasta.Finance',
    subHeading: "Let's connect and get to know each other",
    listContent: ['Decentralized', 'Community Driven', 'For The People.', 'By The People.'],
    textContent: `Best way to get in touch with us is to join the Telegram community, our admins are from all over the world and we are ready to answer any questions you may have.`,
    link: {
      btn: {
        joinNowLink: 'https://t.me/rastafinance',
        farmRastaLink: '/',
      },
      social: [
        {
          icon: <FaIcons.FaTwitter />,
          link: 'https://www.twitter.com/RastaFinance',
        },
        {
          icon: <FaIcons.FaTelegramPlane />,
          link: 'https://www.t.me/rastafinance',
        },
        {
          icon: <Io5Icons.IoLogoTiktok />,
          link: 'https://www.tiktok.com/@rasta.finance',
        },
        {
          icon: <FaIcons.FaMediumM />,
          link: 'https:///rastafinance.medium.com',
        },
      ],
    },
  }
  return (
    <div>
      <Header
        images={AboutHeader}
        title="About Us"
        desc="We are a big team with an even bigger heart."
        btn={{ link: 'https://docs.rasta.finance', label: 'Read The Docs' }}
      />
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row  pb-8">
        <Card items={cardSection} />
      </section>
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row py-8 md:py-16">
        <Dsc />
      </section>
      <section className=" w-full flex bg-white md:mx-auto items-center px-8 md:px-0 md:flex-row py-8 md:py-16">
        <CardButton items={cardBtnItem} />
      </section>
      <section className=" w-full bg-white md:mx-auto items-center  md:pt-16">
        <TeamSlide items={team} />
      </section>
      <section className=" w-full flex bg-white md:mx-auto items-center md:flex-row -mt-64 ">
        <LetsConnect items={letsConnect} bg={LeafBg} />
      </section>
    </div>
  )
}
