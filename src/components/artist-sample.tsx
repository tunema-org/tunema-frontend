import Container from './container'
import IconDropdown from './icons/icon-dropdown'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'
import IconPlay from './icons/icon-play'

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

        <div className="sm:col-span-3 min-w-[100px] flex flex-col gap-3">
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
        <p className="">3:45</p>
        <p className="">125</p>
        <div className="flex flex-col justify-center gap-5 col-span-2 md:visible invisible">
          3 days ago
        </div>
        <p className="text-dark-green hover:underline">Edit</p>
      </div>
      <div className="flex items-start border-b-[1px] border-gray-3"></div>
    </>
  )
}

export default Sample
