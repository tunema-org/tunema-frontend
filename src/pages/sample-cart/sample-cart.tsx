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

function SampleCart() {
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/pic/samplecart/samplecart-header.png')] bg-cover bg-center"></section>
      <Container>
        {' '}
        <section className="h-auto font-body flex items-center py-3">
          <div className="flex flex-col">
            <h1 className="text-heading-01 ">Sample Cart</h1>
            <p>Shopping cart.</p>
          </div>
        </section>
      </Container>
    </>
  )
}

export default SampleCart
