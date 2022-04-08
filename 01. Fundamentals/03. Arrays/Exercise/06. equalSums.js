function equalSums(input) {

    let correct = false;

    for (let i = 0; i < input.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = i - 1; j >= 0; j--) {
            leftSum += input[j];
        }
        for (let num = i + 1; num < input.length; num++) {
            rightSum += input[num];
        }
        if (leftSum === rightSum) {
            console.log(i);
            correct = true;
        }
    }
    if (!correct) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3])