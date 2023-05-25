import { ShoppingBag, ToggleOn } from 'iconsax-react'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import Sidebar from './sidebar'
import Upload from '../../pages/upload/upload'
import MyModal from '../../pages/upload/upload'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isUpload, setIsUpload] = useState(false)

  const imgRef = React.useRef<HTMLImageElement>(null)
  const menuRef = React.useRef<HTMLInputElement>(null)
  const ref = React.useRef<HTMLDivElement>(null)

  window.addEventListener('click', (e) => {
    if (e.target !== menuRef.current && e.target !== imgRef.current) {
      setIsOpen(false)
    }
    if (e.target === ref.current) {
      setIsSidebarOpen(false)
      setIsUpload(false)
    }
  })

  const isLogin = true

  return (
    <>
      <MyModal isUpload={isUpload} setIsUpload={setIsUpload} />
      <div className="font-body fixed w-full top-0 z-50" id="navbar">
        <nav className="flex flex-row list-none h-16 items-center justify-between p-4 border-b-2 gray-4 bg-white item-center sm:px-10 px-2">
          <div className="sm:hidden visible">
            <Hamburger
              color="#000000"
              size={20}
              toggled={isSidebarOpen}
              onToggle={(toggled) => {
                if (toggled) {
                  setIsSidebarOpen(true)
                } else {
                  setIsSidebarOpen(false)
                }
              }}
            />
          </div>
          <div className="flex-row gap-12 sm:flex hidden">
            <li>
              <a
                href="/search"
                className="hover:underline hover:text-dark-green"
              >
                Search
              </a>
            </li>
            <li>
              <a
                href="/library"
                className="hover:underline hover:text-dark-green"
              >
                Library
              </a>
            </li>
          </div>
          <a href="/home" className="items-center min-w-44">
            <img
              className="object-contain h-9 w-44"
              src={'/src/pic/LOGO TUNEMA BLACK 2.png'}
              id="1"
              title="images"
              alt="Profile"
            />
          </a>
          <a href="" className="sm:hidden block px-3">
            <ShoppingBag size="28" color="black" />
          </a>
          <div className="flex-row items-center gap-10 sm:flex hidden sm:w-auto w-0">
            <li>
              <button
                onClick={() => setIsUpload((prev) => !prev)}
                className="relative items-center justify-start flex py-2 px-5 overflow-hidden font-medium transition-all bg-primary-green rounded-full hover:bg-dark-green hover:text-white group"
              >
                <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-dark-green rounded-full"></span>
                <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                  Upload
                </span>
              </button>
            </li>

            {isLogin && (
              <div className="relative flex flex-col align-middle ">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="w-11 align-middle flex items-centerjustify-between"
                >
                  <img
                    ref={imgRef}
                    className="rounded-full"
                    src={'/src/pic/navbar/dummy_profile.jpg'}
                    alt=""
                  />
                </button>
                {isOpen && (
                  <div
                    ref={menuRef}
                    className="bg-white absolute flex flex-col top-16 right-2 rounded-xl px-6 py-4 gap-5 justify-between"
                  >
                    <a
                      href="#"
                      className="p-2 font-bold w-32 hover:bg-light-green hover:rounded-lg text-center"
                    >
                      {'Account'}
                    </a>
                    <div className="border-b border-gray-3"></div>
                    <a
                      href="#"
                      className="p-2 hover:bg-light-green hover:rounded-lg"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="p-2 hover:bg-red-300 hover:rounded-lg"
                    >
                      Log Out
                    </a>
                  </div>
                )}
              </div>
            )}
            {!isLogin && (
              <li>
                <a
                  href="/login"
                  className="hover:underline hover:text-dark-green hover:font-medium"
                >
                  Login
                </a>
              </li>
            )}
          </div>
        </nav>
        {isSidebarOpen && (
          <div>
            <Sidebar />
            <div
              ref={ref}
              className="h-screen absolute sm:hidden flex top-16 w-full bg-black -z-30 bg-opacity-75"
            ></div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
