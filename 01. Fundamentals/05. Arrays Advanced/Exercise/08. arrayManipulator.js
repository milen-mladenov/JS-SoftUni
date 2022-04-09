function arrayManipulator(arr, actions) {

    while (actions.length > 0) {
        let tokens = actions.shift().split(" ");
        let currAction = tokens.shift();
        let tempArr = tokens.map(Number)

        switch (currAction) {
            case "add": arr.splice(tempArr[0], 0, tempArr[1]); break;
            case "addMany":
                let index = tempArr.shift();
                let tempArrMany = [];
                for (let num of tempArr) {
                    tempArrMany.push(num);
                }
                tempArrMany.reverse();
                for (let num of tempArrMany) {
                    arr.splice(index, 0, num)
                }
                ; break;
            case "contains": console.log(arr.indexOf(tempArr[0]));; break;
            case "remove": arr.splice(tempArr[0], 1); break;
            case "shift":
                for (let num of tempArr) {
                    let temp = arr.shift();
                    arr.push(temp);
                }; break;
            case "sumPairs": arr = sumOfPairs(arr); break;
            default: break;
        }
    }

    function sumOfPairs(input) {

        let newArr = [];
        if (input.length % 2 !== 0) {
            input.push(0);
        }
        while (input.length > 0) {
            let num1 = input.shift();
            let num2 = input.shift();
            let sum = num1 + num2;
            newArr.push(sum);
        }
        return newArr;
    }

    console.log(`[ ${arr.join(", ")} ]`);
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']
)
console.log("-------");

arrayManipulator([1, 2, 4, 5, 6, 7]
    ["add 1 8", "contains 1", "contains -3", "print"]
)

