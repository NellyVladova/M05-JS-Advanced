function getTimeToWalk(steps, footprintLength, speed){
    let restTimeInSec = Math.floor(steps * footprintLength / 500) * 60;
    let speedInMetersPerSec = speed * 1000 / 3600;

    let totalTime = restTimeInSec + (steps * footprintLength / speedInMetersPerSec);
    let hours = Math.floor(totalTime / 3600).toFixed(0);
    let minutes = Math.floor(totalTime / 60).toFixed(0);
    let seconds = Math.floor(totalTime % 60).toFixed(0);
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

getTimeToWalk(4000, 0.60, 5);
getTimeToWalk(2564, 0.70, 5.5);