import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { useDraggable } from 'react-use-draggable-scroll'

const Sidebar = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)

  return (
    <>
      <div
        className="bg-white w-[60%] h-screen absolute flex-col top-16 px-6 py-7 gap-5 justify-between sm:hidden flex font-body overflow-y-scroll no-scrollbar z-0"
        ref={ref}
        {...events}
      >
        <div className="flex flex-col gap-7">
          {' '}
          <a href="/artist-dashboard">
            <button className="cursor-pointer flex items-center gap-5 font-bold text-heading-04">
              <img
                className="rounded-full w-11"
                src="/pic/navbar/dummy_profile.jpg"
                alt=""
              />
              <h1>User</h1>
            </button>
          </a>
          <div className="flex flex-col gap-3">
            <h3 className="font-medium text-[#ababa9]">Navigation</h3>
            <a href="/home" className="hover:underline">
              Home
            </a>
            <a href="/search" className="hover:underline">
              Search
            </a>
            <a href="/library" className="hover:underline">
              Library
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-16">
          <h3 className="font-medium text-[#ababa9]">Tunema</h3>
          <a href="" className="hover:underline">
            Help
          </a>
          <a href="/" className="hover:underline">
            About TUNEMA
          </a>
          <a href="" className="hover:underline text-red-400 font-medium">
            Log Out
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar
