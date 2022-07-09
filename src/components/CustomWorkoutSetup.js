import React from 'react';
import { workoutStyleList } from '../helpers/lists';
import Workout from './Workout';

export default function CustomWorkoutSetup(props) {
    return (
        <div id="customWorkoutSetup">
            Custom Workout Setup
            {workoutStyleList.map(workoutStyle => {
                return (<Workout workout={workoutStyle} key={workoutStyle}/>)
            })}
        </div>        
    )
}