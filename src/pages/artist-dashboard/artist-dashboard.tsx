import React from 'react'
import { useState, ReactNode } from 'react'
import Navbar from '../../components/Navbar/navbar'
import Container from '../../components/container'
import Footer from '../../components/footer'
import FooterMobile from '../../components/footer-mobile'
import ArtistSample from '../../components/samples/sample-artist'
import SampleArtistTitle from '../../components/samples/title-artist'
import { Edit, ToggleOn } from 'iconsax-react'
import ProfileEdit from './profile-edit'
import { Tab } from '@headlessui/react'
import Sample from '../../components/samples/sample'
import SampleTitle from '../../components/samples/title-primary'
import { Transition } from '@headlessui/react'

type Props = {
  title: string
  children: string
}

type TransitionProp = {
  children: ReactNode
}

const Status = ({ title, children }: Props) => {
  return (
    <div className="bg-white min-w-[13rem] flex flex-col gap-3 px-10 py-5 rounded-md shadow-sm">
      <p className="font-medium text-gray-400">{title}</p>
      <h1 className="flex justify-center text-display-x-mobile truncate">
        {children}
      </h1>
      <p className="flex justify-center font-medium text-body-mobile text-gray-400">
        Samples
      </p>
    </div>
  )
}

const TransitionFade = ({ children }: TransitionProp) => {
  return (
    <Transition.Child
      enter="transition-all ease-in-out duration-700"
      enterFrom="opacity-0 -translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  )
}

function ArtistDashboard() {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <>
      <Navbar />
      <ProfileEdit isEdit={isEdit} setIsEdit={setIsEdit} />
      <main className="sm:min-h-0 min-h-screen">
        <section className="group relative flex h-72 w-full bg-[url('/pic/home/home-footer.png')] items-center justify-center bg-cover bg-center font-medium mt-16">
          <Container>
            <div className="flex w-full flex-col justify-center items-center">
              <div className="flex w-full justify-left">
                <img
                  className="flex object-contain w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 rounded-full"
                  src="/pic/navbar/dummy_2.png"
                  alt="Profile image profile page"
                />
                <div className="flex flex-col font-medium sm:gap-0 gap-3 pl-5 sm:pl-10 justify-end pb-2">
                  <div className="flex w-full text-white font-medium text-heading-03 md:text-heading-02 lg:text-heading-01">
                    Mar Hansen
                  </div>
                  <div className="flex sm:flex-row flex-col w-full gap-0 sm:gap-10 text-white font-medium text-heading-06 md:text-heading-06 lg:text-heading-05">
                    <p>30 Owned Sample</p>
                    <p>30 Uploaded Sample</p>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEdit((prev) => !prev)}
              className="group-hover:visible sm:invisible backdrop-blur-md visible absolute top-5 sm:right-10 right-5 p-2 flex gap-3 items-center justify-center rounded-lg bg-black/80 text-white font-medium"
            >
              <Edit size="25" color="white" />
              <p>Edit</p>
            </button>
          </Container>
        </section>
        <Container>
          <Tab.Group as="div" className="font-body mt-10">
            <Tab.List
              as="div"
              className="overflow-auto no-scrollbar sm:text-heading-06 md:text-heading-05 flex sm:items-start items-end sm:gap-10 gap-2 w-full"
            >
              <Tab as="div" className="focus:outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'flex h-auto font-medium overflow-x-auto text-dark-green border-b-4 px-2 border-b-dark-green'
                        : 'flex h-auto font-medium overflow-x-auto hover:text-dark-green px-2 border-b-dark-green'
                    }
                  >
                    Owned Samples
                  </button>
                )}
              </Tab>
              <Tab as="div" className="focus:outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'flex h-auto font-medium overflow-x-auto text-dark-green border-b-4 px-2 border-b-dark-green'
                        : 'flex h-auto font-medium overflow-x-auto hover:text-dark-green px-2 border-b-dark-green'
                    }
                  >
                    Favorites
                  </button>
                )}
              </Tab>
              <Tab as="div" className="focus:outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'flex h-auto font-medium overflow-x-auto text-dark-green border-b-4 px-2 border-b-dark-green'
                        : 'flex h-auto font-medium overflow-x-auto hover:text-dark-green px-2 border-b-dark-green'
                    }
                  >
                    Uploaded Samples
                  </button>
                )}
              </Tab>
              <Tab as="div" className="focus:outline-none">
                {({ selected }) => (
                  <button
                    className={
                      selected
                        ? 'flex h-auto font-medium overflow-x-auto text-dark-green border-b-4 px-2 border-b-dark-green'
                        : 'flex h-auto font-medium overflow-x-auto hover:text-dark-green px-2 border-b-dark-green'
                    }
                  >
                    Overview
                  </button>
                )}
              </Tab>
            </Tab.List>
            <div className="flex items-start border-b-[1px] border-gray-3 mb-10" />

            <Tab.Panels>
              {/* Owned Samples */}
              <Tab.Panel>
                <Transition.Root appear show={true}>
                  <SampleArtistTitle />
                  <TransitionFade>
                    <section className="md:pb-16">
                      {' '}
                      <ArtistSample
                        img="/pic/components/player/alblumcover.png"
                        name="Aa.mp3"
                        artist="B.O.B"
                        src="/samples/acimalaka2.mp3"
                        time="3:45"
                        bpm={125}
                        keys="C#"
                        keyScale="major"
                        price={3.45}
                        upload="2022/01/16"
                        added="2022/02/15"
                      />
                    </section>
                  </TransitionFade>
                </Transition.Root>
              </Tab.Panel>

              {/* Favorites */}
              <Tab.Panel id="wishlist">
                <Transition.Root appear show={true}>
                  <SampleTitle />
                  <TransitionFade>
                    <section className="md:pb-16">
                      {' '}
                      <Sample
                        img="/pic/components/player/alblumcover.png"
                        name="Suara apa ini cok.wav"
                        artist="B.O.B"
                        src="/samples/1.wav"
                        time="3:45"
                        bpm={125}
                        keys="C#"
                        keyScale="major"
                        price={3.45}
                        upload="2022/01/16"
                      />
                    </section>
                  </TransitionFade>
                </Transition.Root>
              </Tab.Panel>

              {/* Uploaded Samples */}
              <Tab.Panel>
                <Transition.Root appear show={true}>
                  <SampleArtistTitle />
                  <TransitionFade>
                    <section className="md:pb-16">
                      <ArtistSample
                        img="/pic/components/player/alblumcover.png"
                        name="Yoooooooo.mp3"
                        artist="B.O.B"
                        src="/samples/acimalaka2.mp3"
                        time="3:45"
                        bpm={125}
                        keys="C#"
                        keyScale="major"
                        price={3.45}
                        upload="2022/01/16"
                        added="2022/02/15"
                      />
                    </section>
                  </TransitionFade>
                </Transition.Root>
              </Tab.Panel>

              {/* Overview */}
              <Tab.Panel>
                <Transition.Root
                  appear
                  show={true}
                  className="flex flex-col gap-3"
                >
                  <h1 className="px-3 text-heading-03">Sales Overview</h1>
                  <div className="flex items-start border-b-[1px] border-gray-3 my-5" />
                  <TransitionFade>
                    <section className="flex lg:flex-row lg:gap-0 gap-5 mb-5 flex-col px-3 justify-around">
                      <Status title="Uploaded">200</Status>
                      <Status title="Profit">$50.00</Status>
                      <Status title="Sold">50</Status>
                    </section>
                  </TransitionFade>
                </Transition.Root>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Container>
      </main>
      <FooterMobile />
      <div className="md:block hidden">
        <Footer />
      </div>
    </>
  )
}

export default ArtistDashboard
