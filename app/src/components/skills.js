import React from "react";
import { Container, Row, Col, ListGroup, Card, Badge } from "react-bootstrap";
import "./skills.css"

function Skills() {
  const skills = [
    {
      category: "Web Development",
      skills: [
        { name: "MERN Stack", details: "MongoDB, Express.js, React.js, Node.js" },
        { name: "Bootstrap", details: "Responsive design and UI components" },
        { name: "React.js", details: "Building dynamic user interfaces" },
        { name: "Express js", details: "Backend Frame work for server maintanance" },
        { name: "MongoDB", details: "NoSQL database for modern applications" },
        { name: "HTML", details: "Markup language for web development" },
        { name: "CSS", details: "Styling web pages with modern techniques" },
        {name:"web development(without react)",details:"i can develop website without React framework"}
      ]
    },
  
    {
      category: "Blockchain ",
      skills: [
        { name: "Ethereum Blockchain", details: "Building decentralized applications (dApps)" },
        { name: "Solidity", details: "Developing and deploying smart contracts" },
        { name: "Foundry", details: "Testing and deploying smart contracts" },
        { name: "Truffle", details: "Testing and deploying smart contracts" },
        
        { name: "Security", details: " Auditing solidity smart contracts" },
        { name: "Solidity Attacks Auditing", details:"Identifying and mitigating security vulnerabilities" },
        {name:"Defi",details:"knowlede about Defi protocols!"},
        {name:"NFT",details:"Knwoledge about NFT's!"},
        {name:"Web3.js",details:"i can develop Dapps with Web3 library in javascript@!"},
        {name: "MetaMask", details: "Wallet For Decentralized Applications" },
    
    
    ]  
},

{

    category:"Programming Languages",
    skills:[
      {name:"Python" ,details:"used for Dsa and problem solving"},
      {name:"Javascipt",details:"for Web development"},
      {name:"Nodejs-express",details:"for backend server"},
      {name:"solidity",details:"Writing Smart Contracts"},


    ]

  },
    {
      category: "Other",
      skills: [
        { name: "React.js Redux", details: "State management for React applications" },
        { name: "SEO", details: "SEO Techniques To improve Crawl Ranking" },
        { name: "Data Structures", details: "Understanding of various data structures" },

      
      ]
    },

    {
        category: "Tools & Technologies",
        skills: [
          { name: "Git", details: "Version control system" },
          { name: "GitHub", details: "Hosting for version control and collaboration" },
          { name: "Truffle", details: "Testing framework for Ethereum" },
          { name: "Foundry", details: "Testing framework for Ethereum" },
          { name: "Postman", details: "Backend Testing Framework for express js server" },
          
          { name: "AWS Services", details: "Connecting websites to cloud services" },
  
          { name: "IPFS", details: "Decentralized storage solution" },
  
        ]
      }
    
  

    ,
    {category:"Services",
      skills:[
        {name:"Render",details:"For Web Hosting !"},
        {name:"Vercel",details:"For Web Hosting !"},
        {name:"Cloudinary",details:"Media storage"},
        {name:"AWS",details:"SMTP!"},
        {name:"RazorPay",details:"For Payment"},
        {name:"Mongodb",details:"For data storage"},
        {name:"pinata-Ipfs",details:"Decentralized storage for data"}
      ]
    }
  ];

  return (
    <Container>
  
      {skills.map((skillCategory, index) => (
        <Row key={index} className="mb-4">
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <Card className="shadow-sm" id="skill-card">
              <Card.Body>
                <Card.Title className="text-primary">{skillCategory.category}</Card.Title>
                <ListGroup variant="flush">
                  {skillCategory.skills.map((skill, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-start">
                      <div>
                        <h5>{skill.name}</h5>
                        <small className="text-muted" style={{padding:"0%"}}>{skill.details}</small>
                      </div>
                      <Badge bg="success" pill>
                        # Skill
                      </Badge>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default Skills;