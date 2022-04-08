function sumNumbers(input) {

    let target = Number(input[0]);
    let index = 1;
    let newNumber = Number(input[index]);
    let sum = 0;

    while (sum < target) {
        newNumber = Number(input[index]);
        sum += newNumber;     
        index++;
    }
    console.log(sum);
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])