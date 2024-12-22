import Carousel from 'react-bootstrap/Carousel';
import ETH from "../images/ethereumBlock.jpeg";
import MERN from "../images/Mernstack.png";
import WEB from "../images/web2andweb3.jpeg";
import './view.css'
import Skills from './skills';
import { Button,Link } from 'react-bootstrap';
function View() {
    return (
        <div className="view">
      
            <Carousel >
                {/* First Slide */}
                <Carousel.Item >
                <img src={ETH} alt="Ethereum blockchain" style={{ width: "50%"}} />

      
                </Carousel.Item>

                {/* Second Slide */}
                <Carousel.Item>
                    <img  src={MERN} alt="MERN Stack"   style={{ width: "50%" }}/>
               
                </Carousel.Item>

                {/* Third Slide */}
                <Carousel.Item>
                    <img  src={WEB} alt="Web2 and Web3"  style={{ width: "50%" }} />
              
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default View;
