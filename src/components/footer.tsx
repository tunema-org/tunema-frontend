import React from 'react'

const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col h-[456px]">
          <div className="flex items-start border-b-[1px] border-black">
            <img
              className="p-10 max-w-[15rem]"
              src="pic/Logo black.svg"
              alt=""
            />
          </div>

          <section className="flex font-body px-10 md:justify-between justify-center md:flex-row flex-col-reverse">
            <div className="flex flex-col justify-center">
              <h3 className="md:flex hidden font-medium py-6">
                Stay Updated with TUNEMA
              </h3>
              <div className="flex-row gap-5 max-w-[50rem] md:flex hidden">
                <div className="bg-[#ededea] border rounded-[34px] h-auto pl-7 w-[25rem]">
                  <input
                    type="email"
                    placeholder="Stay updated with TUNEMA"
                    className="w-full h-[46px] bg-transparent focus:outline-none font-body pr-5"
                  />
                </div>

                <button>
                  <img src="/pic/footer/send.svg" alt="" />
                </button>
              </div>
              <h3 className="font-medium pt-10">Find Us: </h3>
              <div className="flex flex-row gap-5 py-6 items-center">
                <a href="">
                  <img src="/pic/footer/facebook.svg" alt="" />
                </a>
                <a href="">
                  <img src="/pic/footer/twitter.svg" alt="" />
                </a>
                <a href="">
                  <img src="/pic/footer/instagram.svg" alt="" />
                </a>
                <a href="">
                  <img src="/pic/footer/youtube.svg" alt="" />
                </a>
              </div>
            </div>

            <div className="flex flex-col text-gray-4 gap-2 justify-center md:text-right text-left  py-6">
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
