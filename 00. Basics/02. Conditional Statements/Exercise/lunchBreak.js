function lunchBreak(input) {

    let movieName = input[0];
    let movieLenght = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeToEat = breakTime / 8;
    let timeToRest = breakTime / 4;
    let neededTime = timeToEat + timeToRest + movieLenght;

    let diff = Math.abs(neededTime - breakTime);
    if (neededTime <= breakTime) {
        console.log(`You have enough time to watch ${movieName} and left with ${Math.ceil(diff)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${movieName}, you need ${Math.ceil(diff)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);