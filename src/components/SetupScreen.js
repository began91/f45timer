import React from 'react';
import CustomWorkoutSetup from './CustomWorkoutSetup.js';
import WorkoutByDateSetup from './WorkoutByDateSetup.js';
import SetupOptions from './SetupOptions';

class SetupScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="setupScreen">
                <SetupOptions view={this.props.setupView} onViewChange={this.props.onViewChange}/>
                
                {this.props.setupView==='custom' ? 
                (<CustomWorkoutSetup />) 
                : 
                (<WorkoutByDateSetup />)
                }
                <button id="startWorkout" onClick={this.props.toggleWorkout}>Start Workout</button>
            </div>        
        )
    }
}

export default SetupScreen;