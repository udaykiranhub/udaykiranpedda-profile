import React from 'react';
import './head.css';

function Head() {
  return (
    <>
      {/* Document Title */}
      <title>✨ Uday Kiran Pedda | MERN & Blockchain Developer 🚀</title>
      
      {/* Meta Tags */}
      <meta name="description" content="Portfolio of Uday Kiran Pedda, a skilled MERN Stack and Ethereum Blockchain Developer." />
      <meta name="keywords" content="MERN Stack, Blockchain, Ethereum, Solidity, Web Development" />
      <meta name="author" content="Uday Kiran Pedda" />
      
      {/* Open Graph for Social Media Preview */}
      <meta property="og:title" content="Uday Kiran Pedda | MERN & Blockchain Developer" />
      <meta property="og:description" content="Explore my portfolio showcasing projects in MERN stack and Ethereum Blockchain development." />
      <meta property="og:image" content="/path-to-your-thumbnail.jpg" />
      <meta property="og:url" content="https://your-portfolio-url.com" />
      <meta property="og:type" content="website" />
      
  
    
      

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      

      <header className="neon-header">

        <p className="neon-title" style={{color:"black"}}>MERN & Blockchain Developer</p>
      </header>
    </>
  );
}

export default Head;
