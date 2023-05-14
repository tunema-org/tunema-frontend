import { ShoppingBag } from 'iconsax-react'
import ButtonPrimary from '../Button/button_primary'

function Navbar() {
  return (
    <div className="font-body sticky top-0 z-50" id="navbar m-0">
      <nav className="flex flex-row list-none h-16 items-center justify-between p-4 border-b-2 gray-4 bg-white item-center">
        <div className="flex flex-row gap-12 mx-8">
          <li>
            <a
              href="#"
              className="hover:underline hover:text-dark-green hover:font-medium"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:underline hover:text-dark-green hover:font-medium"
            >
              Library
            </a>
          </li>
        </div>
        <a href="" className="align-middle">
          <img
            className="object-contain h-9 w-44"
            src="/src/pic/LOGO TUNEMA BLACK 2.png"
            id="1"
            title="images"
          />
        </a>
        <div className="flex flex-row items-center gap-12 mx-8">
          <li>
            <a
              href="#_"
              className="relative items-center justify-start flex py-2 px-5 overflow-hidden font-medium transition-all bg-primary-green rounded-full hover:bg-dark-green hover:text-white group"
            >
              <span className="absolute inset-0 border-0 group-hover:border-[25px] ease-linear duration-100 transition-all border-dark-green rounded-full"></span>
              <span className="relative w-full text-left text-black transition-colors duration-200 ease-in-out group-hover:text-white">
                Upload
              </span>
            </a>
          </li>
          <a href="" className="hidden">
            <ShoppingBag size="32" color="black" />
          </a>

          <li>
            <a
              href="#"
              className="hover:underline hover:text-dark-green hover:font-medium"
            >
              Login
            </a>
          </li>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
