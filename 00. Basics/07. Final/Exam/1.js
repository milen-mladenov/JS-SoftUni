function miningRig(input) {

    let gpuPrice = Number(input[0]);
    let connectorPrice = Number(input[1]);
    let electricityPrice = Number(input[2]);
    let moneyMadePerDay = Number(input[3]);

    let gupTotalPrice = 13 * gpuPrice;
    let connectorTotalPrice = 13 * connectorPrice;
    let totalMoneySpend = gupTotalPrice + connectorTotalPrice + 1000;
    let dailyIncomePerCard = moneyMadePerDay - electricityPrice;
    let moneyPerDay = 13 * dailyIncomePerCard;

    let daysNeeded = totalMoneySpend / moneyPerDay;

    console.log(totalMoneySpend);
    console.log(Math.ceil(daysNeeded));
}

miningRig(["800",
    "10",
    "0.32",
    "6.4"])