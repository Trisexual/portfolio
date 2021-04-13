import React from "react";
import "./weirdAssBottomBit.css"

export class BottomBit extends React.Component{
    constructor(props){
        super(props);
        this.state = {a : 3};
    }

    render(){
        return (
            <div>
                <div className = "bottomDiv">
                    <h1>copyright pls no take</h1>
                </div>
            </div>
        );
    }

}