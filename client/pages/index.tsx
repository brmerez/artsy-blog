import axios from "axios";
import styled from "styled-components"
import Card from "../components/Card";
import { Post } from "../types/Post";
// import { motion } from "framer-motion";

export default function Home({ posts }: {posts:Post[]}) {
  return (
    <Container>
      {/* <Sidebar>
        <h4 style={{fontWeight:"300"}}>Menu lateral</h4>
        <hr style={{borderColor: "#e0e0e0", margin: "2% 10%"}}/>
      </Sidebar> */}
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
    </Container>
  )
}


const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 10%;
  /* min-height: calc(2 * 100vh); */
`;

const Sidebar = styled.div`
  width: clamp(200px, 1/4 * 100vw, 300px);
  border-right: 1px solid #e0e0e0;
  text-align: center;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const CardContainer = styled.div`
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 250px;
  grid-template-rows: calc(1/2 * 100vh + 100px) repeat(auto-fit, minmax(auto, 300px));
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