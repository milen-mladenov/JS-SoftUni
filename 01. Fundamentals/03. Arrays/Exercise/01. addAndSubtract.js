function addAndSubtract(input) {

    let oridinalSum = 0;
    let endSum = 0;
    let newArr = [];

    for (let i = 0; i < input.length; i++) {
        oridinalSum += input[i];
        if (input[i] % 2 === 0) {
            input[i] += i;
        } else {
            input[i] -= i;
        }
        newArr.push(input[i]);
        endSum += input[i];
    }
    console.log(newArr);
    console.log(oridinalSum);
    console.log(endSum);
}

addAndSubtract([-5, 11, 3, 0, 2])