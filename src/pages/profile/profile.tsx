import Navbar from '../../components/Navbar/navbar'
import styled from 'styled-components'
import Container from '../../components/container'
import Sample from '../../components/sample'
import IconPlay from '../../components/icons/icon-play'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'

function Profile() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex h-72 w-full bg-[url('/src/pic/home/home-footer.png')] bg-cover bg-center font-medium mt-16">
          <div className="flex w-full flex-col justify-center">
            <div className="flex w-full justify-left py-28 pl-7 sm:pl-48">
              <img
                className="flex object-contain w-32 h-32 sm:w-56 sm:h-56 rounded-full"
                src="/src/pic/navbar/dummy_profile.jpg"
                alt="Profile image profile page"
              />
              <div className="flex flex-col font-medium pl-5 sm:pl-10 justify-end pb-2">
                <div className="flex w-full text-white font-medium text-heading-04 sm:text-heading-01">
                  Mar Hansen
                </div>
                <div className="flex w-full text-white font-medium text-heading-06 sm:text-heading-04">
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
                  Favorites
                </button>
              </div>
            </div>
          </section>
          <section>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
            <div className="grid md:grid-cols-12 grid-cols-9 items-center gap-10 pr-2 font-medium py-5 text-gray-4 px-4">
              <p>Cover</p>
              <button className="group-hover:visible invisible">
                <IconPlay />
              </button>
              <div className="md:col-span-2 col-auto min-w-[100px]">
                <p>Title</p>
              </div>
              <div className="lg:col-span-3 col-auto max-w-[22rem] lg:block hidden">
                <p>AudioWave</p>
              </div>
              <p className="md:visible invisible">Time</p>
              <p className="md:visible invisible">BPM</p>
              <p>Price</p>
              <div className="flex items-center justify-end gap-5 col-span-2 md:visible invisible"></div>
            </div>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
          </section>
          <section className="md:pb-16">
            {' '}
            <Sample />
            <Sample />
            <Sample />
            <Sample />
            <Sample />
            <Sample />
            <Sample />
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

export default Profile
