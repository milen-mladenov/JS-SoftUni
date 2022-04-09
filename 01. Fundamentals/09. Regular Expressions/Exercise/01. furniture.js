function solve(input) {
    let pattern = />>(?<product>\w+)<<(?<price>\d+(\.\d+)*)!(?<quantity>\d+)/;
    let totalSpent = 0;
    console.log('Bought furniture:');
    for (const line of input) {
        if (line != 'Purchase') {
            if (pattern.test(line)) {
                let product = pattern.exec(line).groups.product;

                let price = pattern.exec(line).groups.price;

                let quantity = pattern.exec(line).groups.quantity;

                let total = Number(price) * Number(quantity);
                totalSpent += total;

                //print
                console.log(`${product}`);
            };
        } else {
            console.log(`Total money spend: ${totalSpent.toFixed(2)}`);
            break;
        }
    }
}