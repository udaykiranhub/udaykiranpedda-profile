import { Modal, Badge, Button, Card, Alert } from "react-bootstrap";
import { useState } from "react";
import "./projects.css"; // Ensure you have this CSS file for custom styles

function Projects() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="projects">
      <header className="neon-header">
        <Button
          variant="outline-info"
          className="project-btn"
          style={{ padding: "10px 20px", fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={handleShow}
        >
          Projects
        </Button>
      </header>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
            Project Knowledge!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success" className="mb-4">
            <strong style={{ fontSize: "1.4rem", color: "#0d6efd" }}>MERN Stack:</strong>
            <ul className="project-list">
              <li>
                A complete <strong>School Management Application</strong> from LKG to Degree with dashboards for Main Admin, Branch Admin, and Teacher.
              </li>
              <li>
                Developed a <strong>Student Portfolio Website</strong> where students can showcase their skills and interact with others.
              </li>
              <li>
                Created a <strong>Workers Management Website</strong> for seamless collaboration among workers.
              </li>
              <li>
                Built a <strong>Redux-based E-commerce</strong> product listing with advanced search and filter functionality.
              </li>
              <li>
                Implemented <strong>SEO</strong> strategies for web pages to improve search engine rankings.
              </li>
              <li>
              Worked as a Freelancer
              </li>
            </ul>
          </Alert>

          <Alert variant="success" className="mb-4">
            <strong style={{ fontSize: "1.4rem", color: "#0d6efd" }}>Blockchain:</strong>
            <ul className="project-list">
         
              <li>
                Developed a <strong>Voting Application</strong> using Ethereum for decentralized voting.
              </li>
              <li>
                Created a <strong>DeFi For Staking</strong> .
              </li>
              <li>
                Built smart contracts for <strong>Supply Chain Management</strong> in agriculture to track product details at various stages.
              </li>
              <li>
                Developed a blockchain-based <strong>Verification System</strong>.
              </li>
              <li>
                Designed a <strong>Flight Booking Smart Contract</strong> for secure and decentralized flight bookings using cryptocurrency.
              </li>
              <li>
                Auditing  <strong>Smart contract</strong> .
              </li>
              <li>
              Worked as a Freelancer
              </li>
            </ul>
          </Alert>

          <a
            href="https://github.com/udaykiranhub?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mt-3"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "1.1rem",
              padding: "10px 20px",
            }}
          >
            <i className="bi bi-github"></i> View Projects on GitHub
          </a>
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

export default Projects;