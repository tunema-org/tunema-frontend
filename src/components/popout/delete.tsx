import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

type DeleteProps = {
  isDelete: boolean
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Delete({ isDelete, setIsDelete }: DeleteProps) {
  function closeModal() {
    setIsDelete(false)
  }

  function openModal() {
    setIsDelete(true)
  }

  return (
    <>
      <Transition appear show={isDelete} as={Fragment}>
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
                <Dialog.Panel className="w-full flex flex-col justify-center max-w-[70vh] md:max-h-[85vh] transform rounded-2xl bg-white p-6 text-left align-middle transition-all">
                  <button
                    className="self-end fixed top-5 right-3 m-2"
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
                    <h1 className="text-heading-05">Warning</h1>
                    <p>Are you sure want to delete this sample?</p>
                    <p className="text-red-500 font-medium">
                      This Cannot Be Undone!
                    </p>
                    <div className="flex sm:flex-row flex-col gap-3">
                      <button className="px-5 py-2 font-medium bg-red-500/30 rounded-md hover:bg-red-500 duration-200">
                        I've made my decision
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-5 py-2 font-medium bg-primary-green/30 rounded-md hover:bg-primary-green duration-200"
                      >
                        Cancel
                      </button>
                    </div>
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
