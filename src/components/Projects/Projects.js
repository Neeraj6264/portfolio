import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/weather2.png";
import chatify from "../../Assets/typing.png";
import suicide from "../../Assets/invoice.png";
import bitsOfCode from "../../Assets/invoice.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Typing speed tester"
              description="Developed a browser-based typing speed testing tool using HTML, CSS, and JavaScript. Tracks user input to calculate real-time WPM, accuracy, and mistakes with a built-in timer. Emphasizes performance feedback and user-friendly design through dynamic text highlighting and error tracking."
              ghLink="https://github.com/Neeraj6264/Typing-speed-Tester.git"
              demoLink="https://neeraj6264.github.io/Typing-speed-Tester/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Invoice Generator"
              description="Developed a browser-based invoice creation tool using modern web technologies. Enables users to input client data, line items, taxes, and discounts, then instantly generates a styled PDF invoice. Features include real-time total calculation, preview, and download functionality—all with a clean, intuitive interface."
              ghLink="https://github.com/Neeraj6264/invoice-generators.git"
              demoLink="https://invoice-generator-mmcy6s5fd-neeraj-choithwanis-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Weather Ap"
              description="Developed a responsive weather application that fetches real-time weather data based on city name or user location. Utilizes OpenWeatherMap API to display temperature, humidity, wind speed, and weather conditions with dynamic icons and styling."
              ghLink="https://github.com/Neeraj6264/Weather-app.git"
              demoLink="https://weather-5p0r8d681-neeraj-choithwanis-projects.vercel.app/"              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
