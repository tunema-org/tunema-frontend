import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

type Information = {
  title: string
  children: string
}

type InfoProps = {
  isInfo: boolean
  setIsInfo: React.Dispatch<React.SetStateAction<boolean>>
}

const InfoList = ({ title, children }: Information) => {
  return (
    <div className="grid-cols-1 sm:gap-0 gap-1 sm:grid-cols-2 items-center min-w-auto grid w-full">
      <p className="flex justify-start font-medium">{title}</p>
      <p className="flex justify-start sm:justify-end truncate">{children}</p>
    </div>
  )
}

export default function Info({ isInfo, setIsInfo }: InfoProps) {
  function closeModal() {
    setIsInfo(false)
  }

  function openModal() {
    setIsInfo(true)
  }

  return (
    <>
      <Transition appear show={isInfo} as={Fragment}>
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
                    <h1 className="text-heading-03">Sample Info</h1>
                    <div className="border-b-[1px] border-gray-3 w-full my-2" />
                    <InfoList title="Title">
                      Gh0st_wave_Surround_Sound_125BPM_Am.wav
                    </InfoList>
                    <InfoList title="Artist">William</InfoList>
                    <InfoList title="Genre">Hip-Hop</InfoList>
                    <InfoList title="Type">Instrumental</InfoList>
                    <InfoList title="Model">Electronic | Synth</InfoList>
                    <InfoList title="Time">3:43</InfoList>
                    <InfoList title="BPM">150</InfoList>
                    <InfoList title="Sold">1947</InfoList>
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
