function gladiatorInventory(input) {

    let inventory = input.shift().split(" ");

    while (input.length > 0) {
        let tokens = input.shift().split(" ");
        let command = tokens.shift();
        let item = tokens.shift();
        let location = inventory.indexOf(item);

        switch (command) {
            case "Buy":
                if (inventory.includes(item)) {
                    break;
                } else {
                    inventory.push(item)
                }; break;
            case "Trash":
                if (inventory.includes(item)) {
                    inventory.splice(location, 1);
                    break;
                }
                ; break;
            case "Repair":
                if (inventory.includes(item)) {
                    let temp = inventory.splice(location, 1);
                    inventory.push(temp[0]);
                }; break;
            case "Upgrade":
                let tempArr = item.split("-");
                if (inventory.includes(tempArr[0])) {
                    location = inventory.indexOf(tempArr[0]);
                    inventory.splice(location + 1, 0, tempArr.join(":"))

                } else {
                    break;
                }; break;
            default: break;
        }
    }
    console.log(inventory.join(" "));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'])

console.log("---------");

gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])