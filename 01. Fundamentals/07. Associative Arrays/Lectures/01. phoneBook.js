function phoneBook(input) {

    let phoneBook = {};
    while (input.length > 0) {
        let token = input.shift().split(" ");
        let name = token[0];
        let phoneNumber = token[1];
        phoneBook[name] = phoneNumber;
    }

    for (let key in phoneBook) {
        console.log(`${key} -> ${phoneBook[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)
console.log("------");
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
)