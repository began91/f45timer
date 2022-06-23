import React from 'react';
import CustomWorkoutSetup from './CustomWorkoutSetup.js';
import WorkoutByDateSetup from './WorkoutByDateSetup.js';
import SetupOptions from './SetupOptions';

export default function SetupScreen(props) {
    return (
        <div id="setupScreen">
            <SetupOptions view={props.setupView} onViewChange={props.onViewChange}/>
            
            {props.setupView==='custom' ? 
            (<CustomWorkoutSetup />) 
            : 
            (<WorkoutByDateSetup />)
            }
            <button id="startWorkout" onClick={()=>props.setWorkoutStatus(true)}>Start Workout</button>
        </div>        
    )
}

