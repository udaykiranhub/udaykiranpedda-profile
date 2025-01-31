import React, { useState } from "react";
import { Modal, Button, Alert, Badge } from "react-bootstrap";
import { FaLightbulb, FaBullseye, FaRocket, FaGlobe, FaShieldAlt } from "react-icons/fa"; // Import icons from react-icons
import "./scopeandgoals.css"; // Ensure you have this CSS file for custom styles

function Vision() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="scope-goals">
      <header className="neon-header">
        <Button
          variant="outline-info"
          className="scope-goals-btn"
          style={{ padding: "10px 20px", fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={handleShow}
        >
          Scope & Goals
        </Button>
      </header>

      {/* Modal for Scope & Goals */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
            <FaLightbulb style={{ marginRight: "10px" }} /> Vision
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info" className="vision-alert">
            <strong style={{ fontSize: "1.4rem", color: "#0d6efd" }}>Innovative Ideas & Future Vision:</strong>
            <p>
              I have a strong vision for the future of blockchain and Web2 technology. With my ideas and insights, I am
              committed to providing innovative solutions to the blockchain industry.
            </p>
            <p>
              I plan to develop my own projects from scratch based on my unique ideas. These projects aim to improve
              various aspects of the blockchain ecosystem, enhancing user experience, security, and scalability.
            </p>
          </Alert>

          <Alert variant="success" className="vision-alert">
            <strong style={{ fontSize: "1.4rem", color: "#0d6efd" }}>Key Goals:</strong>
            <ul className="vision-list">
              <li>
                <FaGlobe className="vision-icon" /> Build a decentralized ecosystem for real-world applications
              </li>
              <li>
                <FaRocket className="vision-icon" /> Build a scalable web project with my vision
              </li>
              <li>
                <FaShieldAlt className="vision-icon" /> Develop innovative solutions for blockchain security
              </li>
              <li>
                <FaBullseye className="vision-icon" /> Lead projects that push the boundaries of blockchain technology
              </li>
              <li>
                <FaLightbulb className="vision-icon" /> Educate others on blockchain's potential and use cases
              </li>
            </ul>
          </Alert>
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

export default Vision;