import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/button'
import Container from '../../components/container'
import Footer from '../../components/footer'
import { useState } from 'react'
import SearchBar from '../../components/searchbar'
import DropdownType from '../../components/dropdown/dropdown-type'
import Sample from '../../components/sample'
import IconPlay from '../../components/icons/icon-play'
import DropdownSort from '../../components/dropdown/dropdown-sort'
import FooterMobile from '../../components/footer-mobile'

function Library() {
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/src/pic/library/library-header.png')] bg-cover bg-center"></section>
      <Container>
        {' '}
        <section className="h-auto font-body flex justify-between items-center py-3">
          <div className="flex flex-col">
            <h1 className="text-heading-01 ">Library</h1>
            <p>Looking for your owned samples?</p>
          </div>
          <button className="h-auto items-center flex justify-center">
            <img
              className="rounded-full w-[4rem]"
              src="/src/pic/navbar/dummy_profile.jpg"
              alt=""
            />
          </button>
        </section>
        <section className="my-6 flex flex-col gap-6 font-body">
          <SearchBar></SearchBar>
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
            <p>DateAdded</p>
            <div className="flex items-center justify-end gap-5 col-span-2 md:visible invisible"></div>
          </div>
          <div className="flex items-start border-b-[1px] border-gray-3"></div>
        </section>
      </Container>

      <section className="h-auto overflow-clip flex bg-[url('/src/pic/library/library-footer.png')] bg-cover bg-center font-body mt-10">
        <Container>
          <div className="flex flex-col h-[531px] justify-center items-center gap-3">
            <h1 className="text-heading-01 text-white mx-2 text-center">
              Find More Samples?
            </h1>
            <Button type="primary">Home</Button>
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

export default Library
