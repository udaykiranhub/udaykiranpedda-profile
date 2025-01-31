import React from 'react';
import { Container, Alert, Card } from 'react-bootstrap';
import { Code2, Boxes, Wallet, Gem, BrainCircuit, Target, Award, AlertTriangle } from 'lucide-react';


function Description({ showSalaryNote = true, className = '' }: DescriptionProps) {
  return (
    <div 
      className={`py-5 ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh'
      }}
    >
      <Container>
        <Card className="border-0 shadow-lg">
          <Card.Body className="p-4 p-md-5">
            <div className="mb-4 d-flex align-items-center gap-3">
              <Code2 className="text-primary" size={28} />
              <h4 className="mb-0 text-primary">Professional Summary</h4>
            </div>

            <Alert variant="light" className="border mb-4">
              <div className="d-flex gap-3">
                <BrainCircuit className="flex-shrink-0 text-primary" size={24} />
                <p className="mb-0">
                  To leverage my expertise in <strong className="text-primary">MERN Stack Development</strong> and
                  <strong className="text-primary"> Ethereum Blockchain (DApps)</strong> to build scalable, secure, and
                  innovative applications. My aim is to contribute to impactful projects,
                  continuously grow my technical skills, and stay updated with emerging technologies.
                </p>
              </div>
            </Alert>

            <div className="mb-4">
              <div className="d-flex gap-3 align-items-start">
                <Boxes className="flex-shrink-0 text-success" size={24} />
                <p className="mb-0">
                  I am a <strong className="text-success">MERN Stack and Ethereum Blockchain Developer</strong> passionate about
                  creating efficient and secure web2 and decentralized(web3) applications.
                </p>
              </div>
            </div>

            <Card className="bg-gradient border-0 mb-4" 
              style={{ background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)' }}>
              <Card.Body className="text-white">
                <div className="d-flex gap-3 align-items-center">
                  <Target className="flex-shrink-0" size={24} />
                  <p className="mb-0 fw-bold">
                    "I am passionate about developing <span className="text-light">Web2 (MERN)</span> and
                    <span className="text-light"> Web3</span> solutions, including 
                    <span className="d-inline-flex align-items-center gap-1">
                      <Wallet size={16} /> DeFi
                    </span> and
                    <span className="d-inline-flex align-items-center gap-1">
                      <Gem size={16} /> NFT
                    </span> projects."
                  </p>
                </div>
              </Card.Body>
            </Card>

            {showSalaryNote && (
              <Alert variant="warning" className="mb-0">
                <div className="d-flex gap-3 align-items-start">
                  <AlertTriangle className="flex-shrink-0" size={24} />
                  <div>
                    <div className="d-flex gap-2 align-items-center mb-2">
                      <Award size={20} />
                      <strong>Competitive Compensation Note</strong>
                    </div>
                    <p className="mb-0">
                      I am open to competitive compensation arrangements while maintaining my commitment
                      to delivering exceptional value and high-quality results as a dedicated team member.
                    </p>
                  </div>
                </div>
              </Alert>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Description;