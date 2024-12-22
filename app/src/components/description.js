import React from 'react';
import { Alert, Container } from 'react-bootstrap';
import './description.css';

function Description() {
  return (
    <div className="description">
      <Container>
        <h2>Hii Welcome!!!</h2>
        <Alert variant="success" className="p-4 shadow-sm rounded">
          <h4 className="mb-3 text-center">About Me</h4>
          <p>
            To leverage my expertise in <strong>MERN Stack Development</strong> and 
            <strong> Ethereum Blockchain (DApps)</strong> to build scalable, secure, and 
            innovative applications. my aim is  contribute to impactful projects, 
            continuously grow my technical skills, and stay updated with emerging technologies.
          </p>
          <p>
            I am a <strong>MERN Stack and Ethereum Blockchain Developer</strong> passionate about 
            creating efficient and secure web2 and decentralized(web3) applications.
          </p>
          <p>
         "I am passionate about developing <strong>Web2 (MERN)</strong> and<strong> Web3</strong> solutions, including <strong>DeFi</strong> and <strong>NFT</strong> projects."
          </p>
        </Alert>
      </Container>
    </div>
  );
}

export default Description;
