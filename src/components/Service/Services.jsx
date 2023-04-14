import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FaGlobe } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";
import { Link } from "@mui/material";

const styles = {
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}

const Experience = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h1>
          My <span className="green">Experience</span>
        </h1>
      </Slide>
      <Cards>

      <Slide direction="up">
          <Link href="https://github.com/godavarthiumachowdary" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <Card
              Icon={FaCode}
              title={"Areas of Interest"}
              disc={
                <ul>
                  <li>React.js</li>
                  <li>JavaScript and Web Development</li>
                  <li>Better ways of working together</li>
                  <li>Agile development</li>
                </ul>
              }
            />
          </Link>
        </Slide>

        <Slide direction="left">
          <Link href="https://www.linkedin.com/in/uma-chowdary-godavarthi-84088625a" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <Card
              Icon={MdDesignServices}
              title={"React.js Developer"}
              disc={`I am a front-end software developer and I work with React.js, JavaScript, Redux, TypeScript, HTML and CSS. I stay in Singapore. My professional career started in 2018 in Hyderabad, this gives me around 4 years of experience.`}
            />
          </Link>
        </Slide>

       

        <Slide direction="up">
          <Link href="https://www.hetero.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <Card
              Icon={FaGlobe}
              title={"I'am Software Developer at Hetero Labs ltd"}
              disc={`From 2021, I got permanent with Hetero Labs ltd, Hyderabad, India, worked from client directly as Software Developer Where I worked on React.js and Redux and done 2 projects with my career .`}
            />
          </Link>
        </Slide>

        <Slide direction="right">
          <Link href="https://www.hetero.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <Card
              Icon={FaGlobe}
              title={"Ex-Software Developer at Crux Management Services Pvt Ltd"}
              disc={`In my first Job, I joined Crux Management Services Pvt Ltd,Hyderabad,India in 2018 as software developer where my Client was Hetero Labs ltd, I got professional technology orientation and skills on  ReactJs,JavaScript, HTML, CSS, Bootstrap,and Software Development Life Cycle.`}
            />
          </Link>
        </Slide>
      </Cards>
    </Container>
  );
};

export default Experience;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
