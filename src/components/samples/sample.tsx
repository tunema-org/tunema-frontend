import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from '../dropdown/dropdown-sample'
import IconHeart from '../icons/icon-heart'
import IconPlay from '../icons/icon-play'
import IconPlus from '../icons/icon-plus'
import Waveform from '../waveform'

//fe be integration preparation
type SampleProps = {
  img: string
  name: string
  artist: string
  src: string
  time: number
  bpm: number
  keys: string
  keyScale: string
  price: number
  upload: string
  tags: string[]
}

const Sample = (props: SampleProps) => {
  const navigate = useNavigate()
  const [playing, setPlaying] = useState(false)

  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    setIsHovered((prevIsHovered) => !prevIsHovered)
  }

  const handlePlay = () => {
    setPlaying(!playing)
  }

  const handleFinish = () => {
    setPlaying(false)
  }

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault()
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')
    return `${minutes}:${formattedSeconds}`
  }

  return (
    <button onClick={handlePlay}>
      <div
        className={`group grid sm:grid-cols-10 md:grid-cols-13 lg:grid-cols-13 grid-cols-8 items-center hover:bg-primary-green/10 gap-10 pr-2 font-body p-4 ${
          playing ? 'bg-primary-green/10' : 'bg-none'
        }`}
      >
        <img
          className="object-cover w-[4rem] h-[4rem] min-h-[4rem] min-w-[4rem]"
          src={props.img}
          draggable={false}
          onDragStart={handleDragStart}
          alt="Cover"
        />
        <button className="sm:group-hover:visible invisible flex justify-center w-[26px]">
          {!playing && <IconPlay />}
          {playing && (
            <svg
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 2V22C22 22.5304 21.7893 23.0391 21.4142 23.4142C21.0391 23.7893 20.5304 24 20 24H15C14.4696 24 13.9609 23.7893 13.5858 23.4142C13.2107 23.0391 13 22.5304 13 22V2C13 1.46957 13.2107 0.960859 13.5858 0.585786C13.9609 0.210714 14.4696 0 15 0H20C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2ZM7 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V22C0 22.5304 0.210714 23.0391 0.585786 23.4142C0.960859 23.7893 1.46957 24 2 24H7C7.53043 24 8.03914 23.7893 8.41421 23.4142C8.78929 23.0391 9 22.5304 9 22V2C9 1.46957 8.78929 0.960859 8.41421 0.585786C8.03914 0.210714 7.53043 0 7 0Z"
                fill="#9CB719"
              />
            </svg>
          )}
        </button>

        <div className="col-span-2 flex flex-col">
          <a
            className={`font-medium flex justify-start overflow-hidden cursor-pointer ${
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
          <a
            className={`text-gray-500 text-small flex gap-3 justify-start overflow-clip cursor-pointer ${
              isHovered ? 'hover:overflow-clip' : 'hover:overflow-hidden'
            }`}
            // className="flex gap-3 justify-start text-gray-500 text-small lg:min-w-max min-w-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {props.tags.map((tag) => (
              <button
                className={`inline-block transition-all duration-300 whitespace-nowrap ${
                  isHovered ? 'marquee2' : ''
                }`}
              >
                {tag}
              </button>
            ))}
          </a>
        </div>
        <div className="md:col-span-3 max-w-[22rem] md:block hidden no-scrollbar">
          <Waveform
            src={props.src}
            playing={playing}
            onFinished={handleFinish}
          />
        </div>
        <p className="text-left sm:visible invisible">
          {formatTime(props.time)}
        </p>
        <p className="text-left sm:block hidden">{props.bpm}</p>
        <p className="text-left sm:block hidden">{props.keys}</p>
        <button
          onClick={(e) => {
            e.stopPropagation()
            navigate('/checkout')
          }}
          className="flex flex-col font-medium text-dark-green hover:underline justify-start items-start"
        >
          {props.price}
        </button>
        <div className="grid grid-cols-3 items-center justify-start gap-5 col-span-2">
          <button
            onClick={(e) => e.stopPropagation()}
            className="lg:flex justify-center w-[26px] hidden"
          >
            <IconHeart></IconHeart>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigate('/sample-cart')
            }}
            className="lg:flex justify-center w-[26px] hidden"
          >
            <IconPlus></IconPlus>
          </button>
          <button className="visible sm:group-hover:visible">
            <Dropdown
              name={props.name}
              artist={props.artist}
              time={props.time}
              bpm={props.bpm}
              keys={props.keys}
              keyScale={props.keyScale}
              price={props.price}
              upload={props.upload}
            />
          </button>
        </div>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </button>
  )
}

export default Sample
