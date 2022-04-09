function biscuitFactory(input) {

    let production = Math.floor(Number(input[0]));
    let workers = Number(input[1]);
    let competition = Number(input[2]);

    let productionPerDay = production * workers
    let totalBuiscuites = 0;
    let thirdDayProduction = productionPerDay * 0.75;

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            totalBuiscuites += thirdDayProduction;
        } else {
            totalBuiscuites += productionPerDay;
        }
    }
    let diferenceFromCompetition = totalBuiscuites - competition;
    let percDiference = diferenceFromCompetition / competition * 100;


    console.log(`You have produced ${Math.floor(totalBuiscuites)} biscuits for the past month.`);

    if (totalBuiscuites < competition) {
        console.log(`You produce ${Math.abs(percDiference).toFixed(2)} percent less biscuits.`);
    } else {
        console.log(`You produce ${Math.abs(percDiference).toFixed(2)} percent more biscuits.`);
    }
}

biscuitFactory(["65.4",
    "12",
    "26000"])

    biscuitFactory(["163",
    "16",
    "67020"])

    
    biscuitFactory(["78",
    "8",
    "16000"])
    

