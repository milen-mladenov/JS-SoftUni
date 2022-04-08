function tennisRanklist(input) {

    let index = 0;
    let gamesPlayed = Number(input[index++]);
    let startingPoints = Number(input[index++]);

    let scoreCounter = 0;
    let winCounter = 0;

    for (let i = 0; i < gamesPlayed; i++) {
        let gameState = input[index++];
        if (gameState === "W") {
            scoreCounter += 2000;
            winCounter++;
        } else if (gameState === "F") {
            scoreCounter += 1200;
        } else if (gameState === "SF") {
            scoreCounter += 720;
        }
    }
    finalScore = startingPoints + scoreCounter;

    let averageScore = scoreCounter / gamesPlayed;
    let winPerc = winCounter / gamesPlayed * 100;


    console.log(`Final points: ${Math.floor(finalScore)}`);
    console.log(`Average points: ${Math.floor(averageScore)}`);
    console.log(`${winPerc.toFixed(2)}%`);
}

tennisRanklist(["7",
    "1200",
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])