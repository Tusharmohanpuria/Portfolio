import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImage from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Container fluid className="about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="description">
            <h1 style={{ fontSize: "2.6em" }}>
              ALLOW ME TO <span className="highlight">INTRODUCE</span> MYSELF
            </h1>
            <p className="body-text">
              My adventure in programming has been filled with discovery and
              enthusiasm, and I've built a versatile skill set along the way.
              <br />
              <br />I specialize in languages such as
              <i>
                <b className="highlight"> C++, JavaScript, and Python.</b>
              </i>
              <br />
              <br />I am drawn to crafting cutting-edge
              <i>
                <b className="highlight"> Web Technologies and Solutions </b>
              </i>
              and am intrigued by domains like
              <i>
                <b className="highlight">
                  {" "}
                  Artificial Intelligence and Machine Learning.{" "}
                </b>
              </i>
              <br />
              <br />
              My passion lies in developing applications using
              <b className="highlight"> React.js</b> and the
              <i>
                <b className="highlight"> MERN Stack</b>
              </i>
              , while also exploring frameworks like
              <i>
                <b className="highlight"> Next.js</b>
              </i>
              .
              <br />
              <br />
              Currently, I am actively seeking internships in
              <i>
                <b className="highlight">
                  {" "}
                  Software Development and Cybersecurity
                </b>
              </i>{" "}
              to further enhance my skills and contribute to innovative
              projects.
            </p>
          </Col>
          <Col md={4} className="avatar">
            <Tilt>
              <img
                src={profileImage}
                style={{ maxHeight: "300px", borderRadius: "60%" }}
                className="img-fluid"
                alt="profile"
              />
            </Tilt>
          </Col>
        </Row>
        <Row></Row>
        <br />
        <br />
        <hr />
        <br />
        <br />
        <Row>
          <Col md={12} className="social-links">
            <h1>LET'S CONNECT</h1>
            <p>
              I'm eager to connect, share ideas, or discuss exciting tech
              projects!
            </p>
            <ul className="social-icon-lists">
              <li className="social-icons">
                <a
                  href="https://github.com/Tusharmohanpuria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tusharmohanpuria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tusharmohanpuria"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default AboutMe;
