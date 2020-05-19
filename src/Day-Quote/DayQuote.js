import React, { Component } from "react"
import "./DayQuote.css"

class DayQuotes extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: " "

        }
        this.changeInput = this.changeInput.bind(this)
    }
    changeInput(event){
        this.setState({value: event.target.value})
    }
    render(){
        return(
            <div>
                <p><i>{this.state.value}</i></p>
                
                <div className="quote-location">
                    <input className="quote-input"type="text" name="quote" placeholder="Enter Quote Here" onChange={this.changeInput}/>
                </div>
            </div>
        )
    }
}

export default DayQuotes