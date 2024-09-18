import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="about-card">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="gold">Tushar Mohanpuria</span>,
            currently pursuing a B.Tech in Computer Science Engineering at the
            Indian Institute of Information Technology, Manipur.
            <br />
            I have a strong interest in software development and cybersecurity,
            with hands-on experience in ethical hacking and penetration testing.
            <br />
            I am proficient in various programming languages, including C++,
            Python, and JavaScript, and have developed several full-stack
            projects using the MERN stack.
            <br />
            <br />
            When I'm not coding, you can find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime or Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Crafting Code, Securing Tomorrow"
          </p>
          <footer className="blockquote-footer">Tushar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
