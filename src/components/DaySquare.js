import React from 'react';
import './DaySquare.css'
import {getWorkoutByDate} from '../helpers/lists.js';
import defaultLogo from '../F45_logos/defaultLogo.png';

export default function DaySquare(props) {
    const date = props.date;
    
    // const datesMatch = (date1,date2) => date1.getDate()===date2.getDate();
    // const monthsMatch = (date1,date2) => date1.getMonth()===date2.getMonth();
    // const yearsMatch = (date1,date2) => date1.getFullYear()===date2.getFullYear();
    // const areDatesEqual = (date1,date2) => datesMatch(date1,date2) && monthsMatch(date1,date2) && yearsMatch(date1,date2);

    const workout = getWorkoutByDate(date);
 
    const logo = workout ? workout.logo : defaultLogo;

    const noWorkout = workout ? '' : ' no-workout'

    return (
        <div className={props.activeDay + ' daySquare'} onClick={()=>props.setDate(new Date(date))}>
            <div className="weekday">
                {date.toLocaleString(undefined,{weekday: 'short'})}
            </div>
            <div className={noWorkout}>
                <div className="day">
                    {date.toLocaleString(undefined,{day:'numeric'})}
                </div>
                <div className="date-logo">
                    <img src={logo} alt='logo' className='datePickerLogo'/>
                </div>
            </div>
        </div>
    )
}