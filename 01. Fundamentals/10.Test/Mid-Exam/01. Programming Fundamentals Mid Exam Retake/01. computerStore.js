function computerStore(input) {

    let price = 0;
    let taxes = 0;
    let totalPrice = 0;

    while (input[0] !== "special" && input[0] !== "regular") {
        let token = input.shift();
        let currPrice = Number(token);
        let tax = currPrice * 0.20
        let priceWithTax = currPrice + tax;
        if (currPrice < 0) {
            console.log("Invalid price!");
            continue;
        } else {
            price += currPrice;
            totalPrice += priceWithTax;
            taxes += tax;
        }
    }

    if (input[0] === "special") {
        totalPrice *= 0.90;
    }

    if (totalPrice === 0) {
        console.log(`Invalid order!`);
    } else {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}


computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);

console.log("------");

computerStore([
    '1023',
    '15',
    '-20',
    '-5.50',
    '450',
    '20',
    '17.66',
    '19.30', 'regular'
])

console.log("--------");

computerStore([
    'regular'
])