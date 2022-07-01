import React, {useState} from 'react';
import DatePicker from './DatePicker';
import WorkoutInfo from './WorkoutInfo';
import {getWorkoutByDate} from '../helpers/lists.js';

export default function WorkoutByDateSetup(props) {

    return (
        <div id="workoutByDateSetup">
            Workout by date setup
            <DatePicker useWorkout={props.useWorkout}/>
            <WorkoutInfo useWorkout={props.useWorkout}/>
        </div>  
    )
}