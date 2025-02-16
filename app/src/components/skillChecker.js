import React, { useState, useEffect } from "react";
import { Form, Card } from "react-bootstrap";

function SkillsChecker() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const words = [
    "MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js",
    "Bootstrap", "HTML", "CSS", "Web Development", "Ethereum Blockchain",
    "Solidity", "Foundry", "Truffle", "Security", "Solidity Attacks Auditing",
    "Defi", "NFT", "Web3.js", "MetaMask", "Python", "JavaScript","auditing","defi protocols",
    "Node.js-Express", "React.js Redux", "SEO", "Data Structures",
    "Git", "GitHub", "Postman", "AWS Services", "IPFS", "Render",
    "Vercel", "Cloudinary", "AWS", "RazorPay", "MongoDB", "Pinata-IPFS",
    "Material UI", "Block Chain", "wallet", "Token", "ERC20", "ERC721",
    "Full stack", "Web development", "frontend", "Backend", "database",
    "ON page SEO", "Debugging", "Testing","web3","dapp","maetrialUI","web developer","ethereum"
    ,"pinata","IPFS","Cloud","hoisting","deployment","Responsive","UI","cloud integration","EVM"
    ,"Crypto","problem solving","crypt coins"," Mongodb Aggregations","Mongoose","Node js","javascript",
    "mocha","chai","Block chain security"
  ];

  useEffect(() => {
    if (search.trim() === "") {
      setResult("");
      return;
    }
 
    const exists = words.map(w => w.toLowerCase()).includes(search.toLowerCase());
    setResult(exists ? `Yes, "${search}" is included.` : `"${search}" is not included.`);
  }, [search]);

  return (
    <div className="skills-checker">
      <Card className="search-card">
        <Card.Body>
 
          <Form.Control
            type="text"
            placeholder="/$ Enter skill/service name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-field"
          />
          {result && <div className="result">{result}</div>}
        </Card.Body>
      </Card>
      <style>{`
        .skills-checker {
          background-color: #000;
          color: #0f0;
          
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }
        .search-card {
          background-color: #1e1e1e;
          color: #0f0;
          padding: 20px;
          border-radius: 10px;
          width: 100%;
          max-width: 500px;
          text-align: center;
        }
        .input-field {
          background-color: #000;
          color: #0f0;
          border: 1px solid #0f0;
          font-family: monospace;
          width: 100%;
          padding: 10px;
        }
        .result {
          margin-top: 10px;
          font-size: 1rem;
          color: #0f0;
        }
        @media (max-width: 600px) {
          .search-card {
            width: 90%;
            padding: 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default SkillsChecker;
