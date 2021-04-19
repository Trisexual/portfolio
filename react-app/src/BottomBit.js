import React from "react";
import "./BottomBit.css"

export class BottomBit extends React.Component{
    constructor(props){
        super(props);
        this.state = {a : 3};

        this.scrollTop = this.scrollTop.bind(this);
    }

    scrollTop(){
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    render(){
        return (
            <div>
                <div className = "bottomDiv">

                    <p>copyright pls no take</p>
            
                    <div className = "moveToRight">
                        <a href = "#top"><button /*onClick = {this.scrollTop}*/ className = "buttonToTop">Back to Top</button></a>
                    </div>

                </div>
            </div>
        );
    }

}