function spiceMustFlow(input) {

    let days = 0;
    let amountMined = 0;
    let currentYield = input;

    while (currentYield >= 100) {

        amountMined += currentYield;
        currentYield -= 10;
        amountMined -= 26;
        days++;
    }

    amountMined -= 26;
    if (amountMined <= 0) {
        amountMined = 0;
    }
    console.log(days);
    console.log(amountMined);

}

spiceMustFlow(450)