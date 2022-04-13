function sort(input) {

    let sorted = input.sort((a, b) => {

        if (a.length > b.length) {
            return 1
        } else if (a.length < b.length) {
            return -1
        } else {
            a = a.toLowerCase();
            b = b.toLowerCase();
            if (a == b) return 0;
            if (a > b) return 1;
            return -1;
        }
    });
    console.log(sorted.join("\n"));
}

sort(['alpha',
    'beta',
    'gamma'])

console.log("-----");

sort(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'])

console.log("-----");

sort(['test',
    'Deny',
    'omen',
    'Default'])