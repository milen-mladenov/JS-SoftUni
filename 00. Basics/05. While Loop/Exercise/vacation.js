function vacation(input) {

    let index = 0;
    let moneyNeeded = input[index++];
    let savedMoney = Number(input[index++]);

    let day = 0;
    let daysSpend = 0;
    let haveMoney = true;

    while (savedMoney < moneyNeeded) {
        let action = input[index++];
        let dailyAmount = Number(input[index++]);
        day++;
        if (action === "save") {
            savedMoney += dailyAmount;
            daysSpend = 0;
        } else if (action === "spend") {
            savedMoney -= dailyAmount;
            daysSpend++;

        }

        if (savedMoney < 0) {
            savedMoney = 0;
        }
        if (daysSpend === 5) {
            console.log(`You can't save the money.`);
            console.log(day);
            haveMoney = false;
            break;
        }

    }

    if (haveMoney) {
        console.log(`You saved the money for ${day} days.`);
    }
}

vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])