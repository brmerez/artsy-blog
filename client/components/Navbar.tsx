import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import styled from "styled-components"

export default function Navbar() {
  return (
    <NavStyles
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Link href="/">
        <a href="/">
          <Heading>bruno merez</Heading>
        </a>
      </Link>
      <NavLinks 
        // as={motion.div}
        // initial={{y: -100, opacity: 0.125}}
        // animate={{y: 0, opacity: 1, transition: {type:"tween", duration: 0.5}}}
      >
        <NavItem to="/blog">blog</NavItem>
        <NavItem to="#">projetos</NavItem>
        <NavItem to="#">sobre</NavItem>
        <NavItem to="#">contato</NavItem>
      </NavLinks>
      <NavLinks style={{marginLeft:"auto"}}>
        <h4>GitHub</h4>
        <h4 style={{color: "#0e76a8 "}}>LinkedIn</h4>
        <h4 style={{color: "#00ACEE"}}>twitter</h4>
      </NavLinks>
    </NavStyles>
  )
}

const NavItem = ({to, children}:{children?:ReactNode, to:string}) => {
  return(
    <Link href={to}>
      <NavLink 
        href={to}
        as={motion.a}
        whileHover={{
          backgroundColor:"yellow",
          // fontFamily:"serif, Times New Roman",
          letterSpacing:"0.25em",
          // fontWeight: "lighter",
          borderRadius:"3px",
        }}
      >
        {children || "Link"}</NavLink>
    </Link>
  )
}

const Heading = styled.h4`
  font-size: 1.6rem;
  font-weight: 300;
  /* height: 100%; */
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 1.6rem;
  margin-top:0.25rem;
`;

const NavLink = styled.a`
  font-size: 1rem;
  font-weight: 400;
  /* color: #bb4fbb; */
  cursor: pointer;
`;


const NavStyles = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 61px;
  align-items: center;
  gap: 5rem;
  border-bottom: 1px solid #e0e0e0;
  background-color: #ffffffef;
  z-index: 9999;
  padding: 0 20%;
  backdrop-filter: blur(8px);

  @media screen and (max-width: 768px) {
    padding: 1.5rem 10%;
    justify-content: center;
    ${NavLinks}{
      display:none;
    }
  }
`;
