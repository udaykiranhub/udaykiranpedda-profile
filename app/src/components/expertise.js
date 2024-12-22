import {Alert}from "react-bootstrap";
import  {useState} from "react"
import {Model} from "react-bootstrap";
function Expertise(){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <div className="expertise">
    
    

<Alert variant='secondary'>
<strong style={{float:"left"}}>Key Skills:</strong>
<br/>
<span style={{float:"left"}}>✅ Web Page Optimization</span><br/>
<span style={{float:"left"}}>✅ Web Hoisting </span><br/>
<span style={{float:"left"}}>✅ Efficient DApp Development</span><br/>
<span style={{float:"left"}}>✅ Application State Management (Redux)</span><br/>
<span style={{float:"left"}}>✅ SEO Optimization</span><br/>
<span style={{float:"left"}}>✅ Aggregation pipeline</span><br/>

<span style={{float:"left"}}>✅ Smart Contract Auditing</span><br/>
<span style={{float:"left"}}></span><br/>
</Alert>



    
<Alert variant='secondary'>
<p>
<strong style={{float:"left"}}>Achievements:</strong>
<br/>
<span style={{float:"left"}}>✅ Industrial Experience</span><br/>
<span style={{float:"left"}}>✅ Technical Lead in College Projects</span><br/>
<span style={{float:"left"}}>✅ Worked on Real-Time Projects</span><br/>
<span style={{float:"left"}}>✅ Hackathon Participation</span><br/>
<span style={{float:"left"}}></span><br/>

</p>
</Alert>
    </div>)
}

export default Expertise;