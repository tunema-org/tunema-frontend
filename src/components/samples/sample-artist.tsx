import React from 'react'
import { useState } from 'react'
import Container from '../container'
import IconDropdown from '../icons/icon-dropdown'
import IconHeart from '../icons/icon-heart'
import IconPlus from '../icons/icon-plus'
import IconPlay from '../icons/icon-play'
import Dropdown from '../dropdown/dropdown-sample'
import Waveform from '../waveform'

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
      <button onClick={handlePlay}>
        <div className="group grid sm:grid-cols-10 md:grid-cols-13 lg:grid-cols-13 grid-cols-6 items-center gap-10 hover:bg-slate-50 pr-2 font-body p-4">
          <img
            className="w-[4rem] min-w-[3rem]"
            src="/pic/components/player/alblumcover.png"
            alt=""
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
                  fill="#D1F812"
                />
              </svg>
            )}
          </button>

          <div className="col-span-2 min-w-[100px] flex flex-col gap-3">
            <a className="font-medium hover:underline overflow-auto no-scrollbar cursor-pointer">
              Gh0st_wave_Surround_Sound_125BPM_Am.wav
            </a>
            <div className="flex gap-5 text-gray-500 text-small">
              <button className="hover:underline">Electronic</button>
              <button className="hover:underline">Synth</button>
            </div>
          </div>
          <div className="md:col-span-3 max-w-[22rem] md:block hidden">
            <Waveform
              src={props.src}
              playing={playing}
              onFinished={handleFinish}
            />
          </div>
          <p className="sm:flex justify-start hidden">3:45</p>
          <p className="sm:flex justify-start hidden">125</p>
          <p className="sm:flex justify-start hidden">C#</p>
          <div className="justify-start gap-5 lg:col-span-2 md:col-span-1 col-span-2 sm:flex hidden">
            2022/10/01
          </div>
          <div className="text-gray-500">
            <Dropdown />
          </div>
        </div>
        <div className="flex items-start border-b-[1px] border-gray-3"></div>
      </button>
    </>
  )
}

export default ArtistSample
