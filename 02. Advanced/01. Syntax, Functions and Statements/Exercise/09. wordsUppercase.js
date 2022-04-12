function wordsUpperCase(input) {

    let pattern = /[A-Za-z0-9]+/g;

    let print = [];
    let match = pattern.exec(input);

    while (match !== null) {
        let word = match[0].toUpperCase()
        print.push(word)
        match = pattern.exec(input);
    }
    console.log(print.join(", "));
}

wordsUpperCase('Hi, how are you?')
console.log("------");
wordsUpperCase("hello")
console.log("-----");
wordsUpperCase("Functions in JS can be nested, i.e. hold other functions")
