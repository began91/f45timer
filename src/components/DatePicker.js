import React, { useState } from 'react';
import './DatePicker.css';
import DaySquare from './DaySquare';

export default function DatePicker(props) {
    // const [displayCalendar,setDisplayCalendar] = useState(false);
    const [date, setDate] = useState(new Date());
    
    const changeWeek = (e) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate()+ 7*+e.target.value);
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

    const yearDisplay = week.map(day=>{
        return day.getFullYear()===currentYear ? 
        '' :
        (<div>
            {day.toLocaleString(undefined,{year:'numeric'})}
        </div>);
    });
    
    const splitWeek = !week.every(day=>day.getMonth()===date.getMonth());

    return (
        <div id="DatePicker">
            <div id="dateSection">
                <button id='backWeek' value={-1} onClick={changeWeek}>
                    Prev<br/>
                    &lt;&lt;<br/>
                    Week 
                </button>

                <div id="dateRow">
                    <div id='monthRow'>
                        <div className="month" id="month1" style={styleMonth1}>
                            {week[0].toLocaleString(undefined,{month:'short'})}
                            {yearDisplay[0]}
                        </div>
                        {splitWeek? 
                        (<div className="month" id="month2" style={styleMonth2}>
                            {week[6].toLocaleString(undefined,{month:'short'})}
                            {yearDisplay[6]}
                        </div>):''}
                    </div>
            
                    <div id="week">
                        {week.map(day => {
                            const activeDay = day.getDay()===date.getDay() ? 'active-day' : '';
                            return (
                                <DaySquare key={day.getDay()} date={day} activeDay={activeDay} setDate={setDate}/>
                            )
                        })}
                    </div>
                   
                </div>
                <button id='nextWeek' value={1} onClick={changeWeek}>
                    Next<br/>
                    &gt;&gt;<br/>
                    Week 
                </button>
            </div>
                
            {/* <br/>
            {displayCalendar? 
            (
                <div className="calendar">
                    <button id="closeCalendar" onClick={()=>setDisplayCalendar(false)}>Close Calendar</button>
                </div>
            ) : 
            ('')}
            <br/> */}
            <button onClick={setToday}>GoTo Today</button>
        </div>
    )
                        
}