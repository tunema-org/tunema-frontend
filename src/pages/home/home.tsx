import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import styled from 'styled-components'
import Container from '../../components/container'
import Footer from '../../components/footer'
import Sample from '../../components/sample'
import { useState } from 'react'
import SearchBar from '../../components/search'

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

          <div className="overflow-x-auto my-10 flex gap-16 pb-10 pr-8">
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
        <section className="my-10">
          <SearchBar></SearchBar>
        </section>
      </Container>

      <Sample />
    </>
  )
}

export default Home

{
  /* <button className="flex flex-col max-w-[13rem] min-w-[11rem] filter grayscale hover:grayscale-0 hover:drop-shadow-[20px_20px_0px_#D1F812]">
              <img
                src="/src/pic/home/genres/hiphop.png"
                className="border-4 border-black rounded-[15px]"
                alt=""
              />
              <h3 className="self-start text-heading-06">Hip Hop</h3>
            </button>

            <button className="flex flex-col max-w-[13rem] min-w-[11rem] filter grayscale hover:grayscale-0 hover:drop-shadow-[20px_20px_0px_#D1F812]">
              <img
                src="/src/pic/home/genres/housetechno.png"
                className="border-4 border-black rounded-[15px]"
                alt=""
              />
              <h3 className="self-start text-heading-06">House / Techno</h3>
            </button>

            <button className="flex flex-col max-w-[13rem] min-w-[11rem] filter grayscale hover:grayscale-0 hover:drop-shadow-[20px_20px_0px_#D1F812]">
              <img
                src="/src/pic/home/genres/hiphop.png"
                className="border-4 border-black rounded-[15px]"
                alt=""
              />
              <h3 className="self-start text-heading-06">Pop / EDM</h3>
            </button>

            <button className="flex flex-col max-w-[13rem] min-w-[11rem] filter grayscale hover:grayscale-0 hover:drop-shadow-[20px_20px_0px_#D1F812]">
              <img
                src="/src/pic/home/genres/hiphop.png"
                className="border-4 border-black rounded-[15px]"
                alt=""
              />
              <h3 className="self-start text-heading-06">Hip Hop</h3>
            </button> */
}
