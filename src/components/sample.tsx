import { useState } from 'react'
import Dropdown from './dropdown/dropdown-test'
import IconHeart from './icons/icon-heart'
import IconPlay from './icons/icon-play'
import IconPlus from './icons/icon-plus'
import Waveform from './waveform'

type SampleProps = {
  src: string
}

const Sample = (props: SampleProps) => {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(!playing)
  }

  return (
    <button onClick={handlePlay}>
      <div className="group grid md:grid-cols-12 grid-cols-9 items-center gap-10 hover:bg-slate-50 pr-2 font-body p-4">
        <img
          className="w-[4rem] min-w-[3rem]"
          src="/src/pic/components/player/alblumcover.png"
          alt=""
        />
        <button className="group-hover:visible invisible">
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
                fill="#D1F812"
              />
            </svg>
          )}
          <div className="flex-1" />
        </button>

        <div className="col-span-2 flex flex-col gap-3">
          <a className="truncate font-medium hover:underline cursor-pointer">
            Gh0st_wave_Surround_Sound_125BPM_Am.wav
          </a>
          <div className="flex gap-3 text-gray-500 text-small">
            <button className="hover:underline">Electornic</button>
            <button className="hover:underline">Synth</button>
          </div>
        </div>
        <div className="lg:col-span-3 col-auto max-w-[22rem] lg:block hidden">
          <Waveform src={props.src} playing={playing} />
        </div>
        <p className="">3:45</p>
        <p className="">125</p>
        <button className="flex flex-col font-medium text-dark-green hover:underline justify-start">
          $3.45
        </button>
        <div className="grid grid-cols-3 items-center justify-start gap-5 col-span-2">
          <button className="sm:block hidden">
            <IconHeart></IconHeart>
          </button>
          <button className="sm:block hidden">
            <IconPlus></IconPlus>
          </button>
          <button className="md:group-hover:visible">
            <Dropdown />
          </button>
        </div>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </button>
  )
}

export default Sample
