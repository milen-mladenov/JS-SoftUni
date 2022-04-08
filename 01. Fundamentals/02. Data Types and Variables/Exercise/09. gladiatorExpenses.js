function gladiatorExpenses(lostGames, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;
    let tempCount = 0;

    for (let i = 0; i <= lostGames; i++) {

        if (i % 2 === 0 && i % 3 === 0 && i !== 0) {
            shieldCount++;
            tempCount++;
        }
        if (i % 2 === 0 && i !== 0) {
            helmetCount++;
        }
        if (i % 3 === 0 && i !== 0) {
            swordCount++;
        }
        if (tempCount === 2) {
            armorCount++;
            tempCount = 0;
        }
    }

    let helmetPriceTotal = helmetCount * helmetPrice;
    let swordPriceTotal = swordCount * swordPrice;
    let shieldPriceTotal = shieldCount * shieldPrice;
    let armorPriceTotal = armorCount * armorPrice;
    let expenses = helmetPriceTotal + swordPriceTotal + shieldPriceTotal + armorPriceTotal;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
}

gladiatorExpenses(7, 2, 3, 4, 5)
console.log("----");
gladiatorExpenses(23, 12.50, 21.50, 40, 200)