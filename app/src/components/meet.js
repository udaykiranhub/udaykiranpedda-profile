
import { Stack,Badge,Card,Button } from "react-bootstrap";
import "./meet.css"
function Meet(){
return (
    <div className="meet">
  <Card className="meet-card" >
    <Card.Body>
        <Card.Text>
  
         <span className="badge" > <Badge bg="light" text="dark" pill>Phone: +91 6305355185</Badge></span>
   <span className="badge"> <Badge bg="light" gap={3}   text="dark"  pill>Email : peddaudaykiran1@gmail.com</Badge></span>
     
        </Card.Text>
    </Card.Body>
  </Card>

    </div>
)
}

export default Meet;