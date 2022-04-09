function areaOfFigures(input) {

    let figure = input[0];

    if (figure === "square") {
        let number1 = Number(input[1]);
        console.log((number1 * number1).toFixed(3));
    } else if (figure === "rectangle") {
        let number1 = Number(input[1]);
        let number2 = Number(input[2]);
        console.log((number1 * number2).toFixed(3));
    } else if (figure === "circle") {
        let radius = Number(input[1]);
        console.log((Math.PI * radius * radius).toFixed(3));
    } else if (figure === "triangle") {
        let number1 = Number(input[1]);
        let number2 = Number(input[2]);
        console.log((number1 * number2 / 2).toFixed(3));
    }
}

areaOfFigures(["triangle", "4.5", "20"])
