import { ShoppingBag, ToggleOn } from 'iconsax-react'
import { useState, useEffect, useRef, Fragment } from 'react'
import React from 'react'
import { Pivot as Hamburger } from 'hamburger-react'
import Sidebar from './sidebar'
import MyModal from '../../pages/upload/upload'
import { Dialog, Transition } from '@headlessui/react'

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
    }
  })

  const isLogin = true

  const hoverVariant = {
    left: 'duration-200 relative mt-auto mb-auto hover:text-dark-green hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-[#9CB719]',
    right:
      'duration-200 relative mt-auto mb-auto hover:text-dark-green hover:before:scale-x-100 before:absolute before:origin-top-right before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-[#9CB719]',
  }

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
              <a href="/search" className={hoverVariant.left}>
                Search
              </a>
            </li>
            <li>
              <a href="/library" className={hoverVariant.left}>
                Library
              </a>
            </li>
          </div>
          <a href="/home" className="items-center min-w-44">
            <img
              className="object-contain h-9 w-44"
              src={'/pic/LOGO TUNEMA BLACK 2.png'}
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
                    src={'/pic/navbar/dummy_profile.jpg'}
                    alt=""
                  />
                </button>
                {isOpen && (
                  <Transition
                    appear={true}
                    show={isOpen}
                    enterFrom="transform scale-95 opacity-0 max-h-0"
                    enterTo="transform scale-100 opacity-100 max-h-96"
                    leaveFrom="transform scale-100 opacity-100 max-h-96"
                    leaveTo="transform scale-95 opacity-0 max-h-0"
                    ref={menuRef}
                    className="bg-white/80 backdrop-blur-md shadow-lg absolute flex flex-col top-16 right-2 rounded-xl px-6 py-4 gap-5 justify-between overflow-hidden transition-all duration-300 "
                  >
                    <a
                      href="/artist-dashboard"
                      className="duration-200 px-4 py-2 font-bold w-32 hover:bg-light-green hover:rounded-lg text-center"
                    >
                      {'Account'}
                    </a>
                    <div className="duration-200 border-b border-gray-3"></div>
                    <a
                      href="#"
                      className="duration-200 px-4 py-2 hover:bg-light-green hover:rounded-lg"
                    >
                      Help
                    </a>
                    <a
                      href="#"
                      className="duration-200 px-4 py-2 hover:bg-light-green hover:rounded-lg"
                    >
                      About
                    </a>
                    <div className="duration-200 border-b border-gray-3"></div>
                    <a
                      href="#"
                      className="duration-200 px-4 py-2 hover:bg-red-300 hover:text-black hover:rounded-lg font-medium text-red-500"
                    >
                      Log Out
                    </a>
                  </Transition>
                )}
              </div>
            )}
            {!isLogin && (
              <li>
                <a href="/login" className={hoverVariant.right}>
                  Login
                </a>
              </li>
            )}
          </div>
        </nav>
        {isSidebarOpen && (
          <>
            <Transition
              appear={true}
              show={isSidebarOpen}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Sidebar />
            </Transition>
            <Transition
              appear
              show={isSidebarOpen}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              ref={ref}
              className="h-screen absolute sm:hidden flex top-0 w-full bg-black -z-30 bg-opacity-75"
            ></Transition>
          </>
        )}
      </div>
    </>
  )
}

export default Navbar
