import React, { Component } from "react";
import "./Counter.css"

class test extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

onSearchChange(event){
    console.log(event);
}

render(){
    return(

    <div className='tc'>
         <h1> RobotFriends</h1>
         <SearchBox SearchChange= {this.onSearchChange}/>
         <CardList robots={this.state.robots}/>
    </div>

    );

}
// const SearchBox = ({Searchfield,SearchChange})=>{

// return(

//     <div className='pa2'>

//       <input
//       className='pa3 ab b--green bg-lightest-blue ' 
//       type = 'search' 
//       placeholder='Search Robots'
//       onChange={SearchChange}
//       />


//     </div>
//     );



// }
}