function mergeArrays(firstArr, secondArr) {
    let thirdArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        let calculate = 0;
        let addToString = "";
        if (i % 2 === 0) {
            calculate = Number(firstArr[i]) + Number(secondArr[i]);
            thirdArr.push(calculate);
        } else {
            //addToString = firstArr[i] + secondArr[i];
            thirdArr.push(firstArr[i] + secondArr[i])
        }
    }
    console.log(thirdArr.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)