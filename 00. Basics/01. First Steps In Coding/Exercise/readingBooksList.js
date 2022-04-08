function readingBooksList(input){

    let totalPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let timeLimit = Number(input[2]);

    let hoursPerDay = (totalPages / pagesPerHour) / timeLimit;

    console.log(hoursPerDay)

}

readingBooksList(["432 ",
"15 ",
"4 "])