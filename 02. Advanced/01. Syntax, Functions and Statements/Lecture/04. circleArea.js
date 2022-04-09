function circleArea(input) {

    let inputType = typeof (input)
    if (inputType !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    } else {
        console.log((Math.pow(Number(input), 2) * Math.PI).toFixed(2));
    }
}

circleArea(5)
circleArea('name')
