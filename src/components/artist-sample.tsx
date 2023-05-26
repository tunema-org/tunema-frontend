import React from 'react'
import { useState } from 'react'
import Container from './container'
import IconDropdown from './icons/icon-dropdown'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'
import IconPlay from './icons/icon-play'
import Dropdown from './dropdown/dropdown-test'
import Waveform from './waveform'

type SampleProps = {
  src: string
}

const ArtistSample = (props: SampleProps) => {
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    setPlaying(!playing)
  }

  const handleFinish = () => {
    setPlaying(false)
  }
  return (
    <>
      <div className="group grid sm:grid-cols-12 grid-cols-9 items-center gap-10 hover:bg-slate-50 pr-2 font-body p-4">
        <img
          className="w-[4rem] min-w-[3rem]"
          src="/src/pic/components/player/alblumcover.png"
          alt=""
        />
        <button className="group-hover:visible invisible">
          <IconPlay />
        </button>

        <div className="col-span-2 min-w-[100px] flex flex-col gap-3">
          <a className="truncate font-medium hover:underline cursor-pointer">
            Gh0st_wave_Surround_Sound_125BPM_Am.wav
          </a>
          <div className="flex gap-5 text-gray-500 text-small">
            <button className="hover:underline">Electronic</button>
            <button className="hover:underline">Synth</button>
          </div>
        </div>
        <div className="md:col-span-3 col-auto max-w-[22rem] md:visible invisible">
          <Waveform
            src={props.src}
            playing={playing}
            onFinished={handleFinish}
          />
        </div>
        <p className="sm:block hidden">3:45</p>
        <p className="sm:block hidden">125</p>
        <div className="flex-col justify-center gap-5 lg:col-span-2 md:col-span-1 col-span-3">
          3 days ago
        </div>
        <div className="text-gray-500 group-hover:visible invisible">
          <Dropdown />
        </div>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </>
  )
}

export default ArtistSample
