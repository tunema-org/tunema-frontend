import Container from '../../components/container'
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

function Checkout() {
  const paymentVariant = {
    primary: '',
    selected: '',
  }
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/src/pic/checkout/checkout-header.png')] bg-cover bg-center"></section>
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
            <div className="flex">
              <button className="flex py-10 px-20">
                <img src="/src/pic/checkout/logobca.png" alt="" />
                <p>Bca Virtual Account</p>{' '}
              </button>
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
