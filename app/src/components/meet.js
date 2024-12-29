import { Stack, Badge, Card, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./meet.css";

function Meet() {
  return (
    <div className="meet">
      <Card className="meet-card">
        <Card.Body>
          <Card.Text>
            <span className="badge" >
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-phone" >let us discuss </Tooltip>}
              >
                <Badge bg="light" text="dark" pill>
                  Phone: +91 6305355185
                </Badge>
              </OverlayTrigger>
            </span>
            <span className="badge">
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="tooltip-email">let us discuss </Tooltip>}
              >
                <Badge bg="light" gap={4} text="dark" pill>
                  Email: peddaudaykiran1@gmail.com
                </Badge>
              </OverlayTrigger>
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Meet;
