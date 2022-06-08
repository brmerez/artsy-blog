import styled from "styled-components"

export default function Footer() {
  return (
    <FooterStyles>
      <small>&copy; 2022 Bruno Merez. Todos os direitos reservados. </small>
    </FooterStyles>
  )
}

const Heading = styled.h4`
  font-size: 1.6rem;
  font-weight: lighter;
`;

const FooterStyles = styled.footer`
  display: flex;
  width: 100%;
  height: 400px;
  padding: 0 10%;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #e0e0e0;
  background-color: #707070;
  /* z-index: 9999; */
`;
