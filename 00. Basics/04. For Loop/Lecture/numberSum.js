function sumOfNumbers(input){

    let num1 = input[0];
    let count = 0;

    for (let i = 0; i < num1.length; i++){
        let currentCount = Number(num1[i]);
        count += currentCount;
    }

    console.log(count);
}

sumOfNumbers(["1234"])