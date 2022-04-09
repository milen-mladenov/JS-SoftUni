function trainTheTrainers(input){

    let index = 0;
    let jurors = Number(input[index++]);
    let command = input[index++];

    let sumOfGrades = 0;
    let average = 0;
    let typeCounter = 0;
    while(command !== "Finish"){
        let type = command;
        typeCounter++;
      
        let currentGrade = 0;
        for(let i = 0; i < jurors; i++){
            let score = Number(input[index++]);
            currentGrade += score;
        }

        let averageScore = 0;
        averageScore = currentGrade / jurors;
        console.log(`${type} - ${averageScore.toFixed(2)}.`);
        sumOfGrades += averageScore;
        currentScore = 0;
        averageScore = 0;
        command = input[index++];
    }
    average = sumOfGrades / typeCounter;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);
}

trainTheTrainers(["2",
"While-Loop",
"6.00",
"5.50",
"For-Loop",
"5.84",
"5.66",
"Finish"])