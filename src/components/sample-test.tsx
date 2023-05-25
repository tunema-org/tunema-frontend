import IconPlay from './icons/icon-play'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'
import IconDropdown from './icons/icon-dropdown'

const SampleTest = () => {
  return (
    <>
      <section className="max-w-[50rem] w-[1000rem] flex px-2 group font-body justify-between items-center gap-4">
        <div className="flex gap-5 items-center">
          <img
            src="/src/pic/components/player/alblumcover.png"
            className="max-w-[58px]"
            alt=""
          />
          <button className="group-hover:visible invisible">
            <IconPlay />
          </button>
          <div className="flex flex-col gap-2 max-w-[20rem] min-w-[1rem]">
            <a className="truncate font-medium hover:underline cursor-pointer">
              Gh0st_wave_Surround_Sound_125BPM_Am.wav
            </a>
            <div className="flex gap-5 text-gray-500 text-small">
              <button className="hover:underline truncate">Electornic</button>
              <button className="hover:underline truncate">Synth</button>
            </div>
          </div>
          <div className="max-w-[22rem] min-w-[10rem] lg:block hidden">
            <img src="/src/pic/components/player/soundwavetest.svg" alt="" />
          </div>
        </div>
        <div className="flex gap-5">
          <p className="md:visible invisible ">3:45</p>
          <p className="md:visible invisible">125</p>
          <button className="font-medium text-dark-green hover:underline flex justify-start">
            $3.45
          </button>
          <div className="flex items-center justify-end gap-3 col-span-2">
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
      </section>
    </>
  )
}

export default SampleTest
