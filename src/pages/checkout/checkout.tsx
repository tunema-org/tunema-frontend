import { Props } from '@headlessui/react/dist/types'
import Container from '../../components/container'
import { useRef, useState } from 'react'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import IconBCA from '../../components/icons/icon-bca'
import IconPlay from '../../components/icons/icon-play'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/sample'
import SearchBar from '../../components/searchbar'
import Type from '../../components/type'
import { Label } from '@headlessui/react/dist/components/label/label'

type PaymentProp = {
  img: string
  label: string
  isSelected: boolean
  onClick: () => void
}

const Payment = ({ img, label, isSelected, onClick }: PaymentProp) => {
  const paymentVariant = isSelected
    ? 'flex py-4 px-7 items-center gap-5 border border-black  rounded-md'
    : 'flex py-4 px-7 items-center gap-5 border border-gray-3 rounded-md'

  return (
    <button className={paymentVariant} onClick={onClick}>
      <img src={img} className="max-w-[80px]" alt="" />
      <p>{label}</p>{' '}
    </button>
  )
}

function Checkout() {
  const [currentSelection, setCurrentSelection] = useState('bca')
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
        <section className="py-5 flex flex-col font-body">
          <div className="flex">
            <h1 className="px-5 text-heading-04 text- text-dark-green border-b-2 border-dark-green">
              Payment
            </h1>
            <h1 className="px-5 text-[25px] text-black/30">Overview</h1>
          </div>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
        </section>
        <section className="flex flex-col font-body">
          <div className="flex flex-col">
            <h1 className="text-heading-06 text-black/50">Virtual Account</h1>
            <div className="flex gap-5">
              <Payment
                isSelected={currentSelection === 'bca'}
                img="/pic/checkout/logobca.png"
                label="BCA Virtual Account"
                onClick={() => setCurrentSelection('bca')}
              />
              <Payment
                isSelected={currentSelection === 'mandiri'}
                img="/pic/checkout/logobca.png"
                label="BCA Virtual Account"
                onClick={() => setCurrentSelection('mandiri')}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-heading-06 text-black/50">E-Wallet</h1>
            <div className="flex"></div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Checkout
