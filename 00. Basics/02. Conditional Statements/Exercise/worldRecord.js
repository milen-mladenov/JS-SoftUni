function worldRecord(input){

    let recordInSecs = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);

    let slowdown = Math.floor(distance / 15) * 12.5;
    let distanceInSecs = distance * speed;
    let totalTime = distanceInSecs + slowdown;
    
    if (totalTime < recordInSecs){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    } else {
        let diff = Math.abs(totalTime - recordInSecs);
        console.log(`No, he failed! He was ${diff.toFixed(2)} seconds slower.`);
    }

}

worldRecord(["10464",
"1500",
"20"])