import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume justify-content-center">
        {error ? (
          <p>Failed to load resume. Please try again later.</p>
        ) : (
          <Document
            file={pdf}
            onLoadError={(error) => {
              console.error("Failed to load PDF:", error);
              setError(error.message);
            }}
          >
            <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
          </Document>
        )}
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default Resume;
