function onTimeForExam(input) {
    let examStartHour = Number(input[0]);
    let examStartMinute = Number(input[1]);
    let arrivalTimeHour = Number(input[2]);
    let arrivalTimeMinute = Number(input[3]);

    let examStartTime = examStartHour * 60 + examStartMinute;
    let arrivalTime = arrivalTimeHour * 60 + arrivalTimeMinute;

    let diff = Math.abs(examStartTime - arrivalTime);
    let h = Math.floor(diff / 60);
    let min = diff % 60;
    if (arrivalTime > examStartTime) {
        console.log("Late");
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    } else if (examStartTime - arrivalTime <= 30) {
        console.log("On time");
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else {
        console.log("Early");
        if (diff >= 60) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    }
}

onTimeForExam(["16",
    "00",
    "15",
    "00"])