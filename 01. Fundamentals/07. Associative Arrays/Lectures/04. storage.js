function storage(input) {
    let store = {};

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens[0];
        let quant = Number(tokens[1]);
        if(store.hasOwnProperty(name)){
            store.name += Object.values(name) + Number(quant);
        } else {
            store[name] = Number(quant);
        }
    }

    console.log(store);
}


storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)

console.log("-----");

storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)