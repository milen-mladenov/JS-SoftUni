function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number);

    while (input.length > 0) {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        switch (command) {
            case "Add": add(Number(tokens[1])); break;
            case "Remove": remove(Number(tokens[1])); break;
            case "RemoveAt": removeAt(Number(tokens[1])); break;
            case "Insert": insert(Number(tokens[1]), Number(tokens[2])); break;
        }
    }

    function add(num) {
        arr.push(num)
    }
    function remove(num) {
        arr = arr.filter(el => el !== num);
    }
    function removeAt(num) {
        arr.splice(num, 1);
    }
    function insert(num, index) {
        arr.splice(index, 0, num);
    }
    console.log(arr.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
)