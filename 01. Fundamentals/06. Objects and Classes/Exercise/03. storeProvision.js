function storeProvision(itemsInStore, ordered) {
    let storeStock = {};

    for (let i = 0; i < itemsInStore.length; i += 2) {
        let currItem = itemsInStore[i];
        storeStock[currItem] = Number(itemsInStore[i + 1]);
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let currItem = ordered[i];
        if (!storeStock.hasOwnProperty(currItem)) {
            storeStock[currItem] = 0
        }
        storeStock[currItem] += Number(ordered[i + 1]);
    }

    for (let item in storeStock) {
        console.log(`${item} -> ${storeStock[item]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])