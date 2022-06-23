import React, { useState } from 'react';
import './DatePicker.css';
import DaySquare from './DaySquare';

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

    let week = [];
    week[0] = new Date(date);
    week[0].setDate(date.getDate()-date.getDay());
    for (let i=1;i<=6;i++) {
        week[i] = new Date(date);
        week[i].setDate(date.getDate()-date.getDay() + i)
    }
    const daysInMonth1 = week.filter(day=>day.getMonth()===week[0].getMonth()).length
    const daysInMonth2 = 7 - daysInMonth1;
    const styleMonth1 = {
        flex: daysInMonth1 + ' 1 0'
    };
    const styleMonth2 = {
        flex: daysInMonth2+ ' 1 0'
    };

    return (
        <div id="DatePicker">
            <div id="dateRow">
                <button id='backMonth' value={-1} onClick={changeMonth}>&lt;&lt;</button>
            <button id='backDay' value={-1} onClick={changeDay}>&lt;</button>
            <div id="dateSquare" onClick={()=>setDisplayCalendar(true)}>
                {week.every(day=>day.getMonth()===date.getMonth()) ? 
                (<div className="month" id="month">
                    {date.toLocaleString(undefined,{month:'short'})}
                </div>):
                (<div id="monthRow">
                    <div className="month" id="month1" style={styleMonth1}>
                        {week[0].toLocaleString(undefined,{month:'short'})}
                    </div>
                    <div className="month" id="month2" style={styleMonth2}>
                        {week[6].toLocaleString(undefined,{month:'short'})}
                    </div>
                </div>)}
                
                <div id="week">
                    {week.map(day=>(
                        <DaySquare key={day.getDay()} date={day} />
                    ))}
                </div>
                
                {/* <DaySquare date={date} /> */}
                
            </div>
            <button id='nextDay' value={1} onClick={changeDay}>&gt;</button>
            <button id='nextMonth' value={1} onClick={changeMonth}>&gt;&gt;</button>
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