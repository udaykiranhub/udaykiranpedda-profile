
import {Modal,Badge,Button,Card,Alert} from "react-bootstrap";
import { useState } from "react";
import "./projects.css"
function Projects(){
    const [show,setShow]=useState(false)
    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

return(
<div className="projects">

<header className="neon-header">
<Button variant="outline-info"  className="project-btn" style={{padding:"5%"}} onClick={handleShow}>
      Projects
</Button>
</header>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Knowledge!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
<Alert variant="success">
<strong>MERN Stack:</strong>
<p>
# I have  developed a <strong>Student portfilio website</strong> .
where students can interact with their thoughts and ideas and they can build their accounts with their skills<br/>
# I have developed website for<strong> workers management</strong> website 
where workers can collaborate easily<br/>

#I have developed a<strong> E-commerce Redux </strong>based Products listing with searching filter
<br/>
#<strong>SEO</strong> implementation for the Web pages 
</p>
</Alert>
<Alert variant="success">
<strong >Block chain:</strong>
<p >
#I have developed <strong>Voting application</strong> with Ethereum
where voting can do in decentralized way<br/>
#I have developed <strong>Defi staking protocol</strong> implementation
Staking with tokens
<br/>
#I have developed smart contracts for <strong>Supply chain</strong> management for Agriculture. 
We can track the product details in various stages
</p>


</Alert>
        <a
          href="https://github.com/udaykiranhub?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark mt-3"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <i className="bi bi-github"></i> View projects in GitHub 
        </a> 
      
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
      
        </Modal.Footer>
      </Modal>

    </div>)
}

export default Projects;