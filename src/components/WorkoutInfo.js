import React, {useState} from 'react';
import {getWorkoutByDate} from '../helpers/lists.js';
import StationList from './StationList.js';

export default function WorkoutInfo(props) {
    const workout = getWorkoutByDate(props.date);
    console.log(workout)
    return !workout ? (
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
                <StationList stationList={workout.stationList} />
            </div>)
}