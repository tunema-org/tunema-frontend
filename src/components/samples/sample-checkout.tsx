import React from 'react'
import { useState } from 'react'
import Dropdown from '../dropdown/dropdown-sample'
import IconHeart from '../icons/icon-heart'
import IconPlay from '../icons/icon-play'
import IconPlus from '../icons/icon-plus'
import Waveform from '../waveform'

type SampleProps = {
  src: string
}

const SampleCheckout = () => {
  return (
    <section className="w-auto max-w-[736px]">
      <div className="group grid md:grid-cols-6 grid-cols-5 items-center gap-10 hover:bg-slate-50 pr-2 font-body p-4">
        <img
          className="w-[4rem] min-w-[3rem]"
          src="/pic/components/player/alblumcover.png"
          alt=""
        />
        <div className="col-span-2 flex flex-col">
          <a className="font-medium hover:underline overflow-scroll no-scrollbar cursor-pointer">
            Gh0st_wave_Surround_Sound_125BPM_Am.wav
          </a>
          <div className="flex gap-3 text-gray-500 text-small">
            <button className="hover:underline">Electronic</button>
            <button className="hover:underline">Synth</button>
          </div>
        </div>
        <p className="text-left">3:45</p>
        <p className="text-left md:block hidden">125</p>
        <button className="flex font-medium text-dark-green hover:underline justify-start items-start">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M17.9496 7.70998L17.8096 7.62998L16.4196 6.82998L13.5496 5.16998C12.6696 4.65998 11.3296 4.65998 10.4496 5.16998L7.57961 6.82998L6.18961 7.63998L6.00961 7.73998C4.21961 8.93998 4.09961 9.15998 4.09961 11.09V15.7C4.09961 17.63 4.21961 17.85 6.04961 19.08L10.4496 21.62C10.8896 21.88 11.4396 22 11.9996 22C12.5496 22 13.1096 21.88 13.5496 21.62L17.9896 19.05C19.7796 17.85 19.8996 17.63 19.8996 15.7V11.09C19.8996 9.15998 19.7796 8.93998 17.9496 7.70998Z"
              fill="#9CB719"
            />
            <path
              d="M6.19043 7.64L7.58043 6.83L10.3204 5.25L10.4504 5.17C11.3304 4.66 12.6704 4.66 13.5504 5.17L13.6804 5.25L16.4204 6.83L17.8104 7.63V5.49C17.8104 3.24 16.5704 2 14.3204 2H9.67043C7.42043 2 6.19043 3.24 6.19043 5.49V7.64Z"
              fill="#9CB719"
            />
            <path
              d="M14.8397 13.34L14.2197 14.1C14.1197 14.21 14.0497 14.43 14.0597 14.58L14.1197 15.56C14.1597 16.16 13.7297 16.47 13.1697 16.25L12.2597 15.89C12.1197 15.84 11.8797 15.84 11.7397 15.89L10.8297 16.25C10.2697 16.47 9.83975 16.16 9.87975 15.56L9.93975 14.58C9.94975 14.43 9.87975 14.21 9.77975 14.1L9.15975 13.34C8.76975 12.88 8.93975 12.37 9.51975 12.22L10.4697 11.98C10.6197 11.94 10.7997 11.8 10.8797 11.67L11.4097 10.85C11.7397 10.34 12.2597 10.34 12.5897 10.85L13.1197 11.67C13.1997 11.8 13.3797 11.94 13.5297 11.98L14.4797 12.22C15.0597 12.37 15.2297 12.88 14.8397 13.34Z"
              fill="#9CB719"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </section>
  )
}

export default SampleCheckout
