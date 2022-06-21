const style = 'Bears';
const stations = 18;
const pods = 1;
const laps = 1;
const sets = 2;
const timing = '35/10, 55/20';
const misc = 'No water breaks';

let workoutList = []

for (let i=0;i<stations;i++) {
    workoutList.push('W'+(i+1))
}
workoutList.push('Rest-Stay Here')
workoutList.push('Rest-Next Station')

const timeList = [35,10,55,20];

const numSets = sets*stations*pods*2-1

let workoutIndex = [];
let timeIndex = [];
for (let i=0;i<numSets;i++) {
    if (i%2===0) {
        workoutIndex[i] = Math.floor(i/4);
        timeIndex[i] = i%4;
    } else if (i%4===1) {
        workoutIndex[i] = stations;
        timeIndex[i] = 1;
    } else {
        workoutIndex[i] = stations+1;
        timeIndex[i] = 3;
    }
}

const Bears = {
    style,
    stations,
    pods,
    laps,
    sets,
    timing,
    misc,
    numsets,
    workoutList,
    workoutIndex,
    timeList,
    timeIndex
}


export default Bears