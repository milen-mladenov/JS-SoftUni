function familyVacation(input){

    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let percExtraExpences = Number(input[3]);

    if (nights > 7){
        pricePerNight = pricePerNight * 0.95;
    }
    let extras = budget * percExtraExpences / 100;
    let moneyForStay = nights * pricePerNight;
    let totalNeeded = moneyForStay + extras;

    let diff = Math.abs(budget - totalNeeded)

    if (totalNeeded <= budget){
        console.log(`Ivanovi will be left with ${diff.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${diff.toFixed(2)} leva needed.`);
    }
}

familyVacation(["800.50","8","100","2"])