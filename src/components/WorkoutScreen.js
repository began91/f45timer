import React ,{ useState, useEffect, useCallback }from 'react';
import './WorkoutScreen.css';

export default function WorkoutScreen (props) {
    const workout = props.workout;
    //state
    const [mainTimer,setMainTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [currentSet, setCurrentSet] = useState(0);
    const [setTimer,setSetTimer] = useState(0);
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

    const stopAllTimers = useCallback(() => {
        // clearInterval(totalTime);
    },[])

    const endWorkout = useCallback(() => {
        stopAllTimers()
        props.setWorkoutStatus(false)
    },[stopAllTimers, props])

    const updateActiveTimers = useCallback(()=> {
        if (setTimer>=currentSetDuration-1) {
            if (currentSet===workout.numSets-1) {
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

        if (isActive) {
            interval = setInterval(updateActiveTimers,1000)
        } else {
            clearInterval(interval)
        }
        return ()=>clearInterval(interval)
    }, [isActive,updateActiveTimers])

    const handlePlayPause = () => {
        setIsActive(!isActive)
    }
    
    let setBars = [];
    for (let i=1;i<workout.numSets;i++) {
        let isComplete = i<=currentSet;
        setBars[i] = (
            <div className={'set-bar-'+ isComplete} key={i}>I</div>
        )
    }

    const incrementSet = (e) => {
        // if its the first (0) set and value =-1 => do nothing
        // else if its the last set and value=1 => end workout
        // else increment
        e.preventDefault()
        e.stopPropagation();
        // console.log('single')
        if ((currentSet===0 && +e.target.value===-1)) {

        } else if (currentSet===workout.numSets-1 && +e.target.value===1) {
            endWorkout()
        } else {
            setCurrentSet(currentSet + +e.target.value)
            setSetTimer(0)
        }
    }

    let mainTimerString = mainTimer>=3600 ? 
        new Date(mainTimer*1000).toISOString().substring(11,19) :
        new Date(mainTimer*1000).toISOString().substring(14,19);

    let remainingTimeString = remainingTime>=3600 ?
        new Date(remainingTime*1000).toISOString().substring(11,19) :
        new Date(remainingTime*1000).toISOString().substring(14,19);

    return (
        <div id='workout-screen' className={isWork ? 'work':'rest'}>
            Workout Screen
            <div id="logo-container">
                <div id='elapsed-timer'>
                    Elapsed: {mainTimerString}
                </div>
                <div id="remaining-timer">
                    Remaining: {remainingTimeString}
                </div>
                <img src={workout.logo} className='logo' alt='logo'/>
                <div className="set-container">
                    <div className="set-counter">Set: {currentSet+1}/{workout.numSets}</div>
                    <div className="set-bars">
                        {setBars}
                    </div>
                </div>
            </div>
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
                <div className="rewind">&lt;-5</div>
                <div className="play-pause" onClick={handlePlayPause}>{isActive?'Pause':'Play'}</div>
                <div className="fast-forward">5-&gt;</div>
                <button className="next-set" onClick={incrementSet} value={1}>Next<br/>|&gt;<br/>Set</button>
            </div>
        </div>
    )
}
