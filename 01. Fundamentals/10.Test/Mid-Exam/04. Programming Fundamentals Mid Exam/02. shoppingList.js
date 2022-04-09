function shoppingList(input) {

    let list = input.shift().split("!");

    while (input[0] !== "Go Shopping!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let item = tokens[1];
        let itemTwo = tokens[2];
        let indexOfItem = list.indexOf(item);


        if (command === "Correct") {
            if (list.includes(item)) {
                list[indexOfItem] = itemTwo;
            }
        } else if (command === "Rearrange") {
            if (list.includes(item)) {
                let temp = list.splice(indexOfItem, 1);
                list.push(temp)
            }
        } else if (command === "Urgent") {
            if (list.includes(item)) {
                continue;
            }
            list.unshift(item);
        } else if (command === "Unnecessary") {
            if (list.includes(item)) {
                list.splice(indexOfItem, 1)
            }
        }
    }

    console.log(list.join(", "));
}

shoppingList(["Tomatoes!Potatoes!Milk!Bread",
    "Unnecessary Milk",
    "Rearrange Tomatoes",
    "Go Shopping!"])

console.log("---------");

shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"])
