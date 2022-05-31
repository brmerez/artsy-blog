import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Base({children}: {children: React.ReactNode}) {
  return (
    <Wrapper>
      <Navbar />
      <Container>
        {children}
      </Container>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`

`;
const Container = styled.div`
  min-height: calc(100vh - 61px);
  /* padding: 1.5rem 10%; */
  /* padding: 1.5rem 0; */
  margin-top: 61px;
`;