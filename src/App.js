//import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// import MyTimer from './components/MyTimer.js';
import WorkoutScreen from './components/WorkoutScreen.js';
import SetupScreen from './components/SetupScreen';
import {getWorkoutByDate} from './helpers/lists.js';


export default function App(props) {
  const [workoutStatus, setWorkoutStatus] = useState(false);
  const [setupView, setSetupView] = useState('byDate');

  const useWorkout = useState(getWorkoutByDate(new Date()))
  
  return (
    <div className="App">
      <header>F45 Workout Timer</header>
      <div id="mainScreen">
        {workoutStatus ? 
        (<WorkoutScreen setWorkoutStatus={setWorkoutStatus} workout={useWorkout[0]}/>) : 
        (<SetupScreen setWorkoutStatus={setWorkoutStatus} useWorkout={useWorkout}
        setupView={setupView} onViewChange={setSetupView} />)}
      </div>
      {/* <button id="toggleWorkout" onClick={this.toggleWorkout}></button> */}
      {workoutStatus ? '1':'0'}
    
      {/* <div>
        <MyTimer expiryTimestamp={this.state.time} />
      </div>     */}
    </div>
  );
}

