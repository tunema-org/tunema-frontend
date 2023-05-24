import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import Button from '../../components/Button/button'
import { Transition } from '@headlessui/react'

const Upload = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)

  const isUpload = true

  return (
    <>
      <div
        className="bg-white w-auto max-w-[95%] h-[80vh] rounded-[20px] absolute flex-col right-0 left-0 top-[51vh] bottom-0 m-auto px-6 py-7 flex font-body overflow-y-scroll z-0 justify-center items-center"
        ref={ref}
        {...events}
      >
        <button className="absolute top-0 right-0 m-6">
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 2L18.5563 17.5563" stroke="black" stroke-width="2" />
            <path
              d="M19.5564 2L4.00005 17.5563"
              stroke="black"
              stroke-width="2"
            />
          </svg>
        </button>
        {!isUpload && (
          <div className="w-auto flex flex-col items-center gap-7">
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
            <Button type="primary">Choose File To Upload</Button>
            <p className="text-gray-3">
              Supported files : FLAC, WAV, ALAC, or AIFF{' '}
            </p>
          </div>
        )}
        {isUpload && (
          <div>
            <h1>Sudah diupload yh</h1>
            <section className="absolute bottom-0 w-full left-0 right-0 flex flex-col justify-center font-medium m-auto">
              <div className="flex items-start border-b-[1px] border-gray-3"></div>
              <div className="my-5 md:px-[10rem] flex justify-between items-center px-5">
                <p className="truncate">
                  <span className="text-red-400">*</span> Required fields
                </p>
                <div className="flex sm:gap-10 gap-3">
                  <button className="hover:underline">Cancel</button>
                  <Button type="primary">Upload</Button>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  )
}

export default Upload
