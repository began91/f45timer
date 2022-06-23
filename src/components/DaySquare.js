import React from 'react';

export default function DaySquare(props) {
    const date = props.date;
    const currentYear = new Date().getFullYear()
    return (
        <div id="daySquare">
                    <div id="weekday">
                        {date.toLocaleString(undefined,{weekday: 'short'})}
                    </div>
                    <div id="day">
                        {date.toLocaleString(undefined,{day:'numeric'})}
                    </div>
                    {date.getFullYear() !== currentYear ? 
                    (<div id='year'>
                        {date.toLocaleString(undefined,{year: 'numeric'})}
                    </div>):
                    (<></>)}
                </div>
    )
}