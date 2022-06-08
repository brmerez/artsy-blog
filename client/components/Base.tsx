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

export const Wrapper = styled.div`
  /* background-color: #223; */
  overflow-x: hidden;
`;

export const Container = styled.div`
  /* min-height: calc(100vh - 61px); */
  min-height: 100vh;
  /* padding: 1.5rem 20%; */
  margin-top: 61px;
  position: relative;
`;