function numbers(input) {

    let num1 = Number(input[0]);

    for (let i = 1; i <= num1; i += 3) {
        console.log(i);
    }
}
numbers(["12"])