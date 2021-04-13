import React from "react";
import "./experiences.css";
//import monkey from "./pythonc#combined.png"
import combinedLogos from "./combinedLogos.png";
import unityLogo from "./unityLogo.png"
import cccImage from "./cccImage.png"
import paperRoute from "./paperRouteFuck.png"


export class Experience extends React.Component{
    constructor(props){
        super(props);
        this.state = {a : 3};
    }

    render(){
        return (
            <div>
                <h1 style = {{fontSize:"6vw", width:"100%", textAlign:"center"}}>Experience</h1>

                <div className = "containerOfBoxes">
                    
                    <div className = "boxOfExperience">
                        <div className = "titleBox">
                            <h2 className = "text">Self Taught Programming</h2>
                        </div>
                        <div className = "topImage">
                            <img src={combinedLogos} alt="lmao" style = {{maxHeight:"100%"}} />
                            {/*<h2 className = "text"> probably like a c# and python logo combined</h2>*/}
                        </div>
                        <div className = "bottomText">
                            <div>
                                <h2 className = "text">Knowledgeable of Python and C#</h2>
                                <h2 className = "text">Full stack Programmer (not really)</h2>
                            </div>
                        </div>
                    </div>

                    <div className = "boxOfExperience">
                        <div className = "titleBox">
                            <h2 className = "text">Unity Engine</h2>
                        </div>
                        <div className = "topImage">
                            <img src={unityLogo} alt="lmao" style = {{maxHeight:"80%", marginLeft:"-7%"}} />
                        </div>
                        <div className = "bottomText">
                            <div>
                                <h2 className = "text">Extensive knowledge of the Unity engine</h2>
                                <h2 className = "text">Can make complex simulations</h2>
                            </div>
                        </div>
                    </div>

                    <div className = "boxOfExperience">
                        <div className = "titleBox">
                            <h2 className = "text">Competitor in programming and math</h2>
                        </div>
                        <div className = "topImage">
                            <img src={cccImage} alt="lmao" style = {{maxHeight:"100%", width : "80%"}} />
                            
                        </div>
                        <div className = "bottomText">
                            <div>
                                <h2 className = "text">30 points on the 2021 ccc senior</h2>
                                <h2 className = "text">30 points on regional math challengers</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className = "boxOfExperience">
                        <div className = "titleBox">
                            <h2 className = "text">Fucking paper route</h2>
                        </div>
                        <div className = "topImage">
                            <img src={paperRoute} alt="lmao" style = {{maxHeight:"100%", width : "90%"}} />
                        </div>
                        <div className = "bottomText">
                            <div>
                                <h2 className = "text">dedication towards working my job</h2>
                                <h2 className = "text">Flexibility towards requests</h2>
                            </div>
                        </div>
                    </div>

                </div>

                
                

            </div>
        );
    }

}