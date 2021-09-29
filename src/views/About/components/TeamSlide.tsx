import React from 'react'
import Slide from '../../../components/SlickSlide/SlickSlide'

export default function TeamSlide({ items }: { items: any }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Slide items={items} />
    </div>
  )
}
