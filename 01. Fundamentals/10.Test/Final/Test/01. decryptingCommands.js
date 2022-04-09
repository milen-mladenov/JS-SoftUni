function decriptingCommands(input) {

    let text = input.shift();

    while (input[0] !== "Finish") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "Replace") {
            while (text.includes(p1)) {
                text = text.replace(p1, p2)
            }
            console.log(text);
        } else if (command === "Cut") {
            let start = Number(p1);
            let end = Number(p2);
            if (
                start >= 0 &&
                start <= text.length &&
                end >= 0 &&
                end <= text.length
            ) {
                let left = text.slice(0, start)
                let right = text.slice(start + end);
                text = left + right

                console.log(text);
            } else {
                console.log("Invalid indices!");
            }

        } else if (command === "Check") {
            if (tokens.length > 2) {
                p1 = tokens[1] + tokens[2];
            }
            if (text.includes(p1)) {
                console.log(`Message contains ${p1}`);
            } else {
                console.log(`Message doesn't contain ${p1}`);
            }
        } else if (command === "Make") {
            if (p1 === "Upper") {
                text = text.toUpperCase();
            }
            if (p1 === "Lower") {
                text = text.toLowerCase();
            }
            console.log(text);
        } else if (command === "Sum") {
            let start = Number(p1);
            let end = Number(p2);
            if (
                start >= 0 &&
                start <= text.length &&
                end >= 0 &&
                end <= text.length
            ) {
                let word = text.substring(start, end + 1)
                let wordSum = 0;
                for (let w of word) {
                    wordSum += w.charCodeAt()
                }
                console.log(wordSum);

            } else {
                console.log("Invalid indices!");
            }
        }
    }
}

decriptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"])
console.log("-----");
decriptingCommands(["HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"])
