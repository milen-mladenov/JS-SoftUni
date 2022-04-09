function traveling(input) {

    let index = 0;
    let command = input[index++];

    while (command !== "End") {
        let name = command;
        let neededMoney = Number(input[index++]);
        let money = Number(input[index++]);
        let currentMoney = 0;
        while(currentMoney < neededMoney){
            currentMoney+=money;
            if(currentMoney >= neededMoney){
                console.log(`Going to ${name}!`);
                break;
            }
            money = Number(input[index++])
        }
        command = input[index++]
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
