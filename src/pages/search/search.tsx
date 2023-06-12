import { useEffect, useState } from 'react'
import api from '../../api'
import { ListSamplesResponse } from '../../api/sounds/list-samples'
import Container from '../../components/container'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/samples/sample'
import SampleTitle from '../../components/samples/title-primary'
import SearchBar from '../../components/searchbar'
import Type from '../../components/type'
import { Helmet } from 'react-helmet'

function Search() {
  const [samples, setSamples] = useState<ListSamplesResponse>()

  useEffect(() => {
    api.listSamples().then((data) => setSamples(data))
  }, [])
  return (
    <>
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>// Search</title>
        <link rel="icon" type="image/x-icon" href="/pic/favicon/favicon.ico" />
      </Helmet>
      <main className="sm:min-h-0 min-h-screen">
        <section className="h-[21rem] bg-[url('/pic/search/search_header.png')] bg-cover bg-center"></section>
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
              />
            ))}
          </section>
        </Container>
        <div className="md:block hidden">
          <Footer />
        </div>
        <FooterMobile />
      </main>
    </>
  )
}

export default Search
