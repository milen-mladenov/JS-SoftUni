function bombNumbers(bombField, bombAndPower) {
    let bomb = bombAndPower.shift();
    let power = bombAndPower.shift()
    let bombPlace = bombField.indexOf(bomb);

    while (bombPlace !== -1) {
        let bombStart = Math.max(0, bombPlace - power);
        let explosionEnd = power * 2 + 1;
        bombField.splice(bombStart, explosionEnd)
        bombPlace = bombField.indexOf(bomb);
    }

    let result = 0
    for (let num of bombField) {
        result += num;
    }
    console.log(result);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
)
console.log("----");
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
)
console.log("----");
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
)
console.log("----");
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
)
console.log("----");
