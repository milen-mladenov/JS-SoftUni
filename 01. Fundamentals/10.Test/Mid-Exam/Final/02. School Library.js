function schoolLibrary(input) {
    let bookList = input.shift().split("&");

    while (input[0] !== "Done") {

        let token = input.shift().split(" | ")
        let command = token[0];
        let item = token[1]

        console.log(token);
        console.log(item);

        switch (command) {

            case "Add Book":
                itemExists = bookList.includes(item)

                if (!itemExists) {
                    bookList.unshift(item)
                    break;
                }
                break;
            case "Take Book":
                itemExists = bookList.includes(item)
                if (itemExists) {
                    bookList.splice(itemExists, 1);
                    break;
                } else {
                    break;
                }
                break;
            case "Swap Book":
                let temp = bookList.indexOf(`item`);
                let firstItem = bookList.indexOf(`item`);
                let secoundItem = bookList.indexOf(`item2`);
                console.log(firstItem, secoundItem);
                bookList[secoundItem] = firstItem;
                firstItem = temp;
                break;
            case "Insert Book":
                break;
            case "Check Book":
                break;

        }

        console.log(bookList);
    }
}
// schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick",
// "Add Book | Ulysses",
// "Take Book | Don Quixote",
// "Insert Book | Alice's Adventures in Wonderland",
// "Done"])

console.log("============");

schoolLibrary(["Anna Karenina&Heart of Darkness&Catch-22&The Stranger",
    "Add Book | Catch-22",
    "Swap Books | Anna Karenina | Catch-22",
    "Take Book | Catch-22",
    "Done"])

console.log("============");
// schoolLibrary(["War and Peace&Hamlet&Ulysses&Madame Bovary",
// "Check Book | 2",
// "Swap Books | Don Quixote | Ulysses",
// "Done"])
