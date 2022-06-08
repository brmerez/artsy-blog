import axios from "axios";
import styled from "styled-components"
import { motion } from "framer-motion"
import { Post as IPost } from "../../types/Post";

export default function Post({post}:{post:IPost}) {
  return (
    <>
      <HeaderWrapper>
        <Header>
          <Title>{post.title}</Title>
          <Hero src="https://picsum.photos/1000"/>
        </Header>
      </HeaderWrapper>
      <Container>
        <h4>Sobre o riso e a faca<br /></h4>
        <p>Quero ser o riso e o dente</p>
        <p>Quero ser o dente e a faca <br /></p>
        <p>Quero ser a faca e o corte <br /></p>
        <p>Em um só beijo vermelho <br /></p>
        <p>Fiz meu berço na viração <br /></p>
        <p>Eu só descanso na tempestade <br /></p>
        <p>Só adormeço no furacão <br /></p>
        <p>Eu sou a raiva e a vacina <br /></p>
        <p>Procura de pecado e conselho <br /></p>
        <p>Espaço entre a dor e o consolo <br /></p>
        <p>A briga entre a luz e o espelho<br /></p>
        <br />
        <br />
        <br />
      </Container>  
    </>
  )
}

const Title = styled.h2`
  font-size: 3rem;
  font-weight: lighter;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  background-color: #ffffffb7;
  width: clamp(200px, 70%, 800px);
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 3rem 0;
  width: clamp(300px, 100%, 800px);
  margin: 0 auto;
  /* border: 1px solid magenta; */
  /* margin-right:auto; */
  min-height: calc(100vh);
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5;
  p{
    color: #2e2e2e;
  }
  img{ 
    margin: 0 auto;
    text-align: center;
    max-width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  height: 45vh;
  overflow: hidden;
`;

const Hero = styled.img`
  position: absolute;
  filter: grayscale(70%) brightness(55%);
  object-fit: cover;
  opacity: 0.85;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  const res = await axios.get(`http://192.168.0.16:3004/api/posts/${params.slug}`)
  return {
    props: {
      post: res.data
    }
  }
}
