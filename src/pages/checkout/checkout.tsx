import Container from '../../components/container'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import IconPlay from '../../components/icons/icon-play'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/sample'
import SearchBar from '../../components/searchbar'
import Type from '../../components/type'

function Checkout() {
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
            <p>Test</p>
          </div>
          <section></section>
        </section>
      </Container>
    </>
  )
}

export default Checkout
