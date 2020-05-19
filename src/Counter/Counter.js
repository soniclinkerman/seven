import React, { Component } from "react";
import "./Counter.css"

//Get Local Storage Added to save number
class Counter extends Component{
    constructor(props){
        super(props);
        this.state= {
            number: 0
        }
    }

   
    componentDidMount(){
        if(!localStorage.getItem("number")){
            setTimeout(() => {
                this.counterUp()
            }, 1000);
    
           

        } else {
            console.log("Using local storage")
            setTimeout(() => {
                this.counterUp()
            }, 2000);
        }

       
    }

    componentDidUpdate(nextProps, nextState){
        localStorage.setItem("number", JSON.stringify(nextState.number));
    }

    counterUp(){
        let d = new Date();
        d.getHours();
        if(d.getHours() === 0){
            this.setState({
                number: this.state.number+ 1
            })
        }
    }

    render(){
        return(
            <div>
                <p className="day-name">Day</p>
                <p className="day-number">{this.state.number}</p>
            </div>
        )
    }
}

export default Counter