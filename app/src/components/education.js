
import {Modal,Badge,Button,Card,Alert} from "react-bootstrap";
import { useState } from "react";
import "./education.css";

function Education(){
    const [show,setShow]=useState(false)
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
<div className="education">
<header className="neon-header">
    
<Button variant="outline-info"  className="education-btn" style={{padding:"5%"}} onClick={handleShow}>
     Education
</Button>
</header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Educational Details!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Alert variant="success" className="education-alert">
      <p>
        <strong>Institute:</strong> Lendi Institute of Engineering and Technology
      </p>
      <p>
        <strong>B-Tech:</strong> Computer Science and Engineering
      </p>
    </Alert>
     
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>

    </div>)
}

export default Education;