import React, { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useDraggable } from 'react-use-draggable-scroll'
import api from '../../api'
import { ListSamplesResponse } from '../../api/sounds/list-samples'
import Button from '../../components/button'
import Container from '../../components/container'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/samples/sample'
import SampleTitle from '../../components/samples/title-primary'
import SearchBar from '../../components/searchbar'

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

  const handleDragStart = (event: React.DragEvent<HTMLImageElement>) => {
    event.preventDefault()
  }
  return (
    <button
      onClick={() => props.setSelectedGenre(props.label)}
      className={`flex flex-col max-w-[13rem] min-w-[11rem] filter grayscale ${classState}`}
    >
      <img
        draggable={false}
        onDragStart={handleDragStart}
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
  const [samples, setSamples] = useState<ListSamplesResponse>()
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>

  const { events } = useDraggable(ref)

  useEffect(() => {
    api.listSamples().then((data) => setSamples(data))
  }, [])

  const handleSearch = () => {
    navigate(`/search?q=${search}`)
  }

  return (
    <>
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>TUNEMA // Home</title>
        <link rel="icon" type="image/x-icon" href="/pic/favicon/favicon.ico" />
      </Helmet>
      <section className="h-[21rem] bg-[url('/pic/home/home-header.png')] bg-cover bg-center"></section>
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
            className="overflow-x-scroll no-scrollbar my-10 flex gap-16 pb-8 pr-8"
          >
            <Genre
              img="/pic/home/genres/mixed.png"
              label={GenreEnum.ALL}
              isSelected={selectedGenre === GenreEnum.ALL}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/pic/home/genres/hiphop2.jpg"
              label={GenreEnum.HIPHOP}
              isSelected={selectedGenre === GenreEnum.HIPHOP}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/pic/home/genres/housetechno.png"
              label={GenreEnum.HOUSETECHNO}
              isSelected={selectedGenre === GenreEnum.HOUSETECHNO}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/pic/home/genres/edm.png"
              label={GenreEnum.POPEDM}
              isSelected={selectedGenre === GenreEnum.POPEDM}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/pic/home/genres/livesounds.png"
              label={GenreEnum.LIVESOUNDS}
              isSelected={selectedGenre === GenreEnum.LIVESOUNDS}
              setSelectedGenre={setSelectedGenre}
            />
            <Genre
              img="/pic/home/genres/electronic.png"
              label={GenreEnum.ELECTRONIC}
              isSelected={selectedGenre === GenreEnum.ELECTRONIC}
              setSelectedGenre={setSelectedGenre}
            />
          </div>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
        </section>
        <section className="my-6 flex flex-col gap-6 font-body">
          <SearchBar onSubmit={handleSearch} onChange={setSearch} />
          <DropdownType />
          <div className="flex justify-between items-center">
            <p>500.350 Results</p>
            <DropdownSort />
          </div>
        </section>
        <SampleTitle />
        <section>
          {samples?.items.map((sample) => (
            <Sample
              img={sample.data.cover_url}
              name={sample.data.name}
              artist={sample.artist_name}
              src={sample.data.file_url}
              time={sample.data.time}
              bpm={sample.data.bpm}
              keys={sample.data.key}
              keyScale={sample.data.key_scale}
              price={sample.data.price}
              upload={sample.data.created_at}
              tags={sample.tags}
            />
          ))}
        </section>
      </Container>

      <section className="h-auto overflow-clip flex bg-[url('/pic/home/home-footer.png')] bg-cover bg-center font-body mt-10">
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
