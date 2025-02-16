import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  Code,
  Storage,
  Wallet as WalletIcon,
  Diamond,
  Psychology, // Replaced Brain with Psychology
  TrackChanges as TargetIcon, // Replaced Target with TrackChanges
  EmojiEvents as AwardIcon, // Replaced Award with EmojiEvents
  GitHub,
  LinkedIn,
  Email,
  WhatsApp,
  Telegram,
  Terminal,
  Language,
} from '@mui/icons-material';

import uday from "../images/hacker.jpg"
import "./profile.css"
function Profile() {
  return (
    <div className="min-vh-100  text-white p-4"  id="profile">
      <Container>
        {/* Header Section */}
        <Row className="text-center mb-5">
          <Col>
            <img
            src={uday}
              alt="Profile"
              className="rounded-circle border border-primary shadow-lg mb-3"
              style={{ width: '128px', height: '128px' }}
            />
          <h1 className="display-4 fw-bold mb-2 neon-text">UDAY KIRAN PEDDA</h1>
            <p className="fs-5 text-primary">Full  Stack & Block Chain</p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://github.com/udaykiranhub?tab=repositories" className="text-primary text-decoration-none">
                <GitHub fontSize="large" />
              </a>
              <a href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271" className="text-primary text-decoration-none">
                <LinkedIn fontSize="large" />
              </a>
              <a href="https://wa.me/9163053553815" className="text-primary text-decoration-none">
                <WhatsApp fontSize="large" />
              </a>
              {/* Telegram Link */}
              <a href="https://t.me/udaykiranpedda" className="text-primary text-decoration-none">
                <Telegram fontSize="large" />
              </a>
            </div>
          </Col>
        </Row>

        {/* Main Grid */}
        <Row className="g-4">
          {/* Professional Summary */}
          <Col md={12} lg={8}>
            <Card className="h-100  text-black">
              <Card.Body>
                <div className="d-flex align-items-start gap-3">
                  <Psychology fontSize="large" className="text-black" /> {/* Updated icon */}
                  <div>
                    <h2 className="h4 fw-semibold mb-3">Professional Summary</h2>
                    <p className="text-black">
                      Leveraging expertise in <span className="text-primary">MERN Stack Development</span> and{' '}
                      <span className="text-primary">Ethereum Blockchain (DApps)</span> to build scalable, secure, and
                      innovative applications. Committed to continuous learning and staying updated with emerging
                      technologies.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Skills */}
          <Col md={12} lg={4}>
            <Card className="h-100  text-balck">
              <Card.Body>
                <h2 className="h4 fw-semibold mb-4 d-flex align-items-center gap-2">
                  <Terminal fontSize="large" className="text-primary" />
                  Technical Skills
                </h2>
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex align-items-center gap-2">
                    <Storage fontSize="medium" className="text-primary" />
                    <span>MongoDB, Express.js, React, Node.js</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <Language fontSize="medium" className="text-primary" />
                    <span>Ethereum, Solidity, Web3.js</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Current Role */}
          <Col md={12} lg={6}>
            <Card className="h-100  text-black">
              <Card.Body>
                <div className="d-flex align-items-start gap-3">
                  <Code fontSize="large" className="text-white" />
                  <div>
                    <h2 className="h4 fw-semibold mb-3">Current Role</h2>
                    <p>Full Stack Developer specializing in MERN Stack and Blockchain Development</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Blockchain Expertise */}
          <Col md={12} lg={6}>
            <Card className="h-100 bg text-black">
              <Card.Body>
                <div className="d-flex align-items-start gap-3">
                  <WalletIcon fontSize="large" className="text-primary" />
                  <div>
                    <h2 className="h4 fw-semibold mb-3">Blockchain Expertise</h2>
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex align-items-center gap-2">
                        <Diamond fontSize="medium" className="text-primary" />
                        <span>NFT Development</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <TargetIcon fontSize="medium" className="text-primary" /> {/* Updated icon */}
                        <span>DeFi Solutions</span>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <TargetIcon fontSize="medium" className="text-primary" /> {/* Updated icon */}
                        <span>Auditing</span>
                      </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Compensation Note */}
          <Col md={12} lg={12}>
            <Card className="h-100 text-black">
              <Card.Body>
                <div className="d-flex align-items-start gap-3">
                  <AwardIcon fontSize="large" className="text-primary" />
                  <div>
                    <h2 className="h4 fw-semibold mb-3">Compensation Note</h2>
                    <p className="text-black">
                      Open to competitive compensation arrangements while maintaining commitment to delivering exceptional
                      value and quality results.
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;