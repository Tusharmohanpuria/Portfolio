import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCard({
  title,
  description,
  imgPath,
  ghLink,
  demoLink,
  isBlog,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt="Project Image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        <Button variant="primary" href={ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {isBlog ? "Read Blog" : "View Code"}
        </Button>
        {"\n"}
        {"\n"}
        {!isBlog && demoLink && (
          <Button
            variant="primary"
            href={demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Live Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
