import Workout from './Workout.js';
import Bears from './Bears';
import Abacus from './Abacus';
import Piston from './Piston';

const workoutStyleList = {
    Abacus,
    Bears,
    Piston
};

// class Workout {
//     constructor(year,month,day,workoutStyle, stationList=[]) {
//         //Date uses 0 indexed month
//         this.date = new Date(year,month-1,day);
//         //Get workout Style creator from list
//         this.workoutStyle = workoutStyleList[workoutStyle];
//         //Generate workout data from style creator function
//         const data = this.workoutStyle(stationList);
//         //Distribute workout data to top level properties
//         Object.entries(data).forEach(entry=>{
//             this[entry[0]]=entry[1];
//         })
        
//         //add data thats the same for all workouts and derivative calculations
//         this.style=workoutStyle;
        
//         this.stationList.push('Rest-Stay Here');
//         this.stationList.push('Rest-Next Station');
//         this.setDurationList = this.timeIndex.map(tI=>this.timeList[tI]);

//     }

//     setStationList(stationList) {
//         //No need to rerun workout generation function due to station Index reference
//         this.stationList = stationList;
//     }
// }

let workoutsByDate = [
    Workout(2022,7,3,'Bears'),
    Workout(2022,7,2,'Bears'),
    Workout(2022,7,1,'Bears',['push','sit']),
    Workout(2022,6,26,'Abacus'),
    Workout(2022,6,28,'Piston',['Kettlebell deadlift tempo 4-0-1','Balance Trainer Chest Press Pulse','Dumbbell Goblet Squat Tempo 4-0-1','Suspension Trainer Nutral Grip Row Pulse','Sandbag Box Overhead Step Ups','10 x Russian Twist + 2 x Jackknives','Flat Bench Dumbbell Tempo Fly 4-0-1','Soft Box Single Leg Deadball Hip Thruster Pause','Barbell Bent Over Row Underhand Grip Tempo 4-0-1','Lateral Lunge Pause','Ybell Double Bicep Curl Twist Center Grip','Plank Rotation']),
    Workout(2022,7,4, 'Templars', ['Battle Ropes Power Slams Partnered','Suspension Trainer Mountain Climber','Bike Standing Partnered','Soft Box Jump Partnered','Plate Sumo Squat + Bicep Curl','Bench Tricep Dips Partnered','Gorilla Bounds','Ladder Tail Whips Partnered','5 x Deadball Slam + 2 x Prisoner Squat','Power Band In and Out Jumps + High Puls','Ybell Single Arm Snatch Partnered','10 x High Knees + 2 x Inch Worms Partnered','Ybell Sprawl Lateral Jump Partnered','2 x Push Ups + 4 x Wide Mountain Climbers + 2 x Star Jumps Partnered']),
    Workout(2022,7,5,'Lonestar')

]

function getWorkoutByDate(date) {
    const datesMatch = (date1,date2) => date1.getDate()===date2.getDate();
    const monthsMatch = (date1,date2) => date1.getMonth()===date2.getMonth();
    const yearsMatch = (date1,date2) => date1.getFullYear()===date2.getFullYear();
    const areDatesEqual = (date1,date2) => datesMatch(date1,date2) && monthsMatch(date1,date2) && yearsMatch(date1,date2);
    
    return workoutsByDate.find(workout=>areDatesEqual(workout.date,date)) || {date};
}

export {
    // aircraftList, 
    // getAcftById,
    // getHeaviestAndMostForward,
    // instructorList,
    // getInstById,
    workoutStyleList,
    workoutsByDate,
    getWorkoutByDate
};