function secretChat(input) {

    let text = input.shift();

    while (input[0] !== "Reveal") {
        let tokens = input.shift().split(":|:");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "ChangeAll") {
            while (text.includes(p1)) {
                text = text.split(p1).join(p2)
            }
            console.log(text);
        } else if (command === "Reverse") {
            let word = p1;
            if (!text.includes(word)) {
                console.log("error");
                continue;
            }
            let index = text.indexOf(word)
            let left = text.slice(0, index);
            let right = text.slice(index + word.length);
            text = left + right + word.split("").reverse().join("")
            console.log(text);
        } else if (command === "InsertSpace") {
            let left = text.slice(0, p1);
            let right = text.slice(p1);
            text = left + " " + right;
            console.log(text);
        }
    }

    console.log(`You have a new text message: ${text}`);
}

// secretChat([
//     'heVVodar!gniV',
//     'ChangeAll:|:V:|:l',
//     'Reverse:|:!gnil',
//     'InsertSpace:|:5',
//     'Reveal'
// ])

console.log("-----");

secretChat([
    'Hiw?uiyare',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])