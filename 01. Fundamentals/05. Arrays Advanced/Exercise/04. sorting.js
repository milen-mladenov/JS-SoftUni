function sorting(input) {
    let arr = input.sort((a, b) => a - b);
    let print = [];
    while(arr.length > 0){
        let big = arr.pop();
        let small = arr.shift();
        print.push(big);
        print.push(small);
    }
    console.log(print.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])