import axios from "axios";
import styled from "styled-components"
import Card from "../../components/Card";
import { Post } from "../../types/Post";
import { motion, AnimatePresence } from "framer-motion";

export default function Home({ posts }: {posts:Post[]}) {
  return (
    <Container >
      <CardContainer>
        { posts.map((post, i) => 
            <Card 
              key={post._id}
              style={i === 0 ? {gridColumn: "1/-1"} : {}}
              url={i === 0 ? `https://picsum.photos/1000` : `https://picsum.photos/${Math.floor(Math.random() * 101) + 300}`}
              data={post} 
            />)
        }
      </CardContainer>
      <AnimatePresence>
        <Sidebar>
          
        </Sidebar>
      </AnimatePresence>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 20%;
  @media screen and (max-width: 1024px) {
    padding: 2rem 1%;
  }
`;

const Sidebar = styled.div`
  width: clamp(100px, 1/5 * 80vw, 300px);
  border-left: 1px solid #e0e0e0;
  /* text-align: center; */
  /* border: 1px solid magenta; */
  padding: 0 2rem;
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const CardContainer = styled.div`
  display: grid;
  min-height: 180vh;
  flex-grow: 1;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 250px;
  grid-template-rows: calc(1/3 * 100vh + 100px) repeat(auto-fit, minmax(auto, 250px));
  gap: 1rem;
`;

export async function getServerSideProps() {
  const res = await axios.get("http://192.168.0.16:3004/api/posts");
  return {
    props: {
      posts: res.data
    },
  }
}