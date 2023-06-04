import React from 'react'
import { useState } from 'react'
import Dropdown from '../dropdown/dropdown-sample'
import IconHeart from '../icons/icon-heart'
import IconPlay from '../icons/icon-play'
import IconPlus from '../icons/icon-plus'
import IconDelete from '../icons/icon-delete'
import Waveform from '../waveform'

type SampleProps = {
  src: string
}

const BuySample = () => {
  return (
    <section className="flex flex-col">
      <div className="grid md:grid-cols-6 grid-cols-5 items-center gap-10 pr-2 font-medium py-3 text-gray-4 px-2">
        <div className="flex flex-col justify-center content-center">
          <IconDelete />
        </div>
        <div className="flex flex-col">
          <img
            className="w-[4rem] min-w-[3rem]"
            src="/pic/components/player/alblumcover.png"
            alt=""
          />
        </div>
        <div className="flex flex-col md:col-span-2 col-auto min-w-[100px]">
          <a className="font-medium hover:underline overflow-auto no-scrollbar cursor-pointer">
            Gh0st_wave_Surround_Sound_125BPM_Am.wav
          </a>
        </div>
        <p className="text-left sm:visible invisible">3:45</p>
        <button className="flex flex-col font-medium text-dark-green hover:underline justify-start items-start">
          $3.45
        </button>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </section>
  )
}

export default BuySample
