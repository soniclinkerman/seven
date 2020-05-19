import React, { Component } from "react";

class Days extends Component {
    constructor(props){
        super();
        this.state= {
            hour: null,
            day: ""
        }
    }

    componentDidMount() {
        this.getHour()
        this.getWeekDay()
      }

    getHour(){
        let greet = new Date();
        greet = greet.getHours();
        this.setState({
            hour: greet
        })
    }

    getWeekDay(){
        let weekday = new Date();
        weekday = weekday.getDay();
        this.setState({
            day: weekday
        })
    }

    render(){
        const {day, hour} = this.state;
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let daysOfWeek;
        let newgreeting;

        if (hour >= 12 && hour < 18){
            newgreeting = "Afternoon"
        }
        else if(hour < 12){
            newgreeting = "Morning"
        }
        else if (hour >= 18){
            newgreeting = "Evening"
        }

        switch(day) {
            case 0:
                daysOfWeek = weekdays[0];
                break;
            case 1:
                daysOfWeek = weekdays[1];
                break;
             case 2:
                daysOfWeek = weekdays[2];
                break;
             case 3:
                daysOfWeek = weekdays[3];
                break;
             case 4:
                daysOfWeek = weekdays[4];
                break;
             case 5:
                daysOfWeek = weekdays[5];
                break;
             case 6:
                daysOfWeek = weekdays[6];
                break;
        }
        return(
            <div>
                <h1>Good {newgreeting} Zay</h1>
                <h3>Today is {daysOfWeek}</h3>
            </div>
        )
    }
}

export default Days