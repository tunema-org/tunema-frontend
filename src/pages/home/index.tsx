import styled from 'styled-components'
import Container from '../../components/container'

const Title = styled.h1`
  font-size: 4.25rem;
`

const HomePage = () => {
  return (
    <Container>
      <Title>This is the Home Page</Title>
      <h1 className="text-9xl text-cyan-500 underline">Kontol</h1>
    </Container>
  )
}

export default HomePage
