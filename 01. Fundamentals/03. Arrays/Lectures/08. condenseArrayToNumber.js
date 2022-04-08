function condenseArrayToNumber(input) {

    let array = input;
    let end = array.length
    let condenced = [];
    while (array.length > 1) {
        for (let i = 0; i < end; i++) {
            if (i === array.length - 1) {
                array = condenced;
                condenced = [];
                break;
            }
            condenced.push(array[i] + array[i + 1]);
        }
    }
    console.log(array[0]);
}

condenseArrayToNumber([2, 10, 3])
console.log("-----");
condenseArrayToNumber([5, 0, 4, 1, 2])
console.log("-----");
condenseArrayToNumber([1])