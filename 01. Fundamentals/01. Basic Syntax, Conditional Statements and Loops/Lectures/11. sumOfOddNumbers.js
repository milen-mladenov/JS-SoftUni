
function sumOfOddNumbers(num) {

    let sum = 0;
    let count = 0
    let i = 1;

    while (num > count) {
        if (i % 2 !== 0) {
            console.log(i);
            count++;
            sum += i;
            i++;
        }
        i++;
    }

    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5)