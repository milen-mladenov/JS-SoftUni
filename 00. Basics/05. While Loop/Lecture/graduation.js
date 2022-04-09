function graduation(input) {

    let index = 0;
    let name = input[index++];
    let currentGrade = Number(input[index++]);

    let gradeCount = 0;
    let grades = 1;
    let failedGrade = 0;
    let finalGrade = 0;
    let passed = true;

    while (grades <= 12) {


        if (currentGrade < 4) {
            failedGrade++;
        }
        if (failedGrade >= 1) {
            passed = false;
            console.log(`${name} has been excluded at ${grades} grade`);
            break;
        }
        gradeCount += currentGrade;
        currentGrade = Number(input[index++]);
        grades++;
    }

    let averageGrade = gradeCount / (grades - 1);
    if (passed) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`)
    }
}

graduation(["Mimi",
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"])