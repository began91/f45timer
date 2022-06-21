import React from 'react';

class SetupOptions extends React.Component {
    constructor(props) {
        super(props)
        this.handleViewChange = this.handleViewChange.bind(this);
    }

    handleViewChange(e) {
        this.props.onViewChange(e.target.value);
    }

    render() {
        return (
            <div id="setupOptions">
                <button className={this.props.view==='byDate' ? 'selected' : ''} value="byDate" onClick={this.handleViewChange}>
                    Select Date
                </button>
                <button className={this.props.view==='custom' ? 'selected' : ''} value="custom" onClick={this.handleViewChange}>
                    Custom Workout
                </button>
                {this.props.view}
            </div>
        )
    }
}

export default SetupOptions;