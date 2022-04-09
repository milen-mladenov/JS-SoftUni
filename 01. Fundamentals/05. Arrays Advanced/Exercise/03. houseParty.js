function houseParty(input) {

    let partyList = [];
    while (input.length > 0) {
        let token = input.shift().split(" ");

        if (token.length > 3) {
            if (partyList.includes(token[0])) {
                let namePlace = partyList.indexOf(token[0])
                partyList.splice(namePlace, 1);
                continue;
            } else {
                console.log(`${token[0]} is not in the list!`);
                continue;
            }
        }
        if (partyList.includes(token[0])) {
            console.log(`${token[0]} is already in the list!`);
            continue;
        }
        partyList.push(token[0]);

    }
    console.log(partyList.join("\n"));
}

houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']
)

console.log("========");

houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
)