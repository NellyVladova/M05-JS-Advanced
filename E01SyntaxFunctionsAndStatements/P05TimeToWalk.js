function getTimeToWalk(steps, footprintLength, speed){
    let distance = steps * footprintLength;
    let speedInMetersPerSec = speed * 1000 / 3600;

    let restTime = Math.floor(distance / 500) * 60;
    let totalTime = (distance / speedInMetersPerSec) + restTime;

    let hours = Math.floor(totalTime / 3600).toFixed(0).padStart(2, '0');
    let minutes = Math.floor(totalTime / 60).toFixed(0).padStart(2, '0');
    let seconds = (totalTime % 60).toFixed(0).padStart(2, '0');
    
    console.log(`${hours}:${minutes}:${seconds}`);
}

getTimeToWalk(4000, 0.60, 5);
getTimeToWalk(2564, 0.70, 5.5);