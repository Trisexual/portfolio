import "./index.css";
import {Slideshow} from "./slideshow/slideshow.js";
import monkeyyy from "./monkeyyy.png";
import PERSONA from "./ppppppp.png";
import React from 'react';
import ReactDOM from 'react-dom';
import {Experience} from "./experiences.js";
import {About} from "./about.js";
import {BottomBit} from "./BottomBit.js";

import "react-responsive-carousel/lib/styles/carousel.min.css";


class Big extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      "bb" : 69
    };

    this.openGithub = this.openGithub.bind(this);
  }

  openGithub(){
    window.open("https://github.com/Trisexual");
    return;
  }

  render(){
    return(
      <div style = {{overflow:"hidden"}}>
          <section id = "top" />
          <div className = "containerMonkey">
            <div className = "rightSideMonkey">
              <h1>Thomas Zheng</h1>
            </div>
            <div className = "rightSideMonkey2">
              <h2>get money</h2>
            </div>

            <div className = "bottomSideMonkey">

              <a href = "https://github.com/Trisexual">
                <button className="buttonMonkey">Github</button>
              </a>
              <a href = "mailto:mrthomaszheng@gmail.com">
                <button className="buttonMonkey">Email Me</button>
              </a>

            </div>

            {/*
            <img src = {PERSONA}
            alt="monkee smiling" className = "monkey" />
            8*/}
        </div>
        <div style = {{height:"5vw", width:"1vw"}} />
        
        {/*<hr style = {{"height":"10px","border-width":0,"color":"gray","background-color":"gray"}}></hr>*/}

        
        <About />
        
        <Slideshow />
        
        {/*
        <Experience />
        */}

        <BottomBit />
        
        
        {/*
        <div className = "containerMonkey">
            <div className = "topLeft">
              <h1>Projects</h1>
              
            </div>

          <img src = {monkeyyy}
          alt="monkee smiling" className = "monkey" />
        </div>
        

        <h1>Experience</h1>

        <h1>Projects</h1>
        <h1>About</h1>
        */}

        
        
      </div>
    );
  }
}



ReactDOM.render(<Big />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
