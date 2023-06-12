import { Combobox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import api from '../../api'
import { ListTagsAndCategoriesResponse } from '../../api/sounds/tags'

export type Tag = {
  id: number
  name: string
}

export type TagsAutoCompleteProps = {
  selectedTags: Tag[] | undefined
  setSelectedTags: React.Dispatch<React.SetStateAction<Tag[] | undefined>>
}

export const TagsAutoComplete = ({
  selectedTags,
  setSelectedTags,
}: TagsAutoCompleteProps) => {
  const [query, setQuery] = useState('')
  const [tagsAndCategories, setTagsAndCategories] =
    useState<ListTagsAndCategoriesResponse>()

  useEffect(() => {
    api.listTagsAndCategories().then((data) => setTagsAndCategories(data))
  }, [])

  const tagsAndGenres =
    query === ''
      ? tagsAndCategories
      : {
          items: tagsAndCategories?.items.filter((item) =>
            item.tags.some((tag) => tag.name.toLowerCase().includes(query)),
          ),
        }

  return (
    <div className="flex flex-col w-auto gap-3 justify-center font-bodym">
      <label htmlFor="" className="font-medium">
        Tags <span className="text-red-400"> *</span>
      </label>
      <Combobox value={selectedTags} onChange={setSelectedTags} multiple>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-[7px] bg-[#ededea] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ededea] focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-green">
            <Combobox.Input
              className="w-full bg-[#ededea] border-none py-2 pl-3 pr-10 text-body focus:ring-0"
              displayValue={(tags: Tag[]) =>
                tags.map((tag) => tag.name).join(', ')
              }
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute z-50 inset-y-0 right-0 flex items-center pr-2">
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
            <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-[7px] backdrop-blur-md bg-white/ py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {tagsAndGenres?.items?.map((item) => (
                <>
                  <Combobox.Label
                    key={item.category}
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    {item.category}
                  </Combobox.Label>
                  {item.tags.map((tag) => (
                    <Combobox.Option
                      key={tag.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-light-green' : 'text-black'
                        }`
                      }
                      value={tag}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-bold' : 'font-normal'
                            }`}
                          >
                            {tag.name}
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
                  ))}
                </>
              ))}

              {/* {tagsAndGenres.tags.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-black">
                  No genre found.
                </div>
              ) : (
                tagsAndGenres.map((genre) => (
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
              )} */}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
