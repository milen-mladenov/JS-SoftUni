function depositCalculator(input) {

    let amountDeposited = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualIntrest = Number(input[2] / 100);

    let totalSum = amountDeposited + depositTime * ((amountDeposited * annualIntrest) / 12);

    console.log(totalSum);
}

depositCalculator(["2350",
    "6 ",
    "7 "])