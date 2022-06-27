import React from 'react';
import {getWorkoutByDate} from '../helpers/lists.js';

export default function StationList(props) {
    const stationList = props.stationList;

    return (
        <div id='stationList'>
            Workout Stations:
            {stationList.map((station,i)=>(<div className={'station'+i} key={i}>{station}</div>))}
        </div>
    )
}