import { Menu } from '@headlessui/react'
import { useState } from 'react'
import IconDropdown from '../icons/icon-dropdown'
import IconHeart from '../icons/icon-heart'
import IconPlus from '../icons/icon-plus'
import Info from '../info'
import React from 'react'

const DropdownSort = () => {
  const [isInfo, setIsInfo] = useState(false)

  return (
    <>
      <Info isInfo={isInfo} setIsInfo={setIsInfo} />
      <Menu as="div" className="relative inline-block text-left font-body">
        <Menu.Button
          as="button"
          className="z-0 md:text-heading-06 text-small font-medium flex items-center md:w-auto px-5 h-[36px] rounded-[10px] justify-center gap-3"
        >
          <IconDropdown></IconDropdown>
        </Menu.Button>

        <Menu.Items
          as="div"
          className="z-10 absolute sm-right-0 w-auto drop-shadow-md right-2 flex flex-col backdrop-blur-md bg-white/80 p-4 font-medium rounded-[10px]"
        >
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active && 'bg-light-green'
                } p-3 rounded-[10px] text-center flex items-center gap-3`}
              >
                <IconHeart /> Wishlist
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active && 'bg-light-green'
                } p-3 rounded-[10px] text-center flex items-center gap-3`}
              >
                <IconPlus /> Cart
              </button>
            )}
          </Menu.Item>
          <div className="flex items-start border-b-[1px] my-3 border-gray-4"></div>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active && 'bg-light-green'
                } p-3 rounded-[10px] text-center flex items-center gap-3 justify-center`}
              >
                Artist
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => setIsInfo((prev) => !prev)}
                className={`${
                  active && 'bg-light-green'
                } p-3 rounded-[10px] text-center flex items-center gap-3 justify-center`}
              >
                Info
              </button>
            )}
          </Menu.Item>
          <div className="flex items-start border-b-[1px] my-3 border-gray-4"></div>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active && 'bg-red-300'
                } p-3 rounded-[10px] text-center flex items-center gap-3 justify-center`}
              >
                Remove
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  )
}

export default DropdownSort
