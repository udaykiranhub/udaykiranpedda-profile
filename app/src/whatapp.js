// src/WhatsAppConnect.js
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card,Alert } from "react-bootstrap";

const WhatsApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSendMessage = () => {
    // Basic validation
    if (!phoneNumber) {
      setError("Please enter a phone number.");
      return;
    }

    // Remove any non-digit characters
    const cleanedNumber = phoneNumber.replace(/\D/g, "");

    // Check if the phone number has at least 10 digits (basic check)
    if (cleanedNumber.length < 10) {
      setError("Please enter a valid phone number with country code.");
      return;
    }

    setError(""); 

    const whatsappUrl = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Send a WhatsApp Message
              </Card.Title>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form>
                <Form.Group controlId="phoneNumber" className="mb-3">
                  <Form.Label>Phone Number (with country code)</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="e.g., 1234567890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    Enter the phone number without "+" or any special characters.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="message" className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Type your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>

                <Button variant="success" className="w-100" onClick={handleSendMessage}>
                  Send Message on WhatsApp
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default WhatsApp;
