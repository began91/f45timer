import React from 'react';
import { workoutStyleList } from '../helpers/lists';
import Workout from './Workout';

export default function CustomWorkoutSetup(props) {
    return (
        <div id="customWorkoutSetup">
            Custom Workout Setup
            <label htmlFor='workoutStyle'>Workout Style:</label>
            <select name='workoutStyle' id='workoutStyle'>
                {workoutStyleList.map(workoutStyle => {
                    return (<option value={workoutStyle} key={workoutStyle}>{workoutStyle}</option>)
                })}    
            </select>    
        </div>        
    )
}
