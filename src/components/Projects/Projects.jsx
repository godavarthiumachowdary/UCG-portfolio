import React from 'react'
import styled from 'styled-components';
import { FaGlobe } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Projects = () => {
    return (
        <Container id='project'>
            <Slide direction="down">
                <h1>Recent <span className="green">Projects</span></h1>
                <p>Projects on which I have worked in the past two years ......</p>
            </Slide>
            <div>
                <div>
                    <Slide direction="left">
                        <Card
                            Icon={FaCode}
                            title={"UCG | Uma Chowdary Godavarthi | Portfolio"}
                            disc={"It is a Single Page application designed using React.js, JavaScript, HTML and CSS. This application explains about my portfolio."}
                        />
                    </Slide>
                </div>
                < br />
                <div>
                    <Slide direction="right">
                        <Card
                            Icon={FaGlobe}
                            title={"Yolomed"}
                            disc={
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <strong>Environment:</strong> React JS, JavaScript
                                    </li>
                                    <li>
                                        <strong>Role:</strong> Developer
                                    </li>
                                    <br />
                                    <li>
                                        <strong>Description:</strong> Yolomed is a neutral platform aimed at providing a bias-free environment for doctors and patients. The platform allows users to book appointments, handle orders, set reminders, and track invoices. I was involved in understanding the functionality of the application, developing the user interface using React JS, JavaScript, Bootstrap, HTML5, and CSS, and implementing internal functionalities and API calls.
                                    </li>
                                    <br />
                                    <strong>Responsibilities:</strong>
                                    <li>
                                        <ul>
                                            <li>Involved in understanding the functionality of the application and analysis</li>
                                            <li>Development of the application using React JS and JavaScript</li>
                                            <li>Contributed to the user interface using React JS, JavaScript, Bootstrap, HTML5, and CSS</li>
                                            <li>Implemented internal functionalities and API calls using React JS</li>
                                        </ul>
                                    </li>
                                </ul>
                            }
                        />
                    </Slide>


                </div>
                <br />
                <div>
                    <Slide direction="left">
                        <Card
                            Icon={FaGlobe}
                            title={"In My Campus (IMC)"}
                            disc={
                                <ul style={{ listStyle: 'none' }}>
                                    <li>
                                        <strong>Environment:</strong> React JS, JavaScript
                                    </li>
                                    <li>
                                        <strong>Role:</strong> Developer
                                    </li>
                                    <br />
                                    <li>
                                        <strong>Description:</strong> In My Campus is a unique platform that enables users to buy and sell products in
                                        a secure and professional community. Key features include secure payment, instant chat, and a
                                        wide range of tools to buy or sell products. I assisted in the development of the web application,
                                        contributed to the development of the user interface using React, and collaborated with the
                                        team to understand requirements.
                                    </li>
                                    <br />
                                    <strong>Responsibilities:</strong>
                                    <li>
                                        <ul>
                                            <li>Involved in understanding the functionality of the application and analysis</li>
                                            <li>Assisted in the development of the In My Campus web application</li>
                                            <li>Contributed to the user interface using React JS, JavaScript, HTML5, and CSS</li>
                                        </ul>
                                    </li>
                                </ul>
                            }
                        />
                    </Slide>
                </div>
            </div>
        </Container >
    )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }

    p{
        width: 28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    
`
