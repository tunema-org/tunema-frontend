import React from 'react'
import IconHome from './icons/icon-home'
import IconSearch from './icons/icon-search'
import IconLibrary from './icons/icon-library'
import { useLocation } from 'react-router-dom'

function FooterMobile() {
  const { pathname } = useLocation()

  return (
    <>
      <footer className="md:invisible visible">
        <section className="flex flex-col h-[70px] py-4 w-auto">
          <div className="flex justify-center items-center content-center font-medium text-small text-center">
            <div className="flex flex-col items-center justify-center px-14">
              <IconHome isActive={pathname === '/'} />
              {pathname === '/' ? (
                <div className="text-primary-green">Home</div>
              ) : (
                <div>Home</div>
              )}
            </div>
            <div className="flex flex-col items-center justify-center px-14">
              <IconSearch isActive={pathname === ''} />
              Search
            </div>
            <div className="flex flex-col items-center justify-center px-14">
              <IconLibrary isActive={pathname === ''} />
              Library
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default FooterMobile
