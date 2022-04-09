function addAndRemove(input) {

    let print = [];
    let count = 1;

    for (let command of input) {
        let location = input.indexOf();
        if (command !== "add") {
            print.splice(location, 1);
        } else {
            print.push(count)
        }
        count++
    }
    if (print.length < 1) {
        console.log("Empty");
        return;
    }
    console.log(print.join(" "));
}

addAndRemove(['add', 'add', 'add', 'add'])
console.log("--------");
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
console.log("-------");
addAndRemove([])