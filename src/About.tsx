import React from "react";
import aboutusImg from "./images/about-us-img.jpg";
import { Parallax } from 'react-scroll-parallax';

class Aboutus extends React.Component {

    render() {
        return ( 
            <>
            
            <div className="aboutus-bg">
                <Parallax speed={-10}  >
                <div className="lft">
                    <h2>About us</h2>
                    <p>Get Cool Themes constitutes a competent team of web designers having expertise in all mode of designing. 
                        We have experience in creating web templates, responsive sites for business, personal and community etc., 
                        UX for ERP s. We offer unique templates for the beginners to just download and edit content and launch fresh websites.
                        Our custom design team are so innovative that they are committed to bring your dream website live !
                        We are experts in creating content management websites using word press. We can tweak and add flavor to the
                         CMS framework so that it will best fit your business requirements and will have cool content administration features.<br/>
                        We also do professional services for corporates including Company Logos, Tech brochures, Android and IOS templates
                    </p>
                </div>
                </Parallax>
                <Parallax speed={5} rotateZ={[0,4]} >
                    <div className="rgt">
                        <img src={aboutusImg} className="aboutus-img"/>
                    </div>
                </Parallax>
            </div>
            
            </>
        )
    }

}

export default Aboutus;