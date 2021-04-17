import React from "react";
//import { Carousel } from "react-responsive-carousel";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./slideshow.css";
import monkey from "../monkeyyy.png"

export class Slideshow extends React.Component{
  constructor(props){
      super(props);
      this.state = {index : 0, direction:null};

      //this.changeIndex = this.changeIndex.bind(this); 
      this.handleSelect = this.handleSelect.bind(this); 
      this.logg = this.logg.bind(this);
      this.toggleCarousel = this.toggleCarousel.bind(this);
      this.moveTo = this.moveTo.bind(this);

      this.items = 3;
      this.child = React.createRef();
  }

  handleSelect(selectedIndex, e) {
    this.setState({index:selectedIndex});
    //console.log(e);
  };


  toggleCarousel(direction) {

    if (direction === 'prev') {
      this.child.current.prev();
    }
    else if (direction === 'next') {
      this.child.current.next();
    }
    
  }

  moveTo(ind){
    this.setState({index : ind});
  }

  logg(){
    this.setState({asd:"l"})
  }

  render(){
      return (

      <div>
        
        <div style={{display:"flex", marginTop:"2vw", textAlign:"center", justifyContent:"center"}}>
          <h1 style = {{fontSize : "min(12vw, 12vh)"}}>Projects</h1>
          <div style={{height:"10vw"}} />         
        </div>

        <div className = "slideshowContainer">
        <button className = "arrowButton" onClick = {() => this.toggleCarousel("prev")}>
          <div className = "arrow left" />
        </button>

        <div>  

          <Carousel
          controls = {false}
          ref = {this.child}
          indicators = {false} 
          interval = {null} 
          activeIndex = {this.state.index}
          onSelect = {this.handleSelect} 
          onSlid = {this.logg} 
          direction = {"next"}>
            
            <Carousel.Item>

              <div className = "eachSlide">
                <div className = "image" style = {{backgroundImage:"url(https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg?w=636&h=424)"}}>
                </div>
                
                <div className = "content">
                  <div className = "top">
                    <h2 className = "text">Title</h2>
                  </div>
                  <div className = "middle">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                  <div className = "bottom">
                    <button className = "buttonContent"><h2>Button</h2></button>
                  </div>
                </div>
              </div>

            </Carousel.Item>


            <Carousel.Item>
              <div className = "eachSlide">
                <div className = "image" style = {{backgroundImage:"url(https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg?w=636&h=424)"}}>
                </div>
                
                <div className = "content">
                  <div className = "top">
                    <h2 className = "text">Title</h2>
                  </div>
                  <div className = "middle">
                    <p>content</p>
                  </div>
                  <div className = "bottom">
                    <button className = "buttonContent"><h2>Button</h2></button>
                  </div>
                </div>
              </div>
            </Carousel.Item>


            <Carousel.Item>
              <div className = "eachSlide">
                <div className = "image" style = {{backgroundImage:"url(https://i.natgeofe.com/n/3861de2a-04e6-45fd-aec8-02e7809f9d4e/02-cat-training-NationalGeographic_1484324.jpg?w=636&h=424)"}}>
                </div>
                
                <div className = "content">
                  <div className = "top">
                    <h2 className = "text">Title</h2>
                  </div>
                  <div className = "middle">
                    <p>content</p>
                  </div>
                  <div className = "bottom">
                    <button className = "buttonContent"><h2>Button</h2></button>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <div className = "bottomSideLmao">

            <button className = {(this.state.index === 0) ? "button activeButton" : "button"} onClick = {() => this.moveTo(0)}/>
            <button className = {(this.state.index === 1) ? "button activeButton" : "button"} onClick = {() => this.moveTo(1)}/>
            <button className = {(this.state.index === 2) ? "button activeButton" : "button"} onClick = {() => this.moveTo(2)}/>

          </div> 
            
      </div>
      <button className = "arrowButton" onClick = {() => this.toggleCarousel("next")}>
          <div className = "arrow right" />
        </button>
      </div>
      <div style = {{height:"7vw", width:"1vw"}} />
      </div>
        


      );
  }

}
