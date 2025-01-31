import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Orbit } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home.js";

function App() {
  return (
    <div className="App position-relative min-vh-100 overflow-hidden" style={{ background: '#070718' }}>
      {/* Deep space background with multiple layers */}
      <div className="space-background"></div>
      <div className="nebula-layer"></div>
      <div className="stars-layer"></div>
      <div className="shooting-stars"></div>
      
      {/* Orbiting planets */}
      <div className="position-absolute w-100 h-100">
        <div className="planet-1 position-absolute rounded-circle"></div>
        <div className="planet-2 position-absolute rounded-circle"></div>
        <div className="planet-3 position-absolute rounded-circle"></div>
      </div>

      {/* Main content */}
      <Container className="position-relative min-vh-100 d-flex align-items-center justify-content-center" style={{ zIndex: 10 }}>
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div className="d-flex justify-content-center mb-4">
              <Orbit className="text-info" style={{ width: '4rem', height: '4rem', animation: 'spin 8s linear infinite' }} />
            </div>
            <h1 className="display-4 text-white mb-4" style={{ letterSpacing: '0.1em' }}>
              Please Welcome!
            </h1>
            <Home/>
          </Col>
        </Row>
      </Container>

      <style>
        {`
          .space-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle at center, #1b2735 0%, #090a0f 100%);
            z-index: 1;
          }

          .nebula-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
              radial-gradient(circle at 20% 30%, rgba(255, 147, 147, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(147, 147, 255, 0.1) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, rgba(147, 255, 147, 0.1) 0%, transparent 50%);
            filter: blur(30px);
            animation: nebula-move 60s ease-in-out infinite;
            z-index: 2;
          }

          .stars-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
              radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
              radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0));
            background-repeat: repeat;
            background-size: 200px 200px;
            animation: stars-move 60s linear infinite;
            opacity: 0.8;
            z-index: 3;
          }

          .shooting-stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 4;
          }

          .shooting-stars::before, .shooting-stars::after {
            content: "";
            position: absolute;
            width: 100px;
            height: 2px;
            background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);
            animation: shooting-star 6s linear infinite;
          }

          .shooting-stars::after {
            animation-delay: 3s;
          }

          .planet-1 {
            width: 100px;
            height: 100px;
            background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
            box-shadow: 
              0 0 50px rgba(255, 107, 107, 0.4),
              inset -20px -20px 50px rgba(0,0,0,0.4);
            animation: orbit1 20s linear infinite;
          }

          .planet-2 {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            box-shadow: 
              0 0 40px rgba(79, 172, 254, 0.4),
              inset -10px -10px 30px rgba(0,0,0,0.4);
            animation: orbit2 15s linear infinite;
          }

          .planet-3 {
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #a8ff78, #78ffd6);
            box-shadow: 
              0 0 30px rgba(168, 255, 120, 0.4),
              inset -8px -8px 20px rgba(0,0,0,0.4);
            animation: orbit3 25s linear infinite;
          }

          @keyframes nebula-move {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.2) rotate(180deg); }
          }

          @keyframes stars-move {
            from { transform: translateY(0); }
            to { transform: translateY(-200px); }
          }

          @keyframes shooting-star {
            0% { 
              transform: translateX(-100%) translateY(100%) rotate(-45deg);
              opacity: 1;
            }
            70% { opacity: 1; }
            100% { 
              transform: translateX(200%) translateY(-200%) rotate(-45deg);
              opacity: 0;
            }
          }

          @keyframes orbit1 {
            from { transform: rotate(0deg) translateX(300px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(300px) rotate(-360deg); }
          }

          @keyframes orbit2 {
            from { transform: rotate(120deg) translateX(200px) rotate(0deg); }
            to { transform: rotate(480deg) translateX(200px) rotate(-360deg); }
          }

          @keyframes orbit3 {
            from { transform: rotate(240deg) translateX(150px) rotate(0deg); }
            to { transform: rotate(600deg) translateX(150px) rotate(-360deg); }
          }

          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          @media (max-width: 768px) {
            .planet-1, .planet-2, .planet-3 {
              transform: scale(0.7);
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;