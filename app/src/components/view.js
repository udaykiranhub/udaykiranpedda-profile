import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Shield, Image as ImageIcon } from 'lucide-react';
import './view.css';

function View() {
  return (
    <div className="view">
      <Container>
        <Row className="justify-content-center">
          {/* First Card: Future of MERN Stack */}
          <Col xs={12} md={4} className="mb-4">
            <Card className="h-100 flex-card">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Code size={48} />
                <Card.Title className="mt-3"><strong>Future of MERN Stack</strong></Card.Title>
                <Card.Text>
                  The MERN stack continues to evolve with serverless computing, microservices, and AI integration.
                  It offers scalability, flexibility, and faster development cycles, making it ideal for modern web applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Second Card: Blockchain & DeFi */}
          <Col xs={12} md={4} className="mb-4">
            <Card className="h-100 flex-card">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <Shield size={48} />
                <Card.Title className="mt-3"><strong>Blockchain && Defi</strong></Card.Title>
                <Card.Text>
                  Decentralized Finance (DeFi) is reshaping the financial ecosystem by removing intermediaries.
                  The future involves increased adoption, enhanced security, and integration with traditional finance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Third Card: NFTs & Web3 */}
          <Col xs={12} md={4} className="mb-4">
            <Card className="h-100 flex-card">
              <Card.Body className="d-flex flex-column align-items-center text-center">
                <ImageIcon size={48} />
                <Card.Title className="mt-3"><strong>NFTs & Web3</strong></Card.Title>
                <Card.Text>
                  NFTs are revolutionizing digital ownership, art, gaming, and intellectual property.
                  The future includes more real-world applications, interoperability, and regulatory clarity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default View;
