function accountBalance(input) {

    let index = 0;
    let totalSum = 0;
    let currentInput = input[index];

    while (currentInput !== "NoMoreMoney") {
        currentInputNumber = Number(currentInput);
        if (currentInput < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        totalSum += currentInputNumber
        console.log(`Increase: ${currentInputNumber.toFixed(2)}`);
        index++;
        currentInput = input[index];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])