import React from "react";
import { Container, Row, Col, Card, Stack, Badge } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./home.css";
import View from "./view";
import Skills from "./skills";

import Profile from "./profile";
import Contact from "./contact";
import Meet from './meet';
import Expertise from "./expertise";
import Projects from "./projects";
import Education from "./education";
import Head from "./head";
function Home() {
  return (
    <>
<Container className="container">
 <BrowserRouter>


{/* Row 1 */}
<Row>
<Head/>
<Profile/> 
<Meet/>

</Row>

{/* Row 1.2 */}
<Row>
    
        <Col md={6} sm={6} xs={6}>
          <Projects />
        </Col>

     
        <Col md={6} sm={6} xs={6}>
          <Education />
        </Col>
      </Row>

{/* Row 2 */}
<Row>
<Col >
<Routes>
<Route path="/skills" element={<Skills/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/expertise" element={<Expertise/>}/>
<Route path="/" />
</Routes>
</Col>


</Row>
 {/* Row 3 */}
 <Row>
<Col>
<View/>
 </Col>
</Row>


</BrowserRouter>
</Container>
    </>
  );
}

export default Home;
