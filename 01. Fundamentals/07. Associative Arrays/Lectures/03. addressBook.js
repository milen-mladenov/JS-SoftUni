function addressBook(input) {

    let book = {};
    while (input.length > 0) {
        let tokens = input.shift().split(":");
        let name = tokens[0];
        let place = tokens[1];
        book[name] = place;
    }

    let sorted = Object.entries(book)
    sorted.sort((a, b) => {
        keyA = a[0];
        keyB = b[0];
        return keyA.localeCompare(keyB)
    })
    for (let entrie of sorted) {
        console.log(`${entrie[0]} -> ${entrie[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)
console.log("------");
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
)