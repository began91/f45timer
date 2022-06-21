import React from 'react';
import DatePicker from './DatePicker';

class WorkoutByDateSetup extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
        <div id="workoutByDateSetup">
            Workout by date setup
            <DatePicker />
        </div>        
    )
    }
}

export default  WorkoutByDateSetup;