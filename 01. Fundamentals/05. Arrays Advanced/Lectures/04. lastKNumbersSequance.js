function lastKNumbersSequance(num1, num2) {
    let printResult = [1,];

while(printResult.length < num1){
    let sum = 0;
    let lastK = printResult.slice(-num2);
    for(let element of lastK){
        sum += element;
    }
    printResult.push(sum);
}
    console.log(printResult.join(" "));
}

lastKNumbersSequance(8, 2)