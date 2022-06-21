

let workoutStyle = {
    stations: 18,
    pods: 1,
    laps: 1,
    sets: 2,
    timing: '35/10, 55/20',
    misc: 'No water breaks.'
}

workoutList = []

for (let i=0;i<workoutStyle.stations;i++) {
    workoutList.push('W'+(i+1))
}
workoutList.push('Rest-Stay Here')
workoutList.push('Rest-Next Station')

let timeList = [35,10,55,20];

let numSets = workoutStyle.sets*workoutStyle.stations*workoutStyle.pods*2-1

workoutIndex = [];
timeIndex = [];
for (let i=0;i<numSets;i++) {
    if (i%2===0) {
        workoutIndex[i] = Math.floor(i/4);
        timeIndex[i] = i%4;
    } else if (i%4===1) {
        workoutIndex[i] = workoutStyle.stations;
        timeIndex[i] = 1;
    } else {
        workoutIndex[i] = workoutStyle.stations+1;
        timeIndex[i] = 3;
    }
}