import React, { useState } from 'react';
import CustomWorkoutSetup from './CustomWorkoutSetup.js';
import WorkoutByDateSetup from './WorkoutByDateSetup.js';
import SetupOptions from './SetupOptions';
import './SetupScreen.css';
import Beep from '../helpers/Beep.js';

export default function SetupScreen(props) {

    return (
        <div id="setupScreen">
            <SetupOptions view={props.setupView} onViewChange={props.onViewChange}/>
            
            {props.setupView==='custom' ? 
            (<CustomWorkoutSetup useWorkout={props.useWorkout}/>) 
            : 
            (<WorkoutByDateSetup useWorkout={props.useWorkout}/>)
            }
            <button id="startWorkout" onClick={()=>{
                props.setWorkoutStatus(true);
                props.snd.src = Beep;
                props.snd.play();
                }}>Start Workout</button>
        </div>        
    )
}

