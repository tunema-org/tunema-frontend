import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import Container from '../../components/container'
import Footer from '../../components/footer'
import { useState, useRef } from 'react'
import SearchBar from '../../components/searchbar'
import DropdownType from '../../components/dropdown/dropdown-type'
import Sample from '../../components/sample'
import IconPlay from '../../components/icons/icon-play'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import { useDraggable } from 'react-use-draggable-scroll'
import FooterMobile from '../../components/footer-mobile'

enum GenreEnum {
  ALL = 'Mixed',
  HIPHOP = 'Hip Hop',
  HOUSETECHNO = 'House / Techno',
  POPEDM = 'Pop / EDM',
  LIVESOUNDS = 'Live Sounds',
  ELECTRONIC = 'Electronic',
}
type GenreProps = {
  img: string
  label: GenreEnum
  isSelected: boolean
  setSelectedGenre: React.Dispatch<React.SetStateAction<GenreEnum>>
}

const Genre = (props: GenreProps) => {
  const classState = props.isSelected
    ? 'grayscale-0 drop-shadow-[20px_20px_0px_#D1F812]'
    : 'transition duration-150 hover:grayscale-0 hover:drop-shadow-[20px_20px_0px_#D1F812]'
  return (
    <button
      onClick={() => props.setSelectedGenre(props.label)}
      className={`flex flex-col max-w-[13rem] min-w-[11rem] filter grayscale ${classState}`}
    >
      <img
        src={props.img}
        className="border-4 border-black rounded-[15px]"
        alt=""
      />
      <h3 className="self-start text-heading-06">{props.label}</h3>
    </button>
  )
}

function Home() {
  const [selectedGenre, setSelectedGenre] = useState(GenreEnum.ALL)
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const { events } = useDraggable(ref)
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/src/pic/home/home-header.png')] bg-cover bg-center"></section>
      <Container>
        {' '}
        <section className="h-auto font-body">
          <div className="flex flex-col">
            <h1 className="text-heading-01 py-3">{selectedGenre}</h1>
            <p>
              Explore a vast array of musical content and take your music
              production to the next level{' '}
              <span className="font-medium text-dark-green">more.</span>{' '}
            </p>
          </div>

          <div
            ref={ref}
            {...events}
            className="overflow-x-scroll no-scrollbar my-10 flex gap-16 pb-10 pr-8"
          >
            <Genre
              img="/src/pic/home/genres/mixed.png"
              label={GenreEnum.ALL}
              isSelected={selectedGenre === GenreEnum.ALL}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/src/pic/home/genres/hiphop.png"
              label={GenreEnum.HIPHOP}
              isSelected={selectedGenre === GenreEnum.HIPHOP}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/src/pic/home/genres/housetechno.png"
              label={GenreEnum.HOUSETECHNO}
              isSelected={selectedGenre === GenreEnum.HOUSETECHNO}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/src/pic/home/genres/edm.png"
              label={GenreEnum.POPEDM}
              isSelected={selectedGenre === GenreEnum.POPEDM}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/src/pic/home/genres/livesounds.png"
              label={GenreEnum.LIVESOUNDS}
              isSelected={selectedGenre === GenreEnum.LIVESOUNDS}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/src/pic/home/genres/electronic.png"
              label={GenreEnum.ELECTRONIC}
              isSelected={selectedGenre === GenreEnum.ELECTRONIC}
              setSelectedGenre={setSelectedGenre}
            />
          </div>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
        </section>
        <section className="my-6 flex flex-col gap-6 font-body">
          <SearchBar></SearchBar>
          <DropdownType />
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
            <div className="md:col-span-2 col-auto min-w-[100px]">
              <p>Title</p>
            </div>
            <div className="lg:col-span-3 col-auto max-w-[22rem] lg:block hidden">
              <p>AudioWave</p>
            </div>
            <p className="md:visible invisible">Time</p>
            <p className="md:visible invisible">BPM</p>
            <p>Price</p>
            <div className="flex items-center justify-end gap-5 col-span-2 md:visible invisible"></div>
          </div>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
        </section>
        <section>
          {' '}
          <Sample />
        </section>
      </Container>

      <section className="h-auto overflow-clip flex bg-[url('/src/pic/home/home-footer.png')] bg-cover bg-center font-body mt-10">
        <Container>
          <div className="flex flex-col h-[531px] justify-center items-center gap-3">
            <h1 className="text-heading-01 text-white mx-2 text-center">
              Explore Your Music Library
            </h1>
            <Button type="primary">Library</Button>
          </div>
        </Container>
      </section>
      <FooterMobile />
      <div className="md:block hidden">
        <Footer />
      </div>
    </>
  )
}

export default Home

{
  /* <section className="flex flex-col gap-7">
<div className="flex flex-col gap-5">
  <div className="flex items-start border-b-[1px] border-gray-3"></div>
  <div className="md:flex flex-none md:flex-row gap-15 justify-between w-full px-10 font-medium text-[#8e8e8c]">
    <div className="grid grid-cols-6 gap-10 font-body items-center">
      <p className="w-[4rem]">Cover</p>
      <p className="col-span-2 w-[300px]">Title</p>
      <p className="col-span-3 max-w-[22rem] md:visible invisible">
        AudioWave
      </p>
    </div>
    <div className="grid grid-cols-5 gap-11 font-body items-center justify-end text-gray-500 md:visible invisible">
      <p className="w-[43px]">Time</p>
      <p className="w-[43px]">BPM</p>
      <p className="w-[43px]">Price</p>
    </div>
  </div>
  <div className="flex items-start border-b-[1px] border-gray-3"></div>
</div>
<Sample />
</section> */
}
