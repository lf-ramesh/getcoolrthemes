import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';
import Intro from './Intro';
import Header from './Header';
import Aboutus from './About';
import Portfolio from './Portfolio';
import { AnimatedCursor } from 'react-animated-cursor-ts';


class App extends React.Component {
  render(){
    return (
      <div className="App">
         <AnimatedCursor innerSize={15}
      outerSize={8}
      color='21, 154, 247'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}/> 
        <Header/>
        {/* <Intro/>         */}
        {/* <Aboutus/> */}
        <Portfolio/>
        <div className='footer-bg'>
        <div className="copyrights-txt">
          <span>Copyright © 2022 Logicfield Techology Solutions | All Rights Reserved.</span>
          <span className='pull-right'> Email: <a href="mailto:csm@logicfield.com">csm@logicfield.com</a></span>
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
