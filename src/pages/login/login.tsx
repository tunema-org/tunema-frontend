import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import styled from 'styled-components'
import Container from '../../components/container'
import IconSoundcloud from '../../components/icons/icon-soundcloud'
import IconGoogle from '../../components/icons/icon-google'
// import { Input } from '@material-tailwind/react'

function Login() {
  return (
    <>
      <Navbar />
      <main>
        <section className="flex h-full w-full bg-white justify-center">
          <div className="flex md:bg-[url('/src/pic/login/login.png')] md:w-full md:bg-cover"></div>
          <Container>
            <div className="flex flex-row bg-white h-72 pt-28 content-center items-center justify-center">
              <a href="" className="">
                <img
                  className="object-contain h-12 w-40 items-center"
                  src={'/src/pic/LOGO TUNEMA BLACK 2.png'}
                  id="2"
                  title="logoBlack"
                  alt="logo"
                />
              </a>
            </div>
            <div className="pt-10 flex justify-center text-center">
              <button className="w-full h-8 shadow-md rounded-md font-medium content-center items-center text-small text-center hover:bg-primary-green">
                <IconGoogle className="mb-0.5 inline" />
                <b> Login with Google</b>
              </button>
            </div>
            <div className="pt-5 flex justify-center text-center">
              <button className="w-full h-8 shadow-md rounded-md font-medium content-center items-center justify-center text-small text-center hover:bg-primary-green">
                <IconSoundcloud className="mb-1 inline" />
                <b> Login with Soundcloud</b>
              </button>
            </div>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="flex w-full my-8 bg-gray-3 border-1" />
              <span className="absolute px-3 font-medium font-smallest -translate-x-1/2 bg-white pb-1 text-gray-3">
                Or
              </span>
            </div>

            <div className="flex flex-col w-full justify-center items-center font-medium text-small">
              <label className="flex text-gray-3 text-small self-start font-medium mb-2">
                E-mail
              </label>
              <input
                className="flex bg-gray-2 rounded w-full h-9 pl-3"
                type="email"
                placeholder=""
              />
            </div>
            <div className="flex flex-col w-full justify-center font-medium text-small">
              <label className="flex text-gray-3 text-small font-medium mt-5 mb-2">
                Password
              </label>
              <input
                className="flex bg-gray-2 rounded w-auto h-9 pl-3"
                type="password"
                placeholder=""
              />
            </div>
            <div className="flex justify-center pt-5">
              <div className="flex w-full justify-between">
                <div className="flex w-full">
                  <input
                    type="checkbox"
                    id="A3-yes"
                    name="A3-confirmation"
                    value="yes"
                    className="opacity-0 absolute h-8 w-8"
                  />
                  <div className="bg-gray-3 border-2 rounded-md border-gray-3 w-6 h-6 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary-green transition ease-in-out">
                    <svg
                      className="fill-current hidden w-3 h-3 text-primary-green pointer-events-none"
                      version="1.1"
                      viewBox="0 0 17 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <g
                          transform="translate(-9 -11)"
                          fill="#D1F812"
                          fill-rule="nonzero"
                        >
                          <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <label className="flex flex-col pt-1 text-sm font-medium w-full text-gray-3 text-small">
                    Remember me
                  </label>
                </div>
                <u className="flex flex-col pt-1 font-medium w-full items-end content-end text-right text-small text-gray-3 hover:text-primary-green">
                  Forgot Password?
                </u>
              </div>
            </div>
            <div className="flex flex-col pt-5 w-full">
              <Button type="primary">Login</Button>
            </div>
            <div className="flex flex-row w-full justify-center pt-5 pb-10 font-medium text-small text-gray-3">
              Don't have an account?
              <u className="indent-1 text-dark-green hover:text-primary-green bg-white">
                Register
              </u>
            </div>
          </Container>
        </section>
      </main>
    </>
  )
}

export default Login