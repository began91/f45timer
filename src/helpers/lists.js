import Workout from './Workout.js';
// import Bears from './Bears';
// import Abacus from './Abacus';
// import Piston from './Piston';

const workoutStyleList = [// need to populate this list
    'Abacus',
    'Bears',
    'Piston'
];

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
    Workout(2022,7,5,'Lonestar',['dumbbell swiss ball single arm press rotation','barbell romanian deadlift single leg','suspension trainer single arm row','dumbbell lateral lunge pulse','revo standing single arm shoulder press','kettlebell box lateral step up','push up tripod hold','balance trainer single leg hip thruster hold + calf raise','dumbbell single arm renegade row','deadball staggered squat','ybell single clean + lunge','side plank knee crunch']),
    Workout(2022,7,6,'Afterglow',['kettlebell swing // jump squat','deadball overhead slams // burpee hands off','agility box hurdle jumps // speed sprawls','ybell squat press under grip // prisoner squat','frog squats // hand walks in and hand walks out','step trainer shuffle // tuck jumps','medicine ball plyo lunge + twist // reverse burpee','plate snatch // plate squat hold + chest press','mountain climber wide // yogy push up']),
    Workout(2022,7,7,'Romans',['dumbbell bench incline fly','barbell bicep partials x 3','barbell tricep extension','chin up overhand grip','dumbbell swiss ball chest press alternate arm','revo double kneeling shoulder press','ybell double pronated push up + alternate knee drivetop grip','kettlebell upright row','plate weighted sit up pullover']),
    Workout(2022,7,8,'Tempest',['speed squats // ybell single alternate clean + lunge // a steps // bike erg tempest target (250/350m)','elbow crunches // kettlebell squat + upright row // dumbbell punches // rower tempest target (150/200m)','straight arm crunch // deadball pick up and slams // star jumps // ski erg tempest target (100/150m)','frog squats // barbell push press // ice skater // bench hops tempest target(20/40)','10 x High knees + 2 inchworm','Squat Jack in & out', 'Wide mountain climbers', '10 x High knees + 2 inchworm', 'Squat Jack in & out', 'Wide mountain climbers', 'Burpee']),
    Workout(2022,7,9,'Trackstars',['barbell front squat','burpee','high knees on the spot','speed squats','rower sprints','dumbbell alternate snatch','pushup','bike sprints standing','plyometric lunge','sit up','russian twist','softbox jump alternating','dumbbell renegade row','deadball over head slams','kettlebell swing','fast feet sprawl','revo single push press alternate partner at extension','dumbbell curl + press alternating']),
    Workout(2022,7,10,'Pegasus',['kettlebell romanian deadlift','dumbbell alternate arm shoulder press','suspension trainer automic crunch','deadball bear hug squat','barbell lying tricep extension pause','ybell double hammer curl + alternate reverse lunge center grip','revo sit ups raise','plate box overhead step up','dumbbell floor press pulse','revo zercher curtsey squat','slides arm circle','power band low rear delt fly','push up','butterfly sit ups','alternate forward lunge']),
    Workout(2022,7,11,'Templars',['sandbag double clean fast feet sprawl','bear crawls back and forward short partnered','suspension trainer alternate arm row','kettlebell goblet squat partnered','balance trainer burpee + shoulder press partnered','box prisoner squat jump','burpee hands off partnered','dumbbell alternate lunge and over head press partnered','forward run + 2 x push up + backwards run partnered','seal jacks','bench hop partnered','plate low to high woodchop','step trainer low squat jumps partnered','bike hover partnered']),
    Workout(2022,7,12,'Piston',['dumbbell romanian deadlift tempo 4-0-1','push up tempo','sandbag box shouldered reverse lunge to step up','dumbbell reverse fly','barbell over head hold reverse lunge','medicine ball jacknife','dumbbell incline bench press neutral grip pause','step trainer single leg hip thruster pause','kettlebell alternate floor row pause neutral grip','deadball frog squat','barbell bicep pulses','plank diagonal reach']),
    Workout(2022,7,13,'Tripledouble',['battle ropes crossovers','5 x double foot mountain climbers + 2 x lateral shoot throughs','cone lateral step 6 x 6 fast feet','shuttle sprint + 3 x squat jumps','5 x deadball slam + 2 x burpee','medicine ball russian twist with one arm push up','box jumps jumping over','10 x frog squats + 2 x sprawls','kettlebell single arm swing into high pulls']),
    Workout(2022,7,14,'Romans',['barbell zercher squat','revo double alternate staggered deadlift','power bands track side walks','kettlebell deadlift pause','activation bands dumbbell goblet squat','slides reverse lunge','ybell double clean + squat outer grip','soft box single leg sandbag hip thruster','balance trainer crunch']),
    Workout(2022,7,15,'T10',['ski erg standing alternate arm pulls','chin up mixed grip','ybell single sprawl','deadball lying chest press','bike erg standing','kettlebell sumo deadlift','soft box 10 x high knees box jump','dumbbell stationary lunge','step trainer jump on-off + 4 x shuffle','revo reverse curl']),
    Workout(2022,7,16,'Westhollywood',['10 x high knees + 2 x push ups','deadball around the worlds into burpee combo','plate snatch','ybell squat pulses under grip','power band high rear delt fly','medicine ball circle + 45 degree lunges','ybell single rack squat jump outer grip','cone 10 x fast feet + 2 x burpee each side','downward dog knee touches','sandbag duck walk','step trainers (x2) 180 jump','rowing machine','rowing machine','10 x lateral shoot throughs + 2 x explosive push ups','revo shoulder press','barbell bent over row wide grip pause','plate single leg deadlift','deadball sumo squat','revo front raise','bike seated','bike seated','cone lateral hop','frozen v sit','dumbbell alternate forward lunge','deadball overhead slams','sled','sled push']),
    Workout(2022,7,17,'Pegasus',['dumbbell bench pull overs','barbell romanian deadlift + underhand grip row','ybell double alternate reverse lunge outer grip','suspension trainer archer push ups','sandbag sumo squat','dumbbell crucifix curl','ybell single crunch + extension','box dumbbell step up','power band shoulder press','kettlebell double clean + press','plate overhead walking lunge','barbell windscreen wipers','yogy push up','flutter kick','staggered squat jump'])

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