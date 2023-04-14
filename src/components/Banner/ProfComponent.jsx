import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHackerrank } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiMail } from 'react-icons/fi';
import { Slide } from "react-awesome-reveal";
import Typed from "typed.js";
import reactjs from '../../assets/Images/reactjs.PNG';
import javascript from '../../assets/Images/javascript.PNG';
import redux from '../../assets/Images/redux.png';
import typescript from '../../assets/Images/typescript.PNG';
import html from '../../assets/Images/html.PNG';
import css from '../../assets/Images/css.PNG';
import { Link } from "@mui/material";
import userPhoto from '../../assets/Images/userPhoto.jpeg';

const styles = {
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
}

const ProfComponent = () => {
  const professionRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "I am a React.js developer with 4 years of professional experience.",
        "Are you looking for help?",
        "I'm available for full-time roles with React.js, JavaScript, Redux, TypeScript, HTML and CSS."
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };
    const typed = new Typed(professionRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <div><h4>Hi there 👋. I'am</h4></div>
          <div><h1 className="green">Uma Chowdary Godavarthi</h1></div>
          <div>
            <span ref={professionRef}></span>
          </div>
          <br />
          <div>
            <h1 className="green">Experience:</h1>
            <span>
              I spent the last 4 years working with React.js, JavaScript, Redux, TypeScript, HTML5 and CSS.
            </span>
          </div>
          <br />
          <div><h1 className="green">Skills:</h1></div>
          <div>
            <Skills>
              <div className="skill-icons">
                <span>React.js
                  <Link href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <img src={reactjs} alt="React Logo" width="24" height="24" />
                  </Link>
                </span>
                <span>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <img src={javascript} alt="JavaScript Logo" width="24" height="24" />
                  </a>
                </span>
                <span>
                  <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                    <img src={redux} alt="Redux Logo" width="24" height="24" />
                  </a>
                </span>
                <span>
                  <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                    <img src={typescript} alt="TypeScript Logo" width="24" height="24" />
                  </a>
                </span>
                <span>
                  <a href="https://html.spec.whatwg.org/multipage/" target="_blank" rel="noopener noreferrer">
                    <img src={html} alt="HTML5 Logo" width="24" height="24" />
                  </a>
                </span>
                <span>
                  <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                    <img src={css} alt="CSS Logo" width="24" height="24" />
                  </a>
                </span>
              </div>
            </Skills>
          </div>

          <br />
          <div>
            <h1 className="green">Availability:</h1>
            <span>
              I am open for full-time developer roles on React.js ,I am holding a Dependent Visa and Residing in Singapore ,I am available to work as remote, Hybrid and On-site. I can help you with your project. Hire me or have a look at portfolio.
            </span>
            <div>If you need a document of my resume, please email me at:</div>
            <Mail>
              <div className="mail-icon">
                <Link href="mailto:umachowdarysg@gmail.com" style={styles.link}>
                  <span>
                    <FiMail />
                  </span>
                  <div style={{ display: 'inline-flex' }}>umachowdarysg@gmail.com.</div>
                </Link>
              </div>
            </Mail>
          </div>


          <button>Let's talk</button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <Link href="https://www.linkedin.com/in/uma-chowdary-godavarthi-84088625a" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </Link>
              </span>
              <span>
                <Link href="https://github.com/godavarthiumachowdary" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </Link>
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img
            src={userPhoto}
            alt="profile"
          />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(0px 10px 10px #01be9551);
    :hover {
      filter: drop-shadow(0px 10px 10px #01be9570);
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: #01be96;
      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Skills = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .skill-icons {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      background-color: white;
      position: relative;
      transition: transform 400ms ease-in-out;

      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #01be9570);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;

const Mail = styled.div`
  margin-top: 3rem;
  .mail-icon {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .mail-icon a {
  display: flex;
  align-items: center;
  justify-content: center; /* added to center icon horizontally */
  color: #fff;
  position: absolute;
  text-decoration: none;
}

  .mail-icon span {
    width: 2.3rem;
    height: 2rem;
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    background-color: #01be96;
    position: relative;
    transition: transform 400ms ease-in-out;
  }

  .mail-icon span:hover {
    transform: rotate(360deg);
  }

  .mail-icon svg {
    width: 1.3rem;
    height: 1.3rem;
    margin-right: 0.5rem;
  }
`;