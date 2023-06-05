import Container from '../../components/container'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import IconPlay from '../../components/icons/icon-play'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/samples/sample'
import SearchBar from '../../components/searchbar'
import Type from '../../components/type'
import BuySample from '../../components/samples/buy-sample'

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
        <section className="flex md:justify-between justify-normal items-center gap-5 sm:gap-10 md:gap-14 lg:gap-20 font-body xl:flex-row flex-col my-5 px-0 sm:px-51 pb-10">
          <section className="flex flex-col">
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
            <div className="grid md:grid-cols-6 grid-cols-5 items-center gap-10 pr-2 font-medium py-3 text-gray-4 px-2">
              <div className="col-auto"></div>
              <p>Cover</p>
              <div className="md:col-span-2 col-auto min-w-[100px]">
                <p>FileName</p>
              </div>
              <p className="sm:visible invisible">Time</p>
              <p className="flex flex-col font-medium justify-start">Price</p>
            </div>
            <div className="flex items-start border-b-[1px] border-gray-3"></div>
            <section>
              <BuySample
                img="/pic/components/player/alblumcover.png"
                name="Yoooooooo.mp3"
                artist="B.O.B"
                src="/samples/acimalaka2.mp3"
                time="3:45"
                bpm={125}
                keys="C#"
                keyScale="major"
                price={3.45}
              ></BuySample>
              <BuySample
                img="/pic/components/player/alblumcover.png"
                name="Yoooooooo.mp3"
                artist="B.O.B"
                src="/samples/acimalaka2.mp3"
                time="3:45"
                bpm={125}
                keys="C#"
                keyScale="major"
                price={3.45}
              ></BuySample>
              <BuySample
                img="/pic/components/player/alblumcover.png"
                name="Yooooooooaaaaaaaaaaaaaaaa.mp3"
                artist="B.O.B"
                src="/samples/acimalaka2.mp3"
                time="3:45"
                bpm={125}
                keys="C#"
                keyScale="major"
                price={3.45}
              ></BuySample>
              <BuySample
                img="/pic/components/player/alblumcover.png"
                name="Yoooooooo.mp3"
                artist="B.O.B"
                src="/samples/acimalaka2.mp3"
                time="3:45"
                bpm={125}
                keys="C#"
                keyScale="major"
                price={3.45}
              ></BuySample>
            </section>
          </section>

          <section className="sm:shadow-[0px_4px_30px_rgba(0,0,0,0.08)] shadow-none rounded-[10px] w-[320px] sm:w-[650px] h-auto flex flex-col sm:p-8 p-0 gap-5 font-body">
            <div className="grid-cols-2 items-center min-w-auto grid w-full">
              <p className="flex justify-start">Total Product</p>
              <p className="flex justify-end text-dark-green font-medium">
                $3.45
              </p>
            </div>
            <div className="border-b-[1px] border-gray-3 w-[98%]"></div>
            <div className="grid-cols-2 items-center min-w-auto grid w-full">
              <p className="flex justify-start text-heading-05">
                Total Payment
              </p>
              <p className="flex justify-end text-dark-green text-heading-05">
                $3.45
              </p>
            </div>
            <button className="duration-200 bg-primary-green hover:bg-dark-green w-full font-medium py-2 px-8 rounded-full overflow-clip">
              Checkout
            </button>
          </section>
        </section>
      </Container>
    </>
  )
}

export default SampleCart
