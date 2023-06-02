import React from 'react'
import { useState } from 'react'
import Navbar from '../../components/Navbar/navbar'
import Container from '../../components/container'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import ArtistSample from '../../components/samples/sample-artist'
import SampleArtistTitle from '../../components/samples/title-artist'
import { Edit, ToggleOn } from 'iconsax-react'
import ProfileEdit from './profile-edit'

function ArtistDashboard() {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      <Navbar />
      <ProfileEdit isEdit={isEdit} setIsEdit={setIsEdit} />
      <main>
        <section className="group relative flex h-72 w-full bg-[url('/pic/home/home-footer.png')] items-center justify-center bg-cover bg-center font-medium mt-16">
          <Container>
            <div className="flex w-full flex-col justify-center items-center">
              <div className="flex w-full justify-left">
                <img
                  className="flex object-contain w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full"
                  src="/pic/navbar/dummy_2.png"
                  alt="Profile image profile page"
                />
                <div className="flex flex-col font-medium pl-5 sm:pl-10 justify-end pb-2">
                  <div className="flex w-full text-white font-medium text-heading-03 md:text-heading-02 lg:text-heading-01">
                    Mar Hansen
                  </div>
                  <div className="flex w-full gap-3 sm:gap-10 text-white font-medium text-heading-06 md:text-heading-05 lg:text-heading-04">
                    <p>30 Owned Sample</p>
                    <p>30 Uploaded Sample</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEdit((prev) => !prev)}
              className="group-hover:visible sm:invisible visible absolute top-5 right-10 p-2 flex gap-3 items-center justify-center rounded-lg bg-black/80 text-white font-medium"
            >
              <Edit size="25" color="white" />
              <p>Edit</p>
            </button>
          </Container>
        </section>
        <Container>
          <section className="flex items-center overflow-auto no-scrollbar w-full text-small sm:text-heading-06 md:text-heading-05 mt-16">
            <div className="flex items-end sm:gap-5 gap-2 w-full">
              <div className="flex h-auto border-solid text-dark-green border-b-primary-green">
                <button className="flex w-auto font-medium overflow-x-auto h-auto border-b-4 px-2 border-b-dark-green">
                  Your Samples
                </button>
              </div>
              <div className="flex h-auto pl-5 border-solid border-b-primary-green hover:text-dark-green cursor-pointer">
                <button className="flex h-auto font-medium overflow-x-auto hover:border-b-4 px-2 border-b-dark-green">
                  Favorites
                </button>
              </div>
              <div className="flex h-auto pl-5 border-solid border-b-primary-green hover:text-dark-green cursor-pointer">
                <button className="flex h-auto font-medium overflow-x-auto hover:border-b-4 px-2 border-b-dark-green">
                  Uploaded Samples
                </button>
              </div>
              <div className="flex h-auto pl-5 border-solid border-b-primary-green hover:text-dark-green cursor-pointer">
                <button className="flex h-auto font-medium overflow-x-auto hover:border-b-4 px-2 border-b-dark-green">
                  Overview
                </button>
              </div>
            </div>
          </section>
          <div className="flex items-start border-b-[1px] border-gray-3 mb-10"></div>
          <SampleArtistTitle />
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
