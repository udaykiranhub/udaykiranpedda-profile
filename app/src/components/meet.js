import { Badge, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Envelope, Telephone } from "react-bootstrap-icons"; // Import icons
import "./meet.css";

function Meet() {
  return (
    <div className="meet">
      <Card className="meet-card">
        <Card.Body className="card-body ">
          {/* Phone Badge with Icon */}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-phone">Let's discuss over a call!</Tooltip>}
          >
            <Badge bg="light" text="dark" pill className="d-flex align-items-center gap-2 p-2 ">
              <Telephone size={18} /> {/* Phone icon */}
              <span>+91 6305355185</span>
            </Badge>
          </OverlayTrigger>

          {/* Email Badge with Icon */}
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-email">Let's discuss over email!</Tooltip>}
          >
            <Badge bg="light" text="dark" pill className="d-flex align-items-center gap-2 p-2">
              <Envelope size={18} /> {/* Email icon */}
              <span>peddaudaykiran1@gmail.com</span>
            </Badge>
          </OverlayTrigger>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Meet;