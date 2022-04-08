function maxNumber(input) {

    let index = 0;
    let currentInput = input[index]
    let max = Number.MIN_SAFE_INTEGER;

    while (currentInput !== "Stop") {
        let currentInputNumber = Number(currentInput);
        if (max < currentInputNumber) {
            max = currentInputNumber;
        }
        index++;
        currentInput = input[index];
    }
    console.log(max);
}

maxNumber(["100",
    "99",
    "806",
    "70",
    "Stop"])