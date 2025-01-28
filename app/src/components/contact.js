import React, { useState } from "react";
import { Modal, Button, Alert } from "react-bootstrap";
import { Linkedin, Twitter, Instagram } from "react-bootstrap-icons";
import "./contact.css";

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
          style={{ padding: "5%" }}
          onClick={handleShow}
        >
          Contact Me
        </Button>
      </header>

      {/* Modal Component */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success">
            <strong>LinkedIn : </strong>
            <p>
              Connect with me on{"  "}
              <a
                href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </Alert>
          <Alert variant="success">
            <strong>Twitter:</strong>
            <p>
              Follow me on{" "}
              <a
                href="https://x.com/UdayKir03362466?t=ZF7UaXqGV9zrYER1e13xpQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
          </Alert>
          <Alert variant="success">
            <strong>Instagram:</strong>
            <p>
              Check out my profile on{" "}
              <a
                href="https://www.instagram.com/u_day_k_iran?igsh=b3huY3lvcXB2OXhh"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
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
            }}
          >
            <i className="bi bi-github"></i>Visit My GitHub
          </a>
          <Button variant="danger" onClick={handleClose}>
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contact;
