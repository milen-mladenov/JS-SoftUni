function countTimes9(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let totalSum = 0;
    let output = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            totalSum += i;
            output += `${i} \n`;
        }
    }
    console.log(`The sum: ${totalSum}`);
    console.log(output);
}

countTimes9(["100", "200"])