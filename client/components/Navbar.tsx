import styled from "styled-components"

export default function Navbar() {
  return (
    <NavStyles>
      <Heading>bruno merez</Heading>
    </NavStyles>
  )
}

const Heading = styled.h4`
  font-size: 1.6rem;
  font-weight: lighter;
`;

const NavStyles = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 61px;
  padding: 0 10%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
  z-index: 9999;
`;
