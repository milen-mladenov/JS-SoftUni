function counterStrike(input) {

    let energy = Number(input.shift())
    let wins = 0;
    let gameWon = true;

    while (input[0] !== "End of battle") {
        let distance = Number(input.shift());
        if (energy >= distance) {
            wins++
            energy -= distance;
            if (wins % 3 === 0) {
                energy += wins;
            }
        } else {
            gameWon = false;
            console.log(`Not enough energy! Game ends with ${wins} won battles and ${energy} energy`);
            break;
        }
    }

    if (gameWon) {
        console.log(`Won battles: ${wins}. Energy left: ${energy}`);
    }
}


counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);
console.log("------");
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"])
