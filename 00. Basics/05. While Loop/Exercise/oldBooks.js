function oldBooks(input) {

    let index = 0;
    let bookToFind = input[index++];
    let currentBook = input[index++];
    let bookCount = 0;
    let foundBook = true;

    while (currentBook !== "No More Books") {

        if (currentBook === bookToFind) {
            console.log(`You checked ${bookCount} books and found it.`);
            foundBook = false;
            break;
        }
        bookCount++;
        currentBook = input[index++];
    }
    if (foundBook) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    }
}

oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"])
