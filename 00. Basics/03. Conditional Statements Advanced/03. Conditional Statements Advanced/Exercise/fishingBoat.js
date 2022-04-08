function fishingBoat(input) {

    let budget = Number(input[0]);
    let timeOfYear = input[1];
    let numberOfPeople = Number(input[2]);

    let prise = 0;

    switch (timeOfYear) {
        case "Spring": prise = 3000; break;
        case "Summer":
        case "Autumn": prise = 4200; break;
        case "Winter": prise = 2600; break;
    }
    if (numberOfPeople <= 6) {
        prise = prise * 0.90;
    } else if (numberOfPeople <= 11 && numberOfPeople > 6) {
        prise = prise * 0.85;
    } else if (numberOfPeople >= 12) {
        prise = prise * 0.75;
    }

    if (numberOfPeople % 2 === 0 && timeOfYear !== "Autumn") {
        prise = prise * 0.95;
    }

    let diff = Math.abs(prise - budget)

    if (prise <= budget) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3000",
    "Summer",
    "11"])