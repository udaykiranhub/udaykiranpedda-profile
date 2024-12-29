import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './profile.css';
import { Helmet } from 'react-helmet';
import { Button} from 'react-bootstrap';
import {Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import Contact from './contact';
import Description from './description';
import Expertise from './expertise';
const Profile = () => {
  return (
    <div className="profile">
          {/* SEO Tags */}
      <Helmet>
        <title>Uday Kiran Pedda | MERN Stack & Ethereum Developer</title>
        <meta
          name="description"
          content="Uday Kiran Pedda is a skilled MERN Stack and Ethereum Blockchain developer, passionate about building scalable and secure applications."
        />
        <meta
          name="keywords"
          content="Uday Kiran Pedda, MERN Stack Developer, Ethereum Developer, Blockchain Developer, Web3 Developer"
        />
        <meta name="author" content="Uday Kiran Pedda" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Uday Kiran Pedda | MERN Stack & Ethereum Developer" />
        <meta
          property="og:description"
          content="Skilled MERN Stack and Ethereum Blockchain developer passionate about building scalable and secure applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website.com/profile" />
        <meta property="og:image" content="https://your-website.com/profile-image.jpg" />
        <link rel="canonical" href="https://your-website.com/profile" />
      </Helmet>
<Container  >
    <Card className='profile-container'  >
   <Card.Title className="text-center" >
      <h1 className="name">UDAY KIRAN PEDDA</h1>
   </Card.Title>
  <Card.Body className='profile-body'>
   <Card.Text style={{float:'left'}}>   

<Description/>

            
</Card.Text>

</Card.Body>

<Card.Footer>

<Alert variant='info' >
  
</Alert>

          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
};

export default Profile;
