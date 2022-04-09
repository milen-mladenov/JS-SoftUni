function minNumber(input){
    let index = 0;
    let currentInput = input[index]
    let min = Number.MAX_SAFE_INTEGER;

    while (currentInput !== "Stop") {
        let currentInputNumber = Number(currentInput);
        if (min > currentInputNumber) {
            min = currentInputNumber;
        }
        index++;
        currentInput = input[index];
    }
    console.log(min);
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])