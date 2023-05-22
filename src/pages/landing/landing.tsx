import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import styled from 'styled-components'
import Container from '../../components/container'

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
              <p className="text-body min-w-[50vh]">
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
        <section className="h-screen flex justify-center font-body content-center overflow-clip md:flex-row flex-col">
          <div className="flex flex-col gap-5 justify-center md:p-0 p-5">
            <h1 className="text-heading-03">Explore various samples.</h1>
            <p className="w-[700px]">
              Our extensive collection of samples covers a wide range of genres,
              from hip-hop and EDM to jazz and classical. With thousands of
              samples to choose from, you're sure to find the perfect sound to
              take your music to the next level.
            </p>
            <div>
              <Button type="landing">Browse Samples</Button>
            </div>
          </div>
          <img
            className="object-contain h-auto w-[652px] justify-center self-center"
            src="/src/pic/landing/landing_2.png"
            alt=""
          />
        </section>
      </Container>
    </body>
  </>
)

export default LandingPage
