import { Props } from '@headlessui/react/dist/types'
import Container from '../../components/container'
import { useRef, useState } from 'react'
import DropdownSort from '../../components/dropdown/dropdown-sample'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import IconBCA from '../../components/icons/icon-bca'
import IconPlay from '../../components/icons/icon-play'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/samples/sample'
import SearchBar from '../../components/searchbar'
import Type from '../../components/type'
import { Label } from '@headlessui/react/dist/components/label/label'
import Button from '../../components/button'
import SampleCheckout from '../../components/samples/sample-checkout'
import { Transition } from '@headlessui/react'

type PaymentProp = {
  img: string
  label: string
  isSelected: boolean
  onClick: () => void
}

const Payment = ({ img, label, isSelected, onClick }: PaymentProp) => {
  const paymentVariant = isSelected
    ? 'flex min-w-[300px] py-4 px-7 items-center gap-5 border bg-light-green border-dark-green rounded-md'
    : 'flex min-w-[300px] py-4 px-7 items-center gap-5 border border-gray-3 rounded-md'

  return (
    <button className={paymentVariant} onClick={onClick}>
      <img src={img} className="max-w-[80px]" alt="" />
      <p>{label}</p>{' '}
    </button>
  )
}

function Checkout() {
  const [currentSelection, setCurrentSelection] = useState('bca')
  const [isCheckout, setIsCheckout] = useState(false)
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/pic/checkout/checkout-header.png')] bg-cover bg-center"></section>
      <Container>
        {' '}
        <section className="h-auto font-body flex items-center py-3">
          <div className="flex flex-col">
            <h1 className="text-heading-01 ">Checkout</h1>
            <p>Choose your payment methods.</p>
          </div>
        </section>
        {!isCheckout && (
          <>
            <section className="py-5 flex flex-col font-body">
              <div className="flex">
                <h1 className="px-5 text-heading-04 text- text-dark-green border-b-2 border-dark-green">
                  Payment
                </h1>
                <h1 className="px-5 text-[25px] text-black/30">Overview</h1>
              </div>
              <div className="flex items-start border-b-[1px] border-gray-3"></div>
            </section>
            <section className="flex md:justify-between justify-normal gap-5 items-center font-body xl:flex-row flex-col my-5 px-0 sm:px-5">
              <section className="flex flex-col">
                <div className="flex flex-col">
                  <h1 className="text-heading-06 text-black/50">
                    Virtual Account
                  </h1>
                  <div className="flex gap-5 py-5 sm:flex-row flex-col">
                    <Payment
                      isSelected={currentSelection === 'bca'}
                      img="/pic/checkout/logobca.png"
                      label="BCA Virtual Account"
                      onClick={() => setCurrentSelection('bca')}
                    />
                    <Payment
                      isSelected={currentSelection === 'mandiri'}
                      img="/pic/checkout/logomandiri.png"
                      label="Mandiri Virtual Account"
                      onClick={() => setCurrentSelection('mandiri')}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-heading-06 text-black/50">E-Wallet</h1>
                  <div className="flex gap-5 py-5 sm:flex-row flex-col">
                    <Payment
                      isSelected={currentSelection === 'gopay'}
                      img="/pic/checkout/logogopay.png"
                      label="Gopay"
                      onClick={() => setCurrentSelection('gopay')}
                    />
                    <Payment
                      isSelected={currentSelection === 'dana'}
                      img="/pic/checkout/logodana.png"
                      label="Dana"
                      onClick={() => setCurrentSelection('dana')}
                    />
                  </div>
                </div>
              </section>
              <section className="sm:shadow-[0px_4px_30px_rgba(0,0,0,0.08)] shadow-none rounded-[10px] w-[320px] sm:w-[430px] flex flex-col sm:p-8 p-0 items-center gap-5 font-body">
                <div className="border-b-[1px] border-gray-3 w-full my-2 sm:hidden block"></div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start">Total Product</p>
                  <p className="flex justify-end text-dark-green font-medium">
                    $3.45
                  </p>
                </div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start">Platform Fee</p>
                  <p className="flex justify-end text-dark-green font-medium">
                    $1.00
                  </p>
                </div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start">License</p>
                  <p className="flex justify-end text-dark-green font-medium">
                    $0.50
                  </p>
                </div>
                <div className="border-b-[1px] border-gray-3 w-[98%]"></div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start text-heading-05">
                    Total Payment
                  </p>
                  <p className="flex justify-end text-dark-green text-heading-05">
                    $4.95
                  </p>
                </div>
                <button
                  onClick={() => setIsCheckout((prev) => !prev)}
                  className="duration-200 bg-primary-green hover:bg-dark-green w-full font-medium py-2 px-8 rounded-full overflow-clip"
                >
                  Procced
                </button>
              </section>
            </section>
          </>
        )}
        {isCheckout && (
          <Transition appear show={isCheckout}>
            <section className="py-5 flex flex-col font-body">
              <div className="flex">
                <h1 className="px-5 text-[25px] text-black/30">Payment</h1>
                <h1 className="px-5 text-heading-04 text-dark-green border-b-2 border-dark-green ">
                  Overview
                </h1>
              </div>
              <div className="flex items-start border-b-[1px] border-gray-3"></div>
            </section>
            <p className="my-2 px-0 sm:px-5 font-body text-black/70">
              Your Sample License.
            </p>
            <section className="flex md:justify-between justify-normal gap-5 items-center font-body xl:flex-row flex-col my-5 px-0 sm:px-5">
              <Transition.Child
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
              >
                <section>
                  <div className="flex items-start border-b-[1px] border-gray-3"></div>
                  <div className="group grid md:grid-cols-6 grid-cols-5 items-center gap-10 pr-2 font-body p-4">
                    <p>Cover</p>
                    <div className="col-span-2 flex flex-col">
                      <p>Title</p>
                    </div>
                    <p className="text-left">Time</p>
                    <p className="text-left md:block hidden">BPM</p>
                    <p>License</p>
                  </div>
                  <div className="flex items-start border-b-[1px] border-gray-3"></div>
                </section>

                <section className="overflow-y-scroll max-h-[20rem]">
                  <SampleCheckout></SampleCheckout>
                  <SampleCheckout></SampleCheckout>
                  <SampleCheckout></SampleCheckout>
                  <SampleCheckout></SampleCheckout>
                </section>
              </Transition.Child>
              <Transition.Child
                enter="transition ease-out duration-1000"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                className="sm:shadow-[0px_4px_30px_rgba(0,0,0,0.08)] shadow-none rounded-[10px] w-[320px] sm:w-[430px] flex flex-col sm:p-8 p-0 items-center gap-5 font-body"
              >
                <div className="border-b-[1px] border-gray-3 w-full my-2 sm:hidden block"></div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start">Total Product</p>
                  <p className="flex justify-end text-dark-green font-medium">
                    $3.45
                  </p>
                </div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start">Platform Fee</p>
                  <p className="flex justify-end text-dark-green font-medium">
                    $1.00
                  </p>
                </div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start">License</p>
                  <p className="flex justify-end text-dark-green font-medium">
                    $0.50
                  </p>
                </div>
                <div className="border-b-[1px] border-gray-3 w-[98%]"></div>
                <div className="grid-cols-2 items-center min-w-auto grid w-full">
                  <p className="flex justify-start text-heading-05">
                    Total Payment
                  </p>
                  <p className="flex justify-end text-dark-green text-heading-05">
                    Paid
                  </p>
                </div>
                <button className="duration-200 bg-primary-green hover:bg-dark-green w-full font-medium py-2 px-8 rounded-full overflow-clip">
                  Done
                </button>
              </Transition.Child>
            </section>
          </Transition>
        )}
      </Container>
    </>
  )
}

export default Checkout
