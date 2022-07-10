import React from 'react';
import DatePicker from './DatePicker';
import WorkoutInfo from './WorkoutInfo';
// import {getWorkoutByDate} from '../helpers/lists.js';

export default function WorkoutByDateSetup(props) {

    return (
        <div id="workoutByDateSetup">
            <DatePicker useWorkout={props.useWorkout}/>
            <WorkoutInfo useWorkout={props.useWorkout}/>
        </div>  
    )
}