function cleverLily(input) {

    let age = Number(input[0]);
    let priceNeeded = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let collectedMoney = 0;
    let toyCount = 0;
    let money = 10;


    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            collectedMoney += money;
            money += 10;
            collectedMoney--;
        } else {
            toyCount++
        }
    }

    let moneyFromToys = toyCount * singleToyPrice;
    let totalMoney = moneyFromToys + collectedMoney;
    let diff = Math.abs(priceNeeded - totalMoney);

    if (totalMoney >= priceNeeded) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily(["10",
    "170.00",
    "6"])