import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSearchParams } from 'react-router-dom'
import api from '../../api'
import { ListSamplesResponse } from '../../api/sounds/list-samples'
import Container from '../../components/container'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import DropdownType from '../../components/dropdown/dropdown-type'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import LoadingIndicator from '../../components/loader/loading-indicator'
import Navbar from '../../components/Navbar/navbar'
import Sample from '../../components/samples/sample'
import SampleTitle from '../../components/samples/title-primary'
import SearchBar from '../../components/searchbar'
import Type from '../../components/type'
import useQuery from '../../hooks/useQuery'

function Search() {
  const query = useQuery()

  const [samples, setSamples] = useState<ListSamplesResponse>()
  const [tags, setTags] = useState<
    {
      id: number
      name: string
    }[]
  >()
  const [activeTags, setActiveTags] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [noResults, setNoResults] = useState(false)
  const [search, setSearch] = useState(query.get('q') ?? '')

  const fetchSamples = async () => {
    const samples = await api.listSamples()
    setSamples(samples)
  }

  const fetchTags = async () => {
    const tagsAndCategories = await api.listTagsAndCategories()

    tagsAndCategories.items.forEach((item) => {
      item.tags.forEach((tag) => {
        setTags((tags) => [...(tags ?? []), tag])
      })
    })
  }

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    if (searchParams.has('q')) {
      const query = searchParams.get('q')
      if (query) {
        searchParams.delete('q')
        setSearch(searchParams.toString())
        setSearchParams(searchParams)
        handleSearch()
      }
    } else {
      fetchSamples()
    }
    fetchTags()
  }, [])

  useEffect(() => {
    handleSearch()
  }, [activeTags])

  const handleSearch = () => {
    setIsLoading(true)
    setNoResults(false)
    api
      .searchSamples({
        name: search === '' ? undefined : search,
        tags: activeTags.length ? activeTags : undefined,
      })
      .then((data) => {
        if (data['total_items'] === 0) {
          setNoResults(true)
          return
        }

        setSamples(data)
      })
      .finally(() => setIsLoading(false))
  }

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
          <section className="h-auto font-body flex items-center py-3">
            <div className="flex flex-col">
              <h1 className="text-heading-01">Search</h1>
              <p>Looking for samples?</p>
            </div>
          </section>
          <section className="my-6 flex flex-col gap-6 font-body">
            <SearchBar
              onSubmit={handleSearch}
              onChange={setSearch}
              disabled={isLoading}
            />
            <DropdownType />

            <div className="flex flex-wrap gap-3 overflow-x-scroll no-scrollbar">
              {tags?.map((tag) => (
                <Type
                  onActive={() => {
                    setActiveTags((activeTags) => [...activeTags, tag.id])
                  }}
                  onInactive={() => {
                    setActiveTags((activeTags) =>
                      activeTags.filter((activeTag) => activeTag !== tag.id),
                    )
                  }}
                >
                  {tag.name}
                </Type>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <p>{samples?.total_items} Results</p>
              <DropdownSort />
            </div>
          </section>
          <SampleTitle />
          <section>
            {isLoading && !noResults && (
              <div className="flex justify-center items-center mt-12">
                <LoadingIndicator margin="1px" size="24px" color="#D1F812" />
              </div>
            )}
            {!isLoading &&
              !noResults &&
              samples?.items.map((sample) => (
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
            {!isLoading && noResults && (
              <div className="flex justify-center items-center mt-12">
                <p className="text-heading-04 text-gray-3">
                  No results found 😔
                </p>
              </div>
            )}
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
