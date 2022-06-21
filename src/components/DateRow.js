import React from 'react';

class DateRow extends React.Component {
    constructor(props) {
        super(props)
        this.changeDay = this.changeDay.bind(this);
        this.changeMonth = this.changeMonth.bind(this);
    }

    changeDay(e) {
        console.log(e.target.value)
    }

    changeMonth(e) {
        console.log(e.target.value*30)
    }

    render() {
        return (
            <div id="DatePicker">
                <button id='backMonth' value={-1} onClick={this.changeMonth}>bb</button>
                <button id='backDay' value={-1} onClick={this.changeDay}>b</button>
                <button id='currentDate'>June 18, 2022</button>
                <button id='nextDay' value={1} onClick={this.changeDay}>f</button>
                <button id='nextMonth' value={1} onClick={this.changeMonth}>ff</button>
                <br/>
                <button onClick={this.setToday}>GoTo Today</button>
            </div>
        )
    }
}

export default DateRow;