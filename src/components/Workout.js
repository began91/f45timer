import React from 'react';

export default function Workout(props) {


    return (
        <div className="workout">
            <div className="workout-title">
                {this.props.workout.style}
            </div>
            <div className="workout-stations">
                {this.props.workout.stations}
            </div>
        </div>
    )
}