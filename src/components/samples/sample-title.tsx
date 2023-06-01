import IconPlay from '../icons/icon-play'

const SampleTitle = () => {
  return (
    <>
      <section>
        <div className="flex items-start border-b-[1px] border-gray-3"></div>
        <div className="grid md:grid-cols-12 grid-cols-9 items-center gap-10 pr-2 font-medium py-5 text-gray-4 px-4">
          <p>Cover</p>
          <button className="group-hover:visible invisible">
            <IconPlay />
          </button>
          <div className="sm:col-span-2 col-auto min-w-[100px]">
            <p>Title</p>
          </div>
          <div className="md:col-span-3 col-auto max-w-[22rem] md:block hidden">
            <p>AudioWave</p>
          </div>
          <p className="sm:visible invisible">Time</p>
          <p className="sm:visible invisible">BPM</p>
          <p className="flex flex-col font-medium justify-start">Price</p>
          <div className="items-center justify-end gap-5 col-span-2 md:block hidden"></div>
        </div>
        <div className="flex items-start border-b-[1px] border-gray-3"></div>
      </section>
    </>
  )
}

export default SampleTitle
