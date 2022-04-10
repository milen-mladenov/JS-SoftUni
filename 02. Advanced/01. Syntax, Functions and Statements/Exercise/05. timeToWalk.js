function timeToWalk(steps, meterPerStep, speed) {

    let speedInMeters = (speed * 1000) / 3600;   // speed in secs 
    let totalDistance = steps * meterPerStep;   // distancee in meters 
    let breaks = Math.floor(totalDistance / 500) * 60;
    let totalWalkingTime = (totalDistance / speedInMeters) + breaks

    let hours = Math.floor(totalWalkingTime / 3600).toFixed(0).padStart(2, "0");
    let minutes = Math.floor(totalWalkingTime / 60).toFixed(0).padStart(2, "0");
    let secs = (totalWalkingTime % 60).toFixed(0).padStart(2, "0");


    console.log(`${hours}:${minutes}:${secs}`);

}

timeToWalk(4000, 0.60, 5);
console.log("-------");
timeToWalk(2564, 0.70, 5.5);