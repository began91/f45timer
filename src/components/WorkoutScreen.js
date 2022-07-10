import React ,{ useState, useEffect, useCallback }from 'react';
import './WorkoutScreen.css';
import Beep from '../helpers/Beep.js';

export default function WorkoutScreen (props) {
    const workout = props.workout;
    //state
    const [mainTimer,setMainTimer] = useState(0);
    const [isActive, setIsActive] = useState(true);
    const [currentSet, setCurrentSet] = useState(0);
    const [setTimer,setSetTimer] = useState(0);
    const [isComplete,setIsComplete] = useState(false);
    const [pendingClose, setPendingClose] = useState(false);
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
    let percentComplete = setTimer/currentSetDuration*100;
    
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
            props.snd.src = Beep;
            props.snd.play();
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

    let setBars2 = workout.stationIndex.map((sI,i)=>{
        let isCurrentSet = i===currentSet;
        let style = {flexGrow: workout.setDurationList[i]};
        
        if (isCurrentSet) {
            style.background = `linear-gradient(to right , green 0% ${percentComplete}%, white ${percentComplete}%)`;
        }
        
        let isComplete = i<currentSet;
        return sI<workout.stations ? 
        (
            <div className={`set-bar2-${isComplete} current-${isCurrentSet}`} key={i} onClick={()=>goToSet(i)} style={style}></div>
        ) : '';
    }).filter(result=>result!=='');
    
    const displayCurrentSet = workout.stationIndex.filter((sI,i)=>i<currentSet).filter(sI=>sI<workout.stations).length;

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
        return seconds>=3600 ? 
            new Date(seconds*1000).toISOString().substring(11,19) :
            new Date(seconds*1000).toISOString().substring(14,19);
    }

    const timeStringSec = seconds => {
        return seconds>=60 ? 
            new Date(seconds*1000).toISOString().substring(14,19) :
            new Date(seconds*1000).toISOString().substring(17,19);
    }

    const resetWorkout = (e) => {
        setIsComplete(false);
        setMainTimer(0);
        setIsActive(true);
        setCurrentSet(0);
        setSetTimer(0);
        setPendingClose(false);
    }


    return (
        <div id='workout-screen' className={isWork ? 'work':'rest'}>
            <div id="logo-container" className={isWork ? 'work' : 'rest'}>
                <div id='elapsed-timer'>
                    Elapsed: {timeString(mainTimer)}
                </div>
                <div id="remaining-timer">
                    Remaining: {timeString(isComplete? 0 : remainingTime)}
                </div>
                <img src={workout.logo} className='logo' alt='logo'/>
                <div className='set-container'>
                    <div className="set-counter">Set: {displayCurrentSet>=setBars2.length? setBars2.length : (displayCurrentSet+1)}/{setBars2.length}</div>
                    <div className="set-bars">
                        {setBars2}
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
                        {/* https://www.youtube.com/watch?v=mSfsGTIQlxg */}
                        <div className="set-timer">
                            <div className="time-circle-outer">
                                <div className="time-circle-inner" style={{backgroundColor: isWork ? 'green':'red'}}>
                                    <div className="set-time-remaining">
                                        {timeStringSec(currentSetDuration-setTimer)}</div>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="120px" height="120px" style={{strokeDashoffset: percentComplete*440/100}}>
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stop-color="aqua" />
                                        <stop offset="100%" stop-color="orange" />
                                    </linearGradient>
                                </defs>
                                <circle cx="60" cy="60" r="50" stroke-linecap="round" />
                            </svg>
                        </div>

                        <div className="workout-name">{currentStation}</div>
                        {isWork?'':(
                            <div className="next-station">
                                {'Next: '+nextStation}
                            </div>
                        )}
                        <div className="time-controls">
                            <button className="last-set" onClick={incrementSet} value={-1}>Last<br/>&#x23EE;<br/>Set</button>
                            <button className="rewind" onClick={incrementTime} value={-1}>&#x23EA;&#xFE0E; 5s</button>
                            <div className="play-pause" onClick={handlePlayPause}>{isActive? (<>&#x23F8;</>):(<>&#x23F5;</>)}</div>
                            <button className="fast-forward" onClick={incrementTime} value={1}>5s &#x23E9;&#xFE0E;</button>
                            <button className="next-set" onClick={incrementSet} value={1}>Next<br/>&#x23ED;<br/>Set</button>
                        </div>
                    </div>
                    
                    <div className={`exit-container closing-${pendingClose}`}>
                        {pendingClose ? (
                            <>
                                End Workout?
                                <div onClick={()=>setPendingClose(false)} id='resume-workout'>Resume</div>
                                <div onClick={endWorkout} id='stop-workout'>End</div>
                            </>
                        ) : (
                            <div onClick={()=>setPendingClose(true)} id='end-workout'>&#x2715;</div>
                        )}
                    </div>


                </>
            )}
        </div>
    )
}
