function evenAndOddSubtraction(input) {

    let sum = 0;
    let evenSum = 0;
    let oddSum = 0;

    for (let index = 0; index < input.length; index++) {
        element = Number(input[index]);
        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }
    sum = evenSum - oddSum
    console.log(sum);
}

evenAndOddSubtraction([1,2,3,4,5,6])
evenAndOddSubtraction([3,5,7,9])
evenAndOddSubtraction([2,4,6,8,10])