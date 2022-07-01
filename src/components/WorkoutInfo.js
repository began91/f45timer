import React from 'react';
// import {getWorkoutByDate} from '../helpers/lists.js';
// import StationList from './StationList.js';

export default function WorkoutInfo(props) {
    const [workout,setWorkout] = props.useWorkout;

    const handleChange = (e) => {
        let i = e.target.id[7];
        let newStationList = workout.stationList;
        newStationList[i] = e.target.value;
        setWorkout({...workout, stationList: newStationList})
    }

    return !workout.stationList ? (
                <div className="noWorkoutInfo">No Workout For the Selected Date</div>
            ): 
            (<div id='workoutInfo'>
                <div id="workoutStyle">
                    Style: {workout.style}
                </div>
                <div id="workoutStations">
                    Stations: {workout.stations}
                </div>
                <div id="workoutPods">
                    Pods: {workout.pods}
                </div>
                <div id="workoutLaps">
                    Laps: {workout.laps}
                </div>
                <div id="workoutSets">
                    Sets: {workout.sets}
                </div>
                <div id="workoutTiming">
                    Timing: {workout.timing}
                </div>
                <div id="workoutMisc">
                    Misc: {workout.misc}
                </div>
                <form id='stationList'>
                    {workout.stationList.filter((_,i)=>i<workout.stations).map((station,i)=>(
                        <div key={i}>
                            <label htmlFor={'station'+i} className='station-label'>{(i+1)+'. '}</label>
                            <input type='text' id={'station'+i} value={station} onChange={handleChange} className='station-input'/>
                        </div>
                    ))}
                </form>
            </div>)
}