function nonDecreasingSuset(input) {

    let maxNum = Number.MIN_SAFE_INTEGER;
    let print = [];

    for (let num of input) {
        if (num >= maxNum) {
            print.push(num);
            maxNum = num;
        } else {
            continue;
        }
    }
    console.log(print.join(" "));
}

nonDecreasingSuset([1, 3, 8, 4, 10, 12, 3, 2, 24])
console.log("=========");
nonDecreasingSuset([20, 3, 2, 15, 6, 1])