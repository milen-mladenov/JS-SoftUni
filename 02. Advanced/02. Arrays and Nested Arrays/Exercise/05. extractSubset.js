function extractSubset(input) {
    let result = []
    result.push(input.shift());
    for (let i = 0; i < input.length; i++) {
        let index = result.length - 1
        let lastResultNumber = result[index]
        if (input[i] >= lastResultNumber) {
            result.push(input[i])
        }
    }
    return result
}

extractSubset([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)
console.log("---");
extractSubset([1,
    2,
    3,
    4]
)
console.log("0-0");
extractSubset([20,
    3,
    2,
    15,
    6,
    1]
)