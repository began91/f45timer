import React from 'react';
import './DaySquare.css'

export default function DaySquare(props) {
    const date = props.date;
    // const currentYear = new Date().getFullYear()
    return (
        <div className={props.activeDay + ' daySquare'} onClick={()=>props.setDate(new Date(date))}>
            <div id="weekday">
                {date.toLocaleString(undefined,{weekday: 'short'})}
            </div>
            <div id="day">
                {date.toLocaleString(undefined,{day:'numeric'})}
            </div>
        </div>
    )
}