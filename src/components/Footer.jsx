import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-content">
          <h3>Created by Tushar Mohanpuria</h3>
        </Col>
        <Col md="4" className="footer-content">
          <h3>© {currentYear} All Rights Reserved</h3>
        </Col>
        <Col md="4" className="footer-links">
          <ul className="social-list">
            <li className="social-item">
              <a
                href="https://github.com/tusharmohanpuria"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/tushar-mohanpuria/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.instagram.com/tusharmohanpuria/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
