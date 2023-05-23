import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import styled from 'styled-components'
import Container from '../../components/container'
import Footer from '../../components/footer'
import Sample from '../../components/sample'

function Home() {
  return (
    <>
      <Navbar />
      <section className="h-[21rem] bg-[url('/src/pic/home/home-header.png')] bg-cover bg-center"></section>
      <Container>
        {' '}
        <section className="h-auto font-body">
          <div className="flex flex-col">
            <h1 className="text-heading-01 py-3">HipHop</h1>
            <p>
              Explore a vast array of musical content and take your music
              production to the next level{' '}
              <span className="font-medium text-dark-green">more.</span>{' '}
            </p>
          </div>

          <div></div>
        </section>
      </Container>

      <Sample />
    </>
  )
}

export default Home
