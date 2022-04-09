function christmasGifts(input) {

    let index = 0;
    let command = input[index++];
    let kidCounter = 0;
    let adultCounter = 0;

    while (command !== "Christmas") {
        let age = Number(command)
        if (age <= 16) {
            kidCounter++;
        } else {
            adultCounter++;
        }
        command = input[index++]
    }

    let moneyForToys = kidCounter * 5;
    let moneyForSweaters = adultCounter * 15;
    
    console.log(`Number of adults: ${adultCounter}`);
    console.log(`Number of kids: ${kidCounter}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"])