function biggestElement(input) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let arr of input) {

        for (let num of arr) {
            if (num > biggest) {
                biggest = num;
            }
        }
    }
    console.log(biggest);
}

biggestElement([[20, 50, 10],
[8, 33, 145]])
console.log("---");
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])