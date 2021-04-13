import React from "react";
import "./about.css"


export class About extends React.Component{
    constructor(props){
        super(props);
        this.props = {a : 3};
    }

    render(){

        let circle = [];
        for(let i = 4; i < 128;i *= 2){
            circle.push(<div className = "backgroundBox" style = {{transform: "rotate(69deg)", animation: `spin ${i}s linear infinite`}}/>);
        }

        return (
            <div>
                <div style={{display:"flex", marginTop:"2vw", textAlign:"center", justifyContent:"center"}}>
                    <h1 style = {{fontSize:"6vw", width:"100%", textAlign:"center"}}>About</h1>
                    <div style={{height:"14vw"}} />
                    
                </div>

                <div className = "entire">

                    <div className = "container">
                        
                        <div className = "center">
                            
                            <h2>Powerful man from Canada land</h2>
                            <h2>10th grade student at Fleetwood Park Secondary</h2>
                            <h2>Based programmer</h2>
                        </div>

                        <div className = "backgroundBox" style = {{transform: "rotate(39deg)", animation: `spin2 ${45}s linear infinite`}}/>
                        <div className = "backgroundBox2" style = {{transform: "rotate(69deg)", animation: `spin ${25}s linear infinite`}}/>
                        {/*<div className = "backgroundBox2" style = {{transform: "rotate(99deg)"}}/>*/}
                        
                    </div>

                    <div style={{width:"10%"}} />

                    <div className = "container">
                        
                        <div className = "center">
                            <h2>lord of monke</h2>
                            <h2>Setter in volleyball</h2>
                            <h2>In love with creating new projects</h2>
                            <h2>As well as anime girls</h2>
                        </div>

                        <div className = "backgroundBox" style = {{transform: "rotate(10deg)", animation: `spin ${55}s linear infinite`}}/>
                        <div className = "backgroundBox2" style = {{transform: "rotate(-37deg)", animation: `spin2 ${65}s linear infinite`}}/>
                        {/*<div className = "backgroundBox2" style = {{transform: "rotate(75deg)"}}/>*/}
                    
                    </div>

                </div>
                <div style = {{height:"10vw", width:"1vw"}} />
                
            </div>
        );
    }

}