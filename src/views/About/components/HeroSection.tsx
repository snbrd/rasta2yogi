import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
  images: any
  title: string
  desc: string
  btn: any
}

export default function HeroSection({ images, title, desc, btn }: Props) {
  return (
    <div>
      <div
        className="flex w-full flex-col bg-cover bg-blend-overlay bg-black bg-opacity-25  bg-top text-white py-16 items-center md:pt-40 md:pb-64"
        style={{
          backgroundImage: `url(${images})`,
          backgroundSize: 'cover',
        }}
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4">{desc}</p>
        <a
          href={btn.link}
          className="bg-gradient-to-r from-yellow-rasta to-green-rasta mt-4 px-4 w-64 text-center py-2 rounded-xl"
          target="_blank"
          rel="noreferrer"
        >
          <button className="" type="button">
            {btn.label}
          </button>
        </a>
      </div>
    </div>
  )
}
