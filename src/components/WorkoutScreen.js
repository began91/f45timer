import React ,{ useState }from 'react';

export default function WorkoutScreen (props) {
    const workout = props.workout;
    const [totalT,setTotalT] = useState(0);
    const totalTime = setInterval(updateActiveTimers,1000);

    function stopAllTimers() {
        clearInterval(totalTime);
    }

    function updateActiveTimers() {
        setTotalT(totalT+1)
    }

    const endWorkout = () => {
        stopAllTimers()
        props.setWorkoutStatus(false)
    }
    
    return (
        <div>
            Workout Screen
            <button onClick={endWorkout}>Stop Workout</button>
            {totalT}
        </div>
    )
}
