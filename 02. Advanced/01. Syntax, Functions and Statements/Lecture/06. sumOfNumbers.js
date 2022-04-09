function sumOfNumbers(num1, num2) {
    let start = Number(num1);
    let end = Number(num2);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNumbers('1', '5')
sumOfNumbers('-8', '20')