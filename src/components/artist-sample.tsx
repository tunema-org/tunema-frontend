import Container from './container'
import IconDropdown from './icons/icon-dropdown'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'
import IconPlay from './icons/icon-play'
import Dropdown from './dropdown/dropdown-test'

const Sample = () => {
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
            <button className="hover:underline">Electornic</button>
            <button className="hover:underline">Synth</button>
          </div>
        </div>
        <div className="md:col-span-3 max-w-[22rem] md:visible invisible">
          <img src="/src/pic/components/player/soundwavetest.svg" alt="" />
        </div>
        <p className="sm:visible invisible">3:45</p>
        <p className="">125</p>
        <div className="flex-col justify-center gap-5 md:col-span-1 col-span-3 sm:block hidden">
          3 days ago
        </div>
        <div className="text-gray-500">
          <Dropdown />
        </div>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </>
  )
}

export default Sample
