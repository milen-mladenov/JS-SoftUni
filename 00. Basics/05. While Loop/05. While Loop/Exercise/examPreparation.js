function examPreparation(input) {

    let index = 0;
    let maxNegativeGrades = input[index++];
    let problem = input[index++];

    let badGradeCounter = 0;
    let totalProblems = 0;
    let totalGrades = 0;
    let lastProblem = 0;
    let testPass = true;
    
    while (problem !== "Enough") {
        let grade = Number(input[index++]);
        totalGrades += grade;
        lastProblem = problem;
        totalProblems++;

        if (grade <= 4) {
            badGradeCounter++;
        }
        if (badGradeCounter >= maxNegativeGrades) {
            testPass = false;
            console.log(`You need a break, ${badGradeCounter} poor grades.`);
            break;
        }
        problem = input[index++];
    }

    let averageGrade = totalGrades / totalProblems;
    if (testPass) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${totalProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])