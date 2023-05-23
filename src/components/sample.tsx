import Container from './container'
import IconDropdown from './icons/icon-dropdown'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'
import IconPlay from './icons/icon-play'

const SampleTest = () => {
  return (
    <>
      <div className="group grid md:grid-cols-12 grid-cols-9 items-center gap-10 hover:bg-slate-50 pr-2 font-body py-4">
        <img
          className="w-[4rem] min-w-[3rem]"
          src="/src/pic/components/player/alblumcover.png"
          alt=""
        />
        <button className="group-hover:visible invisible">
          <IconPlay />
        </button>

        <div className="md:col-span-2 col-auto min-w-[100px] flex flex-col gap-3">
          <a className="truncate font-medium hover:underline cursor-pointer">
            Gh0st_wave_Surround_Sound_125BPM_Am.wav
          </a>
          <div className="flex gap-5 text-gray-500 text-small">
            <button className="hover:underline">Electornic</button>
            <button className="hover:underline">Synth</button>
          </div>
        </div>
        <div className="lg:col-span-3 col-auto max-w-[22rem] lg:block hidden">
          <img src="/src/pic/components/player/soundwavetest.svg" alt="" />
        </div>
        <p className="md:visible invisible ">3:45</p>
        <p className="md:visible invisible">125</p>
        <button className="font-medium text-dark-green hover:underline flex justify-start">
          $3.45
        </button>
        <div className="grid grid-cols-3 items-center justify-end gap-5 col-span-2">
          <button>
            {' '}
            <IconHeart></IconHeart>{' '}
          </button>
          <button>
            <IconPlus></IconPlus>{' '}
          </button>
          <button className="invisible group-hover:visible">
            <IconDropdown></IconDropdown>
          </button>
        </div>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </>
  )
}

export default SampleTest
