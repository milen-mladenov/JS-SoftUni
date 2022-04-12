function evenPositionElement(input) {

    let print = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            print.push(input[i])
        }
    }

    console.log(print.join(" "));
}

evenPositionElement(['20', '30', '40', '50', '60'])