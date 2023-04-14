import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Link } from "@mui/material";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { FaHackerrank } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Contact</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>Sengkang,Singapore - 797637</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+6597164489">+6597164489</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:umachowdarysg@gmail.com">umachowdarysg@gmail.com</a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/uma-chowdary-godavarthi-84088625a" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://github.com/godavarthiumachowdary" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      {/* <Form>
        <Slide direction="right">
          <form>
          <div className="flag">
            <Link href="https://knowindia.india.gov.in/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://knowindia.india.gov.in/assets/images/national_flag_inner.jpg"
                alt="profile"
              />
            </Link>
          </div>
          <div>
            <p>"I am grateful to Mother India and to every Indian and  for their hard work and sacrifices which have enabled me to enjoy the benefits I have today."</p>
          </div>
          </form>
        </Slide>
      </Form> */}
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
  }

  @media only screen and (max-width: 480px) { /* IPhone SE, Samsung Galaxy A51/71 */
    form {
      padding: 0.5rem;
    }
  }

  @media only screen and (max-width: 576px) { /* IPhone XR, Pixel 5 */
    form {
      max-width: 400px;
    }
  }

  @media only screen and (max-width: 667px) { /* Phone 12 Pro */
    form {
      max-width: 500px;
    }
  }

  @media only screen and (max-width: 731px) { /* Samsung Galaxy S8+ */
    form {
      max-width: 550px;
    }
  }

  @media only screen and (max-width: 823px) { /* Samsung galaxy s20 ultra, iPad Mini */
    form {
      max-width: 600px;
    }
  }

  @media only screen and (max-width: 834px) { /* iPad Air */
    form {
      max-width: 700px;
    }
  }

  @media only screen and (max-width: 1024px) { /* Surface Pro7 */
    form {
      max-width: 800px;
    }
  }

  @media only screen and (max-width: 1152px) { /* Surface Duo */
    form {
      max-width: 900px;
    }
  }

  @media only screen and (max-width: 1280px) { /* Galaxy Fold */
    form {
      max-width: 1000px;
    }
  }

  @media only screen and (max-width: 1366px) { /* Nest Hub */
    form {
      max-width: 1100px;
    }
  }

  @media only screen and (max-width: 1920px) { /* Nest Hub Max */
    form {
      max-width: 1300px;
    }
  }
`;
