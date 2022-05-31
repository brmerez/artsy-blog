import { motion } from "framer-motion";
import styled from "styled-components"
import { Post } from "../types/Post";
import Link from "next/link";
import React from "react";

interface CardProps { 
  children?: React.ReactNode,
  title?: string | React.ReactNode,
  style?: React.CSSProperties,
  url?: string,
  tags?: string[]
  href?: string
  data: Post
}

export default function Card({data, tags, style, url=`https://picsum.photos/300`}: CardProps) {
  return (
    <Link href={`/posts/${data.slug}`}>
      <CustomAnchor style={style}>
        <CardStyles
          onClick={() => console.log(data.title)}
          initial={{ opacity: 0, y:100 }}
          whileInView={{opacity: 1, y:0, transition:{duration: 0.125}}}
          viewport={{once: true}}
         >
          <Heading>
            <div>
              <h4>{data.title}</h4>
              <small>{new Date(data.createdAt).toLocaleString("pt-BR")}</small>
            </div>
          </Heading>
          <HeroWrapper>
            <Hero src={url} alt="" />
            <Backdrop />
          </HeroWrapper>
          <TagWrapper>
            {tags && tags.map(tag => <Tag onClick={e => e.stopPropagation()} key={tag}>{tag}</Tag>)}
          </TagWrapper>
        </CardStyles>
      </CustomAnchor>
    </Link>
  )
}

const CustomAnchor = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-tap-highlight-color: transparent;
`;

const HeroWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
  overflow: hidden;
  z-index: -1;
`;

const TagWrapper = styled.div`
  display: flex;
  z-index: -5;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.5rem;

`;

const Tag = styled.p`
  padding: 0.25rem 0.5rem;
  background-color: #e0e0e0;
  color: #222;
  border-radius: 50px;
  font-size: 0.8rem;
  user-select: none;
  transition: all 200ms ease-in-out;
  :hover{
    background-color: #fff;
  }
`;

const Backdrop = styled.div`
  background-color: rgba(224, 224, 224, 0.9);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.65;
  transition: all 300ms ease;
  width: 100%;
  height: 100%;
  z-index:0;
`;

const Heading = styled.div`
  font-size: 1.5rem;
  transition: all 300ms ease;
  z-index: 1;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 0 10%;
  
  h4{ font-weight: 300; }
  small{ 
    font-size: 0.8rem;
    font-style: italic;
  }
  @media screen and (max-width:768px){
    text-align: center;
    justify-content: center;
  }
`;

const Hero = styled.img`
  /* z-index: -2; */
  object-fit: cover;
  width: 100%;
  height:100%;
  transition: all 300ms ease;
  filter: grayscale(75%);
`;

const CardStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 21%;
  z-index: 2;

  position: relative;
  padding: 1rem;
  
  cursor: pointer;
  outline: 1px solid #afafaf;
  outline-offset: 0;
  transition: all 300ms ease;
  

  :hover{
    outline-offset: -0.75rem;
    outline-color: #fff;
    transition: all 150ms ease;

    ${Hero} {
      transform: scale(1.05);
    }
    ${Hero}, ${Backdrop} {
      border-radius: 4px;
    }
    ${Backdrop} {
      background-color: rgba(100, 68, 55, 0.9);
    }
    ${Heading} {
      transition: all 100ms ease;
      color: #fff;
    }
    ${TagWrapper} {
      z-index: 1;
    }
  }
`;



