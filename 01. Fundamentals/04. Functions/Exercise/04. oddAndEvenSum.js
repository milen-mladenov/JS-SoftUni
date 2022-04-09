function oddAndEvenSum(number) {

    let numAsText = number.toString();

    function oddSumFunc(numberAsString) {
        let oddSum = 0;
        for (let i = 0; i < numberAsString.length; i++) {
            let currentNum = Number(numberAsString[i]);
            if (currentNum % 2 !== 0) {
                oddSum += currentNum;
            }
        }
        return oddSum;
    }

    function evenSumFunc(numberAsText) {
        let evenSum = 0;
        for (let i = 0; i < numberAsText.length; i++) {
            let currentNum = Number(numberAsText[i]);
            if (currentNum % 2 === 0) {
                evenSum += currentNum;
            }
        }
        return evenSum;
    }
    
    console.log(`Odd sum = ${oddSumFunc(numAsText)}, Even sum = ${evenSumFunc(numAsText)}`);
}

oddAndEvenSum(1000435)