import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../ParticleEffect";
import library from "../../Assets/Projects/library.webp";
import audioEqualizer from "../../Assets/Projects/audioEqualizer.webp";
import multilingualDictionary from "../../Assets/Projects/multilingualDictionary.webp";
import handwrite2type from "../../Assets/Projects/handwrite2type.webp";
import movieExplorer from "../../Assets/Projects/movieExplorer.webp";
import frontendSample from "../../Assets/Projects/frontendSample.webp";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="gold">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwrite2type}
              isBlog={false}
              title="HandWrite2Type"
              description="HandWrite2Type is a web application that generates personalized fonts from handwritten samples, converts documents between PDF and Word formats, and summarizes text documents. Built with ReactJS and Flask, it uses image processing, contour detection, and the FontForge library for font generation, while leveraging NLP techniques for text summarization."
              ghLink="https://github.com/Tusharmohanpuria/handwrite2type"
              demoLink="https://www.youtube.com/watch?v=4afRhcApeOw&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library Management System"
              description="A library management system (a full-stack project using MERN) that increased efficiency by 50%. Features include streamlined book transactions, automated tasks, self-checkout, QR code generation for books, automatic fine collection, and E-ID generation."
              ghLink="https://github.com/Tusharmohanpuria/Library-Management-System"
              demoLink="https://www.youtube.com/watch?v=YOPJ7nz6FaA&feature=youtu.be"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={multilingualDictionary}
              isBlog={false}
              title="Multilingual Dictionary"
              description="A web application providing word translations and definitions in multiple languages. It enhances user experience with a responsive interface, rich language features, and accurate image displays for user queries."
              ghLink="https://github.com/Tusharmohanpuria/Multilingual-Dictionary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={audioEqualizer}
              isBlog={false}
              title="Audio Equalizer Application"
              description="An audio equalizer with file support that reduces processing time by 30%. It offers fine-tuning across multiple frequency bands, improving audio equalization precision and user comprehension with playback and visualization features."
              ghLink="https://github.com/Tusharmohanpuria/Audio-Equilizer"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieExplorer}
              isBlog={false}
              title="Movie Explorer"
              description="The Movie Explorer application was developed using a client-server architecture. The server-side was implemented using Node.js with Express.js framework, while the client-side was developed using React.js library."
              ghLink="https://github.com/Tusharmohanpuria/Movie-Explorer"
              demoLink="https://movie-explorer-1-p91x.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontendSample}
              isBlog={false}
              title="Frontend Sample - UI Design"
              description="A simple frontend UI sample built with React, showcasing modern design practices. This project, made after an existing design, demonstrates clean and responsive design techniques suitable for various web applications."
              ghLink="https://github.com/Tusharmohanpuria/Frontend_Sample"
              demoLink="https://frontend-sample-5fzu.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
