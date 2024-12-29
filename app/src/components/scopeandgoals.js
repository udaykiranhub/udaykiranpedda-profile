import React, { useState } from "react";
import { Modal, Button, Alert, Badge } from "react-bootstrap";
import "./scopeandgoals.css"; // Custom CSS for this component

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
          style={{ padding: "5%" }}
          onClick={handleShow}
        >
          Scope & Goals
        </Button>
      </header>

      {/* Modal for Scope & Goals */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Vision</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="info">
            <strong>Innovative Ideas & Future Vision:</strong>
            <p>
              I have a strong vision for the future of blockchain and Web2 technology. 
              With my ideas and insights, I am committed to providing innovative solutions 
              to the blockchain industry.
            </p>
            <p>
              I plan to develop my own projects from scratch based on my unique ideas. These 
              projects aim to improve various aspects of the blockchain ecosystem, enhancing 
              user experience, security, and scalability.
            </p>
          </Alert>

          <Alert variant="success">
            <strong>Key Goals:</strong>
            <ul>
              <li>✅ Build a decentralized ecosystem for real-world applications</li>
             <li>✅Build a scalable web project with my vision .</li>
              <li>✅ Develop innovative solutions for blockchain security</li>
              <li>✅ Lead projects that push the boundaries of blockchain technology</li>
              <li>✅ Educate others on blockchain's potential and use cases</li>
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

export default  Vision;
