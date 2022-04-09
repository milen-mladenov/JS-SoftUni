function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number);
    let shotTargets = 0;

    while (input[0] !== "End") {
        let target = Number(input.shift());
        if (target < 0 || target >= targets.length) {
            continue;
        }
        let targetValue = targets[target];
        targets[target] = -1
        shotTargets++
        for (let i = 0; i < targets.length; i++) {
            if (targets[i] < 0) {
                continue;
            } else if (targets[i] > targetValue) {
                targets[i] -= targetValue;
            } else {
                targets[i] += targetValue
            }
        }
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])

console.log("--------");

shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"])