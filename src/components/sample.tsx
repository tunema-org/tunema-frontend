import Container from './container'
import IconHeart from './icons/icon-heart'
import IconPlus from './icons/icon-plus'

const Sample = () => {
  return (
    <>
      <Container>
        <div className="flex flex-row gap-15 my-5 justify-between">
          <div className="grid grid-cols-6 gap-10 font-body items-center">
            <div className="max-w-xs">
              <img
                className="max-w-[4rem]"
                src="/src/pic/components/player/alblumcover.png"
                alt=""
              />
            </div>
            <div className="col-span-2">
              <h3 className="font-medium truncate">
                Gh0st_wave_Surround_Sound_125BPM_Am.wav
              </h3>
              <div className="flex gap-5 text-gray-500">
                <p>Electornic</p>
                <p>Synth</p>
              </div>
            </div>
            <div className="col-span-3 max-w-[22rem]">
              <img src="/src/pic/components/player/soundwavetest.svg" alt="" />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-11 font-body items-center justify-end text-gray-500">
            <p>3:45</p>
            <p>125</p>
            <a href="" className="font-medium text-dark-green hover:underline">
              $3.45
            </a>
            <div className="flex items-center justify-end gap-5 col-span-2">
              <button>
                {' '}
                <IconHeart></IconHeart>{' '}
              </button>
              <button>
                <IconPlus></IconPlus>{' '}
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Sample
