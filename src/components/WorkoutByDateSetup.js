import React, {useEffect} from 'react';
import DatePicker from './DatePicker';
import WorkoutInfo from './WorkoutInfo';
// import {getWorkoutByDate} from '../helpers/lists.js';

export default function WorkoutByDateSetup(props) {

    return (
        <div id="workoutByDateSetup">
            <DatePicker useWorkouts={props.useWorkouts}/>
            <WorkoutInfo useWorkouts={props.useWorkouts} view='byDate'/>
        </div>  
    )
}