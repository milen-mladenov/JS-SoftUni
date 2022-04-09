function sumSeconds(input){

    let time1 = Number(input[0]);
    let time2 = Number(input[1]);
    let time3 = Number(input[2]);

    let timeInSecs = time1 + time2 + time3;
    let timeInMinutes = Math.floor(timeInSecs / 60);
    let finalSecs = (timeInSecs % 60);
        if (finalSecs < 10){
            console.log(`${timeInMinutes}:0${finalSecs}`);
        } else {
        console.log(`${timeInMinutes}:${finalSecs}`);
        }
}

sumSeconds(["50","50","49"])

