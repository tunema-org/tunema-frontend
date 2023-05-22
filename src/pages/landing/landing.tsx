import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import styled from 'styled-components'
import Container from '../../components/container'
import Footer from '../../components/footer'

const LandingPage = () => (
  <>
    <body className="">
      <Navbar />
      <section className="h-auto overflow-clip flex bg-[url('/src/pic/landing/landing_1.png')] bg-cover bg-center">
        <Container>
          <div className="px-10 flex flex-col justify-center font-body h-screen  text-white overflow-clip">
            <h1 className="flex relative z-10 text-display">
              <span className="text-primary-green">D</span>iscover and
            </h1>
            <h1 className="flex relative z-10 text-display">
              <span className="text-primary-green">P</span>roduce
            </h1>
            <div className="flex relative z-10 flex-col gap-12">
              <p className="text-body max-w-[50vh]">
                Explore a vast array of musical content and take your music
                <br />
                production to the next level.{' '}
              </p>
            </div>
            {/* <img
              className="top-0 left-0 absolute w-auto min-h-screen h-auto object-cover -z-40"
              src="/src/pic/landing/landing_1.png"
              alt=""
            /> */}
          </div>
        </Container>
      </section>

      <Container>
        <section className="min-h-[31rem] flex justify-center font-body content-center lg:flex-row flex-col gap-10 lg:py-0 my-36">
          <div className="flex flex-col gap-5 justify-center md:p-0 p-5 max-w-[43.75rem]">
            <h1 className="text-heading-03">Explore various samples.</h1>
            <p className=" ">
              Our extensive collection of samples covers a wide range of genres,
              from hip-hop and EDM to jazz and classical. With thousands of
              samples to choose from, you're sure to find the perfect sound to
              take your music to the next level.
            </p>
            <div>
              <Button type="landing">Browse Samples</Button>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-contain h-auto justify-center self-center lg:self-center"
              src="/src/pic/landing/landing_2.png"
              alt=""
            />
          </div>
        </section>
      </Container>

      <Container>
        <section className="min-h-[31rem] flex justify-center font-body content-center lg:flex-row-reverse flex-col gap-10 lg:py-0 py-12 my-36">
          <div className="flex flex-col items-end gap-5 justify-center md:p-0 p-5 max-w-[43.75rem]">
            <h1 className="text-heading-03">Everyone can be the artist!</h1>
            <p className="text-right">
              At{' '}
              <span className="text-dark-green">Explore Various Samples</span>,
              we believe that everyone has the potential to be an artist. That's
              why we're proud to offer a platform where music producers,
              hobbyists, and enthusiasts can share their own samples and
              contribute to the community.
            </p>
            <div>
              <Button type="landing">Upload Samples</Button>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-contain h-auto justify-center self-center lg:self-center"
              src="/src/pic/landing/landing_3.png"
              alt=""
            />
          </div>
        </section>
      </Container>

      <Container>
        <section className="min-h-[40rem] flex font-body content-center flex-col gap-10 md:py-0 my-5">
          <h1 className="text-heading-03 px-5">They Said</h1>
          <div className="flex lg:flex-row flex-col justify-center gap-12 items-center">
            <div className="flex lg:w-[23%] lg:h-[419px] w-[95%] h-[250px] lg:flex-col lg:gap-0 gap-10 flex-row items-center rounded-xl shadow-xl px-10">
              <div className="flex items-center flex-col py-10 gap-2 max-w-[40%] lg:max-w-full">
                <img
                  className="lg:max-w-[50%] max-w-[85%]"
                  src="/src/pic/landing/Reviews/HotPotato.png"
                  alt=""
                />
                <p className="text-gray-3">Hot Potato</p>
                <h6 className="flex text-gray-3 text-small justify-end">
                  EDM Composer
                </h6>
              </div>
              <p>I'm bout to blow.🔥</p>
            </div>

            <div className="flex lg:w-[23%] lg:h-[419px] w-[95%] h-[250px] lg:flex-col lg:gap-0 gap-10 flex-row items-center rounded-xl shadow-xl px-10">
              <div className="flex items-center flex-col py-10 gap-2 max-w-[40%] lg:max-w-full">
                <img
                  className="lg:max-w-[50%] max-w-[85%]"
                  src="/src/pic/landing/Reviews/KanyeEast.png"
                  alt=""
                />
                <p className="text-gray-3">KanyeEast</p>
                <h6 className="flex text-gray-3 text-small justify-end">
                  RnB Producer
                </h6>
              </div>
              <p>
                Overall, I highly recommend TUNEMA to anyone looking for a
                reliable source of sample music.
              </p>
            </div>

            <div className="flex lg:w-[23%] lg:h-[419px] w-[95%] h-[250px] lg:flex-col lg:gap-0 gap-10 flex-row items-center rounded-xl shadow-xl px-10">
              <div className="flex items-center flex-col py-10 gap-2 max-w-[40%] lg:max-w-full">
                <img
                  className="lg:max-w-[50%] max-w-[85%]"
                  src="/src/pic/landing/Reviews/DjYoshi.png"
                  alt=""
                />
                <p className="text-gray-3">DjYoshi</p>
                <h6 className="flex text-gray-3 text-small justify-end">
                  Jazz Artist
                </h6>
              </div>
              <p>TUNEMA very nice.</p>
            </div>
          </div>
        </section>
      </Container>

      <section className="h-auto overflow-clip flex bg-[url('/src/pic/landing/landing_4.png')] bg-cover bg-center font-body">
        <Container>
          <div className="flex flex-col h-[531px] justify-center items-center gap-3">
            <div className="flex flex-row max-w-[190px] justify-center items-center">
              <h1 className="text-heading-01 text-white mx-2">Join</h1>
              <img src="/src/pic/Logo White.svg" alt="" />
            </div>
            <Button type="primary">JOIN</Button>
          </div>
        </Container>
      </section>

      <Footer />
    </body>
  </>
)

export default LandingPage
