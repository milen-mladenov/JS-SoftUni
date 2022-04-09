function oscars(input) {

    index = 0;
    let actor = input[index];
    index++;
    let startingScore = input[index];
    index++;
    let numberOfJurors = input[index];
    index++;

    let jurorScoreSum = 0;
    let score = Number(startingScore);
    let end = true;

    for (let i = 0; i < numberOfJurors; i++) {
        let juror = input[index];
        index++;
        let jurorScore = input[index];
        index++;
        let jurorNameScore = juror.length;
        jurorScoreSum = score + (jurorNameScore * jurorScore) / 2;
        score = jurorScoreSum;

        if (score > 1250.50) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${score.toFixed(1)}!`);
            end = false;
            break;
        }
    }

    let diff = Math.abs(score - 1250.5);

    if (end) {
        console.log(`Sorry, ${actor} you need ${diff.toFixed(1)} more!`);
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])