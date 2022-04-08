function operationsBetweenNumbers(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let calc = input[2];

    let sum = 0;

    switch (calc) {
        case "+": sum = num1 + num2; break;
        case "-": sum = num1 - num2; break;
        case "*": sum = num1 * num2; break;
        case "/": sum = num1 / num2; break;
        case "%": sum = num1 % num2; break;
    }

    if (num2 === 0) {
        console.log(`Cannot divide ${num1} by zero`);
    } else if (calc === "+" || calc === "-" || calc === "*") {
        if (sum % 2 === 0) {
            console.log(`${num1} ${calc} ${num2} = ${sum} - even`);
        } else {
            console.log(`${num1} ${calc} ${num2} = ${sum} - odd`);
        }
    } else if (calc === "/") {
        console.log(`${num1} ${calc} ${num2} = ${sum.toFixed(2)}`);
    } else if (calc === "%") {
        console.log(`${num1} ${calc} ${num2} = ${sum}`);
    }
}

operationsBetweenNumbers(["123",
    "12",
    "/"])