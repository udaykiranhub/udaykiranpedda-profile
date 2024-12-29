import React, { useState } from "react";
import { Modal, Button, Alert,Badge } from "react-bootstrap";
import "./expertise.css";

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
          style={{ padding: "5%" }}
          onClick={handleShow}
        >
          Expertise
        </Button>
      </header>

      {/* Modal for Expertise */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>My Expertise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success">
            <strong>Key Skills:</strong>
            <ul>
              <li>✅ Web Page Optimization</li>
              <li>✅ Web Hosting</li>
              <li>✅ Efficient DApp Development</li>
              <li>✅ Application State Management (Redux)</li>
              <li>✅ SEO Optimization</li>
              <li>✅ Aggregation Pipeline</li>
              <li>✅ Integrating Cloud services </li>
              <li>✅ IPFS storage </li>
              <li variant="danger">✅ Smart Contract <Badge variant="dark" pill>Auditing</Badge></li>
            </ul>
          </Alert>

          <Alert variant="success">
            <strong>Achievements:</strong>
            <ul>
              <li>✅ Industrial Experience</li>
              <li>✅ Technical Lead in College Projects</li>
              <li>✅ Worked on Real-Time Projects</li>
              <li>✅ Hackathon Participation</li>
              <li> ✅ Freelancing tasks</li>
            </ul>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Expertise;
