import React, { Component } from "react";
import "./Task-List.css"
import TaskMaker from "../TaskMaster/TaskMaker";
import IndividualTask from "../IndividualTask/IndividualTask";
import { v4 as uuidv4 } from 'uuid';
class TaskList extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [],
            newTaskValue: "",
        };
    }
    
    //Grabs Value of TaskMaker
    handleChange = (e) => {
        let newTask= e.target.value
        this.setState({newTaskValue: newTask})
    }

    //Currently Console Logs value of TaskMaker
    onSubmit = () => {
        let newTask = this.state.newTaskValue;
        //Simplified Version
        //const taskList = [...this.state.tasks, {value: newTask, completed: false}];
        const taskList = [...this.state.tasks];
        taskList.push({id: uuidv4(), value: newTask, completed: false });
        this.setState({tasks: taskList})
      };

      onToggle = (taskId) => {
          const tasks = this.state.tasks.map((task) => {
              if(task.id === taskId){
                  task.completed = !task.completed 
                  console.log(task)
                  return task
              } 
          })
          this.setState({tasks})
      }
   
      
    render(){
        const toggling = this.state.completed ? "done" : "not-done"
        console.log(this.state.tasks)
       
        return(
            <div>
                 <TaskMaker task={this.handleChange} addButton={this.onSubmit}  />

                <div className={`task-list`}>
                    {this.state.tasks.map(task => {
                        return(
                            
                            <IndividualTask  
                            key={task.id}
                            name={task.value}
                            completed={task.completed}
                            toggle= {() => this.onToggle(task.id)}
                        />

                        )

                })}
                    
                </div>
                </div>
        )
      

    }
    

}


export default TaskList