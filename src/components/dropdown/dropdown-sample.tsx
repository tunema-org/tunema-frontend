import { Menu, Transition } from '@headlessui/react'
import dayjs from 'dayjs'
import { InfoCircle, ProfileCircle } from 'iconsax-react'
import { useState } from 'react'
import IconDropdown from '../icons/icon-dropdown'
import IconHeart from '../icons/icon-heart'
import IconPlus from '../icons/icon-plus'
import Info from '../popout/info'

type InfoProps = {
  name: string
  artist: string
  time: number
  bpm: number
  keys: string
  keyScale: string
  price: number
  upload: string
}

const DropdownSort = (props: InfoProps) => {
  const [isInfo, setIsInfo] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')
    return `${minutes}:${formattedSeconds}`
  }

  return (
    <>
      <Info
        name={props.name}
        artist={props.artist}
        time={formatTime(props.time)}
        bpm={props.bpm}
        keys={props.keys}
        keyScale={props.keyScale}
        price={props.price}
        upload={dayjs(props.upload).format('MM/DD/YYYY h:mm:ss A')}
        isInfo={isInfo}
        setIsInfo={setIsInfo}
      />
      <Menu as="div" className="relative inline-block text-left font-body">
        <Menu.Button
          as="button"
          className="z-0 md:text-heading-06 text-small font-medium flex items-center md:w-auto px-5 h-[36px] rounded-[10px] justify-center gap-3"
          onClick={(e) => e.stopPropagation()}
        >
          <IconDropdown></IconDropdown>
        </Menu.Button>

        <Transition.Root
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
          className="z-10 absolute sm-right-0 text-black w-auto drop-shadow-md right-2 flex flex-col backdrop-blur-md bg-white/80 p-4 font-medium rounded-[10px]"
        >
          <Menu.Items as="div" className="">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={`${
                    active && 'bg-light-green'
                  } p-3 rounded-[10px] text-center flex items-center gap-3 w-full`}
                >
                  <IconHeart /> Wishlist
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={`${
                    active && 'bg-light-green'
                  } p-3 rounded-[10px] text-center flex items-center gap-3 w-full`}
                >
                  <IconPlus /> Cart
                </button>
              )}
            </Menu.Item>
            <div className="flex items-start border-b-[1px] my-3 border-gray-4"></div>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => e.stopPropagation()}
                  className={`${
                    active && 'bg-light-green'
                  } p-3 rounded-[10px] text-center flex items-center gap-3 w-full`}
                >
                  <ProfileCircle size="22" color="gray" />
                  Artist
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={(e) => {
                    setIsInfo((prev) => !prev)
                    e.stopPropagation()
                  }}
                  className={`${
                    active && 'bg-light-green'
                  } p-3 rounded-[10px] text-center flex items-center gap-3 w-full`}
                >
                  <InfoCircle size="22" color="gray" />
                  Info
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition.Root>
      </Menu>
    </>
  )
}

export default DropdownSort
