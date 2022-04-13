function addRevemoElements(input) {
    let result = [];
    let num = 1;
    while (input.length > 0) {
        let command = input.shift();
        if (command === "add") {
            result.push(num);
        } else {
            result.pop();
        }
        num++
    }
    if (result.length > 0) {
        console.log(result.join("\n"));
    } else {
        console.log('Empty');
    }
}

addRevemoElements(['add',
    'add',
    'add',
    'add']
)
addRevemoElements(['add',
    'add',
    'remove',
    'add',
    'add']
)
addRevemoElements(['remove',
    'remove',
    'remove']
)