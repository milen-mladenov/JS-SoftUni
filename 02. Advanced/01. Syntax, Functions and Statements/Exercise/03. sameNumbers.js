function sameNumbers(input) {
    input = input + ""
    let arr = input.split("").map(Number)
    let same = true;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[0] !== arr[i]) {
            same = false;
        }
    }

    console.log(same);
    console.log(sum);
}

sameNumbers(2222222)