import Navbar from '../../components/Navbar/navbar'
import styled from 'styled-components'
import Container from '../../components/container'
import Sample from '../../components/sample'
import IconPlay from '../../components/icons/icon-play'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import ArtistSample from '../../components/artist-sample'

function ArtistDashboard() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex h-72 w-full bg-[url('/src/pic/home/home-footer.png')] bg-cover bg-center font-medium mt-16">
          <div className="flex w-full flex-col justify-center">
            <div className="flex w-full justify-left py-28 pl-12 md:pl-32">
              <img
                className="flex object-contain w-32 h-32 md:w-56 md:h-56 rounded-full"
                src="/src/pic/navbar/dummy_profile.jpg"
                alt="Profile image profile page"
              />
              <div className="flex flex-col font-medium pl-5 sm:pl-10 justify-end pb-2">
                <div className="flex w-full text-white font-medium text-heading-04 md:text-heading-01">
                  Mar Hansen
                </div>
                <div className="flex w-full text-white font-medium text-heading-06 md:text-heading-04">
                  30 Samples
                </div>
              </div>
            </div>
          </div>
        </section>
        <Container>
          <section className="flex flex-col w-full justify-left font-medium mt-16">
            <div className="flex w-full">
              <div className="flex pl-5 pr-10 font-body md:font-medium text-left text-heading-06 md:text-heading-04 border-solid text-dark-green border-b-primary-green">
                <button className="flex w-auto h-auto border-b-4 border-b-dark-green content-left">
                  All
                </button>
              </div>
              <div className="flex w-full justify-start font-body md:font-medium text-heading-06 md:text-heading-04 border-solid border-b-primary-green hover:text-dark-green">
                <button className="flex w-auto h-auto hover:border-b-4 border-b-dark-green content-left">
                  Overview
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
            <div className="grid sm:grid-cols-12 grid-cols-9 items-center gap-10 pr-2 font-medium py-5 text-gray-4 px-4">
              <p>Cover</p>
              <div className=""></div>
              <div className="sm:col-span-2 col-span-3 flex-col">
                <p>FileName</p>
              </div>
              <div className="md:col-span-3 max-w-[22rem] md:visible invisible">
                <p>AudioWave</p>
              </div>
              <p className="sm:block hidden">Time</p>
              <p className="">BPM</p>
              <p className="flex-col gap-5 md:col-span-1 col-span-3 sm:block hidden">
                Date Added
              </p>
              <p className="sm:block hidden"></p>
            </div>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
          </section>
          <section className="md:pb-16">
            {' '}
            <ArtistSample />
            <ArtistSample />
            <ArtistSample />
            <ArtistSample />
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
