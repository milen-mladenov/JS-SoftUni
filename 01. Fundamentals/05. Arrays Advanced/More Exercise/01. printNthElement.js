function printNthElement(input) {

    let step = input.pop();
    let print = [];

    for (let i = 0; i < input.length; i++) {
        if (i % step === 0) {
            print.push(input[i]);
        }
    }
    console.log(print.join(" "));
}

printNthElement(['5', '20', '31', '4', '20', '2'])
console.log("--------");
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
console.log("-------");
printNthElement(['1', '2', '3', '4', '5', '6'])