function schoolRegister(input) {

    let registry = [];
    let objRegistry = {};
    let obj = [];

    objRegistry["Grade"] ;
    objRegistry["List of Students"] = [];
    objRegistry["Average annual score from last year:"] = [];

    for (let line of input) {
        let token = line.split(", ");
        let arr = [];
        for (let i = 0; i < token.length; i++) {
            let curToken = token[i].split(": ");
            arr.push(curToken)
        }
        registry.push(arr)
    }

    for (let i = 0; i < registry.length; i++) {
        let currScore = registry[i][2][1];
        let currGrade = registry[i][1][1];
        let currName = registry[i][0][1];
        if (currScore > 3) {
            currGrade++
        }


        objRegistry["Grade"] = currGrade ;
        objRegistry["List of Students"].push(currName);
        objRegistry["Average annual score from last year:"].push(currScore);

    }
}

schoolRegister([
    'Student name: George, Grade: 2, Graduated with an average score: 3.75',
    'Student name: Alex, Grade: 2, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 2, Graduated with an average score: 3.83',
    'Student name: Boby, Grade: 1, Graduated with an average score: 4.20',
    'Student name: John, Grade: 1, Graduated with an average score: 3.90',
    'Student name: Steven, Grade: 1, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])

console.log("-----");

// schoolRegister([
//     "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
//     "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
//     "Student name: George, Grade: 8, Graduated with an average score: 2.83",
//     "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
//     "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
//     "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
//     "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
//     "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
//     "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
//     "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
//     "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
//     "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
// ])