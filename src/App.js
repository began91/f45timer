//import logo from './logo.svg';
import React from 'react';
import './App.css';
import MyTimer from './components/MyTimer.js';
import WorkoutScreen from './components/WorkoutScreen.js';
import SetupScreen from './components/SetupScreen';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWorkoutActive: false,
      setupView: 'byDate',
      time: new Date()
    }
    
    this.state.time.setSeconds(this.state.time.getSeconds() + 600);
    
    //bind functions here
    this.toggleWorkout = this.toggleWorkout.bind(this);
    this.updateSetupView = this.updateSetupView.bind(this);
  }

  //Methods
  toggleWorkout(prevState) {
    this.setState(prevState => ({'isWorkoutActive': !prevState.isWorkoutActive}));
    // console.log(this.state.isWorkoutActive);
  }

  updateSetupView(newView) {
    this.setState({'setupView': newView});
  }

  render() {
    return (
      <div className="App">
        <header>F45 Workout Timer</header>
        <div id="mainScreen">
          {this.state.isWorkoutActive ? 
          (<WorkoutScreen toggleWorkout={this.toggleWorkout} />) : 
          (<SetupScreen toggleWorkout={this.toggleWorkout} 
          setupView={this.state.setupView} onViewChange={this.updateSetupView} />)}
        </div>
        {/* <button id="toggleWorkout" onClick={this.toggleWorkout}></button> */}
        {this.state.isWorkoutActive ? '1':'0'}
      
        <div>
          <MyTimer expiryTimestamp={this.state.time} />
        </div>    
      </div>
    );
  }
}

export default App;
