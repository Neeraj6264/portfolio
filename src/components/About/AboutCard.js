import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Neeraj Choithwani </span>
            from <span className="purple">Katni (M.P) India.</span>
            <br />
            I am currently pursuing my B.Tech in Computer Science from NIT Bhopal (2023-2027)
            <br />
          
           
           
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Never let them know your next move !! "
          </p>
          <footer className="blockquote-footer">Neeraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
