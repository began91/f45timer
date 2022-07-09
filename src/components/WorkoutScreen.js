import React ,{ useState, useEffect, useCallback }from 'react';
import './WorkoutScreen.css';

export default function WorkoutScreen (props) {
    const workout = props.workout;
    //state
    const [mainTimer,setMainTimer] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [currentSet, setCurrentSet] = useState(0);
    const [setTimer,setSetTimer] = useState(0);
    const [isComplete,setIsComplete] = useState(false);
    //derivatives of state
    let currentStation = workout.stationList[workout.stationIndex[currentSet]];
    let nextStation = workout.stationList[workout.stationIndex[currentSet+1]]
    let currentSetDuration = workout.timeList[workout.timeIndex[currentSet]];
    let isWork = workout.stationIndex[currentSet]<workout.stations;
    let remainingTime = workout.setDurationList
        .filter((_,i)=>i>=currentSet)
        .reduce((prev,setDuration)=>{
            return +prev+ +setDuration;
        },[-setTimer])
    console.log('Remaining Time:' + workout.setDurationList)
    // const stopAllTimers = useCallback(() => {
    //     // clearInterval(totalTime);
    // },[])

    const endWorkout = useCallback(() => {
        // stopAllTimers()
        // popup to display workout stats
        setIsComplete(true);
        setIsActive(false);
        // display options "reset workout" or "end workout"
        // props.setWorkoutStatus(false) //if they choose to end workout then execute this
    },[setIsComplete, setIsActive])

    const updateActiveTimers = useCallback(()=> {
        if (setTimer>=currentSetDuration-1) {
            if (currentSet>=workout.numSets-1) {
                endWorkout()
            }
            setCurrentSet(currentSet=>currentSet+1)
            setSetTimer(-1)
        }
        setMainTimer(mainTimer=>mainTimer+1);
        setSetTimer(setTimer=>setTimer+1);
    },[currentSetDuration,setTimer, currentSet, endWorkout, workout]);

    useEffect(()=> {
        // https://www.geeksforgeeks.org/create-a-stop-watch-using-reactjs/
        let interval = null;

        if (currentSet>=workout.numSets) {
            endWorkout();
        }

        if (isActive) {
            interval = setInterval(updateActiveTimers,1000)
        } else {
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
    }, [isActive,updateActiveTimers, currentSet, workout, endWorkout])

    const handlePlayPause = () => {
        setIsActive(!isActive)
    }
    
    const goToSet = (setNum) => {
        setCurrentSet(setNum);
        setSetTimer(0);
    }

    let setBars = [];
    for (let i=1;i<=workout.numSets;i++) {
        let isComplete = i<=currentSet;
        setBars[i] = (
            <div className={'set-bar-'+ isComplete} key={i} onClick={()=>goToSet(i-1)}>I</div>
        )
    }

    const incrementSet = (e) => {
        // if its the first (0) set and value =-1 => do nothing
        // else if its the last set and value=1 => end workout
        // else increment
        e.preventDefault();
        e.stopPropagation();
        // console.log('single')
        if ((currentSet===0 && +e.target.value===-1)) {

        } else if (currentSet>=workout.numSets-1 && +e.target.value===1) {
            endWorkout()
        } else {
            goToSet(currentSet + +e.target.value);
        }
    }

    const incrementTime = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        const newTime = setTimer + 5* +e.target.value;

        if (newTime>currentSetDuration-1) {
            // time exceeds current set duration. go to next set
            if (currentSet>=workout.numSets) {
                endWorkout();
            }
            goToSet(currentSet+1)
        } else if (newTime < 0) {
            setSetTimer(0)
        } else {
            //just change the current set timer
            setSetTimer(newTime)
        }
    }

    const timeString = (seconds) => {
        console.log(seconds);
        return seconds>=3600 ? 
            new Date(seconds*1000).toISOString().substring(11,19) :
            new Date(seconds*1000).toISOString().substring(14,19);
    }

    const resetWorkout = (e) => {
        setIsComplete(false);
        setMainTimer(0);
        setIsActive(true);
        setCurrentSet(0);
        setSetTimer(0);
    }

    return (
        <div id='workout-screen' className={isWork ? 'work':'rest'}>
            Workout Screen
            <div id="logo-container">
                <div id='elapsed-timer'>
                    Elapsed: {timeString(mainTimer)}
                </div>
                <div id="remaining-timer">
                    Remaining: {timeString(isComplete? 0 : remainingTime)}
                </div>
                <img src={workout.logo} className='logo' alt='logo'/>
                <div className="set-container">
                    <div className="set-counter">Set: {currentSet+1}/{workout.numSets}</div>
                    <div className="set-bars">
                        {setBars}
                    </div>
                </div>
            </div>
            {isComplete? (
                <div className="workout-stats">
                    Workout Complete!<br/>
                    Total Time: {timeString(mainTimer)}<br/>
                    <button onClick={resetWorkout}>Reset</button>
                    <button onClick={()=>props.setWorkoutStatus(false)}>End Workout</button>
                </div>
            ): (
                <>
                    <div className='current-set'>
                        {isWork ? 'Work':'Rest'}
                        <div className="set-timer">
                            <div className="time-cirle"></div>
                            <div className="set-time-remaining">{currentSetDuration-setTimer}</div>
                        </div>
                        <div className="workout-name">{currentStation}</div>
                        <div className="next-station">
                            {isWork?'':'Next: '+nextStation}
                        </div>
                        <button onClick={endWorkout} id='stop-workout'>Stop Workout</button>
                    </div>
                    <div className="time-controls">
                        <button className="last-set" onClick={incrementSet} value={-1}>Last<br/>&lt;|<br/>Set</button>
                        <button className="rewind" onClick={incrementTime} value={-1}>&lt;-5</button>
                        <div className="play-pause" onClick={handlePlayPause}>{isActive?'Pause':'Play'}</div>
                        <button className="fast-forward" onClick={incrementTime} value={1}>5-&gt;</button>
                        <button className="next-set" onClick={incrementSet} value={1}>Next<br/>|&gt;<br/>Set</button>
                    </div>
                </>
            )}
        </div>
    )
}
