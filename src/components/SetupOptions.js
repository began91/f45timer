import React from 'react';
import './SetupOptions.css';

export default function SetupOptions(props) {
    
    const handleViewChange = (e) => {
        props.onViewChange(e.target.value)
    }

    return (
        <div id="setupOptions">
            <button className={props.view==='byDate' ? 'selected' : ''} value="byDate" onClick={handleViewChange}>
                Select Date
            </button>
            <button className={props.view==='custom' ? 'selected' : ''} value="custom" onClick={handleViewChange}>
                Custom Workout
            </button>
            {props.view}
        </div>
    )
}