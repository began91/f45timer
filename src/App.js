//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// import MyTimer from './components/MyTimer.js';
import WorkoutScreen from './components/WorkoutScreen.js';
import SetupScreen from './components/SetupScreen';
import {getWorkoutByDate} from './helpers/lists.js';
import Beep from './helpers/Beep.js';


export default function App(props) {
  const [workoutStatus, setWorkoutStatus] = useState(false);
  const [setupView, setSetupView] = useState('byDate');
  const [snd, setSnd] = useState(new Audio("data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"))

  const useWorkout = useState(getWorkoutByDate(new Date()))

  // snd.autoplay = true;
  // snd.src = ;
  // snd.src = Beep;
  
  return (
    <div className="App">
      <div id="mainScreen">
        {workoutStatus ? 
        (<WorkoutScreen setWorkoutStatus={setWorkoutStatus} workout={useWorkout[0]} snd={snd}/>) : 
        (<SetupScreen setWorkoutStatus={setWorkoutStatus} useWorkout={useWorkout}
        setupView={setupView} onViewChange={setSetupView} snd={snd}/>)}
      </div>

    </div>
  );
}

