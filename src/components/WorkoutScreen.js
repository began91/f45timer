import React from 'react';

export default function WorkoutScreen (props) {
    return (
        <div>
            Workout Screen
            <button onClick={()=>props.setWorkoutStatus(false)}>Stop Workout</button>
        </div>
    )
}
