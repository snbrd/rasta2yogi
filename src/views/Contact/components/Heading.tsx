import React from 'react'
import LionCoin from '../../../assets/coin-small.jpg'

export default function Heading({ title }: { title: string }) {
  return (
    <div
      className="w-full bg-blend-overlay bg-black bg-opacity-25 pb-32"
      style={{
        backgroundImage: `url(${LionCoin})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="max-w-screen-xl text-white flex flex-col mx-auto pt-8 pb-16 px-4 md:px-0 md:pt-32 md:pb-32">
        <h1 className="text-4xl font-bold text-center">{title}</h1>
      </div>
    </div>
  )
}
