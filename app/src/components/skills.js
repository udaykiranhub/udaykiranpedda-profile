import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card, Badge, Modal, Button } from "react-bootstrap";
import {
  FaCode,
  FaEthereum,
  FaPython,
  FaReact,
  FaTools,
  FaServer,
  FaDatabase,
  FaCloud,
} from "react-icons/fa"; // Import icons from react-icons
import "./skills.css"; // Ensure you have this CSS file for custom styles

function Skills() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const skills = [
    {
      category: "Web Development",
      icon: <FaCode />,
      skills: [
        { name: "MERN Stack", details: "MongoDB, Express.js, React.js, Node.js" },
        { name: "Bootstrap", details: "Responsive design and UI components" },
        { name: "React.js", details: "Building dynamic user interfaces" },
        { name: "Express.js", details: "Backend Framework for server maintenance" },
        { name: "MongoDB", details: "NoSQL database for modern applications" },
        { name: "HTML", details: "Markup language for web development" },
        { name: "CSS", details: "Styling web pages with modern techniques" },
        { name: "Web Development (without React)", details: "I can develop websites without React framework" },
      ],
    },
    {
      category: "Blockchain",
      icon: <FaEthereum />,
      skills: [
        { name: "Ethereum Blockchain", details: "Building decentralized applications (dApps)" },
        { name: "Solidity", details: "Developing and deploying smart contracts" },
        { name: "Foundry", details: "Testing and deploying smart contracts" },
        { name: "Truffle", details: "Testing and deploying smart contracts" },
        { name: "Security", details: "Auditing solidity smart contracts" },
        { name: "Solidity Attacks Auditing", details: "Identifying and mitigating security vulnerabilities" },
        { name: "Defi", details: "Knowledge about Defi protocols" },
        { name: "NFT", details: "Knowledge about NFTs" },
        { name: "Web3.js", details: "I can develop Dapps with Web3 library in JavaScript" },
        { name: "MetaMask", details: "Wallet for Decentralized Applications" },
      ],
    },
    {
      category: "Programming Languages",
      icon: <FaPython />,
      skills: [
        { name: "Python", details: "Used for DSA and problem-solving" },
        { name: "JavaScript", details: "For Web development" },
        { name: "Node.js-Express", details: "For backend server" },
        { name: "Solidity", details: "Writing Smart Contracts" },
      ],
    },
    {
      category: "Other",
      icon: <FaReact />,
      skills: [
        { name: "React.js Redux", details: "State management for React applications" },
        { name: "SEO", details: "SEO Techniques to improve Crawl Ranking" },
        { name: "Data Structures", details: "Understanding of various data structures" },
      ],
    },
    {
      category: "Tools & Technologies",
      icon: <FaTools />,
      skills: [
        { name: "Git", details: "Version control system" },
        { name: "GitHub", details: "Hosting for version control and collaboration" },
        { name: "Truffle", details: "Testing framework for Ethereum" },
        { name: "Foundry", details: "Testing framework for Ethereum" },
        { name: "Postman", details: "Backend Testing Framework for Express.js server" },
        { name: "AWS Services", details: "Connecting websites to cloud services" },
        { name: "IPFS", details: "Decentralized storage solution" },
      ],
    },
    {
      category: "Services",
      icon: <FaServer />,
      skills: [
        { name: "Render", details: "For Web Hosting" },
        { name: "Vercel", details: "For Web Hosting" },
        { name: "Cloudinary", details: "Media storage" },
        { name: "AWS", details: "SMTP!" },
        { name: "RazorPay", details: "For Payment" },
        { name: "MongoDB", details: "For data storage" },
        { name: "Pinata-IPFS", details: "Decentralized storage for data" },
      ],
    },
  ];

  return (
    <div className="skills">
      <header className="neon-header">
        <Button
          variant="outline-info"
          className="skills-btn"
          style={{ padding: "10px 20px", fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={handleShow}
        >
          Skills
        </Button>
      </header>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
            <FaCode style={{ marginRight: "10px" }} /> My Skills
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            {skills.map((skillCategory, index) => (
              <Row key={index} className="mb-4">
                <Col xs={12}>
                  <Card className="shadow-sm skill-card">
                    <Card.Body>
                      <Card.Title className="text-primary">
                        {skillCategory.icon} {skillCategory.category}
                      </Card.Title>
                      <ListGroup variant="flush">
                        {skillCategory.skills.map((skill, idx) => (
                          <ListGroup.Item
                            key={idx}
                            className="d-flex justify-content-between align-items-start skill-item"
                          >
                            <div>
                              <h5>{skill.name}</h5>
                              <small className="text-muted">{skill.details}</small>
                            </div>
                            <Badge bg="success" pill>
                              # Skill
                            </Badge>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            ))}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} style={{ fontSize: "1.1rem", padding: "8px 20px" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Skills;