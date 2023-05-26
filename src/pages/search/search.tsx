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

function Search() {
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/src/pic/search/search_header.png')] bg-cover bg-center"></section>
      <Container>
        {' '}
        <section className="h-auto font-body flex items-center py-3">
          <div className="flex flex-col">
            <h1 className="text-heading-01 ">Search</h1>
            <p>Looking for samples?</p>
          </div>
        </section>
        <section className="my-6 flex flex-col gap-6 font-body">
          <SearchBar />
          <DropdownType />

          <div className="flex gap-3 overflow-x-scroll no-scrollbar">
            <Type>Drums</Type>
            <Type>Synth</Type>
            <Type>Keys</Type>
            <Type>Bass</Type>
            <Type>Percussion</Type>
            <Type>Vocals</Type>
            <Type>Guitar</Type>
          </div>

          <div className="flex justify-between items-center">
            <p>500.350 Results</p>
            <DropdownSort />
          </div>
        </section>
        <section>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
          <div className="grid md:grid-cols-12 grid-cols-9 items-center gap-10 pr-2 font-medium py-5 text-gray-4 px-4">
            <p>Cover</p>
            <button className="group-hover:visible invisible">
              <IconPlay />
            </button>
            <div className="col-span-2 col-auto min-w-[100px]">
              <p>Title</p>
            </div>
            <div className="md:col-span-3 col-auto max-w-[22rem] md:block hidden">
              <p>AudioWave</p>
            </div>
            <p className="sm:visible invisible">Time</p>
            <p className="sm:block hidden">BPM</p>
            <p>Price</p>
            <div className="flex items-center justify-end gap-5 col-span-2 md:visible invisible"></div>
          </div>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
        </section>
        <section>
          <Sample src="/src/samples/acimalaka2.mp3" />
          <Sample src="/src/samples/1.wav" />
          <Sample src="/src/samples/2.wav" />
          <Sample src="/src/samples/3.wav" />
          <Sample src="/src/samples/4.wav" />
        </section>
      </Container>
      <div className="md:block hidden">
        <Footer />
      </div>
      <FooterMobile />
    </>
  )
}

export default Search
