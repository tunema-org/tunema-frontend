import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { useDraggable } from 'react-use-draggable-scroll'
import { useAuthStore } from '../../store/useAuthStore'
import { Link, useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)
  const auth = useAuthStore()
  const navigate = useNavigate()

  const hoverVariant = {
    left: 'w-max duration-200 relative mt-auto mb-auto hover:text-dark-green hover:before:scale-x-100 before:absolute before:origin-top-left before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-[#9CB719]',
    right:
      'w-max duration-200 relative mt-auto mb-auto hover:text-dark-green hover:before:scale-x-100 before:absolute before:origin-top-right before:block before:transition-transform before:duration-[0.3s] before:ease-[ease] before:scale-x-0 before:left-0 before:bottom-0 before:w-full before:h-0.5 before:bg-[#9CB719]',
  }

  return (
    <>
      <div
        className="bg-white w-[60%] h-screen absolute flex-col top-0 px-6 py-7 gap-5 justify-between sm:hidden flex font-body overflow-y-scroll no-scrollbar z-0"
        ref={ref}
        {...events}
      >
        <div className="flex flex-col gap-7">
          {' '}
          {auth.isAuthenticated && (
            <a href="/artist-dashboard">
              <button className="cursor-pointer flex items-center gap-5 font-bold text-heading-04">
                <img
                  className="rounded-full w-11"
                  src={auth.user.profileImageUrl}
                  alt=""
                />
                <h1>{auth.user.username}</h1>
              </button>
            </a>
          )}
          <div className="flex flex-col w-auto gap-3">
            <h3 className="font-medium text-[#ababa9]">Navigation</h3>
            <a href="/home" className={hoverVariant.left}>
              Home
            </a>
            <a href="/search" className={hoverVariant.left}>
              Search
            </a>
            <a href="/library" className={hoverVariant.left}>
              Library
            </a>
            <a href="/library" className={hoverVariant.left}>
              Wishlist
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pb-16">
          <h3 className="font-medium text-[#ababa9]">Tunema</h3>
          <a href="" className={hoverVariant.left}>
            Help
          </a>
          <a href="/" className={hoverVariant.left}>
            About TUNEMA
          </a>
          {auth.isAuthenticated && (
            <button
              onClick={() => {
                auth.logout()
                return navigate('/login')
              }}
              className="hover:underline flex justify-start text-red-400 font-medium"
            >
              Log Out
            </button>
          )}
          {!auth.isAuthenticated && (
            <a href="/login" className={hoverVariant.left}>
              Log In
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default Sidebar
