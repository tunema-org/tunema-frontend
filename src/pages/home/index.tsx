import styled from 'styled-components'
import Container from '../../components/container'

const Title = styled.h1`
  font-size: 4.25rem;
`

const HomePage = () => {
  return (
    <Container>
      <Title>This is the Home Page</Title>
    </Container>
  )
}

export default HomePage
