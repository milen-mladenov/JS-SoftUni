function sumOfTwoNumbers(input) {

    let index = 0;
    let start = Number(input[index++]);
    let end = Number(input[index++]);
    let target = Number(input[index++]);
    let combination = false;

    let counter = 0;
    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            let sum = a + b;
            counter++;
            if (sum === target) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${sum})`);
                combination = true;
                return;
            }
        }
    }

    if (combination) {
    } else {
        console.log(`${counter} combinations - neither equals ${target}`);
    }
}

sumOfTwoNumbers(["23",
    "24",
    "20"])