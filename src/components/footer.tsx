import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col h-[456px]">
          <div className="flex items-start border-b-[1px] border-black">
            <img
              className="p-10 max-w-[15rem]"
              src="/src/pic/Logo black.svg"
              alt=""
            />
          </div>

          <section className="flex font-body px-10 justify-between">
            <div className="flex flex-col justify-center">
              <h3 className="font-medium py-6">Stay Updated with TUNEMA</h3>
              <div className="flex flex-row gap-5 max-w-[22rem]">
                <input
                  type="text"
                  name="email"
                  id="email-update"
                  autoComplete="given-email"
                  placeholder="   Enter Email to get updates and newsletters"
                  className="flex w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-4 placeholder:text-gray-400 focus:ring-2 focus:ring-dark-green focus:ring-offset-dark-green sm:text-sm sm:leading-6"
                />
                <button>
                  <img src="/src/pic/footer/send.svg" alt="" />
                </button>
              </div>
              <h3 className="font-medium pt-10">Find Us: </h3>
              <div className="flex flex-row gap-5 py-6 items-center">
                <a href="">
                  <img src="/src/pic/footer/facebook.svg" alt="" />
                </a>
                <a href="">
                  <img src="/src/pic/footer/twitter.svg" alt="" />
                </a>
                <a href="">
                  <img src="/src/pic/footer/instagram.svg" alt="" />
                </a>
                <a href="">
                  <img src="/src/pic/footer/youtube.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="flex flex-col text-gray-4 gap-2 justify-center text-right md:visible invisible">
              <a className="hover:underline" href="">
                Home
              </a>
              <a className="hover:underline" href="">
                Search
              </a>
              <a className="hover:underline" href="">
                Library
              </a>
              <a className="hover:underline" href="">
                Help
              </a>
              <a className="hover:underline" href="">
                About TUNEMA
              </a>
            </div>
          </section>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
          <p className="flex font-body p-10 justify-end text-gray-4">
            © 2023 TUNEMA
          </p>
        </section>
      </footer>
    </>
  )
}

export default Footer
