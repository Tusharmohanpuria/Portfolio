import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../ParticleEffect";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.webp";
import Toolstack from "./Toolstack";
import Github from "./GithubStats";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to Know <strong className="gold">Me</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="About me" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          My <strong className="gold">Skillset</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="gold">Tools</strong> I Use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
