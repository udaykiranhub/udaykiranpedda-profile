import React, { useState } from "react";
import { Modal, Button, Alert, Badge } from "react-bootstrap";
import { FaCheckCircle, FaTrophy, FaCode, FaCloud, FaCogs } from "react-icons/fa"; // Import icons from react-icons
import "./expertise.css"; // Ensure you have this CSS file for custom styles

function Expertise() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="expertise">
      <header className="neon-header">
        <Button
          variant="outline-info"
          className="expertise-btn"
          style={{ padding: "10px 20px", fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={handleShow}
        >
          Expertise
        </Button>
      </header>

      {/* Modal for Expertise */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
            <FaCogs style={{ marginRight: "10px" }} /> My Expertise
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success" className="expertise-alert">
            <strong style={{ fontSize: "1.4rem", color: "#0d6efd" }}>Key Skills:</strong>
            <ul className="expertise-list">
              <li>
                <FaCheckCircle className="expertise-icon" /> Web Page Optimization
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> Web Hosting
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> Efficient DApp Development
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> Application State Management (Redux)
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> SEO Optimization
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> Aggregation Pipeline
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> Integrating Cloud Services
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> IPFS Storage
              </li>
              <li>
                <FaCheckCircle className="expertise-icon" /> Smart Contract{" "}
                <Badge variant="dark" pill>
                  Auditing
                </Badge>
              </li>
            </ul>
          </Alert>

          <Alert variant="success" className="expertise-alert">
            <strong style={{ fontSize: "1.4rem", color: "#0d6efd" }}>Achievements:</strong>
            <ul className="expertise-list">
              <li>
                <FaTrophy className="expertise-icon" /> Industrial Experience
              </li>
              <li>
                <FaTrophy className="expertise-icon" /> Technical Lead in College Projects
              </li>
              <li>
                <FaTrophy className="expertise-icon" /> Worked on Real-Time Projects
              </li>
              <li>
                <FaTrophy className="expertise-icon" /> Hackathon Participation
              </li>
              <li>
                <FaTrophy className="expertise-icon" /> Freelancing Tasks
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

export default Expertise;