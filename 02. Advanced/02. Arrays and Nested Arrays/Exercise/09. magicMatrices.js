function magicMatrices(input) {

    let isMagic = true;
    let arrSums = [];
    for (let row = 0; row < input.length; row++) {
        let sumRow = 0
        for (let num of input[row]) {
            sumRow += num;
        }
        arrSums.push(sumRow);
        for (let col = 0; col < input.length; row++) {
            let sumCol = 0;
            let index = row + 1;
            if (index >= input.length) {
                break;
            }
            for (let num of input[index]) {
                sumCol += num
            }
            arrSums.push(sumCol)
        }
    }

    for (let i = 0; i < arrSums.length - 1; i++) {
        if (arrSums[i] !== arrSums[i + 1]) {
            isMagic = false;
            break;
        }
    }
    console.log(isMagic);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])

console.log("----");

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
])

console.log("---");

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])