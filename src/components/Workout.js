import React from 'react';

class Workout extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
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
}

export default Workout;