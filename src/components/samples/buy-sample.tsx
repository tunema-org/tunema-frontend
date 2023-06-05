import React from 'react'
import { useState } from 'react'
import Dropdown from '../dropdown/dropdown-sample'
import IconHeart from '../icons/icon-heart'
import IconPlay from '../icons/icon-play'
import IconPlus from '../icons/icon-plus'
import IconDelete from '../icons/icon-delete'
import Waveform from '../waveform'

type SampleProps = {
  img: string
  name: string
  artist: string
  src: string
  time: string
  bpm: number
  keys: string
  keyScale: string
  price: number
}

const BuySample = (props: SampleProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered)
  }

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault()
  }

  return (
    <section className="flex flex-col">
      <div className="grid md:grid-cols-6 grid-cols-5 items-center gap-10 pr-2 font-medium py-3 hover:bg-primary-green/10 text-gray-4 px-2">
        <div className="flex flex-col justify-center content-center cursor-pointer">
          <IconDelete />
        </div>
        <div className="flex flex-col">
          <img
            className="w-[4rem] min-w-[3rem]"
            src={props.img}
            draggable={false}
            onDragStart={handleDragStart}
            alt="Cover"
          />
        </div>
        <div className="flex flex-col md:col-span-2 col-auto min-w-[100px]">
          <a
            className={`font-medium flex justify-start overflow-hidden ${
              isHovered ? 'hover:overflow-clip' : 'hover:overflow-hidden'
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
          >
            <span
              className={`inline-block transition-all duration-300 whitespace-nowrap ${
                isHovered ? 'marquee' : ''
              }`}
            >
              {props.name}
            </span>
          </a>
        </div>
        <p className="text-left sm:visible invisible">{props.time}</p>
        <button className="flex flex-col font-medium text-dark-green hover:underline justify-start items-start">
          {props.price}
        </button>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </section>
  )
}

export default BuySample
