function timeAddMinutes(input){

    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalSecs = hours * 60 + minutes + 15;
    let timeInHours = Math.floor(totalSecs / 60);
    let timeInSecs = totalSecs % 60;

    if (timeInHours >= 24){
        timeInHours = 0;
    }

    if (timeInSecs < 10){
        console.log(`${timeInHours}:0${timeInSecs}`);
    } else {
        console.log(`${timeInHours}:${timeInSecs}`);
    }

}

timeAddMinutes(["23", "59"])
