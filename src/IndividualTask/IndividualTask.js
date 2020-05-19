import React, { Component } from "react";
import "./IndividualTask.css"

const IndividualTask = ({name, toggle}) => {
    // var className = condition ? 'done' : 'not-done';
    return (
        <div className="check" onClick={toggle} >
            <input type="checkbox" /> {name}
        </div>
    )
}

export default IndividualTask