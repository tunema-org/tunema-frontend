import React from 'react'
import IconHome from './icons/icon-home'
import IconSearch from './icons/icon-search'
import IconLibrary from './icons/icon-library'
import { useLocation } from 'react-router-dom'

function FooterMobile() {
  const { pathname } = useLocation()

  return (
    <>
      <footer className="sticky md:invisible visible bottom-0 bg-white">
        <section className="flex flex-col h-[70px] w-screen py-3">
          <div className="flex justify-center items-center content-center font-medium text-small text-center">
            <div className="flex flex-col items-center justify-center">
              <IconHome isActive={pathname === '/home'} />
              {pathname === '/home' ? (
                <div className="text-dark-green">Home</div>
              ) : (
                <div>Home</div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center px-16">
              <IconSearch isActive={pathname === '/search'} />
              {pathname === '/search' ? (
                <div className="text-dark-green">Search</div>
              ) : (
                <div>Search</div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center">
              <IconLibrary isActive={pathname === '/library'} />
              {pathname === '/library' ? (
                <div className="text-dark-green">Library</div>
              ) : (
                <div>Library</div>
              )}
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default FooterMobile
