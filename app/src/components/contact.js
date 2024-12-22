import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Linkedin, Twitter, Instagram } from "react-bootstrap-icons";
import "./contact.css"

function Contact() {
  const contactDetails = [
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/uday-kiran-pedda-65aa73271",
      icon: <Linkedin size={30} />,
      description: "Connect with me on LinkedIn to view my professional profile and network."
    },
    {
      platform: "Twitter",
      url: "https://x.com/UdayKir03362466?t=ZF7UaXqGV9zrYER1e13xpQ&s=08",
      icon: <Twitter size={30} />,
      description: "Follow me on Twitter for updates, thoughts, and industry insights."
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com/u_day_k_iran?igsh=b3huY3lvcXB2OXhh",
      icon: <Instagram size={30} />,
      description: "Check out Instagram for personal updates ."
    }
  ];

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 className="text-center my-4 "  style={{color:"white"}}>Contact Me</h1>
        </Col>
      </Row>
      <Row>
        {contactDetails.map((contact, index) => (
          <Col key={index} xs={12} md={4} className="mb-4">
            <Card className="text-center shadow-sm">
              <Card.Body>
                <Card.Title>{contact.icon} {contact.platform}</Card.Title>
                <Card.Text>{contact.description}</Card.Text>
                <a href={contact.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Visit {contact.platform}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Contact;