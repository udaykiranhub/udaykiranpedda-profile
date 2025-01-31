import { Modal, Button, Alert } from "react-bootstrap";
import { useState } from "react";
import { FaGraduationCap, FaSchool, FaBook, FaUniversity } from "react-icons/fa"; // Import icons from react-icons
import "./education.css"; // Ensure you have this CSS file for custom styles

function Education() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="education">
      <header className="neon-header" >
        <Button
          variant="outline-info"
          className="education-btn"
          style={{padding:"3%", fontSize: "1.2rem", fontWeight: "bold" }}
          onClick={handleShow}
        >
        Education
        {/* <FaGraduationCap style={{ marginRight: "8px" }} /> */}
        </Button>
      </header>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title style={{ fontSize: "1.8rem", fontWeight: "bold", color: "#0d6efd" }}>
            <FaUniversity style={{ marginRight: "10px" }} /> Educational Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert variant="success" className="education-alert">
            <div className="education-item">
              <FaSchool className="education-icon" />
              <div>
                <strong>Institute:</strong> Lendi Institute of Engineering and Technology
              </div>
            </div>
            <div className="education-item">
              <FaBook className="education-icon" />
              <div>
                <strong>Degree:</strong> Bachelor of Technology (B.Tech)
              </div>
            </div>
            <div className="education-item">
              <FaGraduationCap className="education-icon" />
              <div>
                <strong>Specialization:</strong> Computer Science and Engineering
              </div>
            </div>
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

export default Education;