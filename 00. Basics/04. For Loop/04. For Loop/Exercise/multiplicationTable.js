function multiplicationTable(input){

    let num1 = Number(input[0]);
    let sum = 0

    for (let i = 1; i <= 10; i++){
        sum = num1 * i;
        console.log(`${i} * ${num1} = ${sum}`);
    }
}

multiplicationTable(["5578"])