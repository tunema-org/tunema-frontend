import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/button'
import styled from 'styled-components'
import Container from '../../components/container'
import Footer from '../../components/footer'
import AOS from 'aos'
import React, { useEffect } from 'react'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'

function LandingPage() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <main className="">
        <Navbar />
        <Helmet>
          <meta charSet="utf-8" />
          <title>TUNEMA</title>
          <link
            rel="icon"
            type="image/x-icon"
            href="/pic/favicon/favicon.ico"
          />
        </Helmet>
        <section className="h-screen overflow-clip flex bg-[url('/pic/landing/landing_1.png')] bg-cover bg-center">
          <Container>
            <div className="h-screen max-w-[50%] flex flex-col justify-center text-white font-body gap-5 md:p-0 p-5">
              <h1 className="text-display min-w-[17rem]">
                <span className="text-primary-green">D</span>iscover and
                <br />
                <span className="text-primary-green">P</span>roduce
              </h1>
              <p className="max-w-[50%] min-w-[17rem]">
                Explore a vast array of musical content and take your music
                production to the next level.{' '}
              </p>
            </div>
          </Container>
          <img
            className="max-w-[10%] min-w-[10rem] absolute -bottom-0 right-5 p-5"
            src="/pic/Logo White.svg"
            alt=""
          />
        </section>

        <Container>
          <section className="min-h-[31rem] flex justify-between font-body content-center lg:flex-row flex-col gap-10 lg:py-0 md:my-36 my-10">
            <div
              data-aos="fade-left"
              className="flex flex-col gap-5 justify-center md:p-0 p-5 max-w-[43.75rem]"
            >
              <h1 className="text-heading-03">Explore various samples.</h1>
              <p className=" ">
                Our extensive collection of samples covers a wide range of
                genres, from hip-hop and EDM to jazz and classical. With
                thousands of samples to choose from, you're sure to find the
                perfect sound to take your music to the next level.
              </p>
              <div>
                <a href="/home">
                  <Button type="landing">Browse Samples</Button>
                </a>
              </div>
            </div>
            <div data-aos="fade-right" className="flex">
              <img
                className="object-contain h-auto justify-center self-center lg:self-center"
                src="/pic/landing/landing_2.png"
                alt=""
              />
            </div>
          </section>
        </Container>

        <Container>
          <section className="min-h-[31rem] flex justify-between font-body content-center lg:flex-row-reverse flex-col gap-10 lg:py-0 py-12 md:my-36 my-10">
            <div
              data-aos="fade-right"
              className="flex flex-col items-start lg:items-end gap-5 justify-center md:p-0 p-5 max-w-[43.75rem]"
            >
              <h1 className="text-heading-03">Everyone can be the artist!</h1>
              <p className="lg:text-right text-left">
                At{' '}
                <span className="text-dark-green">Explore Various Samples</span>
                , we believe that everyone has the potential to be an artist.
                That's why we're proud to offer a platform where music
                producers, hobbyists, and enthusiasts can share their own
                samples and contribute to the community.
              </p>
              <div>
                <Button type="landing">Upload Samples</Button>
              </div>
            </div>
            <div data-aos="fade-left" className="flex">
              <img
                className="object-contain h-auto justify-center self-center lg:self-center"
                src="/pic/landing/landing_3.png"
                alt=""
              />
            </div>
          </section>
        </Container>

        <Container>
          <section className="min-h-[40rem] flex font-body content-center flex-col gap-10 md:p-0 p-5 ">
            <h1 data-aos="fade-right" className="text-heading-03">
              They Said
            </h1>
            <div className="flex lg:flex-row flex-col justify-center gap-12 items-center">
              <div
                data-aos="fade-right"
                className="flex lg:w-[23%] lg:h-[419px] w-[95%] h-[290px] lg:flex-col lg:gap-0 gap-10 flex-row items-center rounded-xl shadow-xl px-10"
              >
                <div className="flex items-center flex-col py-10 gap-2 max-w-[40%] lg:max-w-full">
                  <img
                    className="lg:max-w-[50%] max-w-[6rem]"
                    src="/pic/landing/Reviews/HotPotato.png"
                    alt=""
                  />
                  <p className="text-gray-3">Hot Potato</p>
                  <h6 className="flex text-gray-3 text-small justify-end">
                    EDM Composer
                  </h6>
                </div>
                <p>I'm bout to blow.🔥</p>
              </div>

              <div
                data-aos="fade-up"
                className="flex lg:w-[23%] lg:h-[419px] w-[95%] h-[290px] lg:flex-col lg:gap-0 gap-10 flex-row items-center rounded-xl shadow-xl px-10"
              >
                <div className="flex items-center flex-col py-10 gap-2 max-w-[40%] lg:max-w-full">
                  <img
                    className="lg:max-w-[50%] max-w-[6rem]"
                    src="/pic/landing/Reviews/KanyeEast.png"
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

              <div
                data-aos="fade-left"
                className="flex lg:w-[23%] lg:h-[419px] w-[95%] h-[290px] lg:flex-col lg:gap-0 gap-10 flex-row items-center rounded-xl shadow-xl px-10"
              >
                <div className="flex items-center flex-col py-10 gap-2 max-w-[40%] lg:max-w-full">
                  <img
                    className="lg:max-w-[50%] max-w-[6rem]"
                    src="/pic/landing/Reviews/DjYoshi.png"
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

        <section className="h-auto overflow-clip flex bg-[url('/pic/landing/landing_4.png')] bg-cover bg-center font-body">
          <Container>
            <div className="flex flex-col h-[531px] justify-center items-center gap-3">
              <div className="flex flex-row max-w-[190px] justify-center items-center">
                <h1 className="text-heading-01 text-white mx-2">Join</h1>
                <img src="/pic/Logo White.svg" alt="" />
              </div>
              <a href="/home">
                <Button type="primary">JOIN</Button>
              </a>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
    </>
  )
}

export default LandingPage
