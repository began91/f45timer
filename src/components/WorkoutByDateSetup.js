import React, {useState} from 'react';
import DatePicker from './DatePicker';
import WorkoutInfo from './WorkoutInfo';
import {getWorkoutByDate} from '../helpers/lists.js';

export default function WorkoutByDateSetup(props) {

    const useDate = useState(new Date());
    const [date,setDate] = useDate;
    // const [workout,setWorkout] = useState(getWorkoutByDate(useDate[0]))

    return (
        <div id="workoutByDateSetup">
            Workout by date setup
            <DatePicker useDate={useDate}/>
            <WorkoutInfo date={date}/>
        </div>  
    )
}