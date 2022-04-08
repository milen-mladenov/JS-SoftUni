function amazingNumbers(input) {
    input = input.toString();
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
    }
    let result = sum.toString().includes(9);
    if (result) {
        console.log(`${input} Amazing? True`);
    } else {
        console.log(`${input} Amazing? False`);
    }
}