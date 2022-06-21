

let workoutStyle = {
    stations: 6,
    pods: 1,
    laps: 2,
    sets: 5,
    timing: 'Lap1 - 20/10, 22/10, 24/10, 26/10, 28/15; Lap 2 - 28/10, 26/10, 24/10, 22/10, 20/15',
    misc: 'No water breaks.'
}

workoutList = []

for (let i=0;i<workoutStyle.stations;i++) {
    workoutList.push('W'+(i+1))
}
workoutList.push('Rest-Stay Here')
workoutList.push('Rest-Next Station')

let timeList = [20,10,22,10,24,10,26,10,28,10];

let numSets = workoutStyle.sets*workoutStyle.stations*workoutStyle.laps*2-1

workoutIndex = [];
timeIndex = [];
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
        workoutIndex[i] = workoutStyle.stations+1;
        timeIndex[i] = 9;
    } else {
        workoutIndex[i] = workoutStyle.stations;
        timeIndex[i] = i%10;
    }
}

console.log(workoutIndex);
console.log(timeIndex);