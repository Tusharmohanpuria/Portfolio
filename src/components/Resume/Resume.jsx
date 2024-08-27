import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../ParticleEffect";
import pdf from "../../Assets/resume.pdf";
import image from "../../Assets/resume.webp";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const downloadButton = (
    <Button
      variant="primary"
      href={pdf}
      target="_blank"
      style={{ maxWidth: "250px" }}
    >
      <AiOutlineDownload />
      &nbsp;Download CV
    </Button>
  );

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {downloadButton}
        </Row>

        <Row className="resume">
          <img
            src={image}
            alt="resume"
            className="d-flex justify-content-center"
            style={{ width: "92%", maxWidth: width > 768 ? "70%" : "90%" }}
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          {downloadButton}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
