import React from "react";
import { useEffect, useState } from 'react';
import aboutusImg from "./images/about-us-img.jpg";
import uayImg from "./images/uay-img.jpg";
import signstamperImg from "./images/signstamper-img.jpg";
import rvsImg from "./images/rvsaircon-img.jpg";
import saamosaImg from "./images/saamosa-img.jpg";
import crrImg from "./images/crr-img.jpg";
import ersImg from "./images/ers-img.jpg";
import tymeyImg from "./images/tymey-img.jpg";
import emcImg from "./images/emcservices-img.jpg";
import vasImg from "./images/vasevi-img.jpg";
import { Parallax } from 'react-scroll-parallax';
interface IPost {
    rotateX : number ;
    rotateY : number ;
    rotateZ  : number ;
}   

class Portfolio extends React.Component<any,any> {

    constructor(props:any) {
        super(props)
        this.state= {
            coords: {
                rotateX:0,
                rotateY:0,
                rotateZ:0
            }
        }
    }

    //const [value, setValue] = useState(0);

    // const [employee, setEmployee] = 
    // React.useState<{name: string; salary: number}>({
    //     name: '',
    //     salary: 0,
    //   });    
    //   useEffect(() => {
    //     setEmployee({name: 'James', salary: 100});
    //   }, []);   
    //    /* constructor(){            
    //     }
    // */

    // myStyle= {
    //     color: "white",
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Sans-Serif"
    // };

    animateit = (e:any) => {
        //const span = this.querySelector('span');
        console.log(e);        
        console.log(e.nativeEvent.offsetX);
        console.log(e.nativeEvent.offsetY);
        //return e;
        let offsetX = e.nativeEvent.offsetX; 
        let offsetY = e.nativeEvent.offsetY;         
        let offsetWidth = e.nativeEvent.offsetY;         
        let offsetHeight = e.nativeEvent.offsetY;         
        console.log(offsetWidth,'offWidth');
        console.log(offsetHeight,'offHeight');        
         let move = 100;
         let xMove = (offsetX / offsetWidth * (move * 2) - move)/10;
         let yMove = -(offsetY / offsetHeight * (move * 2) - move)/10;
        //this.myStyle
         console.log(xMove);
         console.log(xMove);      
         xMove = xMove>30 ? 30 :  xMove;
         xMove = xMove<-8 ? xMove-10 :  xMove;
         this.setState({coords:{rotateX:yMove,rotateY:xMove}});
         e.currentTarget.style.transform = `rotateX(${this.state.coords.rotateX}deg) rotateY(${this.state.coords.rotateY}deg)`;
         //e.style.transform = `translate(${xMove}px, ${yMove}px)`;
        // if (e.type === 'mouseleave') e.style.transform = '';
    };

    removeAnimateit = (e:any) => {
        //const span = this.querySelector('span');
        //console.log(e);        
        //console.log(e.nativeEvent.offsetX);
        //console.log(e.nativeEvent.offsetY);
        //return e;
        /*let offsetX = e.nativeEvent.offsetX; 
        let offsetY = e.nativeEvent.offsetY;         
        let offsetWidth = e.nativeEvent.offsetY;         
        let offsetHeight = e.nativeEvent.offsetY;         
        console.log(offsetWidth,'offWidth');
        console.log(offsetHeight,'offHeight');        
         let move = 100;
         let xMove = (offsetX / offsetWidth * (move * 2) - move)/10;
         let yMove = -(offsetY / offsetHeight * (move * 2) - move)/10;*/
        //this.myStyle         
         this.setState({coords:{rotateX:0,rotateY:0}});
         e.currentTarget.style.transform = `rotateX(${this.state.coords.rotateX}deg) rotateY(${this.state.coords.rotateY}deg)`;
         //e.style.transform = `translate(${xMove}px, ${yMove}px)`;
        // if (e.type === 'mouseleave') e.style.transform = '';
    };    
    

    render() {
        return ( 
            <>      
             <div className="intro-bg">
                <h1 className="title">Trend setting designs with professional look and feel!</h1>
            </div>      
            <div className="portfolio-bg">
                <div className="portfolio-title">
                    <h2>Portfolio</h2>
                </div>           
                <div className="portfolio-view">
                       <div className="portfolio-list">               
                       {/* onMouseOver={this.animateit} onMouseLeave={this.removeAnimateit}           */}
                            <div className="ls portfolio-description" >    
                                <Parallax speed={0}>
                                <a href="https://uay.iitm.ac.in/" target="_blank">
                                    <img src={uayImg} />                                   
                                    <h4> Uchchatar Avishkar Yojana</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                        to breathe tech into the built world with a modular and scalable brand. </p> */}
                                    
                                        <p className="sub-txt-link">Website</p>
                                    </a>
                                </Parallax>                            
                            </div>                            
                            <div className="ls portfolio-description" > 
                                <Parallax speed={10}>        
                                <a href="https://www.signstamper.com/" target="_blank">                      
                                    <img src={signstamperImg} />  
                                    <h4> Signstamper</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                    to breathe tech into the built world with a modular and scalable brand. </p> */}
                                    <p className="sub-txt-link">Website</p>        
                                    </a>                       
                                </Parallax> 
                            </div>
                            <div className="ls portfolio-description" >       
                                <Parallax speed={15}>     
                                <a href="https://rvsaircon.com/" target="_blank">                   
                                    <img src={rvsImg} />                                   
                                    <h4> RVS Aircon Pvt Ltd</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                        to breathe tech into the built world with a modular and scalable brand. </p> */}
                                    
                                        <p className="sub-txt-link">Website</p>
                                    </a>
                                </Parallax>    
                            </div>   
                        </div>                          
                        <div className="portfolio-list">   
                            <div className="ls portfolio-description" >      
                                 <Parallax speed={0}>                                
                                 <a href="https://lf-ramesh.github.io/saamosa.github.io/source/index.html" target="_blank">
                                     <img src={saamosaImg} />  
                                     <h4> Saamosa Template</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                    to breathe tech into the built world with a modular and scalable brand. </p> */}
                                    <p className="sub-txt-link">Website</p>   
                                    </a>
                                 </Parallax>                             
                            </div>                      
                            <div className="ls portfolio-description" >       
                                <Parallax speed={10}>        
                                <a href="https://crr.iitm.ac.in/" target="_blank">                
                                    <img src={crrImg} />                                   
                                    <h4> Centre for Railway Research, IIT Madras</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                        to breathe tech into the built world with a modular and scalable brand. </p> */}
                                  
                                        <p className="sub-txt-link">Website</p>
                                    </a>
                                </Parallax>    
                            </div>                            
                            <div className="ls portfolio-description" >      
                                 <Parallax speed={15}>        
                                 <a href="https://lf-ramesh.github.io/saamosa.github.io/source/index.html" target="_blank">                        
                                     <img src={ersImg} />  
                                     <h4> Equipment Reservation System</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                    to breathe tech into the built world with a modular and scalable brand. </p> */}
                                    <p className="sub-txt-link">Website</p>   
                                    </a>
                                 </Parallax>                             
                            </div>
                        </div> 

                        <div className="portfolio-list">   
                            <div className="ls portfolio-description" >      
                                 <Parallax speed={0}>           
                                 <a href="https://lf-ramesh.github.io/emc.github.io/" target="_blank">                     
                                     <img src={emcImg} />  
                                     <h4> EMC Services</h4>
                                    {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                    to breathe tech into the built world with a modular and scalable brand. </p> */}
                                    <p className="sub-txt-link">Website</p>   
                                    </a>
                                 </Parallax>                             
                            </div>                      
                            <div className="ls portfolio-description" >       
                                <Parallax speed={10}>    
                                    <a href="https://tymey.com/webroot/home.php" target="_blank">                    
                                        <img src={tymeyImg} />                                   
                                        <h4>Tymey</h4>
                                        {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                            to breathe tech into the built world with a modular and scalable brand. </p> */}                                    
                                        <p className="sub-txt-link">Website</p>
                                    </a>
                                </Parallax>    
                            </div>    
                            <div className="ls portfolio-description">  
                            <Parallax speed={10}>    
                                    <a href="http://34.251.82.89/projects/vasevi/" target="_blank">                    
                                        <img src={vasImg} />                                   
                                        <h4>Vasevi</h4>
                                        {/* <p className="sub-txt">Supporting Backpack in their ambitious plan 
                                            to breathe tech into the built world with a modular and scalable brand. </p> */}                                    
                                        <p className="sub-txt-link">Website</p>
                                    </a>
                                </Parallax>                            
                            </div>  
                        </div> 

                </div>


                
                
                
            </div>
            
            </>
        )
    }

}

export default Portfolio;

// function rotateX(arg0: string): import("csstype").Property.Transform | undefined {
//     throw new Error("Function not implemented.");
// }
