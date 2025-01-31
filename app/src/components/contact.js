import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { Linkedin, Twitter, Instagram, Github } from "react-bootstrap-icons"; // Import icons from react-bootstrap-icons
import "./contact.css"; // Ensure you have this CSS file for custom styles

function Contact() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="contact">
      <header className="neon-header">
        <Button
          variant="outline-info"
          className="contact-btn"
          style={{ padding: "10px 20px", fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={handleShow}
        >
          Contact Me
        </Button>
      </header>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
            Contact Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success" className="contact-alert">
            <div className="contact-item">
              <Linkedin className="contact-icon" />
              <div>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with me on LinkedIn
                </a>
              </div>
            </div>
          </Alert>

          <Alert variant="success" className="contact-alert">
            <div className="contact-item">
              <Twitter className="contact-icon" />
              <div>
                <strong>Twitter:</strong>{" "}
                <a
                  href="https://x.com/UdayKir03362466?t=ZF7UaXqGV9zrYER1e13xpQ&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Twitter
                </a>
              </div>
            </div>
          </Alert>

          <Alert variant="success" className="contact-alert">
            <div className="contact-item">
              <Instagram className="contact-icon" />
              <div>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/u_day_k_iran?igsh=b3huY3lvcXB2OXhh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out my profile on Instagram
                </a>
              </div>
            </div>
          </Alert>
        </Modal.Body>
        <Modal.Footer>
          <a
            href="https://github.com/udaykiranhub?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              fontSize: "1.1rem",
              padding: "8px 20px",
            }}
          >
            <Github /> Visit My GitHub
          </a>
          <Button variant="danger" onClick={handleClose} style={{ fontSize: "1.1rem", padding: "8px 20px" }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;