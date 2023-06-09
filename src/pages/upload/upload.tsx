import axios from 'axios'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/input/input'
import BigInput from '../../components/input/big-input'
import Autocomplete from '../../components/dropdown/dropdown-autocomplete'
import DropdownKey from '../../components/dropdown/dropdown-keys'

type MyModalProps = {
  isUpload: boolean
  setIsUpload: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MyModal({ isUpload, setIsUpload }: MyModalProps) {
  const isUploaded = false

  function closeModal() {
    setIsUpload(false)
  }

  function openModal() {
    setIsUpload(true)
  }

  const [image, setImage] = useState('')
  const [audio, setAudio] = useState('')

  function handleImage(e: any) {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  function handleAudio(e: any) {
    console.log(e.target.files)
    setAudio(e.target.files[1])
  }

  // function handleAPI() {
  //   const formData = new FormData()
  //   formData.append('image', image)
  //   axios.post('url', formData).then((res) => {
  //     console.log(res)
  //   })
  // }

  return (
    <>
      <Transition appear show={isUpload} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 font-body"
          onClose={closeModal}
        >
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

          <div className="fixed inset-0 top-16 overflow-auto">
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
                <Dialog.Panel className="w-full flex flex-col justify-center max-w-[200vh] md:max-h-[85vh] transform overflow-y-scroll rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
                  {isUploaded && (
                    <div className="flex flex-col justify-center items-center gap-7 h-[50rem]">
                      <svg
                        width="237"
                        height="192"
                        viewBox="0 0 237 192"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M59.1918 151.389C45.4823 151.389 32.3343 146.179 22.6402 136.907C12.9461 127.634 7.5 115.058 7.5 101.944C7.5 88.8308 12.9461 76.2544 22.6402 66.9818C32.3343 57.7092 45.4823 52.4999 59.1918 52.4999C62.4297 38.0751 71.9019 25.3987 85.5246 17.2594C92.2699 13.2293 99.8311 10.4343 107.777 9.03408C115.722 7.63386 123.896 7.65585 131.832 9.09876C139.768 10.5417 147.311 13.3773 154.029 17.4436C160.748 21.51 166.51 26.7275 170.988 32.7983C175.466 38.869 178.572 45.6742 180.128 52.8251C181.683 59.976 181.659 67.3327 180.056 74.4751H191.043C201.243 74.4751 211.024 78.5268 218.236 85.7388C225.448 92.9509 229.5 102.732 229.5 112.932C229.5 123.131 225.448 132.913 218.236 140.125C211.024 147.337 201.243 151.389 191.043 151.389H180.056"
                          stroke="#C2C2C2"
                          stroke-width="15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M81.1621 118.426L114.125 85.4634M114.125 85.4634L147.088 118.426M114.125 85.4634V184.352"
                          stroke="#C2C2C2"
                          stroke-width="15"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <h1 className="text-heading-04 text-center">
                        Drag and drop your samples here
                      </h1>
                      <div className="flex h-auto items-center justify-center">
                        <label className="cursor-pointer w-full duration-200 bg-primary-green hover:bg-dark-green font-bold py-3 px-8 rounded-full overflow-clip">
                          <span className="">Choose File to Upload</span>
                          <input
                            type="file"
                            className="hidden"
                            accept=".mpeg, .wav, .wave, .aac, .ogg, .mp3, .m4a"
                            onChange={handleAudio}
                          />
                        </label>
                      </div>
                      <p className="text-gray-3">
                        Supported files : FLAC, WAV, ALAC, or AIFF{' '}
                      </p>
                    </div>
                  )}
                  {!isUploaded && (
                    <>
                      <div className="flex flex-col md:flex-row justify-around gap-4 overflow-visible md:overflow-auto">
                        <h1 className="relative md:fixed left-0 ml-0 md:ml-[5rem] text-heading-03">
                          Sample Upload
                        </h1>
                        <div className="flex w-[25vh] h-auto items-center justify-center bg-grey-lighter">
                          <label className="md:fixed relative w-[11rem] flex h-[11rem] items-center justify-center p-6 rounded-lg border-dashed border-2 border-dark-green tracking-wide cursor-pointer hover:bg-blue">
                            <span className="mt-2 text-gray-400">
                              Browse Cover
                            </span>
                            <input
                              type="file"
                              className="hidden"
                              accept=".jepg, .jpg, .png, .webp"
                              onChange={handleImage}
                            />
                          </label>
                        </div>
                        <div className="flex flex-col gap-3">
                          <Input type="required" label="Title"></Input>
                          <Autocomplete />
                          <Input type="required" label="Price"></Input>
                          <Input type="required" label="BPM"></Input>
                          <Input type="required" label="Instrument"></Input>
                          <DropdownKey />
                          <Input
                            type="required"
                            label="Additional Tags"
                          ></Input>
                          <BigInput
                            type="primary"
                            label="Description"
                          ></BigInput>
                        </div>
                      </div>
                      <section className="bg-white border-t-[1px] pt-5 border-gray-3 w-full flex flex-col justify-center font-medium">
                        <div className="md:px-[10rem] flex justify-between items-center px-5">
                          <p className="truncate">
                            <span className="text-red-400">*</span> Required
                            fields
                          </p>
                          <div className="flex sm:gap-10 gap-3">
                            <button
                              className="duration-200 relative mt-auto mb-auto hover:text-dark-green hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-[#9CB719]"
                              onClick={closeModal}
                            >
                              Cancel
                            </button>
                            <Button type="primary">Upload</Button>
                          </div>
                        </div>
                      </section>
                    </>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
