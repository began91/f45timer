import React, { useState } from 'react';

export default function DatePicker(props) {
    const [displayCalendar,setDisplayCalendar] = useState(false);
    const [date, setDate] = useState(new Date());

    const changeDay = (e) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate()+ +e.target.value);
        setDate(newDate);
    }

    const changeMonth = (e) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth()+ +e.target.value);
        setDate(newDate)
    }

    const setToday = (e) => {
        setDate(new Date())
    }

    const currentYear = new Date().getFullYear();

    return (
        <div id="DatePicker">
            <div id="dateRow">
                <button id='backMonth' value={-1} onClick={changeMonth}>bb</button>
            <button id='backDay' value={-1} onClick={changeDay}>b</button>
            <div id="dateSquare" onClick={()=>setDisplayCalendar(true)}>
                <div id="month">
                    {date.toLocaleString(undefined,{month:'short'})}
                </div>
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
            </div>
            <button id='nextDay' value={1} onClick={changeDay}>f</button>
            <button id='nextMonth' value={1} onClick={changeMonth}>ff</button>
            </div>
            
            <br/>
            {displayCalendar? 
            (
                <div className="calendar">
                    <button id="closeCalendar" onClick={()=>setDisplayCalendar(false)}>Close Calendar</button>
                </div>
            ) : 
            ('')}
            <br/>
            <button onClick={setToday}>GoTo Today</button>
        </div>
    )

}