import { Menu } from '@headlessui/react'
import { useState } from 'react'

enum TypeEnum {
  DEFAULT = 'Instruments',
  VOCAL = 'Vocal',
  TYPE2 = 'Type2',
  TYPE3 = 'Type3',
}

function DropdownType() {
  const [selectedType, setSelectedType] = useState(TypeEnum.DEFAULT)
  const setClick = () => {}
  return (
    <Menu as="div" className="relative inline-block text-left font-body">
      <Menu.Button
        as="button"
        className="md:text-heading-06 text-small font-medium flex items-center w-auto md:w-auto px-5 h-[36px] bg-[#eaf89b] rounded-[10px] justify-center gap-3"
      >
        {selectedType}
        <svg
          width="15"
          height="22"
          viewBox="0 0 15 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 13.8566L7.5 21.4999L15 13.8566L13.6687 12.4999L7.5 18.7865L1.33125 12.4999L0 13.8566Z"
            fill="black"
          />
          <path
            d="M0 8.14331L7.5 0.5L15 8.14331L13.6687 9.5L7.5 3.21338L1.33125 9.5L0 8.14331Z"
            fill="black"
          />
        </svg>
      </Menu.Button>

      <Menu.Items
        as="div"
        className="absolute mt-2 w-full max-w-[10rem] drop-shadow-md flex flex-col backdrop-blur-md bg-white/80 p-4 font-medium rounded-[10px]"
      >
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active && 'bg-light-green'
              } p-3 rounded-[10px] text-center flex items-center gap-3 justify-center`}
              onClick={() => setSelectedType(TypeEnum.DEFAULT)}
            >
              Instruments
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active && 'bg-light-green'
              } p-3 rounded-[10px] text-center flex items-center gap-3 justify-center`}
              onClick={() => setSelectedType(TypeEnum.VOCAL)}
            >
              Vocal
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default DropdownType
