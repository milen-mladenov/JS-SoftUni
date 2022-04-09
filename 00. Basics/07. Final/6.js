function vetParking(input) {

    let totalDays = Number(input[0]);
    let hoursPerDay = Number(input[1]);
    let totalSum = 0;

    for (let day = 1; day <= totalDays; day++) {
        let daySum = 0;
        for (let hour = 1; hour <= hoursPerDay; hour++) {
            if (day % 2 === 0 && hour % 2 !== 0) {
                daySum += 2.50;
            } else if (day % 2 !== 0 && hour % 2 === 0) {
                daySum += 1.25;
            } else {
                daySum++;
            }
        }
        console.log(`Day: ${day} - ${daySum.toFixed(2)} leva`);
        totalSum += daySum
        daySum = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

vetParking(["2","5"])