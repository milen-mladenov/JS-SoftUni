function bookWorld(input) {

    let genreCollection = input.shift().split(" | ");

    while (input[0] !== "Stop!") {
        let tokens = input.shift().split(" ");
        let command = tokens.shift();

        let genre;

        if (command === "Prefer") {
            let indexOne = Number(tokens[0]);
            let indexTwo = Number(tokens[1]);

            if (indexOne < 0 || indexOne >= genreCollection.length || indexTwo < 0 || indexTwo >= genreCollection.length) {
                continue;
            } else {
                let temp = genreCollection[indexOne];
                genreCollection[indexOne] = genreCollection[indexTwo];
                genreCollection[indexTwo] = temp;
            }
        } else if (command === "Drop") {
            genre = tokens.join("")
            let index = genreCollection.indexOf(genre);

            if (genreCollection.includes(genre)) {
                genreCollection.splice(index, 1);
            } else {
                continue;
            }
        } else if (command === "Join") {
            genre = tokens.join("")
            if (genreCollection.includes(genre)) {

            }
            if (!genreCollection.includes(genre)) {
                genreCollection.push(genre)
            }
        } else if (command === "Replace") {
            let oldGenre = tokens.shift();
            let oldIndex = genreCollection.indexOf(oldGenre);
            let newGenre = tokens.join("");
            if (genreCollection.includes(oldGenre) && !genreCollection.includes(newGenre)) {
                genreCollection[oldIndex] = newGenre
            }
        }
    }

    console.log(genreCollection.join(" "));
}

bookWorld(["Romance | Fiction | Horror | Mystery",
    "Drop Romance",
    "Join Fantasy",
    "Prefer 1 2",
    "Stop!"])

console.log("---------");

bookWorld(["Poetry | Romance",
    "Drop Children",
    "Replace Fantasy Crime",
    "Stop!"])

console.log("---------");

bookWorld(["Thriller | Young | Crime",
    "Join Political",
    "Replace Young Fairytale",
    "Prefer 6 2",
    "Stop!"])

console.log("---------");