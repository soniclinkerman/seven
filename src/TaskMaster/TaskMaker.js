import React from "react";
import "./TaskMaker.css";


const TaskMaker = ({task,addButton}) => {
    return (
        <div>
            <input className="task-input"type="text" placeholder="Enter Task Here" onChange={task}  />
            <input type="submit" onClick={addButton} value="Add"/>
        </div>
    )
}

export default TaskMaker