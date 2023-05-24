import { Menu } from '@headlessui/react'
import { useState } from 'react'

enum TypeEnum {
  DEFAULT = 'Date Added',
  TYPE1 = 'Type1',
  TYPE2 = 'Type2',
  TYPE3 = 'Type3',
}

function DropdownSort() {
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
          width="20"
          height="12"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.88745L10 11.8875L20 1.88745L18.225 0.112452L10 8.33745L1.775 0.112452L0 1.88745Z"
            fill="black"
          />
        </svg>
      </Menu.Button>

      <Menu.Items as="div" className="absolute left-0 flex flex-col bg-red-400">
        <Menu.Item>
          {({ active }) => (
            <button className={`${active && 'bg-blue-500'}`}>
              Account settings
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default DropdownSort
