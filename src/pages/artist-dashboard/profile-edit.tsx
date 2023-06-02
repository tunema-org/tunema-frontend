import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Input from '../../components/input/input'
import Button from '../../components/button'

type EditProps = {
  isEdit: boolean
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ProfileEdit({ isEdit, setIsEdit }: EditProps) {
  function closeModal() {
    setIsEdit(false)
  }

  function openModal() {
    setIsEdit(true)
  }

  return (
    <>
      <Transition appear show={isEdit} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 mt-16 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full flex flex-col justify-center max-w-[100vh] md:max-h-[85vh] transform rounded-2xl bg-white p-6 text-left align-middle transition-all">
                  <button
                    className="self-end sticky top-0 right-1 m-2"
                    onClick={closeModal}
                  >
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 2L18.5563 17.5563"
                        stroke="black"
                        stroke-width="2"
                      />
                      <path
                        d="M19.5564 2L4.00005 17.5563"
                        stroke="black"
                        stroke-width="2"
                      />
                    </svg>
                  </button>

                  <div className="flex flex-col font-body gap-6 sm:gap-4">
                    <h1 className="text-heading-03">Edit Profile</h1>
                    <div className="border-b-[1px] border-gray-3 w-full my-2" />
                    <div className="flex justify-between gap-5 lg:flex-row flex-col">
                      <div className="flex w-[25vh] h-auto items-center justify-center bg-grey-lighter">
                        <label className="w-full flex h-[25vh] items-center justify-center p-6 rounded-full border-dashed border-2 border-dark-green tracking-wide cursor-pointer hover:bg-blue">
                          <span className="mt-2 text-gray-400 text-center">
                            Upload Profile Picture
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".jepg, .jpg, .png, .webp"
                          />
                        </label>
                      </div>
                      <div className="lg:w-[30rem] w-full place-self-center">
                        <Input type="primary" label="Username"></Input>
                      </div>
                    </div>
                    <button onClick={closeModal}>
                      <Button type="primary">Save</Button>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
