function toyShop(input) {

    let vacation = Number(input[0]);
    let puzzle = Number(input[1]);
    let talkingDoll = Number(input[2]);
    let teddyBear = Number(input[3]);
    let minion = Number(input[4]);
    let truck = Number(input[5]);

    let toyCount = puzzle + talkingDoll + teddyBear + minion + truck;
    let totalPrise = puzzle * 2.60 + talkingDoll * 3 + teddyBear * 4.10 +
        minion * 8.20 + truck * 2;

    if (toyCount >= 50) {
        totalPrise = totalPrise * 0.75;
    }

    let profit = totalPrise * 0.90;
    let diff = Math.abs(profit - vacation).toFixed(2);

    if (profit >= vacation) {
        console.log(`Yes! ${diff} lv left.`);
    } else {
        console.log(`Not enough money! ${diff} lv needed.`);
    }

}

toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])