const style = 'Abacus';
const stations = 6;
const pods = 1;
const laps = 2;
const sets = 5;
const timing = 'Lap1 - 20/10, 22/10, 24/10, 26/10, 28/15; Lap 2 - 28/10, 26/10, 24/10, 22/10, 20/15';
const misc = 'No water breaks';

let workoutList = []

for (let i=0;i<stations;i++) {
    workoutList.push('W'+(i+1))
}
workoutList.push('Rest-Stay Here')
workoutList.push('Rest-Next Station')

const timeList = [20,10,22,10,24,10,26,10,28,10];

const numSets = sets*stations*laps*2-1

let workoutIndex = [];
let timeIndex = [];
for (let i=0;i<numSets;i++) {
    if (i%2===0) {
        //even is workout block
        workoutIndex[i] = Math.floor(i/10)%6;//10 is sets*2 && 6 is stations
        if (i<numSets/2) {
            timeIndex[i] = i%10;
        } else {
            timeIndex[i] = 8-(i%10)
        }
    } else if (i%10===9) {
        workoutIndex[i] = stations+1;
        timeIndex[i] = 9;
    } else {
        workoutIndex[i] = stations;
        timeIndex[i] = i%10;
    }
}

const Abacus = {
    style,
    stations,
    pods,
    laps,
    sets,
    timing,
    misc,
    numSets,
    workoutList,
    workoutIndex,
    timeList,
    timeIndex
}


export default Abacus