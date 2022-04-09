function orders(product, amount) {
    switch (product) {
        case "water": console.log((1*amount).toFixed(2)); break;
        case "coke": console.log((1.40*amount).toFixed(2)); break;
        case "coffee": console.log((1.50*amount).toFixed(2)); break;
        case "snacks": console.log((2*amount).toFixed(2)); break;
    }

}

orders("water", 3)