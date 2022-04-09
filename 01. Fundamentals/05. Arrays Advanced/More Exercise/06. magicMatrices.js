function magicMatrices(input) {
    let sum = [];
    let equal = true;
    while (input.length > 0) {
        let tokens = input.shift();

        if (tokens.length % 2 !== 0) {
            tokens.push(0);
        }

        sum.push(tokens.reduce((a, b) => a + b))

    }
    for (let i = 0; i < sum.length; i++) {
        if (i + 1 === sum.length) {
            break;
        }
        if (sum[i] === sum[i + 1]) {
            equal = true
        } else {
            equal = false
            break;
        }
    }
    if (equal) {
        console.log(true);
    } else {
        console.log(false);
    }
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)
console.log("========");
magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)
console.log("---------");
magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]
)