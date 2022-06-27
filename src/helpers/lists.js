import Bears from './Bears';
import Abacus from './Abacus';

const workoutStyleList = {
    Abacus,
    Bears
};

class Workout {
    constructor(year,month,day,workoutStyle, stationList=[]) {
        //Date uses 0 indexed month
        this.date = new Date(year,month-1,day);
        //Get workout Style creator from list
        this.workoutStyle = workoutStyleList[workoutStyle];
        //Generate workout data from style creator function
        const data = this.workoutStyle(stationList);
        //Distribute workout data to top level properties
        Object.entries(data).forEach(entry=>{
            this[entry[0]]=entry[1];
        })
    }

    setStationList(stationList) {
        //No need to rerun workout generation function due to station Index reference
        this.stationList = stationList;
    }
}

let workoutsByDate = [
    new Workout(2022,7,3,'Bears'),
    new Workout(2022,7,2,'Bears'),
    new Workout(2022,7,1,'Bears')
]

export {
    // aircraftList, 
    // getAcftById,
    // getHeaviestAndMostForward,
    // instructorList,
    // getInstById,
    workoutStyleList,
    workoutsByDate
};