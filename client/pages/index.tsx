import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Card from "../components/Card";

const highLightTransitions = {
  "highlight":{
    backgroundColor: "#222",
    color:"#fff",
    padding:"0.5rem",
    transition:{ delay:0.9 }
  },
}

const techStacks =[
  {
    name:"Web",
    stack:[
      "Javascript",
      "Typescript",
      "React",
      "Next.js",
      "styled-components",
      "framer-motion",
      "MUI",
      "TailwindCSS"
    ]
  },
  {
    name:"Backend",
    stack:[
      "Node.js",
      "Express",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "Mongoose",
      "Prisma",
    ]
  },
  {
    name:"DevOps",
    stack:[
      "Docker",
      "Git",
      "GitHub",
      "AWS"

    ]
  },
]

export default function Home() {
  return (
    <Container>
      <Hero>
        <Title
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1 }}
        >
          Oi, meu nome é Bruno.
        </Title>
        <motion.p
          style={{fontSize: "1.2rem"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Trabalho criando aplicações Web com 
          <HL color="#3178c6">Typescript</HL>, 
          <HL color="#61DBFB">React</HL>, 
          <HL color="#d60ccc">styled-components</HL> e 
          <HL color="#000">NextJs</HL>
        </motion.p>
        <br/>
        <div style={{display:"flex", justifyContent:"center", gap:"1rem", width:"60%", margin: "0 auto"}}>
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{delay: 0.4, duration:0.225}}}
            whileHover={{
              scale:1.08,
              color:"#222",
              backgroundColor: "yellow",
            }}
          >
            meus projetos &rarr;</Button>
          <Button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition:{delay: 0.4, duration:0.225}}}
            whileHover={{
              scale:1.08,
              color:"#222",
              backgroundColor: "yellow",
            }}
          >
            sobre mim &rarr;</Button>
        </div>
      </Hero>
      <Hero style={{backgroundColor:"#dededede"}}>
        <Title
          initial={{ opacity: 0,  }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, transition:{delay: 0.5}}}
        >
          Também escrevo de vez em quando
        </Title>
        <motion.div 
          initial={{ opacity: 0 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, transition:{delay: 0.8}}}
          style={{display:"grid", gap:"1rem", gridTemplateColumns:"repeat(3, 250px)", gridTemplateRows:"250px"}}>
          <Card data={{content:"ok", createdAt:new Date(), published:true, title:"Teste", slug:"slug-qualquer", updatedAt:new Date(), _id:"2312312"}}/>
          <Card data={{content:"ok", createdAt:new Date(), published:true, title:"Teste", slug:"slug-qualquer", updatedAt:new Date(), _id:"2312312"}}/>
          <Card data={{content:"ok", createdAt:new Date(), published:true, title:"Teste", slug:"slug-qualquer", updatedAt:new Date(), _id:"2312312"}}/>
        </motion.div>
        <Button
          initial={{ opacity: 0 }}
          viewport={{once:true}}
          whileInView={{ opacity: 1, transition:{delay: 1.2}}}
          whileHover={{
            scale:1.08,
            color:"#222",
            backgroundColor: "yellow",
          }}
        >
          meu blog &rarr;</Button>
      </Hero>
    </Container>
  )
}

const HL = ({color, children}:{color:string, children?:ReactNode}) =>{
  return(
    <Highl 
      color={color}
      as={motion.span}
      whileHover={{backgroundColor:color, color:"#fff", padding:"0.25rem", borderRadius:"3px", cursor:"pointer"}}
    >
      {children}
    </Highl>
  )
}

const Button = styled(motion.button)`
  background-color: #222;
  width: clamp(200px, 60%, 300px);
  text-align: start;
  padding: 1rem 2rem;
  border: 0;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

interface ColorProps{
  color?: string;
}

const Highl = styled.span<ColorProps>`
  color: ${props => props.color || "#fff"};
  margin-left: 0.7ch;
`;

const Container = styled.div`
  min-height: calc(100vh - 61px - 3rem);
`;


const Title = styled(motion.h2)`
  /* font-size: 4.5rem; */
  font-size: clamp(32px, 4.5em, 48px);
  font-weight: 300;
`;

const Hero = styled.div`
  height: calc(100vh - 61px);
  /* padding: 0 10%; */
  /* border: 1px solid magenta; */
  display: flex;
  overflow-x: hidden;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

