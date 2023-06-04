import IconPlay from '../icons/icon-play'

const SampleArtistTitle = () => {
  return (
    <>
      <section>
        <div className="flex items-start border-b-[1px] border-gray-3"></div>
        <div className="grid sm:grid-cols-10 md:grid-cols-13 lg:grid-cols-13 grid-cols-6 items-center gap-10 pr-2 text-gray-4 py-5 font-medium p-4">
          <p>Cover</p>
          <button className="sm:group-hover:visible invisible flex justify-center w-[26px]"></button>

          <div className="col-span-2 w-max flex flex-col gap-3">
            <p>Title</p>
          </div>
          <div className="md:col-span-3 max-w-[22rem] md:block hidden">
            <p>AudioWave</p>
          </div>
          <p className="sm:flex justify-start hidden">Time</p>
          <p className="sm:flex justify-start hidden">BPM</p>
          <p className="sm:flex justify-start hidden">Key</p>
          <div className="justify-start gap-5 lg:col-span-2 md:col-span-1 col-span-2 sm:flex hidden">
            DateAdded
          </div>
        </div>
        <div className="flex items-start border-b-[1px] border-gray-3"></div>
      </section>
    </>
  )
}

export default SampleArtistTitle
