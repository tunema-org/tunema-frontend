import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import styled from 'styled-components'
import Container from '../../components/container'
import Sample from '../../components/samples/sample'
import IconPlay from '../../components/icons/icon-play'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import ArtistSample from '../../components/samples/sample-artist'

function ArtistDashboard() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex h-72 w-full bg-[url('/pic/home/home-footer.png')] bg-cover bg-center font-medium mt-16">
          <div className="flex w-full flex-col justify-center">
            <div className="flex w-full justify-left py-28 pl-24 md:pl-44 lg:pl-48">
              <img
                className="flex object-contain w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full"
                src="/pic/navbar/dummy_2.png"
                alt="Profile image profile page"
              />
              <div className="flex flex-col font-medium pl-5 sm:pl-10 justify-end pb-2">
                <div className="flex w-full text-white font-medium text-heading-03 md:text-heading-02 lg:text-heading-01">
                  Mar Hansen
                </div>
                <div className="flex w-full text-white font-medium text-heading-06 md:text-heading-05 lg:text-heading-04">
                  30 Samples
                </div>
              </div>
            </div>
          </div>
        </section>
        <Container>
          <section className="flex flex-col w-full text-small sm:text-heading-06 md:text-heading-05 mt-16">
            <div className="flex w-full">
              <div className="flex h-auto sm:overflow-scroll border-solid text-dark-green border-b-primary-green">
                <button className="flex w-auto font-medium overflow-x-auto h-auto border-b-4 px-2 border-b-dark-green">
                  Your Samples
                </button>
              </div>
              <div className="flex h-auto pl-5 sm:overflow-scroll border-solid border-b-primary-green hover:text-dark-green cursor-pointer">
                <button className="flex h-auto font-medium overflow-x-auto hover:border-b-4 px-2 border-b-dark-green">
                  Favorites
                </button>
              </div>
              <div className="flex h-auto pl-5 sm:overflow-scroll border-solid border-b-primary-green hover:text-dark-green cursor-pointer">
                <button className="flex h-auto font-medium overflow-x-auto hover:border-b-4 px-2 border-b-dark-green">
                  Uploaded Samples
                </button>
              </div>
              <div className="flex h-auto pl-5 sm:overflow-scroll border-solid border-b-primary-green hover:text-dark-green cursor-pointer">
                <button className="flex h-auto font-medium overflow-x-auto hover:border-b-4 px-2 border-b-dark-green">
                  Overview
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
            <div className="grid sm:grid-cols-12 lg:grid-cols-12 grid-cols-9 items-center gap-10 pr-2 font-medium py-5 text-gray-4 px-4">
              <p>Cover</p>
              <div className=""></div>
              <div className="col-span-2 flex-col">
                <p>FileName</p>
              </div>
              <div className="md:col-span-3 max-w-[22rem] md:visible invisible">
                <p>AudioWave</p>
              </div>
              <p className="sm:block hidden">Time</p>
              <p className="sm:block hidden">BPM</p>
              <p className="flex-col gap-5 lg:col-span-2 md:col-span-1 col-span-2">
                Date Added
              </p>
              <p className="md:block hidden"></p>
            </div>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
          </section>
          <section className="md:pb-16">
            {' '}
            <ArtistSample src="/samples/acimalaka2.mp3" />
            <ArtistSample src="/samples/1.wav" />
            <ArtistSample src="/samples/2.wav" />
            <ArtistSample src="/samples/3.wav" />
          </section>
        </Container>
      </main>
      <FooterMobile />
      <div className="md:block hidden">
        <Footer />
      </div>
    </>
  )
}

export default ArtistDashboard
