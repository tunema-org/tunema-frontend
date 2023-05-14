import styled from 'styled-components'
import Container from '../../components/container'
import Navbar from '../../components/Navbar/navbar'
import NavbarProfile from '../../components/Navbar/auth_navbar'
import ButtonLanding from '../../components/Button/button_landing'
import ButtonPrimary from '../../components/Button/button_primary'

const Title = styled.h1`
  font-size: 4.25rem;
`

const HomePage = () => {
  return (
    <Container className="m">
      <NavbarProfile></NavbarProfile>
      {/* <Navbar></Navbar> */}
      <div>
        <Title>This is the Home Page</Title>
        <h1 className="text-9xl text-cyan-500 underline h-96">Test</h1>
        <h1 className="text-9xl text-cyan-500 underline">Test</h1>
        <h1 className="text-9xl text-cyan-500 underline">Test</h1>
        <h1 className="text-9xl text-cyan-500 underline">Test</h1>
        <h1 className="text-9xl text-cyan-500 underline">Test</h1>
        <h1 className="text-9xl text-cyan-500 underline">Test</h1>
        <h1 className="text-9xl text-cyan-500 underline">Test</h1>
      </div>
    </Container>
  )
}

export default HomePage
