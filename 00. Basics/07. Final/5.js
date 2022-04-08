function shop(input) {

    let index = 0;
    let budget = Number(input[index++]);
    let command = input[index++];

    let productCounter = 0;
    let priceSpend = 0;
    let haveMoney = true;
    
    while (command !== "Stop") {
        let product = command;
        let price = Number(input[index++]);
        productCounter++;
        if (productCounter % 3 === 0) {
            price = price * 0.50;
        }
        priceSpend += price;

        if (priceSpend > budget) {
            let diff = Math.abs(budget - priceSpend)
            console.log("You don't have enough money!");
            console.log(`You need ${diff.toFixed(2)} leva!`);
            haveMoney = false
            break;
        }
        command = input[index++];
    }
    if (haveMoney) {
        console.log(`You bought ${productCounter} products for ${priceSpend.toFixed(2)} leva.`);
    }
}

shop(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])