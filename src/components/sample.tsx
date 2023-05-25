import Container from './container'
import IconDropdown from './icons/icon-dropdown'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'
import IconPlay from './icons/icon-play'
import Dropdown from './dropdown/dropdown-test'
import DropdownSort from './dropdown/dropdown-sort'

const Sample = () => {
  return (
    <>
      <div className="group grid md:grid-cols-12 grid-cols-9 items-center gap-10 hover:bg-slate-50 pr-2 font-body p-4">
        <img
          className="w-[4rem] min-w-[3rem]"
          src="/src/pic/components/player/alblumcover.png"
          alt=""
        />
        <button className="group-hover:visible invisible">
          <IconPlay />
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
          <img src="/src/pic/components/player/soundwavetest.svg" alt="" />
        </div>
        <p className="">3:45</p>
        <p className="">125</p>
        <button className="flex flex-col font-medium text-dark-green hover:underline justify-start">
          $3.45
        </button>
        <div className="grid grid-cols-3 items-center justify-start gap-5 col-span-2">
          <button className="flex-col sm:block hidden">
            {' '}
            <IconHeart></IconHeart>{' '}
          </button>
          <button className="flex-col sm:block hidden">
            {' '}
            <IconPlus></IconPlus>{' '}
          </button>
          <button className="md:invisible md:group-hover:visible">
            <Dropdown />
          </button>
        </div>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </>
  )
}

export default Sample
