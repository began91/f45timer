import React, { useState } from 'react';
import './DatePicker.css';

export default function DatePicker(props) {
    const [displayCalendar,setDisplayCalendar] = useState(false);
    const [date, setDate] = useState(new Date());

<<<<<<< HEAD
        this.state = {
            displayCalendar: false,
            date: new Date()
        };

        this.changeDay = this.changeDay.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
        this.setToday = this.setToday.bind(this);
=======
    const changeDay = (e) => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate()+ +e.target.value);
        setDate(newDate);
>>>>>>> 01da010a28d6f97835692e3882e2a312c7176b81
    }

    const changeMonth = (e) => {
        const newDate = new Date(date);
        newDate.setMonth(newDate.getMonth()+ +e.target.value);
        setDate(newDate)
    }

    const setToday = (e) => {
        setDate(new Date())
    }

<<<<<<< HEAD
    setToday(e) {
        this.setState({'date': new Date()})
        console.log(Date())
    }

    render() {
        const options = {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        }

        return (
            <div id="DatePicker">
                <button id='backMonth' value={-1} onClick={this.changeMonth}>bb</button>
                <button id='backDay' value={-1} onClick={this.changeDay}>b</button>
                <button id='currentDate'>{this.state.date.toLocaleDateString(undefined, options)}</button>
                <button id='nextDay' value={1} onClick={this.changeDay}>f</button>
                <button id='nextMonth' value={1} onClick={this.changeMonth}>ff</button>
                <br/>
                
                <button onClick={this.setToday}>GoTo Today</button>
=======
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
>>>>>>> 01da010a28d6f97835692e3882e2a312c7176b81
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