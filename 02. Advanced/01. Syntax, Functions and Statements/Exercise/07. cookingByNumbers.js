function cookingByNumbers(...input) {

    let num = Number(input.shift());

    for (let command of input) {

        if (command === 'chop') {
            num /= 2;
            console.log(num);
        } else if (command === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        } else if (command === 'spice') {
            num++;
            console.log(num);
        } else if (command === 'bake') {
            num *= 3;
            console.log(num);
        } else if (command === 'fillet') {
            num *= 0.80;
            console.log(num);
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
console.log("-----");
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')