import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'

type Genre = {
  id: number
  name: string
}

const genreMix: Genre[] = [
  { id: 1, name: 'Mixed' },
  { id: 2, name: 'Hip Hop' },
  { id: 3, name: 'House/Techno' },
  { id: 4, name: 'Pop/EDM' },
  { id: 5, name: 'Live Sounds' },
  { id: 6, name: 'Electronic' },
]

export default function Example() {
  const [selected, setSelected] = useState(genreMix[0])
  const [query, setQuery] = useState('')

  const filteredGenre =
    query === ''
      ? genreMix
      : genreMix.filter((genre) =>
          genre.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        )

  return (
    <div className="flex flex-col w-auto gap-3 justify-center font-bodym">
      <label htmlFor="" className="font-medium">
        Genre <span className="text-red-400"> *</span>
      </label>
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-[7px] bg-[#ededea] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ededea] focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-green">
            <Combobox.Input
              className="w-full bg-[#ededea] border-none py-2 pl-3 pr-10 text-body focus:ring-0"
              displayValue={(genre: Genre) => genre.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                width="15"
                height="9"
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 1.35669L7.5 9L15 1.35669L13.6687 1.57459e-07L7.5 6.28662L1.33125 1.57459e-07L0 1.35669Z"
                  fill="black"
                />
              </svg>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-[7px] backdrop-blur-md bg-white/ py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {filteredGenre.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-black">
                  No genre found.
                </div>
              ) : (
                filteredGenre.map((genre) => (
                  <Combobox.Option
                    key={genre.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-light-green' : 'text-black'
                      }`
                    }
                    value={genre}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-bold' : 'font-normal'
                          }`}
                        >
                          {genre.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-dark-green'
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
