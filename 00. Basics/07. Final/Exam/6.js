function goldMine(input) {

    let index = 0;
    let locations = Number(input[index++]);

    for (let i = 0; i < locations; i++) {
        let expectedIncome = Number(input[index++]);
        let digDays = Number(input[index++]);
        let locationIncome = 0;
        for (let d = 0; d < digDays; d++) {
            let amountDug = Number(input[index++]);
            locationIncome += amountDug;
        }
        let dailyIncome = locationIncome / digDays;
        let diff = Math.abs(dailyIncome - expectedIncome)

        if (dailyIncome >= expectedIncome) {
            console.log(`Good job! Average gold per day: ${dailyIncome.toFixed(2)}.`);
        } else {
            console.log(`You need ${diff.toFixed(2)} gold.`);
        }
        locationIncome = 0;
    }
}

goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])