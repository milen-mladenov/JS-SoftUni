function shopping(input) {

    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrise = gpu * 250;
    let cpuPrise = cpu * (gpuPrise * 0.35);
    let ramPrise = ram * (gpuPrise * 0.10);

    let totalPrise = gpuPrise + cpuPrise + ramPrise;

    if (gpu > cpu) {
        totalPrise = totalPrise * 0.85;
    }

    let diff = Math.abs(totalPrise - budget).toFixed(2);

    if (totalPrise <= budget) {
        console.log(`You have ${diff} leva left!`);
    } else {
        console.log(`Not enough money! You need ${diff} leva more!`);
    }
}

shopping(["920.45","3","1","1"])